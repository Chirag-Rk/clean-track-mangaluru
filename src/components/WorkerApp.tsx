
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { MapPin, Clock, Wifi, WifiOff, ArrowLeft } from "lucide-react";

interface WorkerAppProps {
  onBack: () => void;
}

const WorkerApp = ({ onBack }: WorkerAppProps) => {
  const [isKannada, setIsKannada] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [todaysProgress] = useState(75);
  const [lastLogged] = useState("2:30 PM");

  const toggleLanguage = () => setIsKannada(!isKannada);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 relative">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      
      {/* Header */}
      <div className="relative z-10 p-4">
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
          
          <div className="flex items-center gap-2">
            {isOnline ? (
              <Wifi className="h-5 w-5 text-green-200" />
            ) : (
              <WifiOff className="h-5 w-5 text-red-300" />
            )}
            <MapPin className="h-5 w-5 text-white" />
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="text-6xl mb-4">👷‍♂️</div>
          <h1 className="text-3xl font-bold text-white mb-2">
            {isKannada ? "ಕೆಲಸಗಾರ ಅಪ್ಲಿಕೇಶನ್" : "Worker App"}
          </h1>
          <p className="text-white/80">
            {isKannada ? "ಸಂಗ್ರಹಣೆ ಲಾಗ್ ಮಾಡಲು ಟ್ಯಾಪ್ ಮಾಡಿ" : "Tap to Log Collection"}
          </p>
        </div>

        {/* Main Action Card */}
        <Card className="bg-white/90 backdrop-blur-md border-white/50 mb-6 hover:scale-105 transition-all duration-300">
          <CardContent className="p-8 text-center">
            <div className="text-8xl mb-6">🗑️</div>
            <Button className="w-full py-6 text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800">
              {isKannada ? "ಸಂಗ್ರಹಣೆ ಲಾಗ್ ಮಾಡಿ" : "LOG COLLECTION"}
            </Button>
          </CardContent>
        </Card>

        {/* Progress Card */}
        <Card className="bg-white/90 backdrop-blur-md border-white/50 mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {isKannada ? "ಇಂದಿನ ಪ್ರಗತಿ" : "Today's Progress"}
              </h3>
              <span className="text-2xl">📊</span>
            </div>
            
            <div className="relative mb-4">
              <Progress value={todaysProgress} className="h-4" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-semibold text-white mix-blend-difference">
                  {todaysProgress}%
                </span>
              </div>
            </div>
            
            <div className="flex justify-between text-sm text-gray-600">
              <span>{isKannada ? "ಪೂರ್ಣಗೊಂಡಿದೆ" : "Completed"}</span>
              <span>{todaysProgress}/100 {isKannada ? "ಮನೆಗಳು" : "Houses"}</span>
            </div>
          </CardContent>
        </Card>

        {/* Status Card */}
        <Card className="bg-white/90 backdrop-blur-md border-white/50 mb-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="h-5 w-5 text-gray-600" />
              <span className="font-semibold text-gray-800">
                {isKannada ? "ಕೊನೆಯ ಲಾಗ್" : "Last Logged"}
              </span>
            </div>
            <p className="text-gray-600">{lastLogged}</p>
          </CardContent>
        </Card>

        {/* Language Toggle */}
        <div className="flex justify-center mb-6">
          <Button
            onClick={toggleLanguage}
            variant="outline"
            className="bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30"
          >
            {isKannada ? "English" : "ಕನ್ನಡ"}
          </Button>
        </div>
      </div>

      {/* Offline Warning */}
      {!isOnline && (
        <div className="fixed bottom-0 left-0 right-0 bg-red-500 text-white p-4 text-center z-20">
          <div className="flex items-center justify-center gap-2">
            <WifiOff className="h-5 w-5" />
            <span className="font-semibold">
              {isKannada ? "ಆಫ್‌ಲೈನ್ ಮೋಡ್" : "Offline Mode"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkerApp;
