
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  DollarSign, 
  Download, 
  Calendar, 
  TrendingUp, 
  Gift, 
  FileText,
  Award,
  Target,
  Clock
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SalaryManagementProps {
  isKannada: boolean;
}

const SalaryManagement = ({ isKannada }: SalaryManagementProps) => {
  const [currentSalary] = useState(25000);
  const [monthlyBonus] = useState(3500);
  const [performanceBonus] = useState(2000);
  const [attendanceBonus] = useState(1500);
  const { toast } = useToast();

  const handleDownloadSalarySlip = () => {
    toast({
      title: isKannada ? "ಸಂಬಳ ಪತ್ರ ಡೌನ್‌ಲೋಡ್" : "Salary Slip Download",
      description: isKannada ? "ಸಂಬಳ ಪತ್ರವನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ..." : "Downloading salary slip...",
    });
  };

  const handleViewPayHistory = () => {
    toast({
      title: isKannada ? "ಪಾವತಿ ಇತಿಹಾಸ" : "Payment History",
      description: isKannada ? "ಪಾವತಿ ಇತಿಹಾಸವನ್ನು ತೋರಿಸಲಾಗುತ್ತಿದೆ..." : "Loading payment history...",
    });
  };

  const totalEarnings = currentSalary + monthlyBonus + performanceBonus + attendanceBonus;

  return (
    <div className="space-y-6">
      {/* Current Month Earnings */}
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            {isKannada ? "ಈ ತಿಂಗಳ ಗಳಿಕೆ" : "This Month's Earnings"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-4">
            <div className="text-4xl font-bold text-green-600 mb-2">₹{totalEarnings.toLocaleString()}</div>
            <div className="text-green-700 text-sm">{isKannada ? "ಒಟ್ಟು ಗಳಿಕೆ" : "Total Earnings"}</div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center p-3 bg-white rounded-lg">
              <div className="text-lg font-semibold text-gray-800">₹{currentSalary.toLocaleString()}</div>
              <div className="text-sm text-gray-600">{isKannada ? "ಮೂಲ ಸಂಬಳ" : "Base Salary"}</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg">
              <div className="text-lg font-semibold text-orange-600">₹{(monthlyBonus + performanceBonus + attendanceBonus).toLocaleString()}</div>
              <div className="text-sm text-gray-600">{isKannada ? "ಒಟ್ಟು ಬೋನಸ್" : "Total Bonus"}</div>
            </div>
          </div>

          <Button 
            onClick={handleDownloadSalarySlip}
            className="w-full bg-green-600 hover:bg-green-700"
          >
            <Download className="h-4 w-4 mr-2" />
            {isKannada ? "ಸಂಬಳ ಪತ್ರ ಡೌನ್‌ಲೋಡ್" : "Download Salary Slip"}
          </Button>
        </CardContent>
      </Card>

      {/* Bonus Breakdown */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-800 flex items-center gap-2">
            <Gift className="h-5 w-5 text-orange-600" />
            {isKannada ? "ಬೋನಸ್ ವಿವರಣೆ" : "Bonus Breakdown"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-blue-600" />
                <span className="font-medium">{isKannada ? "ಮಾಸಿಕ ಬೋನಸ್" : "Monthly Bonus"}</span>
              </div>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">₹{monthlyBonus.toLocaleString()}</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Target className="h-5 w-5 text-purple-600" />
                <span className="font-medium">{isKannada ? "ಕಾರ್ಯಕ್ಷಮತೆ ಬೋನಸ್" : "Performance Bonus"}</span>
              </div>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">₹{performanceBonus.toLocaleString()}</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-green-600" />
                <span className="font-medium">{isKannada ? "ಹಾಜರಾತಿ ಬೋನಸ್" : "Attendance Bonus"}</span>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">₹{attendanceBonus.toLocaleString()}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics for Bonus */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-800 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            {isKannada ? "ಬೋನಸ್ ಮೆಟ್ರಿಕ್ಸ್" : "Bonus Metrics"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">{isKannada ? "ಗುರಿ ಸಾಧನೆ" : "Target Achievement"}</span>
                <span className="text-sm text-gray-600">94%</span>
              </div>
              <Progress value={94} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">{isKannada ? "ಹಾಜರಾತಿ ದರ" : "Attendance Rate"}</span>
                <span className="text-sm text-gray-600">96%</span>
              </div>
              <Progress value={96} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">{isKannada ? "ಗುಣಮಟ್ಟದ ಸ್ಕೋರ್" : "Quality Score"}</span>
                <span className="text-sm text-gray-600">92%</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button 
          onClick={handleViewPayHistory}
          variant="outline" 
          className="h-16 flex flex-col gap-1"
        >
          <FileText className="h-5 w-5" />
          <span className="text-xs">{isKannada ? "ಪಾವತಿ ಇತಿಹಾಸ" : "Pay History"}</span>
        </Button>
        
        <Button 
          onClick={() => toast({ title: "Tax Info", description: "Loading tax information..." })}
          variant="outline" 
          className="h-16 flex flex-col gap-1"
        >
          <Award className="h-5 w-5" />
          <span className="text-xs">{isKannada ? "ತೆರಿಗೆ ಮಾಹಿತಿ" : "Tax Info"}</span>
        </Button>
      </div>
    </div>
  );
};

export default SalaryManagement;
