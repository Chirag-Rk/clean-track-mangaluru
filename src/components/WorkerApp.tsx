
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Clock, 
  Wifi, 
  WifiOff, 
  ArrowLeft, 
  Camera, 
  CheckCircle2, 
  BarChart3,
  Target,
  Award,
  TrendingUp
} from "lucide-react";

interface WorkerAppProps {
  onBack: () => void;
}

const WorkerApp = ({ onBack }: WorkerAppProps) => {
  const [isKannada, setIsKannada] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [todaysProgress, setTodaysProgress] = useState(75);
  const [collectionsToday, setCollectionsToday] = useState(32);
  const [currentStreak, setCurrentStreak] = useState(12);
  const [isLogging, setIsLogging] = useState(false);
  const [lastLogged] = useState("2:30 PM");

  const toggleLanguage = () => setIsKannada(!isKannada);

  const handleLogCollection = () => {
    setIsLogging(true);
    setTimeout(() => {
      setCollectionsToday(prev => prev + 1);
      setTodaysProgress(prev => Math.min(prev + 2, 100));
      setIsLogging(false);
    }, 2000);
  };

  const achievements = [
    { icon: "🏆", label: isKannada ? "ದಿನದ ಚಾಂಪಿಯನ್" : "Daily Champion", earned: true },
    { icon: "⚡", label: isKannada ? "ವೇಗದ ಸಂಗ್ರಾಹಕ" : "Speed Collector", earned: true },
    { icon: "🎯", label: isKannada ? "ಗುರಿ ಸಾಧಕ" : "Target Achiever", earned: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 relative">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
      
      {/* Header */}
      <div className="relative z-10 p-4">
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
          
          <div className="flex items-center gap-3">
            <Badge variant={isOnline ? "default" : "destructive"} className="backdrop-blur-md">
              {isOnline ? <Wifi className="h-4 w-4 mr-1" /> : <WifiOff className="h-4 w-4 mr-1" />}
              {isOnline ? (isKannada ? "ಆನ್‌ಲೈನ್" : "Online") : (isKannada ? "ಆಫ್‌ಲೈನ್" : "Offline")}
            </Badge>
            <MapPin className="h-5 w-5 text-white" />
          </div>
        </div>

        {/* Welcome Section */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4 animate-bounce">👷‍♂️</div>
          <h1 className="text-3xl font-bold text-white mb-2">
            {isKannada ? "ಕೆಲಸಗಾರ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್" : "Worker Dashboard"}
          </h1>
          <p className="text-white/90 text-lg">
            {isKannada ? "ಇಂದು ಶುಭ ದಿನ! ಒಳ್ಳೆಯ ಕೆಲಸ!" : "Great work today! Keep it up!"}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="bg-white/20 backdrop-blur-md border-white/30">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">{collectionsToday}</div>
              <div className="text-white/80 text-sm">{isKannada ? "ಇಂದಿನ ಸಂಗ್ರಹಣೆ" : "Collections Today"}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/20 backdrop-blur-md border-white/30">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">{currentStreak}</div>
              <div className="text-white/80 text-sm">{isKannada ? "ದಿನಗಳ ಸರಣಿ" : "Day Streak"}</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Action Card */}
        <Card className="bg-white/15 backdrop-blur-lg border-white/30 mb-6 hover:bg-white/20 transition-all duration-300">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <div className="text-8xl mb-4 animate-pulse">🗑️</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {isKannada ? "ಸಂಗ್ರಹಣೆ ಲಾಗ್ ಮಾಡಿ" : "Log Collection"}
              </h3>
            </div>
            
            <Button 
              onClick={handleLogCollection}
              disabled={isLogging}
              className="w-full py-6 text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {isLogging ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                  {isKannada ? "ಲಾಗ್ ಮಾಡುತ್ತಿದೆ..." : "Logging..."}
                </>
              ) : (
                <>
                  <Camera className="h-6 w-6 mr-3" />
                  {isKannada ? "ಸಂಗ್ರಹಣೆ ಪೂರ್ಣಗೊಂಡಿದೆ" : "Collection Complete"}
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Progress Card */}
        <Card className="bg-white/15 backdrop-blur-lg border-white/30 mb-6">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Target className="h-5 w-5" />
              {isKannada ? "ಇಂದಿನ ಪ್ರಗತಿ" : "Today's Progress"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <Progress value={todaysProgress} className="h-6 bg-white/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-white mix-blend-difference">
                    {todaysProgress}%
                  </span>
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-white/80">{isKannada ? "ಪೂರ್ಣಗೊಂಡಿದೆ" : "Completed"}</span>
                <span className="text-white/80">{collectionsToday}/50 {isKannada ? "ಮನೆಗಳು" : "Houses"}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="bg-white/15 backdrop-blur-lg border-white/30 mb-6">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Award className="h-5 w-5" />
              {isKannada ? "ಸಾಧನೆಗಳು" : "Achievements"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-3">
              {achievements.map((achievement, index) => (
                <div key={index} className={`text-center p-3 rounded-lg ${achievement.earned ? 'bg-yellow-400/20' : 'bg-white/10'}`}>
                  <div className="text-2xl mb-1">{achievement.icon}</div>
                  <div className={`text-xs ${achievement.earned ? 'text-yellow-100' : 'text-white/60'}`}>
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <Card className="bg-white/15 backdrop-blur-lg border-white/30 mb-6">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              {isKannada ? "ಕಾರ್ಯಕ್ಷಮತೆ" : "Performance"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-300">94%</div>
                <div className="text-white/80 text-sm">{isKannada ? "ದಕ್ಷತೆ" : "Efficiency"}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300">4.8</div>
                <div className="text-white/80 text-sm">{isKannada ? "ರೇಟಿಂಗ್" : "Rating"}</div>
              </div>
            </div>
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
        <div className="fixed bottom-0 left-0 right-0 bg-red-500/90 backdrop-blur-md text-white p-4 text-center z-20">
          <div className="flex items-center justify-center gap-2">
            <WifiOff className="h-5 w-5" />
            <span className="font-semibold">
              {isKannada ? "ಆಫ್‌ಲೈನ್ ಮೋಡ್ - ಡೇಟಾ ಸಿಂಕ್ ಆಗುತ್ತದೆ" : "Offline Mode - Data will sync when online"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkerApp;
