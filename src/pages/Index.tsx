import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BookingDialog from "@/components/BookingDialog";
import Testimonials from "@/components/Testimonials";
import Facilities from "@/components/Facilities";
import Contact from "@/components/Contact";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";

const Index = () => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onBookAppointment={() => setShowBooking(true)} />
      <Hero onBookAppointment={() => setShowBooking(true)} />
      <Testimonials />
      <Facilities />
      <Contact />
      <BlogPreview />
      <Footer />
      
      <BookingDialog 
        open={showBooking} 
        onOpenChange={setShowBooking}
      />
    </div>
  );
};

export default Index;
