import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Heart } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Flavoured Air & Other Demons",
    date: "July 28, 2025",
    excerpt: "Nobody really talks about how gritty it is to be a young Christian. I’m not talking about...",
    content: `Nobody really talks about how gritty it is to be a young Christian. 
I’m not talking about church camp testimonies or Instagram verses with sunset backgrounds. I mean really living it—turning away from what the world glorifies, 
not out of fear, but because you know better. Because you’ve tasted something deeper, purer, and somehow... harder. Following Christ means I don’t get to do what “everyone else” does. 
There’s a whole universe of experiences I’ve said no to—some out of wisdom, some out of sheer obedience. And while I’m grateful (I am grateful), it’s also a strange kind of grief. 
Like I’ve stepped out of the party early and now I’m staring through the window, wondering what it’s like to dance without consequence.
One of those things? Love. The in-love, butterfly, chaos kind of love. I crave it. I ache for it. And yet, I trust God has already settled that matter in the heavenly admin of my life. 
Still, I catch myself yearning. Then I get mad for yearning. Then I remember: stay present. Just stay here.
But here’s the thing. Being a young Christian isn’t just about abstaining from sex, weed, and spontaneous bad ideas. 
It’s about carrying a consciousness the world doesn’t. It’s knowing that sin has weight. 
Knowing that even if culture claps for your choices, the Spirit might be grieving. That’s the part no one warns you about — the conviction that hits like a freight train over the “harmless” stuff.

Like… vape. Yes. Freaking vape.

I feel stupid even writing that, but here we are. I’m addicted to flavoured air and the illusion of relief. It’s expensive, it’s stupid, and worst of all—it’s dishonest. 
I spent the money my mom gave me for my hair. R400 gone. I’m down to R68. She doesn’t know yet, and I’m already scheming a cover story. 
That's the thing about addiction: it turns you into someone with plans. Plans to lie, to hide, to dodge. That’s not me. That’s not who I want to be.
I hate lying. It always finds its way back around—guilt has a GPS.
I know this isn’t the life God intended for me. A life of shame, cycles, and cover-ups. I want to live in the light. 
I want to read the Word with no secondhand guilt clouding my spirit. I want to be free. But some days, it feels impossible. I repent… and then I circle back. 
Like a dog returning to its own vomit (yes, I know—graphic — but Scripture doesn’t sugarcoat, so neither will I).

And here’s the kicker: I know God still loves me. I know it. But the question that eats at me is — do I love Him back in the way He deserves? If I did, wouldn’t I have quit by now?
But today, I’m choosing to try again. That’s the only way out of this loop — intentional love. Small steps. No more buying choef unless I have real extra money. 
No lying. No spiraling. If I can’t afford it, tough luck.

I’m praying again. I’m talking to God more. I’m making space to breathe without the burn in my throat. 
I want to walk this out — not because I’m scared of hell, but because I’m tired of building one in my own chest.

So no, I’m not a saint. But I’m His. And even when I feel like a walking contradiction, I know I’m not walking alone.

Let the devil seethe.
God is with me.
And I’m with God`

  },
  {
    id: 5,
    title: "Refactoring Grace",
    date: "July 10, 2025",
    excerpt: "I’ve been thinking about how messy it is to forgive yourself when there’s no dramatic apology scene. No violin swell. Just you, sitting with the memory of who you were and...",
    content: `I’ve been thinking about how messy it is to forgive yourself when there’s no dramatic apology scene. No violin swell. Just you, sitting with the memory of who you were and crying.

    Remembering the things you said—sharp, performative, or desperate—and realizing you can’t go back and revise the version of you someone else still holds in their head.

If life was code, I’d fork my own timeline. Roll back to a cleaner commit. Refactor the parts where I reacted out of fear, insecurity, loneliness. But that’s not how this works. People don’t version control their hearts.

So instead, I’ve been trying to practice a kind of grace that feels less like a churchy buzzword and more like survival. A real, unpretty kind of grace. One where I can admit: Yeah, I hurt someone. And yeah, I disappointed myself. And I still deserve space to grow.

It’s hard though. No one warns you how long shame lingers. You think it’ll be a quick patch, but it worms into everything. Makes you second-guess your tone in texts. Makes you re-read old conversations like they’re crime scenes. Makes you wonder if the best version of you already came and went, and now you’re just scrambling to clean up the emotional debt.

But grace isn’t neat. It’s not a spiritual Instagram post. It’s looking at the parts of you that caused damage and saying: I see why you acted like that. You were scared. You didn’t know better. You were trying to protect yourself. It’s painful. Unsexy. Necessary.

I’m still learning how to hold space for the girl I used to be. The one who overextended herself just to feel worthy. The one who mistook attention for care. The one who performed stability while quietly unraveling. She did her best. Even if her best caused chaos.

Refactoring grace means I stop trying to delete her.
And start integrating her into who I’m becoming.

So yeah—maybe I don’t need a rebrand. Maybe I just need to let all versions of me have a seat at the table. Let the code be messy. Let the history exist. Not because I’m proud of it, but because it’s honest. And healing, I think, is rooted in honesty.`
  },
  {
    id: 6,
    title: "Infinite Loops of Worry",
    date: "July 5, 2025",
    excerpt: "Caught in a recursive spiral of anxiety again. Sometimes I feel like my brain is stuck in a poorly written while loop — endlessly running the same worries, over and over, until I’m dizzy and exhausted. It’s like a...",
    content: `Caught in a recursive spiral of anxiety again. Sometimes I feel like my brain is stuck in a poorly written while loop — endlessly running the same worries, over and over, until I’m dizzy and exhausted. It’s like a

 broken recursive function that never hits its base case.

What if I fail the next exam? What if I’m not good enough at my job? What if I say the wrong thing and lose someone? What if the feelings I’m trying to bury come back harder?

The worst part? I know logically that most of these fears aren’t realities yet. But logic doesn’t have admin rights over my anxiety. It’s like I’m stuck in my own mental version of “Loading...” where nothing resolves.

I try everything — journaling, praying, distraction — but my mind just hits “run” again on the same scripts. I catch myself spiraling and promise, this time I’ll stop. But seconds later, the cycle repeats.

It’s exhausting. A slow leak that drains my emotional battery. And I hate how much energy I waste on “what ifs” that might never happen. It’s like trying to debug a ghost process — you can see the impact but can’t find the source.

Maybe the key isn’t trying to fix the loop but learning to step outside of it. To watch the thoughts without getting caught. To breathe through the noise and say, “Not now. I’m choosing peace.”

But man, that’s easier said than done.

For now, I’m here—acknowledging the loop, not trying to fight it, just hoping the break condition shows up soon. Because I’m tired of running in circles.

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
    id: 7,
    title: "Version Control for the Soul",
    date: "October 29, 2024",
    excerpt: "Git taught me about commits and rollbacks, but faith taught me that some changes are meant to be permanent—like being loved unconditionally...",
    content: `Git taught me about commits and rollbacks, but faith taught me that some changes are meant to be permanent—like being loved unconditionally.

I made a mistake today. The kind that makes you want to git reset -- hard and pretend it never happened. But life doesn't work like version control, and sometimes that's a mercy.

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