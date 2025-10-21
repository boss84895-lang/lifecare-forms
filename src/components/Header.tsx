import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

const Header = ({ onBookAppointment }: { onBookAppointment: () => void }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">H+</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">HealthCare Plus</h1>
              <p className="text-xs text-muted-foreground">Excellence in Care</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#doctors" className="text-foreground hover:text-primary transition-colors">Doctors</a>
            <a href="#facilities" className="text-foreground hover:text-primary transition-colors">Facilities</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-3">
            <a href="tel:911" className="hidden sm:flex items-center space-x-2 text-destructive hover:text-destructive/80 transition-colors">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">Emergency: 911</span>
            </a>
            <Button onClick={onBookAppointment} className="bg-primary hover:bg-primary-hover">
              <Calendar className="h-4 w-4 mr-2" />
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
