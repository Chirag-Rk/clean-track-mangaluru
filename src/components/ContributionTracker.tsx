
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Leaf, TreePine, Recycle, Award, Target, TrendingUp, Users, Globe } from "lucide-react";

interface ContributionTrackerProps {
  isKannada: boolean;
}

const ContributionTracker = ({ isKannada }: ContributionTrackerProps) => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  const contributions = {
    wasteReduced: 45, // kg this month
    carbonSaved: 23, // kg CO2
    recycledItems: 78, // items
    treesEquivalent: 2.3,
    communityRank: 12,
    totalHouseholds: 156
  };

  const achievements = [
    { 
      icon: <Recycle className="h-6 w-6 text-green-600" />, 
      title: isKannada ? "ಮರುಬಳಕೆ ಚಾಂಪಿಯನ್" : "Recycling Champion",
      description: isKannada ? "100+ ಐಟಂಗಳನ್ನು ಮರುಬಳಕೆ ಮಾಡಿದ್ದೀರಿ" : "Recycled 100+ items",
      earned: true
    },
    { 
      icon: <Leaf className="h-6 w-6 text-blue-600" />, 
      title: isKannada ? "ಇಂಗಾಲ ಕಡಿಮೆ ಮಾಡುವವರು" : "Carbon Reducer",
      description: isKannada ? "50 ಕೆಜಿ CO2 ಉಳಿಸಿದ್ದೀರಿ" : "Saved 50kg CO2",
      earned: false
    },
    { 
      icon: <TreePine className="h-6 w-6 text-green-700" />, 
      title: isKannada ? "ಮರ ಸಂರಕ್ಷಕ" : "Tree Saver",
      description: isKannada ? "5 ಮರಗಳಿಗೆ ಸಮಾನ ಪ್ರಭಾವ" : "Impact equal to 5 trees",
      earned: false
    }
  ];

  const monthlyData = [
    { month: "Nov", waste: 45, carbon: 23, recycled: 78 },
    { month: "Oct", waste: 52, carbon: 27, recycled: 65 },
    { month: "Sep", waste: 38, carbon: 19, recycled: 71 },
    { month: "Aug", waste: 48, carbon: 25, recycled: 83 }
  ];

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <CardContent className="p-4 text-center">
            <Leaf className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-700">{contributions.wasteReduced}kg</div>
            <div className="text-sm text-gray-600">{isKannada ? "ತ್ಯಾಜ್ಯ ಕಡಿಮೆ" : "Waste Reduced"}</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-sky-50 border-blue-200">
          <CardContent className="p-4 text-center">
            <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-700">{contributions.carbonSaved}kg</div>
            <div className="text-sm text-gray-600">{isKannada ? "CO2 ಉಳಿಸಿದೆ" : "CO2 Saved"}</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
          <CardContent className="p-4 text-center">
            <Recycle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-700">{contributions.recycledItems}</div>
            <div className="text-sm text-gray-600">{isKannada ? "ಮರುಬಳಕೆ ಐಟಂಗಳು" : "Items Recycled"}</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
          <CardContent className="p-4 text-center">
            <TreePine className="h-8 w-8 text-amber-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-amber-700">{contributions.treesEquivalent}</div>
            <div className="text-sm text-gray-600">{isKannada ? "ಮರಗಳ ಸಮಾನ" : "Trees Equivalent"}</div>
          </CardContent>
        </Card>
      </div>

      {/* Community Impact */}
      <Card className="border-indigo-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-indigo-800">
            <Users className="h-5 w-5" />
            {isKannada ? "ಸಮುದಾಯ ಪ್ರಭಾವ" : "Community Impact"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">{isKannada ? "ನಿಮ್ಮ ರ್ಯಾಂಕ್:" : "Your Rank:"}</span>
              <Badge className="bg-indigo-100 text-indigo-700">
                #{contributions.communityRank} {isKannada ? "of" : "of"} {contributions.totalHouseholds}
              </Badge>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">{isKannada ? "ಟಾಪ್ 10% ತಲುಪಲು" : "To reach Top 10%"}</span>
                <span className="text-sm font-medium">78%</span>
              </div>
              <Progress value={78} className="h-2" />
            </div>
            <div className="text-center p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
              <div className="text-sm text-gray-600">
                {isKannada ? "ನೀವು ಸರಾಸರಿಗಿಂತ 23% ಉತ್ತಮವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದ್ದೀರಿ!" : "You're performing 23% better than average!"}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            {isKannada ? "ಸಾಧನೆಗಳು" : "Achievements"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-4 p-4 rounded-lg border transition-all ${
                  achievement.earned 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-gray-50 border-gray-200 opacity-60'
                }`}
              >
                <div className={achievement.earned ? '' : 'grayscale'}>
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{achievement.title}</div>
                  <div className="text-sm text-gray-600">{achievement.description}</div>
                </div>
                {achievement.earned && (
                  <Badge className="bg-green-100 text-green-700">
                    {isKannada ? "ಗಳಿಸಿದೆ" : "Earned"}
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Monthly Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            {isKannada ? "ಮಾಸಿಕ ಪ್ರವೃತ್ತಿಗಳು" : "Monthly Trends"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {monthlyData.map((data, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="font-medium">{data.month}</div>
                <div className="flex gap-4 text-sm">
                  <span className="text-green-600">{data.waste}kg {isKannada ? "ತ್ಯಾಜ್ಯ" : "waste"}</span>
                  <span className="text-blue-600">{data.carbon}kg CO2</span>
                  <span className="text-purple-600">{data.recycled} {isKannada ? "ಮರುಬಳಕೆ" : "recycled"}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContributionTracker;
