import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WorkerApp from "@/components/WorkerApp";
import CitizenPortal from "@/components/CitizenPortal";
import AdminDashboard from "@/components/AdminDashboard";
import { Heart, Home, Users, Shield, Phone, HelpCircle, LogIn, Sun, Truck, MapPin, Award, Bell, Search, User, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [currentView, setCurrentView] = useState<"home" | "worker" | "citizen" | "admin">("home");
  const [isKannada, setIsKannada] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("home");
  const { toast } = useToast();

  const toggleLanguage = () => setIsKannada(!isKannada);

  const handleNavigation = (section: string) => {
    setActiveNavItem(section);
    
    // Show toast notification for navigation
    const messages = {
      home: isKannada ? "ಮುಖ್ಯ ಪುಟಕ್ಕೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಲಾಗುತ್ತಿದೆ" : "Navigating to Home",
      services: isKannada ? "ಸೇವೆಗಳ ವಿಭಾಗಕ್ಕೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಲಾಗುತ್ತಿದೆ" : "Navigating to Services",
      tracking: isKannada ? "ಟ್ರ್ಯಾಕಿಂಗ್ ವಿಭಾಗಕ್ಕೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಲಾಗುತ್ತಿದೆ" : "Navigating to Tracking",
      workers: isKannada ? "ಕೆಲಸಗಾರರ ವಿಭಾಗಕ್ಕೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಲಾಗುತ್ತಿದೆ" : "Navigating to Workers",
      audio: isKannada ? "ಆಡಿಯೋ ಸಲಹೆಗಳ ವಿಭಾಗಕ್ಕೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಲಾಗುತ್ತಿದೆ" : "Navigating to Audio Tips",
      help: isKannada ? "ಸಹಾಯ ವಿಭಾಗಕ್ಕೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಲಾಗುತ್ತಿದೆ" : "Navigating to Help"
    };

    toast({
      title: messages[section as keyof typeof messages],
      description: isKannada ? "ಲೋಡ್ ಆಗುತ್ತಿದೆ..." : "Loading...",
    });

    // Simulate navigation delay
    setTimeout(() => {
      if (section === "workers") {
        setCurrentView("worker");
      } else if (section === "home") {
        setCurrentView("home");
      }
      // For other sections, we can scroll to relevant parts or show content
      else {
        // Scroll to relevant section or show relevant content
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 500);
  };

  const handleSearch = () => {
    toast({
      title: isKannada ? "ಹುಡುಕಾಟ" : "Search",
      description: isKannada ? "ಹುಡುಕಾಟ ಸೌಲಭ್ಯ ಶೀಘ್ರದಲ್ಲೇ ಲಭ್ಯವಾಗುತ್ತದೆ" : "Search functionality coming soon",
    });
  };

  const handleNotifications = () => {
    toast({
      title: isKannada ? "ಅಧಿಸೂಚನೆಗಳು" : "Notifications",
      description: isKannada ? "ಹೊಸ ಅಧಿಸೂಚನೆಗಳಿಲ್ಲ" : "No new notifications",
    });
  };

  const handleEmergencyCall = () => {
    toast({
      title: isKannada ? "ತುರ್ತು ಕಾಲ್" : "Emergency Call",
      description: isKannada ? "ತುರ್ತು ಸೇವೆಗಳಿಗೆ ಸಂಪರ್ಕಿಸುತ್ತಿದೆ..." : "Connecting to emergency services...",
    });
    setTimeout(() => {
      window.open("tel:102", "_self");
    }, 1000);
  };

  const handleLogin = () => {
    toast({
      title: isKannada ? "ಲಾಗಿನ್" : "Login",
      description: isKannada ? "ಲಾಗಿನ್ ಪುಟಕ್ಕೆ ರೀಡೈರೆಕ್ಟ್ ಮಾಡಲಾಗುತ್ತಿದೆ" : "Redirecting to login page",
    });
  };

  if (currentView === "worker") {
    return <WorkerApp onBack={() => setCurrentView("home")} />;
  }

  if (currentView === "citizen") {
    return <CitizenPortal onBack={() => setCurrentView("home")} />;
  }

  if (currentView === "admin") {
    return <AdminDashboard onBack={() => setCurrentView("home")} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white fill-current" />
                </div>
                <span className="text-2xl font-bold text-gray-800">SwachhTrack+</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              <Button 
                variant="ghost" 
                className={`text-gray-600 hover:text-blue-600 hover:bg-blue-50 gap-2 font-medium ${
                  activeNavItem === 'home' ? 'bg-blue-50 text-blue-600' : ''
                }`}
                onClick={() => handleNavigation('home')}
              >
                <Home className="h-4 w-4" />
                {isKannada ? "ಮನೆ" : "Home"}
              </Button>
              <Button 
                variant="ghost" 
                className={`text-gray-600 hover:text-blue-600 hover:bg-blue-50 gap-2 font-medium ${
                  activeNavItem === 'services' ? 'bg-blue-50 text-blue-600' : ''
                }`}
                onClick={() => handleNavigation('services')}
              >
                <Truck className="h-4 w-4" />
                {isKannada ? "ಸೇವೆಗಳು" : "Services"}
              </Button>
              <Button 
                variant="ghost" 
                className={`text-gray-600 hover:text-blue-600 hover:bg-blue-50 gap-2 font-medium ${
                  activeNavItem === 'tracking' ? 'bg-blue-50 text-blue-600' : ''
                }`}
                onClick={() => handleNavigation('tracking')}
              >
                <MapPin className="h-4 w-4" />
                {isKannada ? "ಟ್ರ್ಯಾಕಿಂಗ್" : "Tracking"}
              </Button>
              <Button 
                variant="ghost" 
                className={`text-gray-600 hover:text-blue-600 hover:bg-blue-50 gap-2 font-medium ${
                  activeNavItem === 'workers' ? 'bg-blue-50 text-blue-600' : ''
                }`}
                onClick={() => handleNavigation('workers')}
              >
                <Users className="h-4 w-4" />
                {isKannada ? "ಕೆಲಸಗಾರರು" : "Workers"}
              </Button>
              <Button 
                variant="ghost" 
                className={`text-gray-600 hover:text-blue-600 hover:bg-blue-50 gap-2 font-medium ${
                  activeNavItem === 'audio' ? 'bg-blue-50 text-blue-600' : ''
                }`}
                onClick={() => handleNavigation('audio')}
              >
                <Sun className="h-4 w-4" />
                {isKannada ? "ಆಡಿಯೋ ಸಲಹೆಗಳು" : "Audio Tips"}
              </Button>
              <Button 
                variant="ghost" 
                className={`text-gray-600 hover:text-blue-600 hover:bg-blue-50 gap-2 font-medium ${
                  activeNavItem === 'help' ? 'bg-blue-50 text-blue-600' : ''
                }`}
                onClick={() => handleNavigation('help')}
              >
                <HelpCircle className="h-4 w-4" />
                {isKannada ? "ಸಹಾಯ" : "Help"}
              </Button>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                onClick={handleSearch}
              >
                <Search className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 relative"
                onClick={handleNotifications}
              >
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                onClick={handleEmergencyCall}
              >
                <Phone className="h-4 w-4 mr-2" />
                {isKannada ? "ತುರ್ತು: 102" : "Emergency: 102"}
              </Button>
              <Button 
                onClick={toggleLanguage}
                variant="outline" 
                size="sm" 
                className="border-blue-300 text-blue-600 hover:bg-blue-50 gap-2"
              >
                <Globe className="h-4 w-4" />
                {isKannada ? "English" : "ಕನ್ನಡ"}
              </Button>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white gap-2 shadow-md"
                onClick={handleLogin}
              >
                <User className="h-4 w-4" />
                {isKannada ? "ಲಾಗಿನ್" : "Login"}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div id="home" className="text-center mb-16">
          <div className="flex justify-center items-center gap-6 mb-8">
            <div className="bg-blue-100 rounded-full p-4">
              <div className="text-5xl">🏠</div>
            </div>
            <h1 className="text-6xl font-bold text-gray-800 tracking-tight">
              SwachhTrack<span className="text-blue-600">+</span>
            </h1>
            <div className="bg-blue-100 rounded-full p-4">
              <div className="text-5xl">🌱</div>
            </div>
          </div>

          {/* Multilingual Tagline with Green Background */}
          <div className="bg-[#2ECC71] rounded-full px-8 py-4 inline-block mb-8 shadow-md">
            <p className="text-white text-xl font-medium">
              ನಮ್ಮ ನಗರವನ್ನು ಶುಚಿಯಾಗಿ ಇಡುವುದು • Smart City Cleanliness • स्मार्ट स्वच्छता सेवा
            </p>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-gray-600 text-lg leading-relaxed flex items-center justify-center gap-2">
              <Truck className="h-5 w-5 text-blue-600" />
              {isKannada 
                ? "ತಂತ್ರಜ್ಞಾನ, ಸ್ಥಳೀಯ ಕೆಲಸಗಾರರು ಮತ್ತು ಬಹು ಭಾಷೆಗಳಲ್ಲಿ ಪ್ರವೇಶಿಸಬಹುದಾದ ನೈರ್ಮಲ್ಯ ಸೇವೆಗಳ ಮೂಲಕ ನಗರ ಸಮುದಾಯಗಳನ್ನು ಸ್ಮಾರ್ಟ್ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆಯೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುವುದು।"
                : "Connecting urban communities with smart waste management through technology, local workers, and accessible sanitation services in multiple languages."
              }
              <Award className="h-5 w-5 text-blue-600" />
            </p>
          </div>

          {/* Main Action Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <Card className="bg-white border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">👷‍♂️</div>
                  <Truck className="h-8 w-8 text-blue-600" />
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {isKannada ? "ಕೆಲಸಗಾರ ಹಬ್" : "Worker Hub"}
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  {isKannada ? "ನೈಜ ಸಮಯದ ಸಂಗ್ರಹಣೆ ಟ್ರ್ಯಾಕಿಂಗ್ ಮತ್ತು ಮಾರ್ಗ ನಿರ್ವಹಣೆ" : "Real-time collection tracking and route management"}
                </p>
                <Button 
                  onClick={() => setCurrentView("worker")}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 text-lg shadow-lg"
                >
                  {isKannada ? "ಕೆಲಸಗಾರ ಆ್ಯಪ್ ಪ್ರಾರಂಭಿಸಿ" : "Launch Worker App"}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">🏠</div>
                  <Users className="h-8 w-8 text-blue-600" />
                  <span className="text-2xl">💳</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {isKannada ? "ನಾಗರಿಕ ಪೋರ್ಟಲ್" : "Citizen Portal"}
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  {isKannada ? "ಸ್ಮಾರ್ಟ್ ಪಾವತಿಗಳು ಮತ್ತು ಸೇವಾ ವಿನಂತಿಗಳು" : "Smart payments and service requests"}
                </p>
                <Button 
                  onClick={() => setCurrentView("citizen")}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 text-lg shadow-lg"
                >
                  {isKannada ? "ಪೋರ್ಟಲ್ ತೆರೆಯಿರಿ" : "Open Portal"}
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">📊</div>
                  <Shield className="h-8 w-8 text-blue-600" />
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {isKannada ? "ಆಡಳಿತ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್" : "Admin Dashboard"}
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  {isKannada ? "ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ನಗರ ನಿರ್ವಹಣೆ" : "Analytics and city management"}
                </p>
                <Button 
                  onClick={() => setCurrentView("admin")}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 text-lg shadow-lg"
                >
                  {isKannada ? "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಪ್ರವೇಶ" : "Access Dashboard"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services Section */}
        <div id="services" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {isKannada ? "ನಮ್ಮ ಸೇವೆಗಳು" : "Our Services"}
            </h2>
            <p className="text-gray-600 text-lg">
              {isKannada ? "ನಾವು ಒದಗಿಸುವ ವಿವಿಧ ಸೇವೆಗಳು" : "Various services we provide"}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🚛</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {isKannada ? "ತ್ಯಾಜ್ಯ ಸಂಗ್ರಹಣೆ" : "Waste Collection"}
                </h3>
                <p className="text-gray-600">
                  {isKannada ? "ನಿಯಮಿತ ಮನೆ-ಮನೆ ತ್ಯಾಜ್ಯ ಸಂಗ್ರಹಣೆ" : "Regular door-to-door waste collection"}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">♻️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {isKannada ? "ಮರುಬಳಕೆ" : "Recycling"}
                </h3>
                <p className="text-gray-600">
                  {isKannada ? "ಪರಿಸರ ಸ್ನೇಹಿ ಮರುಬಳಕೆ ಪ್ರಕ್ರಿಯೆ" : "Eco-friendly recycling process"}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🧹</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {isKannada ? "ಸ್ವಚ್ಛತೆ ಸೇವೆ" : "Cleaning Service"}
                </h3>
                <p className="text-gray-600">
                  {isKannada ? "ಸಾರ್ವಜನಿಕ ಸ್ಥಳಗಳ ಸ್ವಚ್ಛತೆ" : "Public area cleaning"}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tracking Section */}
        <div id="tracking" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {isKannada ? "ಟ್ರ್ಯಾಕಿಂಗ್ ಸಿಸ್ಟಮ್" : "Tracking System"}
            </h2>
            <p className="text-gray-600 text-lg">
              {isKannada ? "ನೈಜ ಸಮಯದ ಟ್ರ್ಯಾಕಿಂಗ್ ಮತ್ತು ಮಾನಿಟರಿಂಗ್" : "Real-time tracking and monitoring"}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-6xl mb-4">📍</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {isKannada ? "ಲೈವ್ ಟ್ರ್ಯಾಕಿಂಗ್" : "Live Tracking"}
                </h3>
                <p className="text-gray-600 mb-4">
                  {isKannada ? "ತ್ಯಾಜ್ಯ ಸಂಗ್ರಹಾ ವಾಹನಗಳನ್ನು ನೈಜ ಸಮಯದಲ್ಲಿ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ" : "Track waste collection vehicles in real-time"}
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  {isKannada ? "ಈಗ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ" : "Track Now"}
                </Button>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">847</div>
                  <div className="text-gray-600">{isKannada ? "ಇಂದು ಸಂಗ್ರಹಿತ ಮನೆಗಳು" : "Houses Collected Today"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Audio Tips Section */}
        <div id="audio" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {isKannada ? "ಆಡಿಯೋ ಸಲಹೆಗಳು" : "Audio Tips"}
            </h2>
            <p className="text-gray-600 text-lg">
              {isKannada ? "ಉಪಯೋಗಿ ಆಡಿಯೋ ಸಲಹೆಗಳು ಮತ್ತು ಮಾರ್ಗದರ್ಶನ" : "Helpful audio tips and guidance"}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center">
              <div className="text-6xl mb-4">🎧</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {isKannada ? "ದೈನಂದಿನ ಸಲಹೆಗಳು" : "Daily Tips"}
              </h3>
              <p className="text-gray-600 mb-6">
                {isKannada ? "ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ ಮತ್ತು ಸ್ವಚ್ಛತೆಯ ಬಗ್ಗೆ ಆಡಿಯೋ ಸಲಹೆಗಳನ್ನು ಕೇಳಿ" : "Listen to audio tips about waste management and cleanliness"}
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Sun className="h-4 w-4 mr-2" />
                {isKannada ? "ಆಡಿಯೋ ಪ್ಲೇ ಮಾಡಿ" : "Play Audio"}
              </Button>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div id="help" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {isKannada ? "ಸಹಾಯ ಮತ್ತು ಬೆಂಬಲ" : "Help & Support"}
            </h2>
            <p className="text-gray-600 text-lg">
              {isKannada ? "ನಿಮಗೆ ಯಾವುದೇ ಸಹಾಯ ಬೇಕಾದರೆ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ" : "Contact us if you need any assistance"}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {isKannada ? "ಫೋನ್ ಸಪೋರ್ಟ್" : "Phone Support"}
                </h3>
                <p className="text-gray-600 mb-4">
                  {isKannada ? "24/7 ಫೋನ್ ಸಹಾಯ" : "24/7 phone assistance"}
                </p>
                <Button variant="outline" size="sm">
                  {isKannada ? "ಕಾಲ್ ಮಾಡಿ" : "Call Now"}
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {isKannada ? "ಚಾಟ್ ಸಪೋರ್ಟ್" : "Chat Support"}
                </h3>
                <p className="text-gray-600 mb-4">
                  {isKannada ? "ತ್ವರಿತ ಚಾಟ್ ಸಹಾಯ" : "Quick chat assistance"}
                </p>
                <Button variant="outline" size="sm">
                  {isKannada ? "ಚಾಟ್ ಪ್ರಾರಂಭಿಸಿ" : "Start Chat"}
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {isKannada ? "ಇಮೇಲ್ ಸಪೋರ್ಟ್" : "Email Support"}
                </h3>
                <p className="text-gray-600 mb-4">
                  {isKannada ? "ವಿವರವಾದ ಇಮೇಲ್ ಸಹಾಯ" : "Detailed email assistance"}
                </p>
                <Button variant="outline" size="sm">
                  {isKannada ? "ಇಮೇಲ್ ಕಳುಹಿಸಿ" : "Send Email"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-16">
          <div className="bg-white rounded-3xl px-12 py-8 max-w-5xl mx-auto shadow-lg border border-gray-100">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-3">
              🏠 {isKannada ? "ಪ್ರತಿ ನೆರೆಹೊರೆಗೆ ಶುಚಿತನವನ್ನು ತರುವುದು" : "Bringing Cleanliness to Every Neighborhood"} 🏠
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed">
              {isKannada 
                ? "ಕಾರ್ಯನಿರತ ಬೀದಿಗಳಿಂದ ಶಾಂತ ಲೇನ್‌ಗಳವರೆಗೆ, ನಾವು ಸ್ಮಾರ್ಟ್ ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಸಮರ್ಪಿತ ಕೆಲಸಗಾರರ ಮೂಲಕ ಪ್ರತಿ ಸಮುದಾಯಕ್ಕೆ ಕಾಳಜಿ ಮತ್ತು ದಕ್ಷತೆಯೊಂದಿಗೆ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತೇವೆ।"
                : "From the busy streets to quiet lanes, we serve every community with care and efficiency through smart technology and dedicated workers."
              }
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
          <div className="text-center bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">{isKannada ? "ಸಂಗ್ರಹಣೆ ದರ" : "Collection Rate"}</div>
            <div className="text-2xl mt-2">✅</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="text-4xl font-bold text-blue-600 mb-2">2.5K</div>
            <div className="text-gray-600">{isKannada ? "ಸಂತೋಷದ ನಾಗರಿಕರು" : "Happy Citizens"}</div>
            <div className="text-2xl mt-2">😊</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
            <div className="text-gray-600">{isKannada ? "ಸಕ್ರಿಯ ಕೆಲಸಗಾರರು" : "Active Workers"}</div>
            <div className="text-2xl mt-2">👷‍♂️</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="text-4xl font-bold text-blue-600 mb-2">45</div>
            <div className="text-gray-600">{isKannada ? "ನಗರ ವಾರ್ಡ್‌ಗಳು" : "City Wards"}</div>
            <div className="text-2xl mt-2">🏘️</div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="text-center">
          <div className="flex justify-center gap-8 text-6xl mb-8">
            <span className="hover:scale-125 transition-transform cursor-pointer opacity-60 hover:opacity-100">🧹</span>
            <span className="hover:scale-125 transition-transform cursor-pointer opacity-60 hover:opacity-100">🗑️</span>
            <span className="hover:scale-125 transition-transform cursor-pointer opacity-60 hover:opacity-100">📱</span>
            <span className="hover:scale-125 transition-transform cursor-pointer opacity-60 hover:opacity-100">🏆</span>
            <span className="hover:scale-125 transition-transform cursor-pointer opacity-60 hover:opacity-100">🌱</span>
          </div>
          
          <div className="bg-white rounded-full px-8 py-4 inline-block mb-8 shadow-md border border-gray-100">
            <p className="text-gray-700 font-semibold text-lg">
              {isKannada ? "ಮಂಗಳೂರು MCC ಹ್ಯಾಕಥಾನ್ 2024 ಗಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ 🏆" : "Built for Mangaluru MCC Hackathon 2024 🏆"}
            </p>
          </div>
          
          <div className="flex justify-center gap-8 mb-8">
            <Button 
              variant="ghost" 
              className={`text-lg px-8 py-3 rounded-full font-semibold ${!isKannada ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'}`}
              onClick={() => setIsKannada(false)}
            >
              English
            </Button>
            <div className="flex items-center">
              <span className="text-gray-300 text-3xl">|</span>
            </div>
            <Button 
              variant="ghost" 
              className={`text-lg px-8 py-3 rounded-full font-semibold ${isKannada ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'}`}
              onClick={() => setIsKannada(true)}
            >
              ಕನ್ನಡ
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
