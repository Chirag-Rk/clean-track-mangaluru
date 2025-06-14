
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
  TrendingUp,
  Users,
  Navigation,
  Calendar,
  Star,
  Gift,
  Bell,
  MessageSquare,
  Phone,
  Route,
  Truck,
  Home,
  AlertCircle,
  Plus
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
  const [currentTime, setCurrentTime] = useState(new Date());
  const { toast } = useToast();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleLanguage = () => setIsKannada(!isKannada);

  const handleLogCollection = () => {
    setIsLogging(true);
    toast({
      title: isKannada ? "ಸಂಗ್ರಹಣೆ ಲಾಗ್ ಮಾಡುತ್ತಿದೆ" : "Logging Collection",
      description: isKannada ? "ದಯವಿಟ್ಟು ಕಾಯಿರಿ..." : "Please wait...",
    });
    
    setTimeout(() => {
      setCollectionsToday(prev => prev + 1);
      setTodaysProgress(prev => Math.min(prev + 2, 100));
      setIsLogging(false);
      toast({
        title: isKannada ? "ಯಶಸ್ವಿ!" : "Success!",
        description: isKannada ? "ಸಂಗ್ರಹಣೆ ಯಶಸ್ವಿಯಾಗಿ ಲಾಗ್ ಆಗಿದೆ" : "Collection logged successfully",
      });
    }, 2000);
  };

  const handleEmergencyReport = () => {
    toast({
      title: isKannada ? "ತುರ್ತು ವರದಿ" : "Emergency Report",
      description: isKannada ? "ತುರ್ತು ಸೇವೆಗಳಿಗೆ ಸಂಪರ್ಕಿಸುತ್ತಿದೆ" : "Connecting to emergency services",
    });
  };

  const handleRouteOptimization = () => {
    toast({
      title: isKannada ? "ಮಾರ್ಗ ಆಪ್ಟಿಮೈಸೇಶನ್" : "Route Optimization",
      description: isKannada ? "ಅತ್ಯುತ್ತಮ ಮಾರ್ಗವನ್ನು ಲೆಕ್ಕಾಚಾರ ಮಾಡುತ್ತಿದೆ" : "Calculating optimal route",
    });
  };

  const achievements = [
    { icon: "🏆", label: isKannada ? "ದಿನದ ಚಾಂಪಿಯನ್" : "Daily Champion", earned: true },
    { icon: "⚡", label: isKannada ? "ವೇಗದ ಸಂಗ್ರಾಹಕ" : "Speed Collector", earned: true },
    { icon: "🎯", label: isKannada ? "ಗುರಿ ಸಾಧಕ" : "Target Achiever", earned: false },
  ];

  const quickActions = [
    { icon: Navigation, label: isKannada ? "ಮಾರ್ಗ ಗೈಡ್" : "Route Guide", action: handleRouteOptimization },
    { icon: AlertCircle, label: isKannada ? "ತುರ್ತು ವರದಿ" : "Emergency", action: handleEmergencyReport },
    { icon: Phone, label: isKannada ? "ಸಂಪರ್ಕ ಸಹಾಯ" : "Contact Help", action: () => toast({ title: "Help", description: "Connecting to support..." }) },
    { icon: MessageSquare, label: isKannada ? "ಸಂದೇಶ" : "Messages", action: () => toast({ title: "Messages", description: "Opening messages..." }) },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b p-4">
        <div className="flex items-center justify-between mb-4">
          <Button
            onClick={onBack}
            variant="ghost"
            size="sm"
            className="text-gray-600 hover:text-blue-600 hover:bg-blue-50"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {isKannada ? "ಹಿಂದೆ" : "Back"}
          </Button>
          
          <div className="flex items-center gap-3">
            <Badge variant={isOnline ? "default" : "destructive"} className="bg-green-500">
              {isOnline ? <Wifi className="h-4 w-4 mr-1" /> : <WifiOff className="h-4 w-4 mr-1" />}
              {isOnline ? (isKannada ? "ಆನ್‌ಲೈನ್" : "Online") : (isKannada ? "ಆಫ್‌ಲೈನ್" : "Offline")}
            </Badge>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Clock className="h-4 w-4" />
              {currentTime.toLocaleTimeString()}
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="text-center">
          <div className="text-5xl mb-3">👷‍♂️</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-1">
            {isKannada ? "ಕೆಲಸಗಾರ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್" : "Worker Dashboard"}
          </h1>
          <p className="text-gray-600">
            {isKannada ? "ಇಂದು ಶುಭ ದಿನ! ಒಳ್ಳೆಯ ಕೆಲಸ!" : "Great work today! Keep it up!"}
          </p>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:shadow-lg transition-all duration-300">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold mb-1">{collectionsToday}</div>
              <div className="text-blue-100 text-sm">{isKannada ? "ಇಂದಿನ ಸಂಗ್ರಹಣೆ" : "Collections Today"}</div>
              <div className="text-3xl mt-2">🗑️</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white hover:shadow-lg transition-all duration-300">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold mb-1">{currentStreak}</div>
              <div className="text-green-100 text-sm">{isKannada ? "ದಿನಗಳ ಸರಣಿ" : "Day Streak"}</div>
              <div className="text-3xl mt-2">🔥</div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-800 flex items-center gap-2">
              <Plus className="h-5 w-5" />
              {isKannada ? "ತ್ವರಿತ ಕ್ರಿಯೆಗಳು" : "Quick Actions"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-16 flex flex-col gap-1 hover:bg-blue-50 hover:border-blue-300"
                  onClick={action.action}
                >
                  <action.icon className="h-5 w-5 text-blue-600" />
                  <span className="text-xs">{action.label}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Action Card */}
        <Card className="bg-white shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <div className="text-6xl mb-3 animate-pulse">🗑️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {isKannada ? "ಸಂಗ್ರಹಣೆ ಲಾಗ್ ಮಾಡಿ" : "Log Collection"}
              </h3>
            </div>
            
            <Button 
              onClick={handleLogCollection}
              disabled={isLogging}
              className="w-full py-6 text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {isLogging ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  {isKannada ? "ಲಾಗ್ ಮಾಡುತ್ತಿದೆ..." : "Logging..."}
                </>
              ) : (
                <>
                  <Camera className="h-5 w-5 mr-3" />
                  {isKannada ? "ಸಂಗ್ರಹಣೆ ಪೂರ್ಣಗೊಂಡಿದೆ" : "Collection Complete"}
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Progress Card */}
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-800 flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-600" />
              {isKannada ? "ಇಂದಿನ ಪ್ರಗತಿ" : "Today's Progress"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <Progress value={todaysProgress} className="h-4" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-white mix-blend-difference">
                    {todaysProgress}%
                  </span>
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{isKannada ? "ಪೂರ್ಣಗೊಂಡಿದೆ" : "Completed"}</span>
                <span className="text-gray-600">{collectionsToday}/50 {isKannada ? "ಮನೆಗಳು" : "Houses"}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-800 flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-600" />
              {isKannada ? "ಸಾಧನೆಗಳು" : "Achievements"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-3">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className={`text-center p-3 rounded-lg border-2 transition-all duration-300 ${
                    achievement.earned 
                      ? 'bg-yellow-50 border-yellow-200 shadow-sm' 
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="text-2xl mb-1">{achievement.icon}</div>
                  <div className={`text-xs ${achievement.earned ? 'text-yellow-800' : 'text-gray-500'}`}>
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-800 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-purple-600" />
              {isKannada ? "ಕಾರ್ಯಕ್ಷಮತೆ" : "Performance"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">94%</div>
                <div className="text-gray-600 text-sm">{isKannada ? "ದಕ್ಷತೆ" : "Efficiency"}</div>
                <div className="text-2xl mt-1">📈</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">4.8</div>
                <div className="text-gray-600 text-sm">{isKannada ? "ರೇಟಿಂಗ್" : "Rating"}</div>
                <div className="text-2xl mt-1">⭐</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Today's Route */}
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-800 flex items-center gap-2">
              <Route className="h-5 w-5 text-indigo-600" />
              {isKannada ? "ಇಂದಿನ ಮಾರ್ಗ" : "Today's Route"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Home className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">Sector A - Block 1</span>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">Completed</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Home className="h-5 w-5 text-yellow-600" />
                  <span className="text-sm font-medium">Sector A - Block 2</span>
                </div>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">In Progress</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Home className="h-5 w-5 text-gray-600" />
                  <span className="text-sm font-medium">Sector A - Block 3</span>
                </div>
                <Badge variant="secondary" className="bg-gray-100 text-gray-600">Pending</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Language Toggle */}
        <div className="flex justify-center">
          <Button
            onClick={toggleLanguage}
            variant="outline"
            className="bg-white border-blue-300 text-blue-600 hover:bg-blue-50"
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
              {isKannada ? "ಆಫ್‌ಲೈನ್ ಮೋಡ್ - ಡೇಟಾ ಸಿಂಕ್ ಆಗುತ್ತದೆ" : "Offline Mode - Data will sync when online"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkerApp;
