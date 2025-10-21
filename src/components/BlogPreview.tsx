import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const articles = [
  {
    id: 1,
    title: "Understanding Heart Health: 10 Warning Signs You Shouldn't Ignore",
    excerpt: "Learn about the critical warning signs of heart disease and when to seek immediate medical attention.",
    readTime: "5 min read",
    date: "March 15, 2024",
    category: "Cardiology",
    image: "🫀",
  },
  {
    id: 2,
    title: "The Importance of Regular Health Screenings: What You Need to Know",
    excerpt: "Discover which health screenings are essential for your age group and how they can save your life.",
    readTime: "7 min read",
    date: "March 10, 2024",
    category: "Preventive Care",
    image: "🏥",
  },
  {
    id: 3,
    title: "Managing Stress: Expert Tips for Mental Wellness",
    excerpt: "Our mental health specialists share proven strategies for managing stress and improving overall wellbeing.",
    readTime: "6 min read",
    date: "March 5, 2024",
    category: "Mental Health",
    image: "🧠",
  },
];

const BlogPreview = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Successfully subscribed to health updates!");
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Health Insights & Medical News</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest health tips, medical breakthroughs, and wellness advice from our experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {articles.map((article, index) => (
            <Card 
              key={article.id}
              className="hover:shadow-strong transition-all duration-300 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6 text-center">
                <div className="text-6xl mb-4">{article.image}</div>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                  {article.category}
                </div>
              </div>
              <CardContent className="p-6 pt-0">
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">{article.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                </div>

                <Button variant="link" className="p-0 h-auto text-primary font-semibold">
                  Read More <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="max-w-3xl mx-auto bg-gradient-card">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Subscribe to Health Updates</h3>
              <p className="text-muted-foreground">
                Get the latest health tips, medical news, and wellness advice delivered to your inbox
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" className="bg-primary hover:bg-primary-hover">
                Subscribe
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
