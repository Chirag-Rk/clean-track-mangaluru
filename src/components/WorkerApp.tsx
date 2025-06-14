
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
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
  Plus,
  DollarSign,
  Map
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SalaryManagement from "./SalaryManagement";
import RouteMap from "./RouteMap";

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
  const [activeTab, setActiveTab] = useState("dashboard");
  const [emergencyDialogOpen, setEmergencyDialogOpen] = useState(false);
  const [messagesDialogOpen, setMessagesDialogOpen] = useState(false);
  const [helpDialogOpen, setHelpDialogOpen] = useState(false);
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

  const handleRouteGuide = () => {
    toast({
      title: isKannada ? "ಮಾರ್ಗ ಗೈಡ್" : "Route Guide",
      description: isKannada ? "ಮುಂದಿನ ಸ್ಥಳಕ್ಕೆ ಮಾರ್ಗದರ್ಶನ ಪ್ರಾರಂಭವಾಗಿದೆ" : "Starting navigation to next location",
    });
    // Simulate opening route guide
    setTimeout(() => {
      setActiveTab("map");
    }, 1500);
  };

  const handleEmergency = () => {
    setEmergencyDialogOpen(true);
  };

  const handleContactHelp = () => {
    setHelpDialogOpen(true);
  };

  const handleMessages = () => {
    setMessagesDialogOpen(true);
  };

  const handleEmergencyCall = (type: string) => {
    toast({
      title: isKannada ? "ತುರ್ತು ಕಾಲ್" : "Emergency Call",
      description: isKannada ? `${type} ಗೆ ಸಂಪರ್ಕಿಸುತ್ತಿದೆ...` : `Connecting to ${type}...`,
    });
    setEmergencyDialogOpen(false);
    // Simulate emergency call
    setTimeout(() => {
      window.open(`tel:${type === 'Police' ? '100' : type === 'Medical' ? '108' : '101'}`, "_self");
    }, 1000);
  };

  const quickActions = [
    { icon: Navigation, label: isKannada ? "ಮಾರ್ಗ ಗೈಡ್" : "Route Guide", action: handleRouteGuide },
    { icon: AlertCircle, label: isKannada ? "ತುರ್ತು" : "Emergency", action: handleEmergency },
    { icon: Phone, label: isKannada ? "ಸಂಪರ್ಕ ಸಹಾಯ" : "Contact Help", action: handleContactHelp },
    { icon: MessageSquare, label: isKannada ? "ಸಂದೇಶಗಳು" : "Messages", action: handleMessages },
  ];

  const achievements = [
    { icon: "🏆", label: isKannada ? "ದಿನದ ಚಾಂಪಿಯನ್" : "Daily Champion", earned: true },
    { icon: "⚡", label: isKannada ? "ವೇಗದ ಸಂಗ್ರಾಹಕ" : "Speed Collector", earned: true },
    { icon: "🎯", label: isKannada ? "ಗುರಿ ಸಾಧಕ" : "Target Achiever", earned: false },
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
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
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
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

        {/* Navigation Tabs */}
        <div className="flex justify-center mt-4">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <Button
              onClick={() => setActiveTab("dashboard")}
              variant={activeTab === "dashboard" ? "default" : "ghost"}
              size="sm"
              className="flex items-center gap-2"
            >
              <Home className="h-4 w-4" />
              {isKannada ? "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್" : "Dashboard"}
            </Button>
            <Button
              onClick={() => setActiveTab("salary")}
              variant={activeTab === "salary" ? "default" : "ghost"}
              size="sm"
              className="flex items-center gap-2"
            >
              <DollarSign className="h-4 w-4" />
              {isKannada ? "ಸಂಬಳ" : "Salary"}
            </Button>
            <Button
              onClick={() => setActiveTab("map")}
              variant={activeTab === "map" ? "default" : "ghost"}
              size="sm"
              className="flex items-center gap-2"
            >
              <Map className="h-4 w-4" />
              {isKannada ? "ನಕ್ಷೆ" : "Map"}
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4">
        {activeTab === "dashboard" && renderDashboard()}
        {activeTab === "salary" && <SalaryManagement isKannada={isKannada} />}
        {activeTab === "map" && <RouteMap isKannada={isKannada} />}

        {/* Language Toggle */}
        <div className="flex justify-center mt-6">
          <Button
            onClick={toggleLanguage}
            variant="outline"
            className="bg-white border-blue-300 text-blue-600 hover:bg-blue-50"
          >
            {isKannada ? "English" : "ಕನ್ನಡ"}
          </Button>
        </div>
      </div>

      {/* Emergency Dialog */}
      <Dialog open={emergencyDialogOpen} onOpenChange={setEmergencyDialogOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-600">
              <AlertCircle className="h-5 w-5" />
              {isKannada ? "ತುರ್ತು ಸೇವೆಗಳು" : "Emergency Services"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <Button 
              onClick={() => handleEmergencyCall('Police')}
              className="w-full bg-red-600 hover:bg-red-700 text-white"
            >
              <Phone className="h-4 w-4 mr-2" />
              {isKannada ? "ಪೊಲೀಸ್ - 100" : "Police - 100"}
            </Button>
            <Button 
              onClick={() => handleEmergencyCall('Medical')}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              <Phone className="h-4 w-4 mr-2" />
              {isKannada ? "ವೈದ್ಯಕೀಯ - 108" : "Medical - 108"}
            </Button>
            <Button 
              onClick={() => handleEmergencyCall('Fire')}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white"
            >
              <Phone className="h-4 w-4 mr-2" />
              {isKannada ? "ಅಗ್ನಿಶಾಮಕ - 101" : "Fire - 101"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Messages Dialog */}
      <Dialog open={messagesDialogOpen} onOpenChange={setMessagesDialogOpen}>
        <DialogContent className="max-w-md max-h-96">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              {isKannada ? "ಸಂದೇಶಗಳು" : "Messages"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="font-medium text-blue-800">
                {isKannada ? "ನಿರ್ವಾಹಕರಿಂದ" : "From Supervisor"}
              </div>
              <p className="text-sm text-blue-700 mt-1">
                {isKannada ? "ಇಂದು ಉತ್ತಮ ಕೆಲಸ! ಗುರಿ ತಲುಪುವ ಹಾದಿಯಲ್ಲಿದ್ದೀರಿ" : "Great work today! You're on track to meet your target"}
              </p>
              <div className="text-xs text-blue-600 mt-2">10:30 AM</div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="font-medium text-green-800">
                {isKannada ? "ವ್ಯವಸ್ಥೆಯ ಅಧಿಸೂಚನೆ" : "System Notification"}
              </div>
              <p className="text-sm text-green-700 mt-1">
                {isKannada ? "ಬೋನಸ್ ಅರ್ಹತೆ ಪೂರೈಸಲಾಗಿದೆ" : "Bonus eligibility achieved"}
              </p>
              <div className="text-xs text-green-600 mt-2">9:15 AM</div>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg">
              <div className="font-medium text-yellow-800">
                {isKannada ? "ಮಾರ್ಗ ನವೀಕರಣ" : "Route Update"}
              </div>
              <p className="text-sm text-yellow-700 mt-1">
                {isKannada ? "ಸೆಕ್ಟರ್ B ನಲ್ಲಿ ಹೊಸ ಮಾರ್ಗ ಲಭ್ಯ" : "New route available in Sector B"}
              </p>
              <div className="text-xs text-yellow-600 mt-2">8:45 AM</div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Help Dialog */}
      <Dialog open={helpDialogOpen} onOpenChange={setHelpDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              {isKannada ? "ಸಂಪರ್ಕ ಸಹಾಯ" : "Contact Help"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Button 
              onClick={() => {
                toast({
                  title: isKannada ? "ಸೂಪರ್‌ವೈಸರ್ ಕಾಲ್" : "Supervisor Call",
                  description: isKannada ? "ಸೂಪರ್‌ವೈಸರ್‌ಗೆ ಸಂಪರ್ಕಿಸುತ್ತಿದೆ..." : "Connecting to supervisor...",
                });
                setHelpDialogOpen(false);
                setTimeout(() => window.open("tel:+919876543210", "_self"), 1000);
              }}
              className="w-full justify-start"
              variant="outline"
            >
              <Phone className="h-4 w-4 mr-2" />
              {isKannada ? "ಸೂಪರ್‌ವೈಸರ್" : "Call Supervisor"}
            </Button>
            <Button 
              onClick={() => {
                toast({
                  title: isKannada ? "ತಾಂತ್ರಿಕ ಸಹಾಯ" : "Technical Support",
                  description: isKannada ? "ತಾಂತ್ರಿಕ ತಂಡಕ್ಕೆ ಸಂಪರ್ಕಿಸುತ್ತಿದೆ..." : "Connecting to tech support...",
                });
                setHelpDialogOpen(false);
                setTimeout(() => window.open("tel:+918001234567", "_self"), 1000);
              }}
              className="w-full justify-start"
              variant="outline"
            >
              <Phone className="h-4 w-4 mr-2" />
              {isKannada ? "ತಾಂತ್ರಿಕ ಸಹಾಯ" : "Tech Support"}
            </Button>
            <Button 
              onClick={() => {
                toast({
                  title: isKannada ? "ಆಡಳಿತ ಕಚೇರಿ" : "Admin Office",
                  description: isKannada ? "ಆಡಳಿತ ಕಚೇರಿಗೆ ಸಂಪರ್ಕಿಸುತ್ತಿದೆ..." : "Connecting to admin office...",
                });
                setHelpDialogOpen(false);
                setTimeout(() => window.open("tel:+918001112222", "_self"), 1000);
              }}
              className="w-full justify-start"
              variant="outline"
            >
              <Phone className="h-4 w-4 mr-2" />
              {isKannada ? "ಆಡಳಿತ ಕಚೇರಿ" : "Admin Office"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

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
