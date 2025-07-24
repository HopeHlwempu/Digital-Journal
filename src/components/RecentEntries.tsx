import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const blogPosts = [
  {
    id: 1,
    title: "God in the 404s",
    date: "November 15, 2024",
    excerpt: "Sometimes the broken links lead to the most beautiful discoveries. When my deployment failed at 2 AM, I found myself praying in a way I haven't in months..."
  },
  {
    id: 2,
    title: "Debugging My Heart",
    date: "November 12, 2024",
    excerpt: "The compiler doesn't lie, and neither does the Spirit. Today I learned that the errors in my code mirror the tangles in my soul..."
  },
  {
    id: 3,
    title: "Refactoring Grace",
    date: "November 8, 2024",
    excerpt: "Messy code, messy life—but grace is the ultimate linter. It doesn't just point out what's wrong; it offers to clean it up..."
  },
  {
    id: 4,
    title: "Infinite Loops of Worry",
    date: "November 3, 2024",
    excerpt: "Caught in a recursive spiral of anxiety again. But remembering that God's love is the break statement that sets me free..."
  },
  {
    id: 5,
    title: "Version Control for the Soul",
    date: "October 29, 2024",
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
          Raw thoughts from the intersection of faith and code
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
              <Button variant="journal" size="sm" className="w-full">
                Read More
              </Button>
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
        <Button variant="sanctuary" className="font-lora">
          View All Entries
        </Button>
      </div>
    </section>
  );
};

export default RecentEntries;