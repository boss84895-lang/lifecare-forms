import { Button } from "@/components/ui/button";
import { Calendar, Phone, MapPin, Clock } from "lucide-react";
import GridBackground from "./GridBackground";

const Hero = ({ onBookAppointment }: { onBookAppointment: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <GridBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-sans text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-foreground tracking-tight">
            Your Health, Our Priority
          </h1>
          <p className="font-sans text-lg md:text-xl mb-12 text-muted-foreground animate-slide-up max-w-2xl mx-auto">
            Providing world-class healthcare with compassion, expertise, and cutting-edge technology. Available 24/7 for your wellbeing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up justify-center">
            <Button 
              size="lg" 
              onClick={onBookAppointment}
              className="font-sans bg-primary hover:bg-primary-hover text-lg h-14 px-8"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="font-sans text-lg h-14 px-8 bg-card/50 backdrop-blur-sm hover:bg-card/80"
              asChild
            >
              <a href="tel:911">
                <Phone className="h-5 w-5 mr-2" />
                Emergency: 911
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-scale-in max-w-3xl mx-auto">
            <div className="bg-card/80 backdrop-blur-md p-6 rounded-xl shadow-medium border border-border/50 hover:border-primary/50 transition-colors">
              <Clock className="h-8 w-8 text-primary mb-3 mx-auto" />
              <h3 className="font-sans font-semibold text-lg mb-1">24/7 Emergency</h3>
              <p className="font-sans text-sm text-muted-foreground">Always here when you need us</p>
            </div>
            <div className="bg-card/80 backdrop-blur-md p-6 rounded-xl shadow-medium border border-border/50 hover:border-primary/50 transition-colors">
              <MapPin className="h-8 w-8 text-secondary mb-3 mx-auto" />
              <h3 className="font-sans font-semibold text-lg mb-1">Multiple Locations</h3>
              <p className="font-sans text-sm text-muted-foreground">Convenient access to care</p>
            </div>
            <div className="bg-card/80 backdrop-blur-md p-6 rounded-xl shadow-medium border border-border/50 hover:border-primary/50 transition-colors">
              <Calendar className="h-8 w-8 text-accent mb-3 mx-auto" />
              <h3 className="font-sans font-semibold text-lg mb-1">Easy Scheduling</h3>
              <p className="font-sans text-sm text-muted-foreground">Book appointments online</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
