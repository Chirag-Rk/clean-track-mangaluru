
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
  X,
  Bell,
  Search,
  Settings,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  Activity,
  DollarSign,
  Truck,
  AlertTriangle
} from "lucide-react";

interface AdminDashboardProps {
  onBack: () => void;
}

const AdminDashboard = ({ onBack }: AdminDashboardProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState<"dashboard" | "wards" | "workers" | "complaints" | "reports">("dashboard");

  const workers = [
    { id: 1, name: "Rajesh Kumar", status: "active", efficiency: 92, area: "Ward 1", lastSeen: "2 mins ago" },
    { id: 2, name: "Priya Sharma", status: "active", efficiency: 88, area: "Ward 2", lastSeen: "5 mins ago" },
    { id: 3, name: "Mohammed Ali", status: "missed", efficiency: 76, area: "Ward 3", lastSeen: "2 hours ago" },
    { id: 4, name: "Lakshmi Devi", status: "active", efficiency: 94, area: "Ward 4", lastSeen: "1 min ago" },
  ];

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "wards", label: "Wards", icon: MapPin },
    { id: "workers", label: "Workers", icon: Users },
    { id: "complaints", label: "Complaints", icon: FileText },
    { id: "reports", label: "Reports", icon: BarChart3 },
  ];

  const renderHeader = () => (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-40">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden hover:bg-gray-100"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">S+</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">SwachhTrack+</h1>
              <p className="text-sm text-gray-500">Admin Control Center</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
            />
          </div>
          
          <Button variant="ghost" size="sm" className="relative hover:bg-gray-100">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="hover:bg-gray-100">
            <Settings className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center gap-2 pl-4 border-l border-gray-200">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">A</span>
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-900">Admin User</p>
              <p className="text-xs text-gray-500">administrator</p>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
          
          <Button
            onClick={onBack}
            variant="outline"
            size="sm"
            className="border-gray-200 hover:bg-gray-50"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </div>
      </div>
    </header>
  );

  const renderSidebar = () => (
    <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white/98 backdrop-blur-xl border-r border-gray-200/50 shadow-xl transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">S+</span>
            </div>
            <span className="font-semibold text-gray-800">Control Panel</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden hover:bg-gray-100"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <nav className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentSection === item.id;
            return (
              <Button
                key={item.id}
                variant={isActive ? "default" : "ghost"}
                className={`w-full justify-start transition-all duration-200 ${
                  isActive 
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg" 
                    : "hover:bg-gray-100 text-gray-700"
                }`}
                onClick={() => {
                  setCurrentSection(item.id as any);
                  setSidebarOpen(false);
                }}
              >
                <Icon className="h-4 w-4 mr-3" />
                {item.label}
              </Button>
            );
          })}
        </nav>

        <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">System Health</h3>
            <p className="text-sm text-gray-600 mb-3">All systems operational</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full" style={{ width: '92%' }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">92% efficiency</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-emerald-500 to-green-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-100 text-sm font-medium">Collection Rate</p>
                <p className="text-3xl font-bold">87%</p>
                <div className="flex items-center gap-1 mt-2">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">+5% from yesterday</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Truck className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Active Workers</p>
                <p className="text-3xl font-bold">24/28</p>
                <div className="flex items-center gap-1 mt-2">
                  <Activity className="h-4 w-4" />
                  <span className="text-sm">4 workers offline</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">Revenue Today</p>
                <p className="text-3xl font-bold">₹12.4K</p>
                <div className="flex items-center gap-1 mt-2">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">+8% from yesterday</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <DollarSign className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-red-500 to-orange-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100 text-sm font-medium">Pending Issues</p>
                <p className="text-3xl font-bold">12</p>
                <div className="flex items-center gap-1 mt-2">
                  <TrendingDown className="h-4 w-4" />
                  <span className="text-sm">8 resolved today</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <AlertTriangle className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Live Map */}
        <Card className="lg:col-span-2 bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-lg">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="flex items-center gap-2 text-gray-800">
              <MapPin className="h-5 w-5 text-blue-500" />
              Live Worker Tracking
              <Badge variant="secondary" className="ml-auto bg-green-100 text-green-700">
                Real-time
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-80 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl border border-blue-200 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10"></div>
              <div className="text-center relative z-10">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-700 font-medium mb-2">Interactive Map Integration</p>
                <p className="text-sm text-gray-500">Real-time worker locations with GPS tracking</p>
                <Button className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  <MapPin className="h-4 w-4 mr-2" />
                  View Full Map
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-lg">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-gray-800">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <Button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white">
              <Download className="h-4 w-4 mr-2" />
              Export Daily Report
            </Button>
            <Button variant="outline" className="w-full border-gray-200 hover:bg-gray-50">
              <Printer className="h-4 w-4 mr-2" />
              Print Summary
            </Button>
            <Button variant="outline" className="w-full border-gray-200 hover:bg-gray-50">
              <Bell className="h-4 w-4 mr-2" />
              Send Notifications
            </Button>
            <Button variant="outline" className="w-full border-gray-200 hover:bg-gray-50">
              <Settings className="h-4 w-4 mr-2" />
              System Settings
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Worker Performance */}
      <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-lg">
        <CardHeader className="border-b border-gray-100">
          <div className="flex flex-row items-center justify-between">
            <CardTitle className="text-gray-800">Top Performing Workers</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-gray-200">
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
              <Button variant="outline" size="sm" className="border-gray-200">
                <Printer className="h-4 w-4 mr-2" />
                Print Report
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {workers.map((worker, index) => (
              <div key={worker.id} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-400">#{index + 1}</span>
                    <div className={`w-3 h-3 rounded-full ${worker.status === "active" ? "bg-green-500" : "bg-red-500"}`}></div>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{worker.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{worker.name}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray-600">{worker.area}</p>
                      <span className="text-gray-400">•</span>
                      <p className="text-sm text-gray-500">{worker.lastSeen}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant={worker.status === "active" ? "default" : "destructive"} className="px-3 py-1">
                    {worker.status === "active" ? "🟢 On Duty" : "🔴 Offline"}
                  </Badge>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-800">{worker.efficiency}%</p>
                    <p className="text-sm text-gray-500">Efficiency</p>
                  </div>
                  <div className="w-16">
                    <Progress value={worker.efficiency} className="h-2" />
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {renderHeader()}
      {renderSidebar()}
      
      <div className={`transition-all duration-300 ${sidebarOpen ? "lg:ml-64" : "lg:ml-64"}`}>
        <div className="p-6">
          {/* Content */}
          {currentSection === "dashboard" && renderDashboard()}
          {currentSection === "workers" && (
            <div className="text-center py-20">
              <div className="text-8xl mb-6">👷‍♂️</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Worker Management</h2>
              <p className="text-gray-600 mb-8">Comprehensive worker management interface</p>
              <Card className="max-w-md mx-auto bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <p className="text-gray-500">This section will include detailed worker profiles, scheduling, and performance analytics.</p>
                </CardContent>
              </Card>
            </div>
          )}
          {currentSection === "wards" && (
            <div className="text-center py-20">
              <div className="text-8xl mb-6">🏘️</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Ward Management</h2>
              <p className="text-gray-600 mb-8">Manage ward boundaries and assignments</p>
              <Card className="max-w-md mx-auto bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <p className="text-gray-500">Ward boundaries, zone assignments, and coverage maps would be displayed here.</p>
                </CardContent>
              </Card>
            </div>
          )}
          {currentSection === "complaints" && (
            <div className="text-center py-20">
              <div className="text-8xl mb-6">📝</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Complaint Management</h2>
              <p className="text-gray-600 mb-8">Track and resolve citizen complaints</p>
              <Card className="max-w-md mx-auto bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <p className="text-gray-500">Complaint tracking, status updates, and resolution workflows would be managed here.</p>
                </CardContent>
              </Card>
            </div>
          )}
          {currentSection === "reports" && (
            <div className="text-center py-20">
              <div className="text-8xl mb-6">📊</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Reports & Analytics</h2>
              <p className="text-gray-600 mb-8">Comprehensive analytics and reporting</p>
              <Card className="max-w-md mx-auto bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <p className="text-gray-500">Detailed charts, graphs, and exportable reports for data-driven decisions.</p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-20 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AdminDashboard;
