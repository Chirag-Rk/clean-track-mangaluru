
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WorkerApp from "@/components/WorkerApp";
import CitizenPortal from "@/components/CitizenPortal";
import AdminDashboard from "@/components/AdminDashboard";
import { Sparkles, Users, Shield, Zap } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-300/20 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-pink-300/15 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-purple-300/20 rounded-full blur-lg animate-bounce delay-500"></div>
      </div>
      
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="text-8xl animate-bounce">🧹</div>
            <Sparkles className="h-12 w-12 text-yellow-300 animate-pulse" />
          </div>
          <h1 className="text-6xl font-extrabold text-white mb-6 tracking-tight">
            SwachhTrack<span className="text-yellow-300">+</span>
          </h1>
          <p className="text-2xl text-white/90 mb-4 font-medium">
            🌱 Smart City, Clean Future
          </p>
          <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 inline-block">
            <p className="text-white/90 text-lg">
              ನಮ್ಮ ನಗರವನ್ನು ಶುಚಿಯಾಗಿ ಇಡುವುದು • Smart Waste Management • स्मार्ट स्वच्छता
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <Card className="group bg-white/15 backdrop-blur-lg border-white/20 hover:bg-white/25 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25">
            <CardContent className="p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">👷‍♂️</div>
                <Users className="h-8 w-8 text-green-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Worker Hub</h3>
                <p className="text-white/80 mb-6 text-lg">Real-time tracking & smart collection logs</p>
                <Button 
                  onClick={() => setCurrentView("worker")}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Zap className="h-5 w-5 mr-2" />
                  Launch Worker App
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="group bg-white/15 backdrop-blur-lg border-white/20 hover:bg-white/25 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
            <CardContent className="p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">🏠</div>
                <Users className="h-8 w-8 text-blue-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Citizen Portal</h3>
                <p className="text-white/80 mb-6 text-lg">Smart payments & instant service requests</p>
                <Button 
                  onClick={() => setCurrentView("citizen")}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Sparkles className="h-5 w-5 mr-2" />
                  Open Citizen Portal
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="group bg-white/15 backdrop-blur-lg border-white/20 hover:bg-white/25 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            <CardContent className="p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">📊</div>
                <Shield className="h-8 w-8 text-purple-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Admin Control</h3>
                <p className="text-white/80 mb-6 text-lg">Advanced analytics & city management</p>
                <Button 
                  onClick={() => setCurrentView("admin")}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Shield className="h-5 w-5 mr-2" />
                  Access Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6">
            <div className="text-3xl font-bold text-white mb-2">98%</div>
            <div className="text-white/80 text-sm">Collection Rate</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6">
            <div className="text-3xl font-bold text-white mb-2">2.5K</div>
            <div className="text-white/80 text-sm">Happy Citizens</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6">
            <div className="text-3xl font-bold text-white mb-2">150+</div>
            <div className="text-white/80 text-sm">Active Workers</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6">
            <div className="text-3xl font-bold text-white mb-2">45</div>
            <div className="text-white/80 text-sm">City Wards</div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center">
          <div className="flex justify-center gap-6 text-5xl mb-6">
            <span className="hover:scale-125 transition-transform cursor-pointer">🧹</span>
            <span className="hover:scale-125 transition-transform cursor-pointer">🗑️</span>
            <span className="hover:scale-125 transition-transform cursor-pointer">📱</span>
            <span className="hover:scale-125 transition-transform cursor-pointer">🏆</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-full px-8 py-4 inline-block mb-6">
            <p className="text-white/90 font-semibold">
              Built for Mangaluru MCC Hackathon 2024
            </p>
          </div>
          <div className="flex justify-center gap-6">
            <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/20 text-lg px-6 py-3">
              English
            </Button>
            <span className="text-white/60 text-2xl">|</span>
            <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/20 text-lg px-6 py-3">
              ಕನ್ನಡ
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
