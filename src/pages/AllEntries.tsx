import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft, Calendar, Heart } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "God in the 404s",
    date: "November 15, 2024",
    excerpt: "Sometimes the broken links lead to the most beautiful discoveries. When my deployment failed at 2 AM, I found myself praying in a way I haven't in months...",
    category: "Faith & Code"
  },
  {
    id: 2,
    title: "Debugging My Heart",
    date: "November 12, 2024",
    excerpt: "The compiler doesn't lie, and neither does the Spirit. Today I learned that the errors in my code mirror the tangles in my soul...",
    category: "Personal Growth"
  },
  {
    id: 3,
    title: "Refactoring Grace",
    date: "November 8, 2024",
    excerpt: "Messy code, messy life—but grace is the ultimate linter. It doesn't just point out what's wrong; it offers to clean it up...",
    category: "Spiritual Reflection"
  },
  {
    id: 4,
    title: "Infinite Loops of Worry",
    date: "November 3, 2024",
    excerpt: "Caught in a recursive spiral of anxiety again. But remembering that God's love is the break statement that sets me free...",
    category: "Mental Health"
  },
  {
    id: 5,
    title: "Version Control for the Soul",
    date: "October 29, 2024",
    excerpt: "Git taught me about commits and rollbacks, but faith taught me that some changes are meant to be permanent—like being loved unconditionally...",
    category: "Faith & Code"
  },
  {
    id: 6,
    title: "Async Prayers",
    date: "October 25, 2024",
    excerpt: "Learning that prayer is like async functions—we don't always get immediate results, but the process transforms us while we wait...",
    category: "Spiritual Reflection"
  },
  {
    id: 7,
    title: "The Art of Code Reviews",
    date: "October 20, 2024",
    excerpt: "Sometimes the most growth happens when someone else looks at your work with fresh eyes and gentle honesty...",
    category: "Personal Growth"
  },
  {
    id: 8,
    title: "Stack Overflow Prayers",
    date: "October 15, 2024",
    excerpt: "When you're stuck and need help from someone who's solved this problem before. Sometimes that someone is God...",
    category: "Faith & Code"
  }
];

const categoryColors = {
  "Faith & Code": "bg-primary/10 text-primary border-primary/30",
  "Personal Growth": "bg-secondary/20 text-secondary-foreground border-secondary/40",
  "Spiritual Reflection": "bg-accent/10 text-accent border-accent/30",
  "Mental Health": "bg-primary-purple/10 text-primary-purple border-primary-purple/30"
};

const AllEntries = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/30 bg-gradient-sanctuary">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <Link to="/">
              <Button variant="ghost" className="font-lora">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
              All Entries
            </h1>
            <p className="font-lora text-lg text-muted-foreground max-w-2xl mx-auto">
              Every thought, prayer, and reflection captured in digital ink
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="w-12 h-px bg-primary/40"></div>
              <Heart className="h-4 w-4 text-primary" />
              <div className="w-12 h-px bg-primary/40"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Entries Grid */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs px-2 py-1 rounded-full border ${categoryColors[post.category as keyof typeof categoryColors]} font-lora`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span className="font-lora">{post.date.split(',')[0]}</span>
                  </div>
                </div>
                <h3 className="font-playfair text-xl font-medium text-foreground group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="font-lora text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link to={`/post/${post.id}`}>
                  <Button variant="journal" size="sm" className="w-full">
                    Read Full Entry
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <p className="font-lora text-muted-foreground mb-6">
            That's all for now. More reflections coming as the heart leads...
          </p>
          <Link to="/">
            <Button variant="purple">
              Return to Sanctuary
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AllEntries;