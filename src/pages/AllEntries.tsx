import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft, Calendar, Heart } from "lucide-react";

const blogPosts = [

                {
    id: 1,
    title: "The Time We Didn't Get",
    date: "13 March, 2026",
    excerpt: "I've been thinking a lot about time lately - ",
    category: "Personal Growth"
  },
 
  {
    id: 2,
    title: "Where I Am",
    date: "4 January, 2026",
    excerpt: "In 2025, there was a lot of learning how to sit with myself without needing to fix everything....",
    category: "Mental Health"
  },

             {
    id: 3,
    title: "Hollow",
    date: "3 November, 2025",
    excerpt: "You ever notice how life doesn’t stop when you’re miserable?...",
    category: "Mental Health"
  },
           {
    id: 4,
    title: "Too Soon, Too Real",
    date: "6 October, 2025",
    excerpt: "I think today it all finally hit me.vNot the usual kind of stress — the kind that comes and goes with deadlines or tired mornings — but....",
    category: "Mental Health"
  },

             {
    id: 5,
    title: "Running Through the Fire",
    date: "1 September, 2025",
    excerpt: "My life is, for lack of a better word, a mess. Not a cute, sitcom mess — the kind that’s....",
    category: "Spiritual Reflection"
  },

  {
    id: 6,
    title: "Mission: Take My Life Back",
    date: "August 6, 2025",
    excerpt: "Today I woke up with a bold declaration in mind: take my life back. Bold, right? Almost noble. The kind of...",
    category: "Personal Growth"
  },
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