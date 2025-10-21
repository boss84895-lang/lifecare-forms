import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Ambulance } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", department: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us for appointments, inquiries, or emergency assistance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Main Location</h3>
                  </div>
                  <p className="text-muted-foreground">
                    123 Medical Plaza Drive<br />
                    Healthcare City, HC 12345<br />
                    United States
                  </p>
                </div>

                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Phone Numbers</h3>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <p><span className="font-medium text-destructive">Emergency:</span> 911</p>
                    <p><span className="font-medium">General:</span> +1 (555) 123-4567</p>
                    <p><span className="font-medium">Appointments:</span> +1 (555) 123-4568</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Email</h3>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <p>General: info@healthcareplus.com</p>
                    <p>Appointments: appointments@healthcareplus.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Operating Hours</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium">Emergency Department</p>
                    <p className="text-muted-foreground">24 Hours / 7 Days a Week</p>
                  </div>
                  <div>
                    <p className="font-medium">Outpatient Services</p>
                    <p className="text-muted-foreground">Mon-Fri: 8:00 AM - 8:00 PM</p>
                    <p className="text-muted-foreground">Sat-Sun: 9:00 AM - 5:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Pharmacy</p>
                    <p className="text-muted-foreground">Mon-Fri: 7:00 AM - 9:00 PM</p>
                    <p className="text-muted-foreground">Sat-Sun: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-destructive text-destructive-foreground">
              <CardContent className="p-6 text-center">
                <Ambulance className="h-10 w-10 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Emergency Services</h3>
                <p className="mb-4">Available 24/7</p>
                <Button variant="secondary" size="lg" className="w-full" asChild>
                  <a href="tel:911">Call 911 Now</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-name">Full Name *</Label>
                      <Input
                        id="contact-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="contact-email">Email Address *</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-phone">Phone Number</Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 123-4567"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="contact-department">Department</Label>
                      <Select value={formData.department} onValueChange={(value) => setFormData({ ...formData, department: value })}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="appointments">Appointments</SelectItem>
                          <SelectItem value="billing">Billing</SelectItem>
                          <SelectItem value="medical-records">Medical Records</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="contact-message">Message *</Label>
                    <Textarea
                      id="contact-message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help you?"
                      rows={6}
                      required
                      className="mt-2"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto bg-primary hover:bg-primary-hover">
                    Send Message
                  </Button>
                </form>

                {/* Map */}
                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Find Us on the Map</h4>
                  <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>Interactive Map</p>
                      <p className="text-sm">123 Medical Plaza Drive, Healthcare City</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
