import { Button } from "@/components/ui/button";
import { Calendar, Phone, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-hospital.jpg";

const Hero = ({ onBookAppointment }: { onBookAppointment: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern healthcare facility" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/40" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in text-foreground">
            Your Health, Our Priority
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/80 animate-slide-up">
            Providing world-class healthcare with compassion, expertise, and cutting-edge technology. Available 24/7 for your wellbeing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up">
            <Button 
              size="lg" 
              onClick={onBookAppointment}
              className="bg-primary hover:bg-primary-hover text-lg h-14 px-8"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg h-14 px-8 bg-card/50 backdrop-blur-sm hover:bg-card/80"
              asChild
            >
              <a href="tel:911">
                <Phone className="h-5 w-5 mr-2" />
                Emergency: 911
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-scale-in">
            <div className="bg-card/90 backdrop-blur-sm p-6 rounded-xl shadow-medium">
              <Clock className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-lg mb-1">24/7 Emergency</h3>
              <p className="text-sm text-muted-foreground">Always here when you need us</p>
            </div>
            <div className="bg-card/90 backdrop-blur-sm p-6 rounded-xl shadow-medium">
              <MapPin className="h-8 w-8 text-secondary mb-3" />
              <h3 className="font-semibold text-lg mb-1">Multiple Locations</h3>
              <p className="text-sm text-muted-foreground">Convenient access to care</p>
            </div>
            <div className="bg-card/90 backdrop-blur-sm p-6 rounded-xl shadow-medium">
              <Calendar className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-lg mb-1">Easy Scheduling</h3>
              <p className="text-sm text-muted-foreground">Book appointments online</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
