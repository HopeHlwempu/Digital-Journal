import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const blogPosts = [

           {
    id: 1,
    title: "Escaping Gravity",
    date: "25 August, 2025",
    excerpt: "I ran today. Not because it felt good. Not because I wanted to. I ran because staying still meant my thoughts....",
    category: "Mental Health"
  },

         {
    id: 2,
    title: "Misunderstood for the Truth",
    date: "21 August, 2025",
    excerpt: "Last night was heavy. I can’t shake the weight of being called “religiously psychotic.” That word....",
    category: "Spirtual Reflection"
  },


         {
    id: 4,
    title: "The Year I Fell Behind",
    date: "16 August, 2025",
    excerpt: "Today I finally said it out loud, the thing that’s been gnawing at me for months: my gap year? It sucked....",
    category: "Spirtual Reflection"
  },

  {
    id: 5,
    title: "Mission: Take My Life Back",
    date: "August 6, 2025",
    excerpt: "Today I woke up with a bold declaration in mind: take my life back. Bold, right? Almost noble. The kind of...",
    category: "Personal Growth"
  },

     {
    id: 6,
    title: "Flavoured Air & Other Demons",
    date: "July 28, 2025",
    excerpt: "Nobody really talks about how gritty it is to be a young Christian. I’m not talking about...",
    category: "Personal Growth"
  },

  {
    id: 6,
    title: "Refactoring Grace",
    date: "July 10, 2025",
    excerpt: "I’ve been thinking about how messy it is to forgive yourself when there’s no dramatic apology scene. No violin swell. Just you, sitting with the memory of who you were and...",
    category: "Spiritual Reflection"
  },
  {
    id: 7,
    title: "Infinite Loops of Worry",
    date: "July 5, 2025",
    excerpt: "Caught in a recursive spiral of anxiety again. Sometimes I feel like my brain is stuck in a poorly written while loop — endlessly running the same worries, over and over, until I’m dizzy and exhausted. It’s like a...",
    category: "Mental Health"
  },

];

const RecentEntries = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-playfair text-4xl md:text-5xl font-medium text-foreground mb-4">
          Recent Entries
        </h2>
        <p className="font-lora text-muted-foreground">
          Raw thoughts from the intersection of faith and life
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.slice(0, 3).map((post) => (
          <Card key={post.id} className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-lora text-muted-foreground uppercase tracking-wide">
                  {post.date}
                </span>
                <div className="w-1 h-1 bg-primary rounded-full"></div>
              </div>
              <h3 className="font-playfair text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                {post.title}
              </h3>
            </CardHeader>
            <CardContent>
              <p className="font-lora text-muted-foreground leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <Link to={`/post/${post.id}`}>
                <Button variant="journal" size="sm" className="w-full">
                  Read More
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Show remaining posts on mobile as a simple list */}
      <div className="md:hidden mt-8 space-y-4">
        {blogPosts.slice(3).map((post) => (
          <Card key={post.id} className="border-border/30 bg-card/60">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-playfair text-lg font-medium text-foreground">
                  {post.title}
                </h4>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-3">
                  {post.date.split(',')[0]}
                </span>
              </div>
              <p className="font-lora text-sm text-muted-foreground line-clamp-2">
                {post.excerpt}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/all-entries">
          <Button variant="purple" className="font-lora">
            View All Entries
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default RecentEntries;