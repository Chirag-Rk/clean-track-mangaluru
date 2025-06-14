import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
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
  AlertTriangle,
  Send,
  CheckCircle,
  XCircle,
  Clock,
  Filter,
  RefreshCw,
  Eye,
  Edit,
  Trash2
} from "lucide-react";

interface AdminDashboardProps {
  onBack: () => void;
}

interface Worker {
  id: number;
  name: string;
  status: "active" | "offline" | "break";
  efficiency: number;
  area: string;
  lastSeen: string;
  tasksCompleted: number;
  avatar: string;
}

interface Complaint {
  id: number;
  title: string;
  description: string;
  status: "pending" | "in-progress" | "resolved";
  priority: "low" | "medium" | "high";
  submittedBy: string;
  submittedAt: string;
  assignedTo?: string;
  location: string;
}

const AdminDashboard = ({ onBack }: AdminDashboardProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState<"dashboard" | "wards" | "workers" | "complaints" | "reports">("dashboard");
  const [refreshing, setRefreshing] = useState(false);
  const { toast } = useToast();

  const [workers, setWorkers] = useState<Worker[]>([
    { id: 1, name: "Rajesh Kumar", status: "active", efficiency: 92, area: "Ward 1", lastSeen: "2 mins ago", tasksCompleted: 15, avatar: "RK" },
    { id: 2, name: "Priya Sharma", status: "active", efficiency: 88, area: "Ward 2", lastSeen: "5 mins ago", tasksCompleted: 12, avatar: "PS" },
    { id: 3, name: "Mohammed Ali", status: "offline", efficiency: 76, area: "Ward 3", lastSeen: "2 hours ago", tasksCompleted: 8, avatar: "MA" },
    { id: 4, name: "Lakshmi Devi", status: "active", efficiency: 94, area: "Ward 4", lastSeen: "1 min ago", tasksCompleted: 18, avatar: "LD" },
    { id: 5, name: "Suresh Babu", status: "break", efficiency: 85, area: "Ward 5", lastSeen: "30 mins ago", tasksCompleted: 10, avatar: "SB" },
  ]);

  const [complaints, setComplaints] = useState<Complaint[]>([
    {
      id: 1,
      title: "Overflowing Garbage Bin",
      description: "Garbage bin at MG Road is overflowing for 3 days",
      status: "pending",
      priority: "high",
      submittedBy: "Citizen #1234",
      submittedAt: "2 hours ago",
      location: "MG Road, Ward 1"
    },
    {
      id: 2,
      title: "Missed Collection",
      description: "Garbage not collected from residential area",
      status: "in-progress",
      priority: "medium",
      submittedBy: "Citizen #5678",
      submittedAt: "5 hours ago",
      assignedTo: "Rajesh Kumar",
      location: "Bejai, Ward 2"
    },
    {
      id: 3,
      title: "Broken Collection Vehicle",
      description: "Collection truck broke down in the middle of route",
      status: "resolved",
      priority: "high",
      submittedBy: "Worker #101",
      submittedAt: "1 day ago",
      location: "Kadri, Ward 3"
    }
  ]);

  const [stats, setStats] = useState({
    collectionRate: 87,
    activeWorkers: 24,
    totalWorkers: 28,
    revenueToday: 12400,
    pendingIssues: 12,
    resolvedToday: 8
  });

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "wards", label: "Wards", icon: MapPin },
    { id: "workers", label: "Workers", icon: Users },
    { id: "complaints", label: "Complaints", icon: FileText },
    { id: "reports", label: "Reports", icon: BarChart3 },
  ];

  const handleExportReport = async (type: string) => {
    setRefreshing(true);
    toast({
      title: "Exporting Report",
      description: `Generating ${type} report...`,
    });
    
    // Simulate export process
    setTimeout(() => {
      setRefreshing(false);
      toast({
        title: "Export Complete",
        description: `${type} report has been downloaded successfully.`,
      });
    }, 2000);
  };

  const handlePrint = (type: string) => {
    toast({
      title: "Printing",
      description: `Sending ${type} to printer...`,
    });
    // In real app, this would trigger print dialog
    window.print();
  };

  const handleSendNotifications = () => {
    toast({
      title: "Notifications Sent",
      description: "Alert notifications sent to all active workers.",
    });
  };

  const handleRefreshData = async () => {
    setRefreshing(true);
    toast({
      title: "Refreshing Data",
      description: "Updating real-time information...",
    });
    
    // Simulate data refresh
    setTimeout(() => {
      setStats(prev => ({
        ...prev,
        collectionRate: Math.min(100, prev.collectionRate + Math.floor(Math.random() * 3)),
        activeWorkers: 24 + Math.floor(Math.random() * 4) - 2,
      }));
      setRefreshing(false);
      toast({
        title: "Data Updated",
        description: "All information has been refreshed.",
      });
    }, 1500);
  };

  const handleWorkerAction = (workerId: number, action: string) => {
    setWorkers(prev => prev.map(worker => 
      worker.id === workerId 
        ? { ...worker, status: action === "activate" ? "active" : "offline" as any }
        : worker
    ));
    
    toast({
      title: "Worker Status Updated",
      description: `Worker status changed to ${action === "activate" ? "active" : "offline"}.`,
    });
  };

  const handleComplaintAction = (complaintId: number, action: string, newStatus?: string) => {
    if (action === "delete") {
      setComplaints(prev => prev.filter(c => c.id !== complaintId));
      toast({
        title: "Complaint Deleted",
        description: "Complaint has been removed from the system.",
      });
    } else if (newStatus) {
      setComplaints(prev => prev.map(c => 
        c.id === complaintId 
          ? { ...c, status: newStatus as any }
          : c
      ));
      toast({
        title: "Complaint Updated",
        description: `Complaint status changed to ${newStatus}.`,
      });
    }
  };

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
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleRefreshData}
            disabled={refreshing}
            className="hover:bg-gray-100"
          >
            <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
          </Button>
          
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
        <Card className="bg-gradient-to-br from-emerald-500 to-green-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setCurrentSection("reports")}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-100 text-sm font-medium">Collection Rate</p>
                <p className="text-3xl font-bold">{stats.collectionRate}%</p>
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
        
        <Card className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setCurrentSection("workers")}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Active Workers</p>
                <p className="text-3xl font-bold">{stats.activeWorkers}/{stats.totalWorkers}</p>
                <div className="flex items-center gap-1 mt-2">
                  <Activity className="h-4 w-4" />
                  <span className="text-sm">{stats.totalWorkers - stats.activeWorkers} workers offline</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">Revenue Today</p>
                <p className="text-3xl font-bold">₹{(stats.revenueToday / 1000).toFixed(1)}K</p>
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
        
        <Card className="bg-gradient-to-br from-red-500 to-orange-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setCurrentSection("complaints")}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100 text-sm font-medium">Pending Issues</p>
                <p className="text-3xl font-bold">{stats.pendingIssues}</p>
                <div className="flex items-center gap-1 mt-2">
                  <TrendingDown className="h-4 w-4" />
                  <span className="text-sm">{stats.resolvedToday} resolved today</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <AlertTriangle className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-lg">
        <CardHeader className="border-b border-gray-100">
          <CardTitle className="text-gray-800">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <Button 
            onClick={() => handleExportReport("Daily Report")}
            disabled={refreshing}
            className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white"
          >
            <Download className="h-4 w-4 mr-2" />
            Export Daily Report
          </Button>
          <Button 
            variant="outline" 
            onClick={() => handlePrint("Summary")}
            className="w-full border-gray-200 hover:bg-gray-50"
          >
            <Printer className="h-4 w-4 mr-2" />
            Print Summary
          </Button>
          <Button 
            variant="outline" 
            onClick={handleSendNotifications}
            className="w-full border-gray-200 hover:bg-gray-50"
          >
            <Send className="h-4 w-4 mr-2" />
            Send Notifications
          </Button>
          <Button 
            variant="outline" 
            className="w-full border-gray-200 hover:bg-gray-50"
          >
            <Settings className="h-4 w-4 mr-2" />
            System Settings
          </Button>
        </CardContent>
      </Card>

      {/* Live Map placeholder - keeping existing */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

        {/* Recent Activity */}
        <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-lg">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-gray-800">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-2 bg-green-50 rounded-lg">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <div className="text-sm">
                  <p className="font-medium">Collection completed</p>
                  <p className="text-gray-500">Ward 1 - 2 mins ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 bg-blue-50 rounded-lg">
                <Users className="h-4 w-4 text-blue-500" />
                <div className="text-sm">
                  <p className="font-medium">Worker checked in</p>
                  <p className="text-gray-500">Rajesh Kumar - 5 mins ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 bg-orange-50 rounded-lg">
                <AlertTriangle className="h-4 w-4 text-orange-500" />
                <div className="text-sm">
                  <p className="font-medium">New complaint</p>
                  <p className="text-gray-500">MG Road - 10 mins ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Worker Performance - keeping existing with minor enhancements */}
      <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-lg">
        <CardHeader className="border-b border-gray-100">
          <div className="flex flex-row items-center justify-between">
            <CardTitle className="text-gray-800">Top Performing Workers</CardTitle>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleExportReport("Worker Performance CSV")}
                className="border-gray-200"
              >
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handlePrint("Worker Report")}
                className="border-gray-200"
              >
                <Printer className="h-4 w-4 mr-2" />
                Print Report
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {workers.slice(0, 4).map((worker, index) => (
              <div key={worker.id} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-400">#{index + 1}</span>
                    <div className={`w-3 h-3 rounded-full ${
                      worker.status === "active" ? "bg-green-500" : 
                      worker.status === "break" ? "bg-yellow-500" : "bg-red-500"
                    }`}></div>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{worker.avatar}</span>
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
                  <Badge variant={worker.status === "active" ? "default" : worker.status === "break" ? "secondary" : "destructive"} className="px-3 py-1">
                    {worker.status === "active" ? "🟢 On Duty" : worker.status === "break" ? "🟡 Break" : "🔴 Offline"}
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

  const renderWorkersSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800">Worker Management</h2>
        <div className="flex gap-3">
          <Button variant="outline" className="border-gray-200">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button onClick={() => handleExportReport("All Workers")}>
            <Download className="h-4 w-4 mr-2" />
            Export All
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workers.map((worker) => (
          <Card key={worker.id} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{worker.avatar}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{worker.name}</h3>
                  <p className="text-sm text-gray-600">{worker.area}</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  worker.status === "active" ? "bg-green-500" : 
                  worker.status === "break" ? "bg-yellow-500" : "bg-red-500"
                }`}></div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Efficiency</span>
                  <span className="font-semibold">{worker.efficiency}%</span>
                </div>
                <Progress value={worker.efficiency} className="h-2" />
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Tasks Completed</span>
                  <span className="font-semibold">{worker.tasksCompleted}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Last Seen</span>
                  <span className="text-sm">{worker.lastSeen}</span>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4">
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => handleWorkerAction(worker.id, worker.status === "active" ? "deactivate" : "activate")}
                  className="flex-1"
                >
                  {worker.status === "active" ? "Deactivate" : "Activate"}
                </Button>
                <Button size="sm" variant="ghost">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderComplaintsSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800">Complaint Management</h2>
        <div className="flex gap-3">
          <Button variant="outline" className="border-gray-200">
            <Filter className="h-4 w-4 mr-2" />
            Filter by Status
          </Button>
          <Button onClick={() => handleExportReport("Complaints")}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {complaints.map((complaint) => (
          <Card key={complaint.id} className="bg-white border border-gray-200 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-gray-800">{complaint.title}</h3>
                    <Badge 
                      variant={complaint.status === "resolved" ? "default" : complaint.status === "in-progress" ? "secondary" : "destructive"}
                      className={
                        complaint.status === "resolved" ? "bg-green-100 text-green-700" :
                        complaint.status === "in-progress" ? "bg-blue-100 text-blue-700" :
                        "bg-red-100 text-red-700"
                      }
                    >
                      {complaint.status === "in-progress" ? "In Progress" : complaint.status}
                    </Badge>
                    <Badge 
                      variant="outline"
                      className={
                        complaint.priority === "high" ? "border-red-200 text-red-700" :
                        complaint.priority === "medium" ? "border-yellow-200 text-yellow-700" :
                        "border-gray-200 text-gray-700"
                      }
                    >
                      {complaint.priority} priority
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 mb-3">{complaint.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Submitted by:</span>
                      <p className="font-medium">{complaint.submittedBy}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Location:</span>
                      <p className="font-medium">{complaint.location}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Submitted:</span>
                      <p className="font-medium">{complaint.submittedAt}</p>
                    </div>
                    {complaint.assignedTo && (
                      <div>
                        <span className="text-gray-500">Assigned to:</span>
                        <p className="font-medium">{complaint.assignedTo}</p>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-2 ml-4">
                  {complaint.status === "pending" && (
                    <Button 
                      size="sm"
                      onClick={() => handleComplaintAction(complaint.id, "start", "in-progress")}
                    >
                      Start Work
                    </Button>
                  )}
                  {complaint.status === "in-progress" && (
                    <Button 
                      size="sm"
                      onClick={() => handleComplaintAction(complaint.id, "resolve", "resolved")}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Mark Resolved
                    </Button>
                  )}
                  <Button size="sm" variant="ghost">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    onClick={() => handleComplaintAction(complaint.id, "delete")}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
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
          {currentSection === "workers" && renderWorkersSection()}
          {currentSection === "complaints" && renderComplaintsSection()}
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
