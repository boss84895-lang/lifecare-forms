import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Jennifer Martinez",
    treatment: "Cardiac Surgery",
    date: "March 2024",
    rating: 5,
    quote: "The care I received was exceptional. The surgical team was professional, and the recovery process was well-supported. I'm grateful for their expertise.",
    avatar: "👩‍💼",
  },
  {
    id: 2,
    name: "Robert Thompson",
    treatment: "Orthopedic Surgery",
    date: "February 2024",
    rating: 5,
    quote: "After my knee replacement, I'm back to my active lifestyle. The physical therapy team and orthopedic surgeons were outstanding throughout my journey.",
    avatar: "👨‍💼",
  },
  {
    id: 3,
    name: "Lisa Chen",
    treatment: "Maternity Care",
    date: "January 2024",
    rating: 5,
    quote: "From prenatal care to delivery, every step was handled with compassion and expertise. The staff made us feel safe and cared for during this precious time.",
    avatar: "👩",
  },
  {
    id: 4,
    name: "David Williams",
    treatment: "Cancer Treatment",
    date: "December 2023",
    rating: 5,
    quote: "The oncology team gave me hope and excellent treatment. Their comprehensive approach and emotional support made all the difference in my recovery.",
    avatar: "👨",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Patient Testimonials</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real patients who trusted us with their care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className={cn(
                "hover:shadow-strong transition-all duration-300 animate-fade-in",
                index % 2 === 0 ? "md:translate-y-0" : "md:translate-y-8"
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-5xl">{testimonial.avatar}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.treatment}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-foreground/90 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <Button variant="link" className="p-0 h-auto text-primary">
                  Read Full Story →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Over 10,000+ satisfied patients</p>
          <Button variant="outline" size="lg">
            View More Testimonials
          </Button>
        </div>
      </div>
    </section>
  );
};

const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default Testimonials;
