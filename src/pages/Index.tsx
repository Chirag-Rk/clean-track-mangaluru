
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import WorkerApp from "@/components/WorkerApp";
import CitizenPortal from "@/components/CitizenPortal";
import AdminDashboard from "@/components/AdminDashboard";

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
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-green-400">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="text-8xl mb-4">🧹</div>
          <h1 className="text-5xl font-bold text-white mb-4">
            SwachhTrack+
          </h1>
          <p className="text-xl text-white/90 mb-2">
            🏠 Keeping Our City Clean Together
          </p>
          <p className="text-lg text-white/80">
            ನಮ್ಮ ನಗರವನ್ನು ಶುಚಿಯಾಗಿ ಇಡುವುದು • Village Cleanliness • गाँव की सफाई
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">👷‍♂️</div>
              <h3 className="text-2xl font-bold text-white mb-3">Worker App</h3>
              <p className="text-white/80 mb-6">Log collections and track progress</p>
              <Button 
                onClick={() => setCurrentView("worker")}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3"
              >
                Open Worker App
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">👤</div>
              <h3 className="text-2xl font-bold text-white mb-3">Citizen Portal</h3>
              <p className="text-white/80 mb-6">Request pickup and track rewards</p>
              <Button 
                onClick={() => setCurrentView("citizen")}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3"
              >
                Open Citizen Portal
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">👨‍💼</div>
              <h3 className="text-2xl font-bold text-white mb-3">Admin Dashboard</h3>
              <p className="text-white/80 mb-6">Monitor and manage operations</p>
              <Button 
                onClick={() => setCurrentView("admin")}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3"
              >
                Open Admin Panel
              </Button>
            </CardContent>
          </Card>
        </div>

        <footer className="mt-16 text-center">
          <div className="flex justify-center gap-4 text-4xl mb-4">
            <span>🧹</span>
            <span>🗑️</span>
            <span>📍</span>
            <span>🏠</span>
          </div>
          <p className="text-white/70">
            Built for Mangaluru MCC Hackathon
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Button variant="ghost" className="text-white/80 hover:text-white">
              EN
            </Button>
            <span className="text-white/60">|</span>
            <Button variant="ghost" className="text-white/80 hover:text-white">
              ಕನ್ನಡ
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
