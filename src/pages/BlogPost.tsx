import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Heart } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "God in the 404s",
    date: "November 15, 2024",
    excerpt: "Sometimes the broken links lead to the most beautiful discoveries. When my deployment failed at 2 AM, I found myself praying in a way I haven't in months...",
    content: `Sometimes the broken links lead to the most beautiful discoveries. When my deployment failed at 2 AM, I found myself praying in a way I haven't in months.

There's something humbling about a 404 error. Your carefully crafted code, the hours of debugging, the late-night commits—all leading to a blank page that simply says "not found." But isn't that where grace meets us most often? In the spaces where our best efforts fall short?

Tonight, as I stared at the error logs, I remembered that God specializes in redeeming what's broken. The Israelites wandered for 40 years—talk about a 404 experience. But every wrong turn, every dead end, was part of a larger navigation system orchestrated by love.

Maybe my deployment failure wasn't a mistake. Maybe it was an invitation to pause, to remember that my worth isn't measured in green checkmarks or successful builds. Maybe it was God's way of saying, "Come sit with me in the quiet before dawn, before you try to fix everything again."

The beauty of 404 errors is that they're not permanent. They're just redirects waiting to happen. And sometimes, the redirect leads somewhere more beautiful than our original destination.

I'm learning to trust the process—both in code and in life. To see the failures not as dead ends, but as divine redirects toward something better. After all, the best stories often begin with "Page not found" and end with "Welcome home."`
  },
  {
    id: 2,
    title: "Debugging My Heart",
    date: "November 12, 2024",
    excerpt: "The compiler doesn't lie, and neither does the Spirit. Today I learned that the errors in my code mirror the tangles in my soul...",
    content: `The compiler doesn't lie, and neither does the Spirit. Today I learned that the errors in my code mirror the tangles in my soul.

I've been wrestling with a particularly stubborn bug for three days now. The kind that makes you question everything you know about programming. Line by line, I've traced through the logic, added console.logs like breadcrumbs, hoping to find where things went wrong.

But this morning, sitting in prayer before opening my laptop, I realized the real debugging needed to happen in my heart. The anxiety that keeps me awake, the perfectionism that makes me afraid to ship anything, the way I tie my identity to my performance—these are the real bugs in my system.

God's love is like the perfect linter. It doesn't just point out what's wrong; it offers to clean it up. It doesn't just highlight the errors; it provides the solution. And unlike my IDE, God's feedback comes wrapped in grace, not frustration.

I'm learning that some bugs aren't meant to be fixed quickly. They're invitations to go deeper, to understand not just what went wrong, but why. To see the patterns that led to the error in the first place.

The heart, like code, needs regular refactoring. Old patterns that once worked might now be causing memory leaks in our souls. But the beautiful thing about divine debugging is that we're never working alone. The Holy Spirit is the ultimate pair programmer, guiding us toward cleaner, more loving code.

Tonight, I fixed both bugs—the one in my program and the one in my heart. Both required the same thing: admitting I needed help and being willing to let someone else review my work.`
  },
  {
    id: 3,
    title: "Refactoring Grace",
    date: "November 8, 2024",
    excerpt: "Messy code, messy life—but grace is the ultimate linter. It doesn't just point out what's wrong; it offers to clean it up...",
    content: `Messy code, messy life—but grace is the ultimate linter. It doesn't just point out what's wrong; it offers to clean it up.

I spent the afternoon refactoring a component that had grown unwieldy over months of rushed features and quick fixes. Nested ternary operators, magic numbers, functions doing too many things—it was technical debt at its finest. But as I worked through it, extracting functions and clarifying logic, I couldn't help but think about how God refactors our lives.

Grace doesn't just tolerate our messy code; it actively works to make it beautiful. Where we see spaghetti logic, God sees potential for elegant solutions. Where we see bugs, God sees opportunities for growth.

The refactoring process isn't always comfortable. Sometimes you have to delete code you're attached to, even if it works, because you know there's a better way. Sometimes you have to admit that what seemed clever at the time was actually making things harder for everyone else who had to maintain it.

God's refactoring of my heart has felt similar. Old patterns of thinking, defensive mechanisms that once protected me, ways of operating that got me through difficult seasons—all being gently rewritten with more love, more trust, more peace.

The beautiful thing about divine refactoring is that it never breaks existing functionality. God doesn't remove my personality or my quirks; He just makes them work better within the larger system of His love. He extracts the good parts and wraps them in better logic.

Tonight, both my code and my heart feel cleaner. More readable. More maintainable. And just like good refactoring, the external behavior might look the same, but the internal structure is now built to last.

Sometimes the most important work we do happens in the hidden places—the functions no one else sees, the private methods of our hearts. But that's where the real magic happens. That's where grace does its most beautiful work.`
  },
  {
    id: 4,
    title: "Infinite Loops of Worry",
    date: "November 3, 2024",
    excerpt: "Caught in a recursive spiral of anxiety again. But remembering that God's love is the break statement that sets me free...",
    content: `Caught in a recursive spiral of anxiety again. But remembering that God's love is the break statement that sets me free.

Anxiety is like a while loop without a proper exit condition. It keeps running the same thoughts over and over: What if I'm not good enough? What if I fail? What if everyone discovers I don't know what I'm doing? The CPU of my mind gets stuck at 100%, spinning on problems that may never materialize.

I've been here before—caught in the infinite loop of worry, watching my mental resources drain while accomplishing nothing productive. The worst part is knowing it's happening but feeling powerless to stop it.

But tonight, in the quiet space between prayer and sleep, I remembered something important: God's love is the ultimate break statement. It doesn't just interrupt the cycle; it provides a completely different logic path.

\`\`\`
while (worry.exists()) {
    if (God.loves(me)) {
        break; // Exit the loop
    }
}
rest.now();
\`\`\`

The condition is always true. God's love isn't variable; it's a constant. It doesn't fluctuate based on my performance or my ability to figure everything out. It just is.

Learning to trust this break statement is like learning a new programming paradigm. My old code was built on the assumption that I had to solve everything myself, that security came from having all the answers. But grace operates on different principles entirely.

Sometimes the most courageous thing we can do is add a break statement to our runaway thoughts. To say, "I don't need to solve this tonight. I don't need to worry my way to a solution. I can rest in the love that's bigger than my anxiety."

Tonight, I'm choosing to break out of the loop. To let my worried mind finally rest. Because the One who never sleeps is already handling whatever I'm afraid of, and His love is the most reliable exit condition I know.`
  },
  {
    id: 5,
    title: "Version Control for the Soul",
    date: "October 29, 2024",
    excerpt: "Git taught me about commits and rollbacks, but faith taught me that some changes are meant to be permanent—like being loved unconditionally...",
    content: `Git taught me about commits and rollbacks, but faith taught me that some changes are meant to be permanent—like being loved unconditionally.

I made a mistake today. The kind that makes you want to git reset --hard and pretend it never happened. But life doesn't work like version control, and sometimes that's a mercy.

In code, we can always go back to a previous commit when things go wrong. We can cherry-pick the good changes and discard the rest. We can create branches to experiment safely, knowing we can always merge or delete as needed. But in life, every commit is pushed directly to main, and there's no going back.

At first, this terrified me. The permanence of words spoken in anger, decisions made in fear, bridges burned in pride. But lately, I'm starting to see the beauty in life's immutable history.

God doesn't use version control on His love for us. There's no commit history where we can see when He started caring less because of our failures. No rollback feature when we disappoint Him. His love is not a feature that can be reverted; it's the fundamental architecture on which everything else is built.

The mistakes we want to uncommit? God sees them and loves us still. The broken code of our hearts? He doesn't delete it; He refactors it into something beautiful. The merge conflicts between who we are and who we want to be? He resolves them with grace.

I'm learning that spiritual growth isn't about rolling back to some previous version of myself. It's about accepting that every commit in my life's repository has brought me to this moment, where I'm known completely and loved unconditionally.

Tonight, I'm grateful for the mistakes I can't undo, because they've taught me about a love that doesn't need an undo button. Some changes—like being forgiven, like being chosen, like being held by grace—are meant to be permanent.

The best part about God's version control system? Every commit message just says "loved." No matter what changes we make, that never gets overwritten.`
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id || "1"));

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-playfair text-4xl text-foreground mb-4">Post Not Found</h1>
          <Link to="/">
            <Button variant="journal">Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/30 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm" className="font-lora">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Hope Logs
            </Button>
          </Link>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="font-lora">Entry #{post.id}</span>
          </div>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Post Header */}
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
            <Calendar className="h-4 w-4" />
            <span className="font-lora text-sm">{post.date}</span>
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-primary/40"></div>
            <Heart className="h-4 w-4 text-primary" />
            <div className="w-12 h-px bg-primary/40"></div>
          </div>
        </header>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('```') && paragraph.endsWith('```')) {
              return (
                <pre key={index} className="bg-muted/50 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-border/30 my-6">
                  <code>{paragraph.slice(3, -3)}</code>
                </pre>
              );
            }
            return (
              <p key={index} className="font-lora text-lg leading-relaxed text-foreground mb-6">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Post Footer */}
        <footer className="mt-16 pt-8 border-t border-border/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Heart className="h-4 w-4" />
              <span className="font-lora text-sm">Written with love and caffeine</span>
            </div>
            <Link to="/all-entries">
              <Button variant="purple" size="sm">
                More Entries
              </Button>
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;