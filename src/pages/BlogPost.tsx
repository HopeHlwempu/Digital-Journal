import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Heart } from "lucide-react";

const blogPosts = [
    {
    id: 1,
    title: "Waking Up to the Weight of Authenticity",
    date: "July 25, 2025",
    excerpt: "It was hard getting out of bed today, not for the reasons you might think. It was very odd for me to wake up at...",
    content: `It was hard getting out of bed today, not for the reasons you might think. It was very odd for me to wake up at 12pm, but i unfortunately did. 

I have this awful habit of diving into TikTok the moment I wake. It’s become a ritual, scrolling through the same recycled videos, worn-out trends, and familiar faces. Honestly, I’m not even the type to like TikTok, but I love the idea of it — the chance to connect, to share my thoughts, to express myself authentically.

“Authenticity” is a word tossed around a lot, but I believe it matters. Being yourself, expressing who you truly are—that’s important. But social media has twisted authenticity into something performative. What does it mean to be real when everything’s a show?

I wrestle with that every day. I struggle to be authentic, to be true to myself, without feeling like a fraud. Impostor syndrome isn’t a myth; it’s a constant companion. Who am I really? What does being authentic even mean?

I saw my psychiatrist today. I don’t love going — it’s a harsh reminder of how much I struggle. The guilt hits hard: feeling weak for not “just handling it,” for not moving on fast enough. But I know mental health isn’t about weakness. It’s real, and so many people carry this heavy load.

Maybe that’s why authenticity feels impossible—I feel like I have to be perfect, self-sufficient, ready to bounce back instantly.

I want to cut back on social media—for my mental health and my attention span. I’d rather watch an hour-long Netflix documentary than endlessly scroll through TikTok.

Don’t laugh, but every day around 4:30 PM, I watch Ryan Trahan’s “50 States in 50 Days.” I love how he shares his journey—meeting people, telling stories, just being himself. With his wife Haley, they create content that feels real and genuine.

That’s what I want. To be myself. To share honestly—without guilt, shame, or the crushing pressure to be perfect.

At my appointment, we talked about motivation. I told him how some days even getting out of bed feels impossible. How productivity seems foreign. He prescribed more meds, but also said something that stuck: motivation is tricky. It’s not always there, and that’s okay.

It’s hard looking around and feeling like the only one with no direction, no drive. I see people my age doing amazing things while I’m stuck in place.

It’s hard. I pray a lot—for clarity, strength, courage to face the day, to be authentic without shame.

I pray for grace to accept and love myself, to forgive my imperfections.

I pray for strength to keep going, even when everything feels against me.

I pray for hope — that one day I’ll look back and see how far I’ve come.

I pray for faith — that God was with me every step, guiding, loving, holding me through it all.

Better days are coming, right? I can only hope so.`

  },

  {
    id: 2,
    title: "God in the 404s",
    date: "July 20, 2025", 
    excerpt: "Today was one of those days where it felt like nothing wanted to work — not my code, not my focus, not my heart. I opened my laptop like...",
    content: `Today was one of those days where it felt like nothing wanted to work — not my code, not my focus, not my heart. I opened my laptop like
I was opening a confessional booth. Just me and my compiler and the God who somehow still shows up in my mess.

I was in the middle of testing a simple login flow—should’ve taken 15 minutes max. Instead, I got hit with a cascade of error messages: “Failed to fetch.” “Unauthorized.” “404 Not Found.” That last one got me. Not just because the route didn’t exist. But because it felt like my reality.
It reminded me of how often I try to access parts of myself — or parts of others — and it’s like… nothing’s there. 
Like trying to reach someone I love and getting an emotionally blue tick. Like praying for clarity and hearing silence. Like showing up for people who never come back into my life. 
It’s insane how something as sterile and technical as a 404 can feel personal. I just sat there, hands off the keyboard, staring. I could feel the lump in my throat, 90% because of my frustration from my code, but the other 10% was from the ache. That old, familiar ache of disconnection, of isolation, of wondering if I’m ever going to get it right.
The kind you can't fix with a patch update or a pull request. The kind that whispers and says: “Maybe you’re the one that’s not found.”
But that’s when God came through in His classic, subtle way. Not loud. Not flashy. More like a steady, unassuming presence that sat down next to me in the dark. No judgment. No “you should’ve known better.” Just presence. Still. Soft. Steady.

“I’m here, even when the route fails.”
“I see you, even when no one else does.”
“I never get lost in the error logs. I wrote your architecture (story).”
That hit me. Because I spend so much time trying to fix things — bugs in the system, gaps in relationships, cracks in my identity. I treat myself like a project that just needs cleaner code, better structure, tighter authentication. But maybe God’s not waiting for a perfect deployment. Maybe He’s already dwelling in the local server of my brokenness.

And I think that’s the scandal of grace—that He meets me not just when the app works, or when I’m “put together,” but in the failure messages. The missing pages. The inner 404s that remind me I don’t always know who I am, or what I need, or where I’m headed.

Maybe the 404 isn’t the end. Maybe it’s the doorway. The page that should be there but isn’t... because I haven’t written it yet. Or maybe God’s still writing it with me.

So I didn’t fix the route today. But I journaled. I prayed. I sat in the quiet long enough to hear the sacred hum beneath the silence. And I remembered:
I’m still found. Even when I feel missing.
Still loved. Even when I feel unrecognizable.
Still His. Even when I’m debugging my own soul.

Tomorrow I’ll write the code again. Try again. Fail better. But tonight, I’m letting God be God in the 404s. And I’m letting that be enough.`

  },
  {
    id: 3,
    title: "Debugging My Heart",
    date: "July 15, 2025",
    excerpt: "It’s wild how one random conversation — or lack of one — can undo you. Today started normal. Coffee, my morning walk, to-do list. But something small threw me off...",
    content: `It’s wild how one random conversation — or lack of one — can undo you. Today started normal. Coffee, my morning walk, to-do list. But something small threw me off

A moment where I felt invisible. Maybe I read too much into it—maybe not. Either way, it hit something raw. That feeling of being overlooked, of trying to matter to people who don’t seem to notice if you’re in the room or not. That’s what spiraled me.

I’m realizing more and more that I have emotional tripwires. Not dramatic ones—just subtle, quiet bugs that sit in the background of my mind and trigger when things feel off. If someone gives short answers, I wonder if they’re tired of me. If a message goes unanswered, I replay everything I said like a forensic analyst trying to find the “wrong” thing. I know it’s not healthy. I know not everything is personal. But the reactions feel real.

So I journaled. Not to vent—okay, maybe a little to vent—but mostly to understand. Like opening up developer tools on myself and trying to trace the internal call stack.

Where did this fear of being unwanted come from?
Why does emotional distance feel like punishment?
Why do I work so hard to be “enough,” only to feel like I’m always failing some unspoken test?

I think I confuse silence with disinterest. And I confuse being emotionally sensitive with being “too much.” I hate that. Because I actually like how deeply I feel things. I like that I care hard, even if it hurts. But it’s exhausting trying to translate myself to people who only speak in surface-level.

The worst part? I keep trying to make people into safe spaces when they’re just... not. Not because they’re cruel. Just because they can’t hold me the way I need. And that’s not their fault. It just sucks.

So that’s where I am tonight. Still debugging. Still trying to rewrite the internal scripts that tell me I have to shrink to be loved. Still learning how to give without bleeding. Still figuring out how to let people be human without making their inconsistency mean I’m unworthy.

I don’t have a resolution. I’m not gonna end this entry with some fake clarity. I just know this feeling well. The ache of emotional displacement. The silent hope that someone might actually see the full version of me and not flinch.

Until then — I’m here. Sorting it out. Naming the pain. Giving myself grace. Trying not to close myself off.`
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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