
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Navigation, 
  Route, 
  Clock, 
  CheckCircle2,
  AlertCircle,
  Truck,
  Target
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface RouteMapProps {
  isKannada: boolean;
}

const RouteMap = ({ isKannada }: RouteMapProps) => {
  const [currentLocation] = useState("Sector A - Block 2");
  const [isNavigating, setIsNavigating] = useState(false);
  const { toast } = useToast();

  const routePoints = [
    { id: 1, name: "Sector A - Block 1", status: "completed", time: "9:00 AM", houses: 15 },
    { id: 2, name: "Sector A - Block 2", status: "current", time: "11:30 AM", houses: 12 },
    { id: 3, name: "Sector A - Block 3", status: "pending", time: "2:00 PM", houses: 18 },
    { id: 4, name: "Sector B - Block 1", status: "pending", time: "4:30 PM", houses: 14 },
  ];

  const handleStartNavigation = () => {
    setIsNavigating(true);
    toast({
      title: isKannada ? "ನ್ಯಾವಿಗೇಷನ್ ಪ್ರಾರಂಭ" : "Navigation Started",
      description: isKannada ? "ಮುಂದಿನ ಸ್ಥಳಕ್ಕೆ ಮಾರ್ಗದರ್ಶನ ಪ್ರಾರಂಭವಾಗಿದೆ" : "Navigation to next location started",
    });
  };

  const handleOptimizeRoute = () => {
    toast({
      title: isKannada ? "ಮಾರ್ಗ ಆಪ್ಟಿಮೈಜೇಶನ್" : "Route Optimization",
      description: isKannada ? "ಅತ್ಯುತ್ತಮ ಮಾರ್ಗವನ್ನು ಲೆಕ್ಕಾಚಾರ ಮಾಡಲಾಗುತ್ತಿದೆ" : "Calculating optimal route",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'current': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-gray-100 text-gray-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case 'current': return <Truck className="h-4 w-4 text-blue-600" />;
      case 'pending': return <Clock className="h-4 w-4 text-gray-600" />;
      default: return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Current Location */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span className="font-semibold text-blue-800">
                {isKannada ? "ಪ್ರಸ್ತುತ ಸ್ಥಳ" : "Current Location"}
              </span>
            </div>
            <Badge className="bg-blue-600 text-white">Live</Badge>
          </div>
          <div className="text-lg font-bold text-gray-800 mb-2">{currentLocation}</div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              11:30 AM
            </span>
            <span className="flex items-center gap-1">
              <Target className="h-4 w-4" />
              12 {isKannada ? "ಮನೆಗಳು" : "Houses"}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Map Placeholder */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-800 flex items-center gap-2">
            <Route className="h-5 w-5 text-indigo-600" />
            {isKannada ? "ಮಾರ್ಗ ನಕ್ಷೆ" : "Route Map"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Map placeholder with route visualization */}
          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="text-center">
              <div className="text-6xl mb-3">🗺️</div>
              <div className="text-gray-600 font-medium mb-2">
                {isKannada ? "ಇಂಟರ್ಯಾಕ್ಟಿವ್ ಮ್ಯಾಪ್" : "Interactive Map"}
              </div>
              <div className="text-sm text-gray-500">
                {isKannada ? "ಮಾರ್ಗ ಮತ್ತು ಸ್ಥಳಗಳನ್ನು ತೋರಿಸುತ್ತದೆ" : "Shows route and locations"}
              </div>
            </div>
            
            {/* Route points overlay */}
            <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>{isKannada ? "ಪೂರ್ಣಗೊಂಡಿದೆ" : "Completed"}</span>
              </div>
            </div>
            
            <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-md">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span>{isKannada ? "ಪ್ರಸ್ತುತ" : "Current"}</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3 mt-4">
            <Button 
              onClick={handleStartNavigation}
              className="flex-1 bg-blue-600 hover:bg-blue-700"
              disabled={isNavigating}
            >
              <Navigation className="h-4 w-4 mr-2" />
              {isNavigating 
                ? (isKannada ? "ನ್ಯಾವಿಗೇಟ್ ಮಾಡುತ್ತಿದೆ..." : "Navigating...") 
                : (isKannada ? "ನ್ಯಾವಿಗೇಷನ್ ಪ್ರಾರಂಭಿಸಿ" : "Start Navigation")
              }
            </Button>
            <Button 
              onClick={handleOptimizeRoute}
              variant="outline"
              className="flex-1"
            >
              <Route className="h-4 w-4 mr-2" />
              {isKannada ? "ಮಾರ್ಗ ಆಪ್ಟಿಮೈಜ್" : "Optimize Route"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Route Details */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-800 flex items-center gap-2">
            <Route className="h-5 w-5 text-purple-600" />
            {isKannada ? "ಇಂದಿನ ಮಾರ್ಗ ವಿವರಗಳು" : "Today's Route Details"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {routePoints.map((point, index) => (
              <div key={point.id} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center gap-3">
                  {getStatusIcon(point.status)}
                  <div>
                    <div className="font-medium text-gray-800">{point.name}</div>
                    <div className="text-sm text-gray-600">
                      {point.time} • {point.houses} {isKannada ? "ಮನೆಗಳು" : "houses"}
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className={getStatusColor(point.status)}>
                  {point.status === 'completed' ? (isKannada ? "ಪೂರ್ಣ" : "Done") :
                   point.status === 'current' ? (isKannada ? "ಪ್ರಸ್ತುತ" : "Current") :
                   (isKannada ? "ಬಾಕಿ" : "Pending")}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RouteMap;
