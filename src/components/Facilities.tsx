import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Microscope, Ambulance, Award } from "lucide-react";
import facilityRoom from "@/assets/facility-room.jpg";
import facilitySurgical from "@/assets/facility-surgical.jpg";
import facilityDiagnostic from "@/assets/facility-diagnostic.jpg";

const categories = [
  { id: "all", name: "All Facilities", icon: Building2 },
  { id: "rooms", name: "Patient Rooms", icon: Building2 },
  { id: "surgical", name: "Surgical Suites", icon: Microscope },
  { id: "diagnostic", name: "Diagnostic Center", icon: Award },
];

const facilities = [
  {
    id: 1,
    category: "rooms",
    name: "Advanced Patient Rooms",
    description: "State-of-the-art patient rooms with advanced monitoring systems and comfortable accommodations for optimal recovery.",
    image: facilityRoom,
    technologies: ["Smart Monitoring", "Climate Control", "Entertainment System"],
  },
  {
    id: 2,
    category: "surgical",
    name: "Robotic Surgical Suites",
    description: "Cutting-edge surgical facilities equipped with robotic surgery systems for minimally invasive procedures and faster recovery.",
    image: facilitySurgical,
    technologies: ["Robotic Surgery", "Advanced Imaging", "HEPA Filtration"],
  },
  {
    id: 3,
    category: "diagnostic",
    name: "Advanced Diagnostic Center",
    description: "Comprehensive diagnostic facilities featuring MRI, CT, and PET scan technology for accurate and timely diagnoses.",
    image: facilityDiagnostic,
    technologies: ["3T MRI", "256-Slice CT", "PET-CT Scanner"],
  },
];

const Facilities = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFacilities = activeCategory === "all" 
    ? facilities 
    : facilities.filter(f => f.category === activeCategory);

  return (
    <section id="facilities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Facilities & Technology</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            World-class medical facilities equipped with the latest healthcare technology
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="flex items-center space-x-2"
            >
              <category.icon className="h-4 w-4" />
              <span>{category.name}</span>
            </Button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {filteredFacilities.map((facility, index) => (
            <Card 
              key={facility.id} 
              className="overflow-hidden hover:shadow-strong transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{facility.name}</h3>
                <p className="text-muted-foreground mb-4">{facility.description}</p>
                
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-semibold">Advanced Technology:</p>
                  <div className="flex flex-wrap gap-2">
                    {facility.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button variant="link" className="p-0 h-auto text-primary">
                  Virtual Tour Available →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Services Banner */}
        <Card className="bg-gradient-hero text-primary-foreground max-w-4xl mx-auto">
          <CardContent className="p-8 text-center">
            <Ambulance className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">24/7 Emergency Services</h3>
            <p className="text-lg mb-4">
              Our emergency department is equipped with advanced trauma care facilities and staffed by experienced emergency medicine specialists around the clock.
            </p>
            <Button size="lg" variant="secondary">
              Learn More About Emergency Services
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Facilities;
