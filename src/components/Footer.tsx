import { Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">HealthCare Plus</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Providing world-class healthcare with compassion, expertise, and cutting-edge technology since 1985.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#doctors" className="text-muted-foreground hover:text-primary transition-colors">Find a Doctor</a></li>
              <li><a href="#facilities" className="text-muted-foreground hover:text-primary transition-colors">Our Facilities</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Patient Stories</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">Patient Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Patient Portal</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Medical Records</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Billing & Insurance</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Visiting Guidelines</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>123 Medical Plaza Drive</li>
              <li>Healthcare City, HC 12345</li>
              <li className="pt-2">
                <span className="font-medium text-destructive">Emergency:</span> 911
              </li>
              <li>
                <span className="font-medium text-foreground">General:</span> +1 (555) 123-4567
              </li>
              <li>
                <span className="font-medium text-foreground">Email:</span> info@healthcareplus.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 HealthCare Plus. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Accessibility</a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-destructive fill-destructive" /> for better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
