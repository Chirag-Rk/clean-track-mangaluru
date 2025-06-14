
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar, Calculator, Receipt, Printer } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BillGenerationProps {
  isKannada: boolean;
}

const BillGeneration = ({ isKannada }: BillGenerationProps) => {
  const [selectedMonth, setSelectedMonth] = useState("November 2024");
  const { toast } = useToast();

  const billHistory = [
    { month: "November 2024", amount: 150, status: "pending", dueDate: "Nov 30", services: ["Waste Collection", "Recycling"] },
    { month: "October 2024", amount: 150, status: "paid", dueDate: "Oct 30", services: ["Waste Collection", "Recycling"] },
    { month: "September 2024", amount: 140, status: "paid", dueDate: "Sep 30", services: ["Waste Collection"] },
    { month: "August 2024", amount: 150, status: "paid", dueDate: "Aug 30", services: ["Waste Collection", "Recycling"] }
  ];

  const handleDownloadBill = (month: string) => {
    toast({
      title: isKannada ? "ಬಿಲ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಲಾಗಿದೆ" : "Bill Downloaded",
      description: `${month} ${isKannada ? "ಬಿಲ್ ಪಿಡಿಎಫ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಲಾಗಿದೆ" : "bill PDF downloaded"}`,
    });
  };

  const handlePrintBill = (month: string) => {
    toast({
      title: isKannada ? "ಬಿಲ್ ಪ್ರಿಂಟ್ ಮಾಡಲಾಗಿದೆ" : "Bill Sent to Printer",
      description: `${month} ${isKannada ? "ಬಿಲ್ ಪ್ರಿಂಟ್ ಕಳುಹಿಸಲಾಗಿದೆ" : "bill sent to printer"}`,
    });
  };

  const calculateSavings = () => {
    const avgMonthly = 150;
    const actualUsage = 135;
    return avgMonthly - actualUsage;
  };

  return (
    <div className="space-y-6">
      {/* Bill Calculator */}
      <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <Calculator className="h-5 w-5" />
            {isKannada ? "ಬಿಲ್ ಕ್ಯಾಲ್ಕುಲೇಟರ್" : "Bill Calculator"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600">₹{calculateSavings()}</div>
              <div className="text-sm text-gray-600">{isKannada ? "ಈ ತಿಂಗಳ ಉಳಿತಾಯ" : "This Month's Savings"}</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-600">15%</div>
              <div className="text-sm text-gray-600">{isKannada ? "ಕಡಿಮೆ ತ್ಯಾಜ್ಯ" : "Waste Reduction"}</div>
            </div>
          </div>
          <div className="text-center">
            <Badge className="bg-green-100 text-green-700">
              {isKannada ? "ಪರಿಸರ ಸ್ನೇಹಿ ಪುರಸ್ಕಾರ" : "Eco-Friendly Reward"}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Current Bill Details */}
      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Receipt className="h-5 w-5" />
              {isKannada ? "ಪ್ರಸ್ತುತ ಬಿಲ್ ವಿವರಗಳು" : "Current Bill Details"}
            </span>
            <Badge variant="outline" className="border-orange-500 text-orange-700">
              {isKannada ? "ಬಾಕಿ" : "Pending"}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">{isKannada ? "ಮೂಲ ಶುಲ್ಕ:" : "Base Charge:"}</span>
              <span className="font-semibold">₹120</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">{isKannada ? "ಮರುಬಳಕೆ ಸೇವೆ:" : "Recycling Service:"}</span>
              <span className="font-semibold">₹30</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">{isKannada ? "ಪರಿಸರ ಪ್ರಭಾವ ರಿಬೇಟ್:" : "Environmental Impact Rebate:"}</span>
              <span className="font-semibold text-green-600">-₹15</span>
            </div>
            <hr />
            <div className="flex justify-between items-center text-lg font-bold">
              <span>{isKannada ? "ಒಟ್ಟು:" : "Total:"}</span>
              <span>₹150</span>
            </div>
            <div className="flex gap-2 mt-4">
              <Button 
                onClick={() => handleDownloadBill("November 2024")}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                <Download className="h-4 w-4 mr-2" />
                {isKannada ? "ಡೌನ್‌ಲೋಡ್" : "Download"}
              </Button>
              <Button 
                onClick={() => handlePrintBill("November 2024")}
                variant="outline"
                className="flex-1"
              >
                <Printer className="h-4 w-4 mr-2" />
                {isKannada ? "ಪ್ರಿಂಟ್" : "Print"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bill History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            {isKannada ? "ಬಿಲ್ ಇತಿಹಾಸ" : "Bill History"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {billHistory.map((bill, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <div className="font-medium">{bill.month}</div>
                  <div className="text-sm text-gray-600">
                    {bill.services.join(", ")} • Due: {bill.dueDate}
                  </div>
                </div>
                <div className="text-right mr-4">
                  <div className="font-bold">₹{bill.amount}</div>
                  <Badge className={bill.status === "paid" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}>
                    {bill.status === "paid" ? (isKannada ? "ಪಾವತಿ ಆಗಿದೆ" : "Paid") : (isKannada ? "ಬಾಕಿ" : "Pending")}
                  </Badge>
                </div>
                <div className="flex gap-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDownloadBill(bill.month)}
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handlePrintBill(bill.month)}
                  >
                    <Printer className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BillGeneration;
