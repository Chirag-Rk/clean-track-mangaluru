
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { 
  BarChart3, 
  Download,
  Printer,
  Filter,
  Calendar,
  TrendingUp,
  TrendingDown,
  Users,
  Truck,
  MapPin,
  AlertTriangle,
  DollarSign,
  Clock,
  Target,
  Award,
  FileText
} from "lucide-react";

const ReportsAnalytics = () => {
  const { toast } = useToast();
  const [selectedPeriod, setSelectedPeriod] = useState<"daily" | "weekly" | "monthly" | "yearly">("monthly");

  const reportData = {
    daily: {
      collections: 156,
      efficiency: 92,
      revenue: 8500,
      complaints: 3,
      trend: "+5%"
    },
    weekly: {
      collections: 1092,
      efficiency: 88,
      revenue: 59500,
      complaints: 21,
      trend: "+12%"
    },
    monthly: {
      collections: 4680,
      efficiency: 87,
      revenue: 248000,
      complaints: 89,
      trend: "+8%"
    },
    yearly: {
      collections: 56160,
      efficiency: 85,
      revenue: 2976000,
      complaints: 1068,
      trend: "+15%"
    }
  };

  const currentData = reportData[selectedPeriod];

  const performanceMetrics = [
    { name: "Collection Efficiency", value: currentData.efficiency, target: 95, unit: "%" },
    { name: "Route Optimization", value: 78, target: 85, unit: "%" },
    { name: "Worker Productivity", value: 84, target: 90, unit: "%" },
    { name: "Citizen Satisfaction", value: 91, target: 95, unit: "%" },
    { name: "Cost Efficiency", value: 76, target: 80, unit: "%" },
    { name: "Environmental Impact", value: 88, target: 90, unit: "%" }
  ];

  const wardPerformance = [
    { ward: "Ward 1", efficiency: 98, collections: 145, revenue: 12500 },
    { ward: "Ward 2", efficiency: 94, collections: 132, revenue: 11200 },
    { ward: "Ward 3", efficiency: 89, collections: 118, revenue: 9800 },
    { ward: "Ward 4", efficiency: 82, collections: 95, revenue: 8100 },
    { ward: "Ward 5", efficiency: 91, collections: 128, revenue: 10800 }
  ];

  const handleExportReport = (reportType: string) => {
    toast({
      title: "Generating Report",
      description: `Creating ${reportType} for ${selectedPeriod} period...`,
    });
    
    setTimeout(() => {
      toast({
        title: "Report Ready",
        description: `${reportType} has been generated and downloaded.`,
      });
    }, 2000);
  };

  const handlePrintReport = () => {
    toast({
      title: "Printing Report",
      description: "Sending comprehensive analytics report to printer...",
    });
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="text-center">
          <div className="text-6xl mb-4">📊</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Reports & Analytics</h2>
          <p className="text-gray-600">Comprehensive analytics and reporting</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-gray-200">
            <Filter className="h-4 w-4 mr-2" />
            Advanced Filters
          </Button>
          <Button variant="outline" onClick={handlePrintReport} className="border-gray-200">
            <Printer className="h-4 w-4 mr-2" />
            Print All
          </Button>
          <Button onClick={() => handleExportReport("Complete Analytics")}>
            <Download className="h-4 w-4 mr-2" />
            Export All
          </Button>
        </div>
      </div>

      {/* Period Selector */}
      <Card className="bg-white border border-gray-200">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <Calendar className="h-5 w-5 text-blue-500" />
            <span className="font-medium text-gray-700">Report Period:</span>
            <div className="flex gap-2">
              {(["daily", "weekly", "monthly", "yearly"] as const).map((period) => (
                <Button
                  key={period}
                  variant={selectedPeriod === period ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPeriod(period)}
                  className={selectedPeriod === period ? "bg-blue-600" : ""}
                >
                  {period.charAt(0).toUpperCase() + period.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-emerald-500 to-green-600 text-white border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-100 text-sm font-medium">Collections</p>
                <p className="text-3xl font-bold">{currentData.collections.toLocaleString()}</p>
                <div className="flex items-center gap-1 mt-2">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">{currentData.trend} vs last period</span>
                </div>
              </div>
              <Truck className="h-8 w-8 text-white/80" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Efficiency</p>
                <p className="text-3xl font-bold">{currentData.efficiency}%</p>
                <div className="flex items-center gap-1 mt-2">
                  <Target className="h-4 w-4" />
                  <span className="text-sm">Target: 95%</span>
                </div>
              </div>
              <BarChart3 className="h-8 w-8 text-white/80" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">Revenue</p>
                <p className="text-3xl font-bold">₹{(currentData.revenue / 1000).toFixed(0)}K</p>
                <div className="flex items-center gap-1 mt-2">
                  <DollarSign className="h-4 w-4" />
                  <span className="text-sm">+8% growth</span>
                </div>
              </div>
              <DollarSign className="h-8 w-8 text-white/80" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm font-medium">Complaints</p>
                <p className="text-3xl font-bold">{currentData.complaints}</p>
                <div className="flex items-center gap-1 mt-2">
                  <TrendingDown className="h-4 w-4" />
                  <span className="text-sm">-12% from last period</span>
                </div>
              </div>
              <AlertTriangle className="h-8 w-8 text-white/80" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <Card className="bg-white border border-gray-200">
        <CardHeader className="border-b border-gray-100">
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-blue-500" />
            Performance Metrics
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {performanceMetrics.map((metric) => (
              <div key={metric.name} className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-700">{metric.name}</span>
                  <span className="text-sm text-gray-500">Target: {metric.target}{metric.unit}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold">{metric.value}{metric.unit}</span>
                    <Badge variant={metric.value >= metric.target ? "default" : "secondary"}>
                      {metric.value >= metric.target ? "On Track" : "Needs Improvement"}
                    </Badge>
                  </div>
                  <Progress value={metric.value} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Ward Performance Comparison */}
      <Card className="bg-white border border-gray-200">
        <CardHeader className="border-b border-gray-100">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-500" />
              Ward Performance Comparison
            </CardTitle>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleExportReport("Ward Performance Report")}
            >
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {wardPerformance.map((ward, index) => (
              <div key={ward.ward} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{ward.ward}</h3>
                    <p className="text-sm text-gray-600">{ward.collections} collections this period</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Efficiency</p>
                    <p className="font-bold text-lg">{ward.efficiency}%</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Revenue</p>
                    <p className="font-bold text-lg">₹{(ward.revenue / 1000).toFixed(1)}K</p>
                  </div>
                  <div className="w-24">
                    <Progress value={ward.efficiency} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Export Actions */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-500" />
            Quick Report Generation
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button 
              variant="outline" 
              className="h-20 flex-col"
              onClick={() => handleExportReport("Daily Summary")}
            >
              <Clock className="h-6 w-6 mb-2" />
              Daily Summary
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col"
              onClick={() => handleExportReport("Worker Performance")}
            >
              <Users className="h-6 w-6 mb-2" />
              Worker Report
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col"
              onClick={() => handleExportReport("Financial Report")}
            >
              <DollarSign className="h-6 w-6 mb-2" />
              Financial Report
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col"
              onClick={() => handleExportReport("Compliance Report")}
            >
              <Award className="h-6 w-6 mb-2" />
              Compliance
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportsAnalytics;
