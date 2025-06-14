
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Phone, AlertCircle, Trophy, Home as HomeIcon, MapPin, Upload, CreditCard, Calendar, Star, Wallet, CheckCircle, Clock, FileText, Camera, Gift, Download, Bell, Settings } from "lucide-react";
import PaymentModal from "@/components/PaymentModal";
import { useToast } from "@/hooks/use-toast";

interface CitizenPortalProps {
  onBack: () => void;
}

const CitizenPortal = ({ onBack }: CitizenPortalProps) => {
  const [isKannada, setIsKannada] = useState(false);
  const [currentPage, setCurrentPage] = useState<"home" | "status" | "report" | "rewards" | "payments">("home");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [reportDescription, setReportDescription] = useState("");
  const [selectedReward, setSelectedReward] = useState<string | null>(null);
  const { toast } = useToast();

  const toggleLanguage = () => setIsKannada(!isKannada);

  const handleSpecialPickup = () => {
    toast({
      title: isKannada ? "ವಿಶೇಷ ಪಿಕಪ್ ವಿನಂತಿ" : "Special Pickup Request",
      description: isKannada ? "ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ಸಲ್ಲಿಸಲಾಗಿದೆ. ನಾವು ಶೀಘ್ರದಲ್ಲೇ ಸಂಪರ್ಕಿಸುತ್ತೇವೆ." : "Your request has been submitted. We'll contact you soon.",
    });
  };

  const handleReportSubmit = () => {
    if (!reportDescription.trim()) {
      toast({
        title: isKannada ? "ದೋಷ" : "Error",
        description: isKannada ? "ದಯವಿಟ್ಟು ಸಮಸ್ಯೆಯ ವಿವರಣೆಯನ್ನು ನೀಡಿ" : "Please provide a description of the issue",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: isKannada ? "ವರದಿ ಸಲ್ಲಿಸಲಾಗಿದೆ" : "Report Submitted",
      description: isKannada ? "ನಿಮ್ಮ ವರದಿಯನ್ನು ಸಲ್ಲಿಸಲಾಗಿದೆ. ಟಿಕೆಟ್ #12345" : "Your report has been submitted. Ticket #12345",
    });
    setReportDescription("");
  };

  const handleClaimReward = (rewardTitle: string, points: number) => {
    if (points > 450) {
      toast({
        title: isKannada ? "ಸಾಕಷ್ಟು ಪಾಯಿಂಟ್‌ಗಳಿಲ್ಲ" : "Insufficient Points",
        description: isKannada ? "ಈ ಬಹುಮಾನಕ್ಕೆ ನಿಮಗೆ ಹೆಚ್ಚು ಪಾಯಿಂಟ್‌ಗಳ ಅಗತ್ಯವಿದೆ" : "You need more points for this reward",
        variant: "destructive"
      });
      return;
    }
    
    setSelectedReward(rewardTitle);
    toast({
      title: isKannada ? "ಬಹುಮಾನ ಪಡೆದುಕೊಳ್ಳಲಾಗಿದೆ!" : "Reward Claimed!",
      description: `${rewardTitle} - ${points} ${isKannada ? "ಪಾಯಿಂಟ್‌ಗಳು ಕಡಿತಗೊಂಡಿವೆ" : "points deducted"}`,
    });
  };

  const renderNavbar = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-20 shadow-lg">
      <div className="flex justify-around">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCurrentPage("home")}
          className={`flex flex-col items-center gap-1 transition-all duration-200 ${currentPage === "home" ? "text-blue-600 bg-blue-50" : "text-gray-600"}`}
        >
          <HomeIcon className="h-5 w-5" />
          <span className="text-xs font-medium">{isKannada ? "ಮನೆ" : "Home"}</span>
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCurrentPage("payments")}
          className={`flex flex-col items-center gap-1 transition-all duration-200 ${currentPage === "payments" ? "text-blue-600 bg-blue-50" : "text-gray-600"}`}
        >
          <CreditCard className="h-5 w-5" />
          <span className="text-xs font-medium">{isKannada ? "ಪಾವತಿ" : "Payments"}</span>
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCurrentPage("status")}
          className={`flex flex-col items-center gap-1 transition-all duration-200 ${currentPage === "status" ? "text-blue-600 bg-blue-50" : "text-gray-600"}`}
        >
          <MapPin className="h-5 w-5" />
          <span className="text-xs font-medium">{isKannada ? "ಸ್ಥಿತಿ" : "Status"}</span>
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCurrentPage("report")}
          className={`flex flex-col items-center gap-1 transition-all duration-200 ${currentPage === "report" ? "text-blue-600 bg-blue-50" : "text-gray-600"}`}
        >
          <AlertCircle className="h-5 w-5" />
          <span className="text-xs font-medium">{isKannada ? "ವರದಿ" : "Report"}</span>
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCurrentPage("rewards")}
          className={`flex flex-col items-center gap-1 transition-all duration-200 ${currentPage === "rewards" ? "text-blue-600 bg-blue-50" : "text-gray-600"}`}
        >
          <Trophy className="h-5 w-5" />
          <span className="text-xs font-medium">{isKannada ? "ಬಹುಮಾನಗಳು" : "Rewards"}</span>
        </Button>
      </div>
    </div>
  );

  const renderHome = () => (
    <>
      {/* Hero Section */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <div className="text-4xl">🏠</div>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {isKannada ? "ಸ್ವಾಗತ!" : "Welcome!"}
        </h1>
        <div className="bg-green-100 rounded-full px-6 py-3 inline-flex items-center gap-3 mb-6">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-700 font-semibold">
            {isKannada ? "ಇಂದು ಸಂಗ್ರಹಣೆ ಪೂರ್ಣಗೊಂಡಿದೆ" : "Today's Collection Completed"}
          </span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 mb-8">
        <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {isKannada ? "ಮಾಸಿಕ ಬಿಲ್ ಪಾವತಿ" : "Monthly Bill Payment"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {isKannada ? "ತ್ಯಾಜ್ಯ ಸಂಗ್ರಹಣೆ ಶುಲ್ಕ ಪಾವತಿಸಿ" : "Pay your waste collection fee"}
                </p>
              </div>
              <Button
                onClick={() => setShowPaymentModal(true)}
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                {isKannada ? "ಪಾವತಿಸಿ" : "Pay Now"}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {isKannada ? "ವಿಶೇಷ ಪಿಕಪ್" : "Special Pickup"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {isKannada ? "ಅತಿರಿಕ್ತ ತ್ಯಾಜ್ಯ ಸಂಗ್ರಹಿಸಲು ವಿನಂತಿಸಿ" : "Request extra waste collection"}
                </p>
              </div>
              <Button onClick={handleSpecialPickup} className="bg-blue-500 hover:bg-blue-600 text-white">
                {isKannada ? "ವಿನಂತಿಸಿ" : "Request"}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {isKannada ? "ಸಮಸ್ಯೆ ವರದಿ" : "Report Issue"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {isKannada ? "ಫೋಟೋ ಸಹಿತ ದೂರು ನೀಡಿ" : "Report with photo evidence"}
                </p>
              </div>
              <Button 
                onClick={() => setCurrentPage("report")} 
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                {isKannada ? "ವರದಿ" : "Report"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <Card className="border border-gray-200 mb-8">
        <CardHeader>
          <CardTitle className="text-gray-800 flex items-center gap-2">
            <FileText className="h-5 w-5" />
            {isKannada ? "ಇಂದಿನ ಅಂಕಿಅಂಶಗಳು" : "Today's Overview"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="text-lg font-bold text-gray-800">Collected</div>
              <div className="text-gray-600 text-sm">8:30 AM</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Wallet className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <div className="text-lg font-bold text-gray-800">₹150</div>
              <div className="text-gray-600 text-sm">Due: 5 days</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );

  const renderPayments = () => (
    <div className="mb-20">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CreditCard className="h-8 w-8 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {isKannada ? "ಪಾವತಿ ಕೇಂದ್ರ" : "Payment Center"}
        </h2>
      </div>

      {/* Current Bill */}
      <Card className="border border-gray-200 mb-6">
        <CardHeader>
          <CardTitle className="text-gray-800 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              {isKannada ? "ಈ ತಿಂಗಳ ಬಿಲ್" : "Current Month Bill"}
            </span>
            <Badge className="bg-orange-100 text-orange-700">
              {isKannada ? "ಬಾಕಿ" : "Pending"}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="text-2xl font-bold text-gray-800">₹150</div>
              <div className="text-gray-600">
                {isKannada ? "ನವೆಂಬರ್ 2024" : "November 2024"}
              </div>
            </div>
            <Button 
              onClick={() => setShowPaymentModal(true)}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
            >
              <CreditCard className="h-4 w-4 mr-2" />
              {isKannada ? "ಪಾವತಿಸಿ" : "Pay Now"}
            </Button>
          </div>
          <div className="text-gray-600 text-sm">
            {isKannada ? "ಕೊನೆಯ ದಿನಾಂಕ: ನವೆಂಬರ್ 30, 2024" : "Due Date: November 30, 2024"}
          </div>
        </CardContent>
      </Card>

      {/* Payment History */}
      <Card className="border border-gray-200">
        <CardHeader>
          <CardTitle className="text-gray-800 flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            {isKannada ? "ಪಾವತಿ ಇತಿಹಾಸ" : "Payment History"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { month: "October 2024", amount: "₹150", status: "paid", date: "Oct 15" },
              { month: "September 2024", amount: "₹150", status: "paid", date: "Sep 12" },
              { month: "August 2024", amount: "₹150", status: "paid", date: "Aug 18" },
            ].map((payment, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="text-gray-800 font-medium">{payment.month}</div>
                  <div className="text-gray-600 text-sm">{payment.date}</div>
                </div>
                <div className="text-right">
                  <div className="text-gray-800 font-bold">{payment.amount}</div>
                  <Badge className="bg-green-100 text-green-700 text-xs">
                    {isKannada ? "ಪಾವತಿ ಆಗಿದೆ" : "Paid"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderRewards = () => (
    <div className="mb-20">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Trophy className="h-8 w-8 text-yellow-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {isKannada ? "ಬಹುಮಾನಗಳ ಕೇಂದ್ರ" : "Rewards Center"}
        </h2>
      </div>

      {/* Points Balance */}
      <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 mb-6">
        <CardContent className="p-6 text-center">
          <div className="text-5xl font-bold text-yellow-600 mb-2">450</div>
          <p className="text-gray-700 text-lg">{isKannada ? "ಗಳಿಸಿದ ಪಾಯಿಂಟ್‌ಗಳು" : "Earned Points"}</p>
          <p className="text-gray-600 text-sm mt-2">
            {isKannada ? "ಇನ್ನೂ 50 ಪಾಯಿಂಟ್‌ಗಳಿಗೆ ಮುಂದಿನ ಬಹುಮಾನ!" : "50 more points to next reward!"}
          </p>
        </CardContent>
      </Card>

      {/* Available Rewards */}
      <div className="space-y-4">
        {[
          { icon: "🎁", title: isKannada ? "ಉಚಿತ ತಿಂಗಳ ಸೇವೆ" : "Free Month Service", points: 500, available: false },
          { icon: "💰", title: isKannada ? "₹50 ಕ್ಯಾಶ್‌ಬ್ಯಾಕ್" : "₹50 Cashback", points: 300, available: true },
          { icon: "🌱", title: isKannada ? "ಸಸ್ಯ ಕಿಟ್" : "Plant Kit", points: 200, available: true },
          { icon: "🏆", title: isKannada ? "ಪ್ರೀಮಿಯಂ ಸೇವೆ" : "Premium Service", points: 1000, available: false },
        ].map((reward, index) => (
          <Card key={index} className={`border border-gray-200 ${!reward.available ? 'opacity-50' : 'hover:shadow-lg hover:scale-[1.02]'} transition-all duration-300`}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{reward.icon}</span>
                  <div>
                    <h3 className="text-gray-800 font-semibold">{reward.title}</h3>
                    <p className="text-gray-600 text-sm">{reward.points} {isKannada ? "ಪಾಯಿಂಟ್‌ಗಳು" : "points"}</p>
                  </div>
                </div>
                <Button 
                  disabled={!reward.available}
                  onClick={() => handleClaimReward(reward.title, reward.points)}
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                >
                  {isKannada ? "ಪಡೆಯಿರಿ" : "Claim"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderStatus = () => (
    <div className="text-center mb-20">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <MapPin className="h-8 w-8 text-blue-600" />
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        {isKannada ? "ಸಂಗ್ರಹಣೆ ಸ್ಥಿತಿ" : "Collection Status"}
      </h2>
      
      {/* Collection Timeline */}
      <Card className="border border-gray-200 mb-6">
        <CardHeader>
          <CardTitle className="text-gray-800 flex items-center gap-2">
            <Clock className="h-5 w-5" />
            {isKannada ? "ಸಂಗ್ರಹಣೆ ವೇಳಾಪಟ್ಟಿ" : "Collection Schedule"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <span className="text-gray-700">{isKannada ? "ಕೊನೆಯ ಸಂಗ್ರಹಣೆ:" : "Last Collection:"}</span>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-gray-800 font-medium">Today 8:30 AM</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
              <span className="text-gray-700">{isKannada ? "ಮುಂದಿನ ಸಂಗ್ರಹಣೆ:" : "Next Collection:"}</span>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-500" />
                <span className="text-gray-800 font-medium">Tomorrow 8:00 AM</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">{isKannada ? "ಸ್ಥಿತಿ:" : "Status:"}</span>
              <Badge className="bg-green-100 text-green-700">{isKannada ? "ನಿಯಮಿತ" : "On Schedule"}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Collection History */}
      <Card className="border border-gray-200">
        <CardHeader>
          <CardTitle className="text-gray-800 flex items-center gap-2">
            <FileText className="h-5 w-5" />
            {isKannada ? "ಸಂಗ್ರಹಣೆ ಇತಿಹಾಸ" : "Collection History"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { date: "Nov 13, 2024", time: "8:30 AM", status: "completed" },
              { date: "Nov 12, 2024", time: "8:15 AM", status: "completed" },
              { date: "Nov 11, 2024", time: "8:45 AM", status: "completed" },
              { date: "Nov 10, 2024", time: "N/A", status: "missed" },
            ].map((collection, index) => (
              <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <div className="text-gray-800 font-medium">{collection.date}</div>
                  <div className="text-gray-600 text-sm">{collection.time}</div>
                </div>
                <Badge className={collection.status === "completed" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}>
                  {collection.status === "completed" ? (isKannada ? "ಪೂರ್ಣಗೊಂಡಿದೆ" : "Completed") : (isKannada ? "ತಪ್ಪಿದೆ" : "Missed")}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderReport = () => (
    <div className="mb-20">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="h-8 w-8 text-red-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {isKannada ? "ಸಮಸ್ಯೆ ವರದಿ" : "Report Issues"}
        </h2>
      </div>

      <Card className="border border-gray-200 mb-6">
        <CardHeader>
          <CardTitle className="text-gray-800">{isKannada ? "ಹೊಸ ವರದಿ ಸಲ್ಲಿಸಿ" : "Submit New Report"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {isKannada ? "ಸಮಸ್ಯೆಯ ವಿವರಣೆ" : "Issue Description"}
            </label>
            <Textarea
              placeholder={isKannada ? "ಸಮಸ್ಯೆಯನ್ನು ವಿವರಿಸಿ..." : "Describe the issue..."}
              value={reportDescription}
              onChange={(e) => setReportDescription(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
          
          <Button className="w-full bg-blue-500 hover:bg-blue-600 mb-4">
            <Camera className="h-4 w-4 mr-2" />
            {isKannada ? "ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ" : "Upload Photo"}
          </Button>
          
          <Button 
            onClick={handleReportSubmit}
            className="w-full bg-red-500 hover:bg-red-600"
          >
            <Upload className="h-4 w-4 mr-2" />
            {isKannada ? "ವರದಿ ಸಲ್ಲಿಸಿ" : "Submit Report"}
          </Button>
        </CardContent>
      </Card>

      {/* Recent Reports */}
      <Card className="border border-gray-200">
        <CardHeader>
          <CardTitle className="text-gray-800">{isKannada ? "ಇತ್ತೀಚಿನ ವರದಿಗಳು" : "Recent Reports"}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { id: "#12344", issue: "Missed collection", date: "Nov 12", status: "resolved" },
              { id: "#12343", issue: "Damaged bin", date: "Nov 10", status: "in_progress" },
              { id: "#12342", issue: "Late collection", date: "Nov 8", status: "resolved" },
            ].map((report, index) => (
              <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <div className="text-gray-800 font-medium">{report.id}</div>
                  <div className="text-gray-600 text-sm">{report.issue} - {report.date}</div>
                </div>
                <Badge className={report.status === "resolved" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}>
                  {report.status === "resolved" ? (isKannada ? "ಪರಿಹರಿಸಲಾಗಿದೆ" : "Resolved") : (isKannada ? "ಪ್ರಗತಿಯಲ್ಲಿದೆ" : "In Progress")}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 pb-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button
            onClick={onBack}
            variant="ghost"
            size="sm"
            className="text-gray-600 hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {isKannada ? "ಹಿಂದೆ" : "Back"}
          </Button>
          
          <Button
            onClick={toggleLanguage}
            variant="outline"
            size="sm"
            className="border-gray-300 text-gray-600 hover:bg-gray-100"
          >
            {isKannada ? "English" : "ಕನ್ನಡ"}
          </Button>
        </div>

        {/* Content based on current page */}
        {currentPage === "home" && renderHome()}
        {currentPage === "payments" && renderPayments()}
        {currentPage === "rewards" && renderRewards()}
        {currentPage === "status" && renderStatus()}
        {currentPage === "report" && renderReport()}

        {/* Language info */}
        <div className="text-center text-gray-500 text-sm mb-4">
          ನಮ್ಮ ನಗರವನ್ನು ಶುಚಿಯಾಗಿ ಇಡುವುದು • Smart City Initiative • स्मार्ट शहर पहल
        </div>
      </div>

      {renderNavbar()}
      
      {showPaymentModal && (
        <PaymentModal 
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          isKannada={isKannada}
        />
      )}
    </div>
  );
};

export default CitizenPortal;
