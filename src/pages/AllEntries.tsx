import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft, Calendar, Heart } from "lucide-react";

const blogPosts = [

         {
    id: 1,
    title: "Running From Myself",
    date: "17 August, 2025",
    excerpt: "There’s too much rattling around in my head to break it into two entries, so here’s the messy, slightly over-caffeinated brain dump...."
  },

         {
    id: 2,
    title: "The Year I Fell Behind",
    date: "16 August, 2025",
    excerpt: "Today I finally said it out loud, the thing that’s been gnawing at me for months: my gap year? It sucked...."
  },

  {
    id: 3,
    title: "Mission: Take My Life Back",
    date: "August 6, 2025",
    excerpt: "Today I woke up with a bold declaration in mind: take my life back. Bold, right? Almost noble. The kind of...",
    category: "Personal Growth"
  },

     {
    id: 4,
    title: "Flavoured Air & Other Demons",
    date: "July 28, 2025",
    excerpt: "Nobody really talks about how gritty it is to be a young Christian. I’m not talking about...",
    category: "Personal Growth"
  },

   {
    id: 5,
    title: "Waking Up to the Weight of Authenticity",
    date: "July 25, 2025",
    excerpt: "It was hard getting out of bed today, not for the reasons you might think. It was very odd for me to wake up at...",
    category: "Personal Growth"
  },
 
 
  {
    id: 6,
    title: "God in the 404s",
    date: "July 20, 2025",
    excerpt: "Today was one of those days where it felt like nothing wanted to work — not my code, not my focus, not my heart. I opened my laptop like...",
    category: "Faith & Code"
  },
  {
    id: 7,
    title: "Debugging My Heart",
    date: "July 15, 2025",
    excerpt: "It’s wild how one random conversation — or lack of one — can undo you. Today started normal. Coffee, my morning walk, to-do list. But something small threw me off...",
    category: "Personal Growth"
  },
  {
    id: 8,
    title: "Refactoring Grace",
    date: "July 10, 2025",
    excerpt: "I’ve been thinking about how messy it is to forgive yourself when there’s no dramatic apology scene. No violin swell. Just you, sitting with the memory of who you were and...",
    category: "Spiritual Reflection"
  },
  {
    id: 9,
    title: "Infinite Loops of Worry",
    date: "July 5, 2025",
    excerpt: "Caught in a recursive spiral of anxiety again. Sometimes I feel like my brain is stuck in a poorly written while loop — endlessly running the same worries, over and over, until I’m dizzy and exhausted. It’s like a...",
    category: "Mental Health"
  },
  {
    id: 10,
    title: "Version Control for the Soul",
    date: "June 30, 2025",
    excerpt: "Git taught me about commits and rollbacks, but faith taught me that some changes are meant to be permanent — like being loved unconditionally...",
    category: "Faith & Code"
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