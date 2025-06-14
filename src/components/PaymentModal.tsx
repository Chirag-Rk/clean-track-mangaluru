
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { X, CreditCard, Smartphone, Building, CheckCircle2 } from "lucide-react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  isKannada: boolean;
}

const PaymentModal = ({ isOpen, onClose, isKannada }: PaymentModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "upi" | "bank">("upi");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
      }, 2000);
    }, 3000);
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/95 backdrop-blur-lg">
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-green-600 mb-2">
              {isKannada ? "ಪಾವತಿ ಯಶಸ್ವಿ!" : "Payment Successful!"}
            </h3>
            <p className="text-gray-600">
              {isKannada ? "ನಿಮ್ಮ ಪಾವತಿ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸಲಾಗಿದೆ" : "Your payment has been processed"}
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-lg max-h-[90vh] overflow-y-auto">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold">
              {isKannada ? "ಬಿಲ್ ಪಾವತಿ" : "Bill Payment"}
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent>
          {/* Bill Summary */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold mb-3">{isKannada ? "ಬಿಲ್ ವಿವರಗಳು" : "Bill Details"}</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">{isKannada ? "ಮೂಲ ಶುಲ್ಕ:" : "Base Fee:"}</span>
                <span>₹120</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{isKannada ? "ಸೇವಾ ಶುಲ್ಕ:" : "Service Charge:"}</span>
                <span>₹20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">GST (18%):</span>
                <span>₹10</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>{isKannada ? "ಒಟ್ಟು:" : "Total:"}</span>
                <span>₹150</span>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">{isKannada ? "ಪಾವತಿ ವಿಧಾನ" : "Payment Method"}</h3>
            <div className="grid grid-cols-3 gap-2">
              <Button
                variant={paymentMethod === "upi" ? "default" : "outline"}
                className="flex flex-col items-center p-3 h-auto"
                onClick={() => setPaymentMethod("upi")}
              >
                <Smartphone className="h-6 w-6 mb-1" />
                <span className="text-xs">UPI</span>
              </Button>
              
              <Button
                variant={paymentMethod === "card" ? "default" : "outline"}
                className="flex flex-col items-center p-3 h-auto"
                onClick={() => setPaymentMethod("card")}
              >
                <CreditCard className="h-6 w-6 mb-1" />
                <span className="text-xs">{isKannada ? "ಕಾರ್ಡ್" : "Card"}</span>
              </Button>
              
              <Button
                variant={paymentMethod === "bank" ? "default" : "outline"}
                className="flex flex-col items-center p-3 h-auto"
                onClick={() => setPaymentMethod("bank")}
              >
                <Building className="h-6 w-6 mb-1" />
                <span className="text-xs">{isKannada ? "ಬ್ಯಾಂಕ್" : "Bank"}</span>
              </Button>
            </div>
          </div>

          {/* Payment Form */}
          <div className="space-y-4 mb-6">
            {paymentMethod === "upi" && (
              <div>
                <label className="block text-sm font-medium mb-2">
                  {isKannada ? "UPI ID" : "UPI ID"}
                </label>
                <Input placeholder="yourname@upi" className="w-full" />
              </div>
            )}

            {paymentMethod === "card" && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {isKannada ? "ಕಾರ್ಡ್ ಸಂಖ್ಯೆ" : "Card Number"}
                  </label>
                  <Input placeholder="1234 5678 9012 3456" className="w-full" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {isKannada ? "ಮುಕ್ತಾಯ ದಿನಾಂಕ" : "Expiry"}
                    </label>
                    <Input placeholder="MM/YY" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">CVV</label>
                    <Input placeholder="123" className="w-full" />
                  </div>
                </div>
              </>
            )}

            {paymentMethod === "bank" && (
              <div>
                <label className="block text-sm font-medium mb-2">
                  {isKannada ? "ಖಾತೆ ಸಂಖ್ಯೆ" : "Account Number"}
                </label>
                <Input placeholder="Enter account number" className="w-full" />
              </div>
            )}
          </div>

          {/* Payment Button */}
          <Button 
            onClick={handlePayment}
            disabled={isProcessing}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3"
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                {isKannada ? "ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುತ್ತಿದೆ..." : "Processing..."}
              </>
            ) : (
              <>
                <CreditCard className="h-5 w-5 mr-2" />
                {isKannada ? "₹150 ಪಾವತಿಸಿ" : "Pay ₹150"}
              </>
            )}
          </Button>

          {/* Security Info */}
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">
                {isKannada ? "ಸುರಕ್ಷಿತ ಪಾವತಿ - SSL ಎನ್‌ಕ್ರಿಪ್ಶನ್" : "Secure Payment - SSL Encrypted"}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentModal;
