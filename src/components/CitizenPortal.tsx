
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Phone, AlertCircle, Trophy, Home as HomeIcon, MapPin, Upload, CreditCard, Calendar, Star, Wallet } from "lucide-react";
import PaymentModal from "@/components/PaymentModal";

interface CitizenPortalProps {
  onBack: () => void;
}

const CitizenPortal = ({ onBack }: CitizenPortalProps) => {
  const [isKannada, setIsKannada] = useState(false);
  const [currentPage, setCurrentPage] = useState<"home" | "status" | "report" | "rewards" | "payments">("home");
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const toggleLanguage = () => setIsKannada(!isKannada);

  const renderNavbar = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-white/30 p-4 z-20 shadow-lg">
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
        <div className="text-8xl mb-4 animate-bounce">🏠</div>
        <h1 className="text-4xl font-bold text-white mb-4">
          {isKannada ? "ಸ್ವಾಗತ!" : "Welcome!"}
        </h1>
        <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 inline-flex items-center gap-3 mb-6">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-white/90 font-semibold">
            {isKannada ? "ಇಂದು ಸಂಗ್ರಹಣೆ ಪೂರ್ಣಗೊಂಡಿದೆ" : "Today's Collection Completed"}
          </span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 mb-8">
        <Card className="bg-white/15 backdrop-blur-lg border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="text-5xl">💳</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">
                  {isKannada ? "ಮಾಸಿಕ ಬಿಲ್ ಪಾವತಿ" : "Monthly Bill Payment"}
                </h3>
                <p className="text-white/80 text-sm">
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

        <Card className="bg-white/15 backdrop-blur-lg border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="text-5xl">📞</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">
                  {isKannada ? "ವಿಶೇಷ ಪಿಕಪ್" : "Special Pickup"}
                </h3>
                <p className="text-white/80 text-sm">
                  {isKannada ? "ಅತಿರಿಕ್ತ ತ್ಯಾಜ್ಯ ಸಂಗ್ರಹಿಸಲು ವಿನಂತಿಸಿ" : "Request extra waste collection"}
                </p>
              </div>
              <Phone className="h-6 w-6 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/15 backdrop-blur-lg border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="text-5xl">📸</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">
                  {isKannada ? "ಸಮಸ್ಯೆ ವರದಿ" : "Report Issue"}
                </h3>
                <p className="text-white/80 text-sm">
                  {isKannada ? "ಫೋಟೋ ಸಹಿತ ದೂರು ನೀಡಿ" : "Report with photo evidence"}
                </p>
              </div>
              <Upload className="h-6 w-6 text-red-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <Card className="bg-white/15 backdrop-blur-lg border-white/30 mb-8">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <span className="text-2xl">📊</span>
            {isKannada ? "ಇಂದಿನ ಅಂಕಿಅಂಶಗಳು" : "Today's Overview"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">✅</div>
              <div className="text-lg font-bold text-white">Collected</div>
              <div className="text-white/80 text-sm">8:30 AM</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">₹150</div>
              <div className="text-lg font-bold text-white">This Month</div>
              <div className="text-white/80 text-sm">Due: 5 days</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );

  const renderPayments = () => (
    <div className="mb-20">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">💳</div>
        <h2 className="text-3xl font-bold text-white mb-4">
          {isKannada ? "ಪಾವತಿ ಕೇಂದ್ರ" : "Payment Center"}
        </h2>
      </div>

      {/* Current Bill */}
      <Card className="bg-white/15 backdrop-blur-lg border-white/30 mb-6">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              {isKannada ? "ಈ ತಿಂಗಳ ಬಿಲ್" : "Current Month Bill"}
            </span>
            <Badge className="bg-orange-500">
              {isKannada ? "ಬಾಕಿ" : "Pending"}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="text-2xl font-bold text-white">₹150</div>
              <div className="text-white/80">
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
          <div className="text-white/70 text-sm">
            {isKannada ? "ಕೊನೆಯ ದಿನಾಂಕ: ನವೆಂಬರ್ 30, 2024" : "Due Date: November 30, 2024"}
          </div>
        </CardContent>
      </Card>

      {/* Payment History */}
      <Card className="bg-white/15 backdrop-blur-lg border-white/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
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
              <div key={index} className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                <div>
                  <div className="text-white font-medium">{payment.month}</div>
                  <div className="text-white/70 text-sm">{payment.date}</div>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold">{payment.amount}</div>
                  <Badge className="bg-green-500 text-xs">
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
        <div className="text-6xl mb-4">🏆</div>
        <h2 className="text-3xl font-bold text-white mb-4">
          {isKannada ? "ಬಹುಮಾನಗಳ ಕೇಂದ್ರ" : "Rewards Center"}
        </h2>
      </div>

      {/* Points Balance */}
      <Card className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-lg border-yellow-300/30 mb-6">
        <CardContent className="p-6 text-center">
          <div className="text-5xl font-bold text-yellow-300 mb-2">450</div>
          <p className="text-white/90 text-lg">{isKannada ? "ಗಳಿಸಿದ ಪಾಯಿಂಟ್‌ಗಳು" : "Earned Points"}</p>
          <p className="text-white/70 text-sm mt-2">
            {isKannada ? "ಇನ್ನೂ 50 ಪಾಯಿಂಟ್‌ಗಳಿಗೆ ಮುಂದಿನ ಬಹುಮಾನ!" : "50 more points to next reward!"}
          </p>
        </CardContent>
      </Card>

      {/* Available Rewards */}
      <div className="space-y-4">
        {[
          { icon: "🎁", title: isKannada ? "ಉಚಿತ ತಿಂಗಳ ಸೇವೆ" : "Free Month Service", points: 500, available: true },
          { icon: "💰", title: isKannada ? "₹50 ಕ್ಯಾಶ್‌ಬ್ಯಾಕ್" : "₹50 Cashback", points: 300, available: true },
          { icon: "🌱", title: isKannada ? "ಸಸ್ಯ ಕಿಟ್" : "Plant Kit", points: 200, available: true },
          { icon: "🏆", title: isKannada ? "ಪ್ರೀಮಿಯಂ ಸೇವೆ" : "Premium Service", points: 1000, available: false },
        ].map((reward, index) => (
          <Card key={index} className={`bg-white/15 backdrop-blur-lg border-white/30 ${!reward.available ? 'opacity-50' : 'hover:bg-white/20'}`}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{reward.icon}</span>
                  <div>
                    <h3 className="text-white font-semibold">{reward.title}</h3>
                    <p className="text-white/70 text-sm">{reward.points} {isKannada ? "ಪಾಯಿಂಟ್‌ಗಳು" : "points"}</p>
                  </div>
                </div>
                <Button 
                  disabled={!reward.available}
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 relative">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
      
      <div className="relative z-10 p-4 pb-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button
            onClick={onBack}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20 backdrop-blur-md"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {isKannada ? "ಹಿಂದೆ" : "Back"}
          </Button>
          
          <Button
            onClick={toggleLanguage}
            variant="outline"
            size="sm"
            className="bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30"
          >
            {isKannada ? "English" : "ಕನ್ನಡ"}
          </Button>
        </div>

        {/* Content based on current page */}
        {currentPage === "home" && renderHome()}
        {currentPage === "payments" && renderPayments()}
        {currentPage === "rewards" && renderRewards()}
        {currentPage === "status" && (
          <div className="text-center text-white mb-20">
            <div className="text-6xl mb-4">📍</div>
            <h2 className="text-3xl font-bold mb-4">
              {isKannada ? "ಸಂಗ್ರಹಣೆ ಸ್ಥಿತಿ" : "Collection Status"}
            </h2>
            <Card className="bg-white/15 backdrop-blur-lg border-white/30 mx-auto max-w-md">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-white/80">{isKannada ? "ಕೊನೆಯ ಸಂಗ್ರಹಣೆ:" : "Last Collection:"}</span>
                    <span className="text-white">Today 8:30 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">{isKannada ? "ಮುಂದಿನ ಸಂಗ್ರಹಣೆ:" : "Next Collection:"}</span>
                    <span className="text-white">Tomorrow 8:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">{isKannada ? "ಸ್ಥಿತಿ:" : "Status:"}</span>
                    <Badge className="bg-green-500">{isKannada ? "ನಿಯಮಿತ" : "On Schedule"}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
        {currentPage === "report" && (
          <div className="text-center text-white mb-20">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-3xl font-bold mb-4">
              {isKannada ? "ಸಮಸ್ಯೆ ವರದಿ" : "Report Issues"}
            </h2>
            <Card className="bg-white/15 backdrop-blur-lg border-white/30">
              <CardContent className="p-6">
                <Button className="w-full mb-4 bg-red-500 hover:bg-red-600">
                  <Upload className="h-4 w-4 mr-2" />
                  {isKannada ? "ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ" : "Upload Photo"}
                </Button>
                <p className="text-white/80 text-sm">
                  {isKannada ? "ಫೋಟೋ ಸಹಿತ ದೂರು ನೀಡಿ ಮತ್ತು ತ್ವರಿತ ಪರಿಹಾರ ಪಡೆಯಿರಿ" : "Report with photo for quick resolution"}
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Language info */}
        <div className="text-center text-white/70 text-sm mb-4">
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
