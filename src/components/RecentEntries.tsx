import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const blogPosts = [
  {
    id: 1,
    title: "God in the 404s",
    date: "July 20, 2025",
    excerpt: "Today was one of those days where it felt like nothing wanted to work — not my code, not my focus, not my heart. I opened my laptop like..."
  },
  {
    id: 2,
    title: "Debugging My Heart",
    date: "July 15, 2025",
    excerpt: "It’s wild how one random conversation—or lack of one—can undo you. Today started normal. Coffee, my morning walk, to-do list. But something small threw me off..."
  },
  {
    id: 3,
    title: "Refactoring Grace",
    date: "July 10, 2025",
    excerpt: "I’ve been thinking about how messy it is to forgive yourself when there’s no dramatic apology scene. No violin swell. Just you, sitting with the memory of who you were and..."
  },
  {
    id: 4,
    title: "Infinite Loops of Worry",
    date: "July 5, 2025",
    excerpt: "Caught in a recursive spiral of anxiety again. Sometimes I feel like my brain is stuck in a poorly written while loop — endlessly running the same worries, over and over, until I’m dizzy and exhausted. It’s like a..."
  },
  {
    id: 5,
    title: "Version Control for the Soul",
    date: "June 30, 2025.",
    excerpt: "Git taught me about commits and rollbacks, but faith taught me that some changes are meant to be permanent—like being loved unconditionally..."
  }
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