
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle, Camera, Upload, MapPin, Clock, User, Phone, FileText, CheckCircle, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EnhancedComplaintSystemProps {
  isKannada: boolean;
}

const EnhancedComplaintSystem = ({ isKannada }: EnhancedComplaintSystemProps) => {
  const [complaintForm, setComplaintForm] = useState({
    category: "",
    priority: "",
    description: "",
    location: "",
    contactNumber: "",
    anonymous: false
  });
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
  const { toast } = useToast();

  const categories = [
    { value: "missed_collection", label: isKannada ? "ಸಂಗ್ರಹಣೆ ತಪ್ಪಿದೆ" : "Missed Collection" },
    { value: "damaged_bin", label: isKannada ? "ಹಾನಿಗೊಳಗಾದ ಬಿನ್" : "Damaged Bin" },
    { value: "illegal_dumping", label: isKannada ? "ಅಕ್ರಮ ಕಸ ಹಾಕುವಿಕೆ" : "Illegal Dumping" },
    { value: "worker_behavior", label: isKannada ? "ಕೆಲಸಗಾರನ ವರ್ತನೆ" : "Worker Behavior" },
    { value: "billing_issue", label: isKannada ? "ಬಿಲ್ಲಿಂಗ್ ಸಮಸ್ಯೆ" : "Billing Issue" },
    { value: "other", label: isKannada ? "ಇತರೆ" : "Other" }
  ];

  const priorities = [
    { value: "low", label: isKannada ? "ಕಡಿಮೆ" : "Low", color: "bg-green-100 text-green-700" },
    { value: "medium", label: isKannada ? "ಮಧ್ಯಮ" : "Medium", color: "bg-yellow-100 text-yellow-700" },
    { value: "high", label: isKannada ? "ಹೆಚ್ಚು" : "High", color: "bg-orange-100 text-orange-700" },
    { value: "urgent", label: isKannada ? "ತುರ್ತು" : "Urgent", color: "bg-red-100 text-red-700" }
  ];

  const recentComplaints = [
    { 
      id: "#C2024001", 
      category: "Missed Collection", 
      status: "resolved", 
      date: "Nov 12", 
      priority: "medium",
      response: "Issue resolved. Collection resumed on schedule."
    },
    { 
      id: "#C2024002", 
      category: "Damaged Bin", 
      status: "in_progress", 
      date: "Nov 10", 
      priority: "high",
      response: "Replacement bin ordered. Expected delivery in 2 days."
    },
    { 
      id: "#C2024003", 
      category: "Illegal Dumping", 
      status: "investigating", 
      date: "Nov 8", 
      priority: "urgent",
      response: "Investigation initiated. CCTV footage being reviewed."
    }
  ];

  const handlePhotoUpload = () => {
    // Simulate photo upload
    const newPhoto = `photo_${Date.now()}.jpg`;
    setUploadedPhotos([...uploadedPhotos, newPhoto]);
    toast({
      title: isKannada ? "ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಆಗಿದೆ" : "Photo Uploaded",
      description: isKannada ? "ಫೋಟೋ ಯಶಸ್ವಿಯಾಗಿ ಸೇರಿಸಲಾಗಿದೆ" : "Photo successfully added to complaint",
    });
  };

  const handleSubmitComplaint = () => {
    if (!complaintForm.category || !complaintForm.priority || !complaintForm.description) {
      toast({
        title: isKannada ? "ದೋಷ" : "Error",
        description: isKannada ? "ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಅಗತ್ಯ ಕ್ಷೇತ್ರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ" : "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }

    const complaintId = `#C2024${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`;
    
    toast({
      title: isKannada ? "ದೂರು ಸಲ್ಲಿಸಲಾಗಿದೆ" : "Complaint Submitted",
      description: `${isKannada ? "ದೂರು ಸಂಖ್ಯೆ" : "Complaint ID"}: ${complaintId}`,
    });

    // Reset form
    setComplaintForm({
      category: "",
      priority: "",
      description: "",
      location: "",
      contactNumber: "",
      anonymous: false
    });
    setUploadedPhotos([]);
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      resolved: { label: isKannada ? "ಪರಿಹರಿಸಲಾಗಿದೆ" : "Resolved", color: "bg-green-100 text-green-700" },
      in_progress: { label: isKannada ? "ಪ್ರಗತಿಯಲ್ಲಿದೆ" : "In Progress", color: "bg-blue-100 text-blue-700" },
      investigating: { label: isKannada ? "ತನಿಖೆಯಲ್ಲಿದೆ" : "Investigating", color: "bg-yellow-100 text-yellow-700" }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge className={config.color}>{config.label}</Badge>;
  };

  const getPriorityBadge = (priority: string) => {
    const priorityConfig = priorities.find(p => p.value === priority);
    return <Badge className={priorityConfig?.color || "bg-gray-100 text-gray-700"}>{priorityConfig?.label}</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Submit New Complaint */}
      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-800">
            <AlertCircle className="h-5 w-5" />
            {isKannada ? "ಹೊಸ ದೂರು ಸಲ್ಲಿಸಿ" : "Submit New Complaint"}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {isKannada ? "ದೂರಿನ ವರ್ಗ" : "Complaint Category"} *
              </label>
              <Select value={complaintForm.category} onValueChange={(value) => setComplaintForm({...complaintForm, category: value})}>
                <SelectTrigger>
                  <SelectValue placeholder={isKannada ? "ವರ್ಗ ಆಯ್ಕೆ ಮಾಡಿ" : "Select Category"} />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {isKannada ? "ಆದ್ಯತೆ" : "Priority"} *
              </label>
              <Select value={complaintForm.priority} onValueChange={(value) => setComplaintForm({...complaintForm, priority: value})}>
                <SelectTrigger>
                  <SelectValue placeholder={isKannada ? "ಆದ್ಯತೆ ಆಯ್ಕೆ ಮಾಡಿ" : "Select Priority"} />
                </SelectTrigger>
                <SelectContent>
                  {priorities.map((priority) => (
                    <SelectItem key={priority.value} value={priority.value}>
                      {priority.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {isKannada ? "ಸ್ಥಳ" : "Location"}
            </label>
            <Input
              placeholder={isKannada ? "ಸ್ಥಳದ ವಿವರಗಳು" : "Location details"}
              value={complaintForm.location}
              onChange={(e) => setComplaintForm({...complaintForm, location: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {isKannada ? "ಸಂಪರ್ಕ ಸಂಖ್ಯೆ" : "Contact Number"}
            </label>
            <Input
              placeholder={isKannada ? "ನಿಮ್ಮ ಸಂಪರ್ಕ ಸಂಖ್ಯೆ" : "Your contact number"}
              value={complaintForm.contactNumber}
              onChange={(e) => setComplaintForm({...complaintForm, contactNumber: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {isKannada ? "ವಿವರಣೆ" : "Description"} *
            </label>
            <Textarea
              placeholder={isKannada ? "ದೂರಿನ ವಿವರಣೆ..." : "Describe your complaint..."}
              value={complaintForm.description}
              onChange={(e) => setComplaintForm({...complaintForm, description: e.target.value})}
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Button 
              onClick={handlePhotoUpload}
              className="w-full bg-blue-500 hover:bg-blue-600"
              type="button"
            >
              <Camera className="h-4 w-4 mr-2" />
              {isKannada ? "ಫೋಟೋ ಸೇರಿಸಿ" : "Add Photo"} ({uploadedPhotos.length})
            </Button>
            
            {uploadedPhotos.length > 0 && (
              <div className="text-sm text-gray-600">
                {uploadedPhotos.length} {isKannada ? "ಫೋಟೋಗಳು ಸೇರಿಸಲಾಗಿದೆ" : "photos added"}
              </div>
            )}
          </div>

          <Button 
            onClick={handleSubmitComplaint}
            className="w-full bg-red-500 hover:bg-red-600"
          >
            <Upload className="h-4 w-4 mr-2" />
            {isKannada ? "ದೂರು ಸಲ್ಲಿಸಿ" : "Submit Complaint"}
          </Button>
        </CardContent>
      </Card>

      {/* Complaint Status Tracker */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            {isKannada ? "ನಿಮ್ಮ ದೂರುಗಳು" : "Your Complaints"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentComplaints.map((complaint, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="font-medium text-lg">{complaint.id}</div>
                      <div className="text-gray-600">{complaint.category} • {complaint.date}</div>
                    </div>
                    <div className="flex gap-2">
                      {getStatusBadge(complaint.status)}
                      {getPriorityBadge(complaint.priority)}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-start gap-2">
                      <MessageSquare className="h-4 w-4 text-gray-500 mt-0.5" />
                      <div className="text-sm text-gray-700">{complaint.response}</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
                    <span>{isKannada ? "ಕೊನೆಯ ಅಪ್‌ಡೇಟ್:" : "Last updated:"} {complaint.date}</span>
                    <Button variant="ghost" size="sm">
                      {isKannada ? "ವಿವರಗಳು" : "View Details"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800">{isKannada ? "ತ್ವರಿತ ಕ್ರಮಗಳು" : "Quick Actions"}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {isKannada ? "ಸ್ಥಳ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ" : "Track Location"}
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {isKannada ? "ಕಾಲ್ ಸೆಂಟರ್" : "Call Center"}
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              {isKannada ? "ಎಫ್‌ಎಕ್ಯೂ" : "FAQ"}
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {isKannada ? "ಲೈವ್ ಚಾಟ್" : "Live Chat"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnhancedComplaintSystem;
