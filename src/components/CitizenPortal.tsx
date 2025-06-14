
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Phone, AlertCircle, Trophy, Home as HomeIcon, MapPin, Upload } from "lucide-react";

interface CitizenPortalProps {
  onBack: () => void;
}

const CitizenPortal = ({ onBack }: CitizenPortalProps) => {
  const [isKannada, setIsKannada] = useState(false);
  const [currentPage, setCurrentPage] = useState<"home" | "status" | "report" | "rewards">("home");

  const toggleLanguage = () => setIsKannada(!isKannada);

  const renderNavbar = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-white/30 p-4 z-20">
      <div className="flex justify-around">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCurrentPage("home")}
          className={`flex flex-col items-center gap-1 ${currentPage === "home" ? "text-blue-600" : "text-gray-600"}`}
        >
          <HomeIcon className="h-5 w-5" />
          <span className="text-xs">{isKannada ? "ಮನೆ" : "Home"}</span>
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCurrentPage("status")}
          className={`flex flex-col items-center gap-1 ${currentPage === "status" ? "text-blue-600" : "text-gray-600"}`}
        >
          <MapPin className="h-5 w-5" />
          <span className="text-xs">{isKannada ? "ಸ್ಥಿತಿ" : "Status"}</span>
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCurrentPage("report")}
          className={`flex flex-col items-center gap-1 ${currentPage === "report" ? "text-blue-600" : "text-gray-600"}`}
        >
          <AlertCircle className="h-5 w-5" />
          <span className="text-xs">{isKannada ? "ವರದಿ" : "Report"}</span>
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCurrentPage("rewards")}
          className={`flex flex-col items-center gap-1 ${currentPage === "rewards" ? "text-blue-600" : "text-gray-600"}`}
        >
          <Trophy className="h-5 w-5" />
          <span className="text-xs">{isKannada ? "ಬಹುಮಾನಗಳು" : "Rewards"}</span>
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
          {isKannada ? "ತ್ಯಾಜ್ಯ ಸಂಗ್ರಹಿಸಲಾಗಿದೆಯೇ?" : "Waste Collected Today?"}
        </h1>
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-white/90 font-semibold">
            {isKannada ? "ಸಂಗ್ರಹಣೆ ಪೂರ್ಣಗೊಂಡಿದೆ" : "Collection Completed"}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid gap-4 mb-8">
        <Card className="bg-white/90 backdrop-blur-md border-white/50 hover:scale-105 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="text-4xl">📞</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {isKannada ? "ಪಿಕಪ್ ವಿನಂತಿಸಿ" : "Request Pickup"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {isKannada ? "ತ್ಯಾಜ್ಯ ಸಂಗ್ರಹಿಸಲು ವಿನಂತಿಸಿ" : "Schedule waste collection"}
                </p>
              </div>
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-md border-white/50 hover:scale-105 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="text-4xl">😤</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {isKannada ? "ದೂರು ನೀಡಿ" : "Raise Complaint"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {isKannada ? "ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ" : "Upload photo evidence"}
                </p>
              </div>
              <Upload className="h-6 w-6 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <Card className="bg-white/90 backdrop-blur-md border-white/50 mb-8">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">📊</span>
            {isKannada ? "ಇಂದಿನ ಅಂಕಿಅಂಶಗಳು" : "Today's Stats"}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">85%</div>
              <div className="text-sm text-gray-600">
                {isKannada ? "ಸಂಗ್ರಹಣೆ ದರ" : "Collection Rate"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">45</div>
              <div className="text-sm text-gray-600">
                {isKannada ? "ಬಹುಮಾನ ಪಾಯಿಂಟ್‌ಗಳು" : "Reward Points"}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );

  const renderRewards = () => (
    <div className="mb-16">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">🏆</div>
        <h2 className="text-3xl font-bold text-white mb-4">
          {isKannada ? "ಬಹುಮಾನಗಳ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್" : "Rewards Dashboard"}
        </h2>
      </div>

      <Card className="bg-white/90 backdrop-blur-md border-white/50 mb-6">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-green-600 mb-2">245</div>
            <p className="text-gray-600">{isKannada ? "ಒಟ್ಟು ಪಾಯಿಂಟ್‌ಗಳು" : "Total Points"}</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <span className="font-semibold">🌱 Eco Warrior</span>
              <Badge className="bg-green-100 text-green-800">Earned</Badge>
            </div>
            <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
              <span className="font-semibold">🗓️ Weekly Champion</span>
              <Badge className="bg-yellow-100 text-yellow-800">In Progress</Badge>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
              <span className="font-semibold">🏆 Monthly Leader</span>
              <Badge variant="outline">Locked</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 relative">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      
      <div className="relative z-10 p-4 pb-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button
            onClick={onBack}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
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
        {currentPage === "rewards" && renderRewards()}
        {currentPage === "status" && (
          <div className="text-center text-white mb-16">
            <div className="text-6xl mb-4">📍</div>
            <h2 className="text-2xl font-bold mb-4">Collection Status</h2>
            <p>Your area collection status will appear here</p>
          </div>
        )}
        {currentPage === "report" && (
          <div className="text-center text-white mb-16">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-bold mb-4">Report Issues</h2>
            <p>File complaints and track resolution</p>
          </div>
        )}

        {/* Language info */}
        <div className="text-center text-white/70 text-sm mb-4">
          ನಮ್ಮ ನಗರವನ್ನು ಶುಚಿಯಾಗಿ ಇಡುವುದು • Village Cleanliness • गाँव की सफाई
        </div>
      </div>

      {renderNavbar()}
    </div>
  );
};

export default CitizenPortal;
