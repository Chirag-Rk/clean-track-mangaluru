
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Phone, AlertCircle, Trophy, Home as HomeIcon, MapPin, Upload, CreditCard, Calendar, Star, Wallet, CheckCircle, Clock, FileText, Camera, Gift, Download, Bell, Settings, Receipt, TreePine, Users, Award, Target, MessageSquare, HelpCircle, PhoneCall } from "lucide-react";
import PaymentModal from "@/components/PaymentModal";
import BillGeneration from "@/components/BillGeneration";
import ContributionTracker from "@/components/ContributionTracker";
import EnhancedComplaintSystem from "@/components/EnhancedComplaintSystem";
import QuickActions from "@/components/QuickActions";
import { useToast } from "@/hooks/use-toast";

interface CitizenPortalProps {
  onBack: () => void;
}

const CitizenPortal = ({ onBack }: CitizenPortalProps) => {
  const [isKannada, setIsKannada] = useState(false);
  const [currentPage, setCurrentPage] = useState<"home" | "status" | "report" | "rewards" | "payments" | "bills" | "contributions">("home");
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
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 z-20 shadow-2xl">
      <div className="flex justify-around">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCurrentPage("home")}
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${currentPage === "home" ? "text-blue-600 bg-blue-50 scale-105" : "text-gray-600 hover:text-blue-500"}`}
        >
          <HomeIcon className="h-5 w-5" />
          <span className="text-xs font-medium">{isKannada ? "ಮನೆ" : "Home"}</span>
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCurrentPage("payments")}
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${currentPage === "payments" ? "text-blue-600 bg-blue-50 scale-105" : "text-gray-600 hover:text-blue-500"}`}
        >
          <CreditCard className="h-5 w-5" />
          <span className="text-xs font-medium">{isKannada ? "ಪಾವತಿ" : "Pay"}</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCurrentPage("bills")}
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${currentPage === "bills" ? "text-blue-600 bg-blue-50 scale-105" : "text-gray-600 hover:text-blue-500"}`}
        >
          <Receipt className="h-5 w-5" />
          <span className="text-xs font-medium">{isKannada ? "ಬಿಲ್‌ಗಳು" : "Bills"}</span>
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCurrentPage("status")}
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${currentPage === "status" ? "text-blue-600 bg-blue-50 scale-105" : "text-gray-600 hover:text-blue-500"}`}
        >
          <MapPin className="h-5 w-5" />
          <span className="text-xs font-medium">{isKannada ? "ಸ್ಥಿತಿ" : "Status"}</span>
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCurrentPage("report")}
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${currentPage === "report" ? "text-blue-600 bg-blue-50 scale-105" : "text-gray-600 hover:text-blue-500"}`}
        >
          <AlertCircle className="h-5 w-5" />
          <span className="text-xs font-medium">{isKannada ? "ದೂರು" : "Report"}</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCurrentPage("contributions")}
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${currentPage === "contributions" ? "text-blue-600 bg-blue-50 scale-105" : "text-gray-600 hover:text-blue-500"}`}
        >
          <TreePine className="h-5 w-5" />
          <span className="text-xs font-medium">{isKannada ? "ಪ್ರಭಾವ" : "Impact"}</span>
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCurrentPage("rewards")}
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${currentPage === "rewards" ? "text-blue-600 bg-blue-50 scale-105" : "text-gray-600 hover:text-blue-500"}`}
        >
          <Trophy className="h-5 w-5" />
          <span className="text-xs font-medium">{isKannada ? "ಬಹುಮಾನ" : "Rewards"}</span>
        </Button>
      </div>
    </div>
  );

  const renderHome = () => (
    <div className="pb-20">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
          <div className="text-5xl">🏠</div>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {isKannada ? "ಸ್ವಾಗತ!" : "Welcome!"}
        </h1>
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-8 py-4 inline-flex items-center gap-3 mb-8 shadow-lg border border-green-200">
          <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-700 font-semibold text-lg">
            {isKannada ? "ಇಂದು ಸಂಗ್ರಹಣೆ ಪೂರ್ಣಗೊಂಡಿದೆ" : "Today's Collection Completed"}
          </span>
        </div>
      </div>

      {/* Quick Actions Section */}
      <QuickActions isKannada={isKannada} />

      {/* Quick Stats Dashboard */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
          <CardContent className="p-6 text-center">
            <TreePine className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-green-700">2.3</div>
            <div className="text-sm text-gray-600 font-medium">{isKannada ? "ಮರಗಳು ಉಳಿಸಿದೆ" : "Trees Saved"}</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-sky-50 border-blue-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
          <CardContent className="p-6 text-center">
            <Award className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-blue-700">450</div>
            <div className="text-sm text-gray-600 font-medium">{isKannada ? "ಪಾಯಿಂಟ್‌ಗಳು" : "Points"}</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
          <CardContent className="p-6 text-center">
            <Target className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-purple-700">#12</div>
            <div className="text-sm text-gray-600 font-medium">{isKannada ? "ಕಮ್ಯುನಿಟಿ ರ್ಯಾಂಕ್" : "Community Rank"}</div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Quick Actions */}
      <div className="grid gap-6 mb-8">
        <Card className="border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardContent className="p-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center shadow-lg">
                <CreditCard className="h-8 w-8 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {isKannada ? "ತ್ವರಿತ ಪಾವತಿ" : "Quick Payment"}
                </h3>
                <p className="text-gray-600 text-base mb-2">
                  {isKannada ? "ಬಿಲ್ ಪಾವತಿ ಮತ್ತು ಇತಿಹಾಸ" : "Bill payment & history"}
                </p>
                <Badge className="bg-orange-100 text-orange-700 font-semibold">₹150 {isKannada ? "ಬಾಕಿ" : "Due"}</Badge>
              </div>
              <Button
                onClick={() => setShowPaymentModal(true)}
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-xl px-8 py-3 text-lg font-semibold"
              >
                {isKannada ? "ಪಾವತಿಸಿ" : "Pay Now"}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-gradient-to-r from-blue-50 to-sky-50 border-blue-200">
          <CardContent className="p-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center shadow-lg">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {isKannada ? "ವಿಶೇಷ ಸೇವೆಗಳು" : "Special Services"}
                </h3>
                <p className="text-gray-600 text-base">
                  {isKannada ? "ಹೆಚ್ಚುವರಿ ಪಿಕಪ್ & ವಿಶೇಷ ಸೇವೆ" : "Extra pickup & special service"}
                </p>
              </div>
              <Button 
                onClick={handleSpecialPickup} 
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-sky-600 hover:from-blue-600 hover:to-sky-700 text-white shadow-xl px-8 py-3 text-lg font-semibold"
              >
                {isKannada ? "ವಿನಂತಿಸಿ" : "Request"}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
          <CardContent className="p-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center shadow-lg">
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {isKannada ? "ದೂರು ವ್ಯವಸ್ಥೆ" : "Complaint System"}
                </h3>
                <p className="text-gray-600 text-base">
                  {isKannada ? "ಸಮಸ್ಯೆಗಳನ್ನು ವರದಿ ಮಾಡಿ & ಟ್ರ್ಯಾಕ್ ಮಾಡಿ" : "Report & track issues"}
                </p>
              </div>
              <Button 
                onClick={() => setCurrentPage("report")} 
                size="lg"
                className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white shadow-xl px-8 py-3 text-lg font-semibold"
              >
                {isKannada ? "ದೂರು" : "Report"}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
          <CardContent className="p-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center shadow-lg">
                <TreePine className="h-8 w-8 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {isKannada ? "ಪರಿಸರ ಪ್ರಭಾವ" : "Environmental Impact"}
                </h3>
                <p className="text-gray-600 text-base">
                  {isKannada ? "ನಿಮ್ಮ ಕೊಡುಗೆ ಮತ್ತು ಸಾಧನೆಗಳು" : "Your contributions & achievements"}
                </p>
              </div>
              <Button 
                onClick={() => setCurrentPage("contributions")} 
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white shadow-xl px-8 py-3 text-lg font-semibold"
              >
                {isKannada ? "ವೀಕ್ಷಿಸಿ" : "View"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Summary */}
      <Card className="border border-gray-200 mb-8 bg-gradient-to-r from-gray-50 to-slate-50 border-gray-300 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-800 flex items-center gap-3 text-xl">
            <FileText className="h-6 w-6" />
            {isKannada ? "ಇಂದಿನ ಸಾರಾಂಶ" : "Today's Summary"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-md border border-green-100">
              <CheckCircle className="h-10 w-10 text-green-500 mx-auto mb-3" />
              <div className="text-xl font-bold text-gray-800">{isKannada ? "ಸಂಗ್ರಹಿಸಲಾಗಿದೆ" : "Collected"}</div>
              <div className="text-gray-600 font-medium">8:30 AM</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-md border border-blue-100">
              <Wallet className="h-10 w-10 text-blue-500 mx-auto mb-3" />
              <div className="text-xl font-bold text-gray-800">₹150</div>
              <div className="text-gray-600 font-medium">{isKannada ? "ಬಾಕಿ: 5 ದಿನಗಳು" : "Due: 5 days"}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
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
      <Card className="border border-gray-200 mb-6 shadow-lg">
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
      <Card className="border border-gray-200 shadow-lg">
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
      <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 mb-6 shadow-lg">
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
          <Card key={index} className={`border border-gray-200 ${!reward.available ? 'opacity-50' : 'hover:shadow-lg hover:scale-[1.02]'} transition-all duration-300 shadow-md`}>
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
      <Card className="border border-gray-200 mb-6 shadow-lg">
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
      <Card className="border border-gray-200 shadow-lg">
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

  return (
    <div className="min-h-screen bg-white">
      <div className="p-6 pb-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            onClick={onBack}
            variant="ghost"
            size="sm"
            className="text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {isKannada ? "ಹಿಂದೆ" : "Back"}
          </Button>
          
          <Button
            onClick={toggleLanguage}
            variant="outline"
            size="sm"
            className="border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {isKannada ? "English" : "ಕನ್ನಡ"}
          </Button>
        </div>

        {/* Content based on current page */}
        {currentPage === "home" && renderHome()}
        {currentPage === "payments" && renderPayments()}
        {currentPage === "bills" && <BillGeneration isKannada={isKannada} />}
        {currentPage === "contributions" && <ContributionTracker isKannada={isKannada} />}
        {currentPage === "rewards" && renderRewards()}
        {currentPage === "status" && renderStatus()}
        {currentPage === "report" && <EnhancedComplaintSystem isKannada={isKannada} />}

        {/* Language info */}
        <div className="text-center text-gray-500 text-sm mb-4 font-medium">
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
