import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Heart, Brain, Bone, Activity, Eye, Stethoscope, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

const departments = [
  { id: "cardiology", name: "Cardiology", icon: Heart },
  { id: "neurology", name: "Neurology", icon: Brain },
  { id: "orthopedics", name: "Orthopedics", icon: Bone },
  { id: "general", name: "General Medicine", icon: Activity },
  { id: "ophthalmology", name: "Ophthalmology", icon: Eye },
  { id: "pediatrics", name: "Pediatrics", icon: Stethoscope },
];

const doctors = [
  { id: "1", name: "Dr. Sarah Johnson", specialty: "Cardiologist", image: doctor1 },
  { id: "2", name: "Dr. Michael Chen", specialty: "Neurologist", image: doctor2 },
  { id: "3", name: "Dr. Emily Rodriguez", specialty: "General Surgeon", image: doctor3 },
];

const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"];

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingDialog = ({ open, onOpenChange }: BookingDialogProps) => {
  const [date, setDate] = useState<Date>();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    department: "",
    doctor: "",
    timeSlot: "",
    patientName: "",
    phone: "",
    email: "",
    reason: "",
    insurance: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
    toast.success("Appointment booked successfully!");
  };

  const handleReset = () => {
    setShowConfirmation(false);
    setFormData({
      department: "",
      doctor: "",
      timeSlot: "",
      patientName: "",
      phone: "",
      email: "",
      reason: "",
      insurance: "",
    });
    setDate(undefined);
    onOpenChange(false);
  };

  if (showConfirmation) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-md">
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-10 w-10 text-success" />
            </div>
            <DialogTitle className="text-2xl mb-2">Appointment Confirmed!</DialogTitle>
            <DialogDescription className="text-base mb-6">
              Your appointment has been successfully scheduled. We'll send you a confirmation email shortly.
            </DialogDescription>
            
            <div className="bg-muted p-4 rounded-lg mb-6 text-left">
              <h4 className="font-semibold mb-3">Appointment Details:</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Patient:</span> {formData.patientName}</p>
                <p><span className="font-medium">Department:</span> {formData.department}</p>
                <p><span className="font-medium">Doctor:</span> {formData.doctor}</p>
                {date && <p><span className="font-medium">Date:</span> {format(date, "PPP")}</p>}
                <p><span className="font-medium">Time:</span> {formData.timeSlot}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Next Steps:</h4>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li>• Check your email for confirmation and preparation instructions</li>
                <li>• Arrive 15 minutes early for check-in</li>
                <li>• Bring your insurance card and ID</li>
                <li>• Bring any relevant medical records</li>
              </ul>
            </div>

            <Button onClick={handleReset} className="mt-6 w-full">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book an Appointment</DialogTitle>
          <DialogDescription>
            Fill in your details and select your preferred time slot
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Department Selection */}
          <div>
            <Label htmlFor="department">Select Department *</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, department: dept.name })}
                  className={cn(
                    "flex flex-col items-center p-4 rounded-lg border-2 transition-all hover:shadow-medium",
                    formData.department === dept.name
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <dept.icon className="h-8 w-8 mb-2 text-primary" />
                  <span className="text-sm font-medium text-center">{dept.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Doctor Selection */}
          <div>
            <Label htmlFor="doctor">Preferred Doctor</Label>
            <Select value={formData.doctor} onValueChange={(value) => setFormData({ ...formData, doctor: value })}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select a doctor" />
              </SelectTrigger>
              <SelectContent>
                {doctors.map((doctor) => (
                  <SelectItem key={doctor.id} value={doctor.name}>
                    <div className="flex items-center space-x-3">
                      <img src={doctor.image} alt={doctor.name} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <p className="font-medium">{doctor.name}</p>
                        <p className="text-xs text-muted-foreground">{doctor.specialty}</p>
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Date & Time Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Appointment Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal mt-2",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-popover z-[100]" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <Label htmlFor="timeSlot">Time Slot *</Label>
              <Select value={formData.timeSlot} onValueChange={(value) => setFormData({ ...formData, timeSlot: value })}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Patient Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Patient Information</h3>
            
            <div>
              <Label htmlFor="patientName">Full Name *</Label>
              <Input
                id="patientName"
                value={formData.patientName}
                onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                placeholder="John Doe"
                required
                className="mt-2"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 123-4567"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  required
                  className="mt-2"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="insurance">Insurance Provider</Label>
              <Select value={formData.insurance} onValueChange={(value) => setFormData({ ...formData, insurance: value })}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select insurance provider" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="blue-cross">Blue Cross Blue Shield</SelectItem>
                  <SelectItem value="aetna">Aetna</SelectItem>
                  <SelectItem value="united">United Healthcare</SelectItem>
                  <SelectItem value="cigna">Cigna</SelectItem>
                  <SelectItem value="kaiser">Kaiser Permanente</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                  <SelectItem value="none">No Insurance</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="reason">Reason for Visit</Label>
              <Textarea
                id="reason"
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                placeholder="Brief description of your symptoms or reason for visit..."
                rows={4}
                className="mt-2"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-primary hover:bg-primary-hover">
              Confirm Appointment
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
