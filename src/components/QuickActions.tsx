
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MapPin, HelpCircle, PhoneCall, MessageSquare, ExternalLink, Phone, Mail, Clock, MapIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QuickActionsProps {
  isKannada: boolean;
}

const QuickActions = ({ isKannada }: QuickActionsProps) => {
  const [trackingEnabled, setTrackingEnabled] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const { toast } = useToast();

  const handleTrackLocation = () => {
    setTrackingEnabled(!trackingEnabled);
    toast({
      title: isKannada ? "ಸ್ಥಳ ಟ್ರ್ಯಾಕಿಂಗ್" : "Location Tracking",
      description: trackingEnabled 
        ? (isKannada ? "ಸ್ಥಳ ಟ್ರ್ಯಾಕಿಂಗ್ ನಿಲ್ಲಿಸಲಾಗಿದೆ" : "Location tracking disabled")
        : (isKannada ? "ಸ್ಥಳ ಟ್ರ್ಯಾಕಿಂಗ್ ಸಕ್ರಿಯಗೊಂಡಿದೆ" : "Location tracking enabled"),
    });
  };

  const handleCallCenter = () => {
    toast({
      title: isKannada ? "ಕಾಲ್ ಸೆಂಟರ್" : "Call Center",
      description: isKannada ? "ಕಾಲ್ ಸೆಂಟರ್‌ಗೆ ಸಂಪರ್ಕಿಸುತ್ತಿದೆ..." : "Connecting to call center...",
    });
    // Simulate call
    setTimeout(() => {
      window.open("tel:+918001234567", "_self");
    }, 1000);
  };

  const faqData = [
    {
      question: isKannada ? "ಸಂಗ್ರಹಣೆ ಸಮಯ ಯಾವಾಗ?" : "What are the collection timings?",
      answer: isKannada ? "ಪ್ರತಿದಿನ ಬೆಳಿಗ್ಗೆ 7:00 ರಿಂದ 10:00 ವರೆಗೆ" : "Daily from 7:00 AM to 10:00 AM"
    },
    {
      question: isKannada ? "ಬಿಲ್ ಪಾವತಿ ಹೇಗೆ ಮಾಡಬೇಕು?" : "How to pay bills?",
      answer: isKannada ? "ಆನ್‌ಲೈನ್, UPI, ಅಥವಾ ನಿಕಟ ಕೇಂದ್ರದಲ್ಲಿ ಪಾವತಿಸಬಹುದು" : "You can pay online, via UPI, or at nearby centers"
    },
    {
      question: isKannada ? "ವಿಶೇಷ ಪಿಕಪ್ ವಿನಂತಿ ಹೇಗೆ?" : "How to request special pickup?",
      answer: isKannada ? "ಅಪ್ಲಿಕೇಶನ್‌ನಲ್ಲಿ ವಿಶೇಷ ಸೇವೆಗಳ ವಿಭಾಗದಲ್ಲಿ ವಿನಂತಿಸಿ" : "Request through the special services section in the app"
    }
  ];

  return (
    <Card className="mb-8 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-blue-800 text-xl font-bold">
          {isKannada ? "ತ್ವರಿತ ಕ್ರಿಯೆಗಳು" : "Quick Actions"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {/* Track Location */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer bg-white border-gray-200">
            <CardContent className="p-6 text-center" onClick={handleTrackLocation}>
              <MapPin className={`h-8 w-8 mx-auto mb-3 ${trackingEnabled ? 'text-green-600' : 'text-gray-600'}`} />
              <h3 className="font-semibold text-gray-800 mb-1">
                {isKannada ? "ಸ್ಥಳ ಟ್ರ್ಯಾಕ್" : "Track Location"}
              </h3>
              <p className="text-sm text-gray-600">
                {trackingEnabled 
                  ? (isKannada ? "ಸಕ್ರಿಯ" : "Active")
                  : (isKannada ? "ಸಕ್ರಿಯಗೊಳಿಸಿ" : "Enable")
                }
              </p>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer bg-white border-gray-200">
                <CardContent className="p-6 text-center">
                  <HelpCircle className="h-8 w-8 text-gray-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {isKannada ? "ಪ್ರಶ್ನೆಗಳು" : "FAQ"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {isKannada ? "ಸಹಾಯ ಪಡೆಯಿರಿ" : "Get Help"}
                  </p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5" />
                  {isKannada ? "ಆಗಾಗ್ಗೆ ಕೇಳುವ ಪ್ರಶ್ನೆಗಳು" : "Frequently Asked Questions"}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="border-b pb-3">
                    <h4 className="font-medium text-gray-800 mb-2">{faq.question}</h4>
                    <p className="text-sm text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>

          {/* Call Center */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer bg-white border-gray-200">
            <CardContent className="p-6 text-center" onClick={handleCallCenter}>
              <PhoneCall className="h-8 w-8 text-gray-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-1">
                {isKannada ? "ಕಾಲ್ ಸೆಂಟರ್" : "Call Center"}
              </h3>
              <p className="text-sm text-gray-600">
                {isKannada ? "ಸಂಪರ್ಕಿಸಿ" : "Contact Us"}
              </p>
            </CardContent>
          </Card>

          {/* Live Chat */}
          <Dialog open={chatOpen} onOpenChange={setChatOpen}>
            <DialogTrigger asChild>
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer bg-white border-gray-200">
                <CardContent className="p-6 text-center">
                  <MessageSquare className="h-8 w-8 text-gray-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {isKannada ? "ಲೈವ್ ಚಾಟ್" : "Live Chat"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {isKannada ? "ತಕ್ಷಣ ಸಹಾಯ" : "Instant Help"}
                  </p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-md max-h-96">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  {isKannada ? "ಲೈವ್ ಚಾಟ್ ಸಹಾಯ" : "Live Chat Support"}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 max-h-64 overflow-y-auto">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    {isKannada ? "ಸ್ವಾಗತ! ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?" : "Welcome! How can I help you today?"}
                  </p>
                </div>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-sm"
                    onClick={() => toast({
                      title: isKannada ? "ಸಹಾಯ ವಿನಂತಿ" : "Help Request",
                      description: isKannada ? "ಸಂಗ್ರಹಣೆ ಸಮಸ್ಯೆಯ ಬಗ್ಗೆ ಸಹಾಯ ಕಳುಹಿಸಲಾಗಿದೆ" : "Help sent for collection issues"
                    })}
                  >
                    {isKannada ? "ಸಂಗ್ರಹಣೆ ಸಮಸ್ಯೆ" : "Collection Issues"}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-sm"
                    onClick={() => toast({
                      title: isKannada ? "ಸಹಾಯ ವಿನಂತಿ" : "Help Request",
                      description: isKannada ? "ಪಾವತಿ ಸಮಸ್ಯೆಯ ಬಗ್ಗೆ ಸಹಾಯ ಕಳುಹಿಸಲಾಗಿದೆ" : "Help sent for payment issues"
                    })}
                  >
                    {isKannada ? "ಪಾವತಿ ಸಮಸ್ಯೆ" : "Payment Issues"}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-sm"
                    onClick={() => toast({
                      title: isKannada ? "ಸಹಾಯ ವಿನಂತಿ" : "Help Request",
                      description: isKannada ? "ಇತರ ಪ್ರಶ್ನೆಗಳಿಗೆ ಸಹಾಯ ಕಳುಹಿಸಲಾಗಿದೆ" : "Help sent for other queries"
                    })}
                  >
                    {isKannada ? "ಇತರ ಪ್ರಶ್ನೆಗಳು" : "Other Questions"}
                  </Button>
                </div>
                <div className="border-t pt-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    {isKannada ? "ಸರಾಸರಿ ಪ್ರತಿಕ್ರಿಯೆ ಸಮಯ: 2 ನಿಮಿಷಗಳು" : "Average response time: 2 minutes"}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
