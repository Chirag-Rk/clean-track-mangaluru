
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Users, 
  Truck, 
  Download,
  Printer,
  Filter,
  Plus,
  Edit,
  Eye,
  BarChart3,
  Home,
  AlertTriangle,
  CheckCircle,
  Clock
} from "lucide-react";

interface Ward {
  id: number;
  name: string;
  area: string;
  population: number;
  households: number;
  workers: number;
  collectionRate: number;
  status: "excellent" | "good" | "needs_attention" | "critical";
  supervisor: string;
  lastCollection: string;
  routes: number;
  complaints: number;
}

const WardManagement = () => {
  const { toast } = useToast();

  const [wards, setWards] = useState<Ward[]>([
    {
      id: 1,
      name: "Ward 1 - City Center",
      area: "2.5 sq km",
      population: 12500,
      households: 3200,
      workers: 8,
      collectionRate: 98,
      status: "excellent",
      supervisor: "Rajesh Kumar",
      lastCollection: "2 hours ago",
      routes: 12,
      complaints: 1
    },
    {
      id: 2,
      name: "Ward 2 - Bejai",
      area: "3.2 sq km",
      population: 15800,
      households: 4100,
      workers: 10,
      collectionRate: 92,
      status: "good",
      supervisor: "Priya Sharma",
      lastCollection: "1 hour ago",
      routes: 15,
      complaints: 3
    },
    {
      id: 3,
      name: "Ward 3 - Kadri",
      area: "4.1 sq km",
      population: 18200,
      households: 4800,
      workers: 12,
      collectionRate: 85,
      status: "needs_attention",
      supervisor: "Mohammed Ali",
      lastCollection: "4 hours ago",
      routes: 18,
      complaints: 7
    },
    {
      id: 4,
      name: "Ward 4 - Mangaladevi",
      area: "2.8 sq km",
      population: 11200,
      households: 2900,
      workers: 7,
      collectionRate: 75,
      status: "critical",
      supervisor: "Lakshmi Devi",
      lastCollection: "8 hours ago",
      routes: 10,
      complaints: 12
    },
    {
      id: 5,
      name: "Ward 5 - Kodialbail",
      area: "3.6 sq km",
      population: 16500,
      households: 4300,
      workers: 11,
      collectionRate: 94,
      status: "good",
      supervisor: "Suresh Babu",
      lastCollection: "3 hours ago",
      routes: 16,
      complaints: 2
    }
  ]);

  const getStatusColor = (status: Ward['status']) => {
    switch (status) {
      case "excellent": return "bg-green-100 text-green-700";
      case "good": return "bg-blue-100 text-blue-700";
      case "needs_attention": return "bg-yellow-100 text-yellow-700";
      case "critical": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusIcon = (status: Ward['status']) => {
    switch (status) {
      case "excellent": return <CheckCircle className="h-4 w-4" />;
      case "good": return <CheckCircle className="h-4 w-4" />;
      case "needs_attention": return <Clock className="h-4 w-4" />;
      case "critical": return <AlertTriangle className="h-4 w-4" />;
    }
  };

  const handleExportWards = () => {
    toast({
      title: "Exporting Ward Data",
      description: "Ward management report is being generated...",
    });
    // Simulate export
    setTimeout(() => {
      toast({
        title: "Export Complete",
        description: "Ward data has been exported successfully.",
      });
    }, 2000);
  };

  const handleAssignWorker = (wardId: number) => {
    setWards(prev => prev.map(ward => 
      ward.id === wardId 
        ? { ...ward, workers: ward.workers + 1 }
        : ward
    ));
    
    toast({
      title: "Worker Assigned",
      description: "New worker has been assigned to the ward.",
    });
  };

  const handleOptimizeRoute = (wardId: number) => {
    toast({
      title: "Route Optimization",
      description: "Analyzing and optimizing collection routes...",
    });
    
    setTimeout(() => {
      setWards(prev => prev.map(ward => 
        ward.id === wardId 
          ? { ...ward, collectionRate: Math.min(100, ward.collectionRate + 5) }
          : ward
      ));
      
      toast({
        title: "Route Optimized",
        description: "Collection routes have been optimized for efficiency.",
      });
    }, 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="text-center">
          <div className="text-6xl mb-4">🏘️</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Ward Management</h2>
          <p className="text-gray-600">Manage ward boundaries and assignments</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-gray-200">
            <Filter className="h-4 w-4 mr-2" />
            Filter Wards
          </Button>
          <Button variant="outline" className="border-gray-200">
            <Plus className="h-4 w-4 mr-2" />
            Add Ward
          </Button>
          <Button onClick={handleExportWards}>
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Total Wards</p>
                <p className="text-3xl font-bold">{wards.length}</p>
              </div>
              <Home className="h-8 w-8 text-white/80" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-emerald-500 to-green-600 text-white border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-100 text-sm font-medium">Total Population</p>
                <p className="text-3xl font-bold">{(wards.reduce((sum, ward) => sum + ward.population, 0) / 1000).toFixed(0)}K</p>
              </div>
              <Users className="h-8 w-8 text-white/80" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">Active Workers</p>
                <p className="text-3xl font-bold">{wards.reduce((sum, ward) => sum + ward.workers, 0)}</p>
              </div>
              <Truck className="h-8 w-8 text-white/80" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm font-medium">Avg Collection Rate</p>
                <p className="text-3xl font-bold">{Math.round(wards.reduce((sum, ward) => sum + ward.collectionRate, 0) / wards.length)}%</p>
              </div>
              <BarChart3 className="h-8 w-8 text-white/80" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ward Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {wards.map((ward) => (
          <Card key={ward.id} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
            <CardHeader className="border-b border-gray-100">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-gray-800">{ward.name}</CardTitle>
                <Badge className={`${getStatusColor(ward.status)} flex items-center gap-1`}>
                  {getStatusIcon(ward.status)}
                  {ward.status.replace('_', ' ')}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Area:</span>
                  <p className="font-medium">{ward.area}</p>
                </div>
                <div>
                  <span className="text-gray-500">Population:</span>
                  <p className="font-medium">{ward.population.toLocaleString()}</p>
                </div>
                <div>
                  <span className="text-gray-500">Households:</span>
                  <p className="font-medium">{ward.households.toLocaleString()}</p>
                </div>
                <div>
                  <span className="text-gray-500">Active Workers:</span>
                  <p className="font-medium">{ward.workers}</p>
                </div>
                <div>
                  <span className="text-gray-500">Supervisor:</span>
                  <p className="font-medium">{ward.supervisor}</p>
                </div>
                <div>
                  <span className="text-gray-500">Last Collection:</span>
                  <p className="font-medium">{ward.lastCollection}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Collection Rate</span>
                  <span className="font-semibold">{ward.collectionRate}%</span>
                </div>
                <Progress value={ward.collectionRate} className="h-2" />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs">
                    {ward.routes} routes
                  </Badge>
                  <Badge variant={ward.complaints > 5 ? "destructive" : "secondary"} className="text-xs">
                    {ward.complaints} complaints
                  </Badge>
                </div>
              </div>
              
              <div className="flex gap-2 pt-2">
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => handleAssignWorker(ward.id)}
                  className="flex-1"
                >
                  <Users className="h-4 w-4 mr-1" />
                  Assign Worker
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => handleOptimizeRoute(ward.id)}
                  className="flex-1"
                >
                  <MapPin className="h-4 w-4 mr-1" />
                  Optimize Route
                </Button>
                <Button size="sm" variant="ghost">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Interactive Map Placeholder */}
      <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-lg">
        <CardHeader className="border-b border-gray-100">
          <CardTitle className="flex items-center gap-2 text-gray-800">
            <MapPin className="h-5 w-5 text-blue-500" />
            Ward Boundaries Map
            <Badge variant="secondary" className="ml-auto bg-green-100 text-green-700">
              Interactive
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl border border-blue-200 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10"></div>
            <div className="text-center relative z-10">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-gray-700 font-medium mb-2">Interactive Ward Boundaries</p>
              <p className="text-sm text-gray-500 mb-4">Real-time ward mapping with GPS boundaries and route visualization</p>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <MapPin className="h-4 w-4 mr-2" />
                View Full Map
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WardManagement;
