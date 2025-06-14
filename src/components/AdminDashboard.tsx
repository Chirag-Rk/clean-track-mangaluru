
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  Users, 
  MapPin, 
  FileText, 
  BarChart3, 
  Download,
  Printer,
  Menu,
  X
} from "lucide-react";

interface AdminDashboardProps {
  onBack: () => void;
}

const AdminDashboard = ({ onBack }: AdminDashboardProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState<"dashboard" | "wards" | "workers" | "complaints" | "reports">("dashboard");

  const workers = [
    { id: 1, name: "Rajesh Kumar", status: "active", efficiency: 92, area: "Ward 1" },
    { id: 2, name: "Priya Sharma", status: "active", efficiency: 88, area: "Ward 2" },
    { id: 3, name: "Mohammed Ali", status: "missed", efficiency: 76, area: "Ward 3" },
    { id: 4, name: "Lakshmi Devi", status: "active", efficiency: 94, area: "Ward 4" },
  ];

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "wards", label: "Wards", icon: MapPin },
    { id: "workers", label: "Workers", icon: Users },
    { id: "complaints", label: "Complaints", icon: FileText },
    { id: "reports", label: "Reports", icon: BarChart3 },
  ];

  const renderSidebar = () => (
    <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white/95 backdrop-blur-md border-r border-white/30 transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <nav className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={currentSection === item.id ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => {
                  setCurrentSection(item.id as any);
                  setSidebarOpen(false);
                }}
              >
                <Icon className="h-4 w-4 mr-2" />
                {item.label}
              </Button>
            );
          })}
        </nav>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white/90 backdrop-blur-md border-white/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Collection Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600 mb-2">87%</div>
            <Progress value={87} className="h-2" />
          </CardContent>
        </Card>
        
        <Card className="bg-white/90 backdrop-blur-md border-white/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Active Workers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">24/28</div>
            <p className="text-sm text-gray-500">4 workers offline</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white/90 backdrop-blur-md border-white/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Complaints</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">12</div>
            <p className="text-sm text-gray-500">8 resolved today</p>
          </CardContent>
        </Card>
      </div>

      {/* Live Map Placeholder */}
      <Card className="bg-white/90 backdrop-blur-md border-white/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Live Worker Tracking
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">🗺️</div>
              <p className="text-gray-600">Interactive map integration would go here</p>
              <p className="text-sm text-gray-500">Showing real-time worker locations</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Worker Performance */}
      <Card className="bg-white/90 backdrop-blur-md border-white/50">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Most Efficient Workers</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              CSV
            </Button>
            <Button variant="outline" size="sm">
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {workers.map((worker) => (
              <div key={worker.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div>
                    <p className="font-semibold">{worker.name}</p>
                    <p className="text-sm text-gray-600">{worker.area}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={worker.status === "active" ? "default" : "destructive"}>
                    {worker.status === "active" ? "🟢 On Duty" : "🔴 Missed"}
                  </Badge>
                  <div className="text-right">
                    <p className="font-semibold">{worker.efficiency}%</p>
                    <p className="text-sm text-gray-600">Efficiency</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      
      {renderSidebar()}
      
      <div className={`transition-all duration-300 ${sidebarOpen ? "lg:ml-64" : "lg:ml-64"}`}>
        <div className="relative z-10 p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
                className="text-white hover:bg-white/20 lg:hidden"
              >
                <Menu className="h-4 w-4" />
              </Button>
              
              <Button
                onClick={onBack}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-2">👨‍💼</div>
              <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
            </div>
            
            <div className="w-20"></div>
          </div>

          {/* Content */}
          {currentSection === "dashboard" && renderDashboard()}
          {currentSection === "workers" && (
            <div className="text-center text-white">
              <div className="text-6xl mb-4">👷‍♂️</div>
              <h2 className="text-2xl font-bold mb-4">Worker Management</h2>
              <p>Detailed worker management interface would go here</p>
            </div>
          )}
          {currentSection === "wards" && (
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🏘️</div>
              <h2 className="text-2xl font-bold mb-4">Ward Management</h2>
              <p>Ward boundaries and assignments would go here</p>
            </div>
          )}
          {currentSection === "complaints" && (
            <div className="text-center text-white">
              <div className="text-6xl mb-4">📝</div>
              <h2 className="text-2xl font-bold mb-4">Complaint Management</h2>
              <p>Complaint tracking and resolution interface would go here</p>
            </div>
          )}
          {currentSection === "reports" && (
            <div className="text-center text-white">
              <div className="text-6xl mb-4">📊</div>
              <h2 className="text-2xl font-bold mb-4">Reports & Analytics</h2>
              <p>Detailed reports and analytics dashboard would go here</p>
            </div>
          )}
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AdminDashboard;
