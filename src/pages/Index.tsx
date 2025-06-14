
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WorkerApp from "@/components/WorkerApp";
import CitizenPortal from "@/components/CitizenPortal";
import AdminDashboard from "@/components/AdminDashboard";
import { Heart, Home, Users, Shield, Phone, HelpCircle, LogIn, Sun, Truck, MapPin, Award } from "lucide-react";

const Index = () => {
  const [currentView, setCurrentView] = useState<"home" | "worker" | "citizen" | "admin">("home");

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
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-24 h-24 opacity-20">
          <div className="text-6xl">🏠</div>
        </div>
        <div className="absolute top-32 right-20 w-20 h-20 opacity-20">
          <div className="text-5xl">🧹</div>
        </div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 opacity-20">
          <div className="text-4xl">🗑️</div>
        </div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 opacity-20">
          <div className="text-5xl">🌱</div>
        </div>
        <div className="absolute top-1/2 left-16 w-12 h-12 opacity-15">
          <div className="text-3xl">♻️</div>
        </div>
        <div className="absolute top-1/3 right-16 w-14 h-14 opacity-15">
          <div className="text-4xl">🚛</div>
        </div>
      </div>

      {/* Navigation Header */}
      <nav className="relative z-20 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Heart className="h-8 w-8 text-green-600 fill-current" />
                <span className="text-2xl font-bold text-white">SwachhTrack+</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Button variant="ghost" className="text-white hover:bg-white/20 gap-2">
                <Home className="h-4 w-4" />
                Home
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/20 gap-2">
                <Truck className="h-4 w-4" />
                Services
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/20 gap-2">
                <MapPin className="h-4 w-4" />
                Tracking
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/20 gap-2">
                <Users className="h-4 w-4" />
                Workers
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/20 gap-2">
                <Sun className="h-4 w-4" />
                Audio Tips
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/20 gap-2">
                <HelpCircle className="h-4 w-4" />
                Help
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/20 gap-2">
                <Phone className="h-4 w-4" />
                Emergency: 102
              </Button>
            </div>

            {/* Login Button */}
            <Button className="bg-green-600 hover:bg-green-700 text-white gap-2">
              <LogIn className="h-4 w-4" />
              Login
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="bg-white/20 backdrop-blur-md rounded-full p-4">
              <div className="text-6xl">🏠</div>
            </div>
            <h1 className="text-6xl font-bold text-white tracking-tight">
              SwachhTrack<span className="text-yellow-300">+</span>
            </h1>
            <div className="bg-white/20 backdrop-blur-md rounded-full p-4">
              <div className="text-6xl">🌱</div>
            </div>
          </div>

          {/* Multilingual Tagline */}
          <div className="bg-white/15 backdrop-blur-md rounded-full px-8 py-4 inline-block mb-8">
            <p className="text-white/95 text-xl font-medium">
              ನಮ್ಮ ನಗರವನ್ನು ಶುಚಿಯಾಗಿ ಇಡುವುದು • Smart City Cleanliness • स्मार्ट स्वच्छता सेवा
            </p>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-white/90 text-lg leading-relaxed flex items-center justify-center gap-2">
              <Truck className="h-5 w-5" />
              Connecting urban communities with smart waste management through technology, local workers, and accessible sanitation services in multiple languages.
              <Award className="h-5 w-5" />
            </p>
          </div>

          {/* Main Action Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <Card className="bg-white/90 backdrop-blur-lg border-0 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">👷‍♂️</div>
                  <Truck className="h-8 w-8 text-green-600" />
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Worker Hub</h3>
                <p className="text-gray-600 mb-6 text-lg">Real-time collection tracking and route management</p>
                <Button 
                  onClick={() => setCurrentView("worker")}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 text-lg shadow-lg"
                >
                  Launch Worker App
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-lg border-0 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">🏠</div>
                  <Users className="h-8 w-8 text-blue-600" />
                  <span className="text-2xl">💳</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Citizen Portal</h3>
                <p className="text-gray-600 mb-6 text-lg">Smart payments and service requests</p>
                <Button 
                  onClick={() => setCurrentView("citizen")}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 text-lg shadow-lg"
                >
                  Open Portal
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-lg border-0 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">📊</div>
                  <Shield className="h-8 w-8 text-purple-600" />
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Admin Dashboard</h3>
                <p className="text-gray-600 mb-6 text-lg">Analytics and city management</p>
                <Button 
                  onClick={() => setCurrentView("admin")}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 text-lg shadow-lg"
                >
                  Access Dashboard
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-16">
          <div className="bg-white/15 backdrop-blur-md rounded-3xl px-12 py-8 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6 flex items-center justify-center gap-3">
              🏠 Bringing Cleanliness to Every Neighborhood 🏠
            </h2>
            <p className="text-white/90 text-xl leading-relaxed">
              From the busy streets to quiet lanes, we serve every community with care and efficiency through smart technology and dedicated workers.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
          <div className="text-center bg-white/15 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-white/80">Collection Rate</div>
            <div className="text-2xl mt-2">✅</div>
          </div>
          <div className="text-center bg-white/15 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2">2.5K</div>
            <div className="text-white/80">Happy Citizens</div>
            <div className="text-2xl mt-2">😊</div>
          </div>
          <div className="text-center bg-white/15 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2">150+</div>
            <div className="text-white/80">Active Workers</div>
            <div className="text-2xl mt-2">👷‍♂️</div>
          </div>
          <div className="text-center bg-white/15 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2">45</div>
            <div className="text-white/80">City Wards</div>
            <div className="text-2xl mt-2">🏘️</div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="text-center">
          <div className="flex justify-center gap-8 text-6xl mb-8">
            <span className="hover:scale-125 transition-transform cursor-pointer opacity-80 hover:opacity-100">🧹</span>
            <span className="hover:scale-125 transition-transform cursor-pointer opacity-80 hover:opacity-100">🗑️</span>
            <span className="hover:scale-125 transition-transform cursor-pointer opacity-80 hover:opacity-100">📱</span>
            <span className="hover:scale-125 transition-transform cursor-pointer opacity-80 hover:opacity-100">🏆</span>
            <span className="hover:scale-125 transition-transform cursor-pointer opacity-80 hover:opacity-100">🌱</span>
          </div>
          
          <div className="bg-white/15 backdrop-blur-md rounded-full px-8 py-4 inline-block mb-8">
            <p className="text-white/95 font-semibold text-lg">
              Built for Mangaluru MCC Hackathon 2024 🏆
            </p>
          </div>
          
          <div className="flex justify-center gap-8 mb-8">
            <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/20 text-lg px-8 py-3 rounded-full">
              English
            </Button>
            <div className="flex items-center">
              <span className="text-white/60 text-3xl">|</span>
            </div>
            <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/20 text-lg px-8 py-3 rounded-full">
              ಕನ್ನಡ
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
