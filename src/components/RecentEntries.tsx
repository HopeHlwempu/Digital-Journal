import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const blogPosts = [


               {
    id: 1,
    title: "Unlearning",
    date: "7 February, 2026",
    excerpt: "Dear God,....",
    category: "Spiritual Reflection"
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
    id: 2,
    title: "Hollow",
    date: "3 November, 2025",
    excerpt: "You ever notice how life doesn’t stop when you’re miserable?...",
    category: "Mental Health"
  },
           {
    id: 3,
    title: "Too Soon, Too Real",
    date: "6 October, 2025",
    excerpt: "I think today it all finally hit me.vNot the usual kind of stress — the kind that comes and goes with deadlines or tired mornings — but....",
    category: "Mental Health"
  },

             {
    id: 4,
    title: "Running Through the Fire",
    date: "1 September, 2025",
    excerpt: "My life is, for lack of a better word, a mess. Not a cute, sitcom mess — the kind that’s....",
    category: "Spiritual Reflection"
  },

  {
    id: 5,
    title: "Mission: Take My Life Back",
    date: "August 6, 2025",
    excerpt: "Today I woke up with a bold declaration in mind: take my life back. Bold, right? Almost noble. The kind of...",
    category: "Personal Growth"
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