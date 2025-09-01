import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Heart } from "lucide-react";

const blogPosts = [

    {
    id: 1,
    title: "Running through the Fire",
    date: "1 September, 2025",
    excerpt: "My life is, for lack of a better word, a mess. Not a cute, sitcom mess — the kind that’s....",
    content: `My life is, for lack of a better word, a mess. Not a cute, sitcom mess — the kind that’s resolved by the end of an episode. 
    No, this is the “everything that could go wrong, actually went wrong”. 
    And yet, somehow, I’m not unravelling. I feel this strange, unshakable peace that I can’t quite comprehend. A peace only God could express. 

If this exact chaos had landed on me a year ago, I’d be crashing out. Like, maximum crashout. But now? I’m fine. 
I mean, not perfect, but not pretending — I’m okay. It’s as if I’m standing in the middle of a fire, but there’s a glass bubble around me. 
I can see the flames licking higher, hear the crackle of things burning down, and I’m untouched. Safe. 
Which, if you ask me, is the definition of grace — being protected from what should consume you. The Bible does say, “No weapon formed against you shall prosper” – maybe I’m living that scripture out. 

Part of that peace comes from running. I never thought I’d say that — running used to be something I’d only do if someone was chasing me. 
But now it’s become my therapy. Apart of it being my therapy, it is a sort of punishment. It hurts in a way I find weirdly comforting. 
Running hurts, but I like that. It’s a pain that feels deserved, a pain I can control, unlike the wreckage life throws my way. 
And with every step, there’s progress — slow, steady, tangible. It’s the one area where I can see myself moving forward, literally and metaphorically, even if the rest of my life feels stuck in wet cement.

Every run feels like a private meeting with God. The wind cuts across my face, and in it, I swear I can feel the Holy Spirit moving through me. 
For those 30, 40, however-many minutes, I’m not anxious, not lost in my own head — I’m free. For once, my brain shuts up.

The thing about running is it teaches you things about yourself you weren’t ready to know. 
Like: asthma is real and isn’t just an excuse PE teachers rolled their eyes at. Uphill running is the devil’s invention. 
And, maybe most importantly, that silence with God doesn’t always need to look like prayer or worship — it can look like pounding feet on pavement, lungs burning, heart racing. 

Still, the truth is, I run because I’m afraid of stillness. When I stop moving, I feel the shadows creeping back, my dark passenger tapping my shoulder. 
Running reassures me that I’m alive, I’m alive, I’m alive, I’M ALIVE – and that I’m not just wasting oxygen by existing. But now I’m at least moving, doing something. 

My life is a mess, a shithole actually. But maybe God’s using this mess as training ground — teaching me endurance, not just for running, 
but for being alive. Teaching me that peace doesn’t mean the fire’s gone. It just means I’m not burning because I’m already safe inside the bubble He created for me.

The bubble might not last forever, but until it pops — I’ll keep running.
`

    },

    {
    id: 2,
    title: "Misunderstood for the Truth",
    date: "August 21, 2025",
    excerpt: "Today was heavy. I can’t shake the weight of being called “religiously psychotic.” That word....",
    content: `Today was heavy. I can’t shake the weight of being called “religiously psychotic.” That word pierced me deeper than I expected. 
    It wasn’t just an attack on me — it felt like an attack on God Himself, on everything I believe, everything I live for.

It all started with a post. I commented affirming that Jesus is the only way. Within minutes, notifications blew up. 
One friend called that “religious psychosis.” Another said I was disrespectful to other religions. A third accused me of using Jesus as a scapegoat. 
My heart was to stand for Jesus, not to hurt anyone — but my friends couldn’t see that. By the next day, I was blocked by all of them. 
But who needs friends when you have Jesus? He never leaves, He never misunderstands, and His love is unwavering.

As all of this unfolded, live, I was so full of rage, anger. Someone called MY FATHER, THE CREATOR OF THE STARS AND OCEANS, “disgusting.” 
My chest tightened, my mind raced. But instead of reacting or lashing out, I prayed:

“On one hand, I boldly want to step out and defend with passion, but I want to respond or react with love, just as Jesus would. Is it my place to speak up? 
Is it my responsibility to defend and speak truth? How do I do this the right way? How do I lovingly correct them without straying them further away from You? I have so many questions. 
I want to approach this like Jesus. Help and guide me, Lord.”

Not long after, before I called my Life Group leader, I was writing notes from Sunday service. 
Words poured through the Spirit, almost like God was whispering directly to me: 
“The ministry of Jesus is the ministry of every believer. Teaching, preaching, and healing. Roles in the church are valuable, but they don’t replace the priestly call. 
We may feel weak, unqualified, or fearful, but God demonstrates His power through us so that His kingdom advances everywhere we go.”

It hit me. God wanted me to speak up, to lovingly correct, to approach them — even if they didn’t listen — because this is exactly what Jesus would do. 
We are called to walk in love as Jesus did.

I was in panic mode, overwhelmed by the flood of messages, opinions, and judgments. I called my Life Group leader, 
and she confirmed what my heart was already leaning toward: approach this with love. She said simply, “Tell them, Jesus loves you.”

But it frustrates me. Because my faith — my God - my faith — isn’t psychosis. It’s not insanity. It’s the very reason I’m alive today. 
It’s what carried me when nothing else made sense. To have that dismissed, reduced to a word meant to belittle and discredit, it hurts. 
It angers me. It makes me want to scream, “PUT SOME RESPECT HIM”

But then there’s this other side of me — the side that hears Jesus’ whisper: “Love them anyway.” 
And that’s the tension I feel pulled in. I don’t want to ignore the insult. I don’t want to water down the truth. 
But I also don’t want to give them the satisfaction of rage, or add fuel to their fire.

So I sit here, torn between frustration and love, between defending God’s name and reflecting His character. 
Maybe that’s what following Jesus has always meant — holding truth in one hand and love in the other, refusing to drop either, even when people spit in your face for it.

I know who I belong to. I know who saved me. And even if they call me crazy, delusional, or psychotic — I’d rather be “insane” for Jesus than sane without Him.

Lord, help me to love them anyway. Help me to respond with grace, even when my heart is heavy with hurt.
`

    },

    {
    id: 3,
    title: "The Year I Fell Behind",
    date: "August 16, 2025",
    excerpt: "Today I finally said it out loud, the thing that’s been gnawing at me for months: my gap year? It sucked....",
    content: `Today I finally said it out loud, the thing that’s been gnawing at me for months: my gap year? It sucked. Not in a cute, “I found myself” kind of way. 
    Not in a “look at me, eating avocado toast in Bali” way. Just… me. Messy, stuck, sometimes utterly miserable. It tore me down before it ever tried to build me up.
At first, I thought pressing pause on my life would feel freeing. Everyone else was sprinting: degrees, internships, paychecks, LinkedIn updates. 
And there I was… frozen. Terrifyingly still. Every day I stared at the clock thinking: “Am I failing? Am I broken?” The guilt was heavy — crushing even — because my mom, she had expectations. 
I had expectations. But I couldn’t fake it. I couldn’t run someone else’s race.

This year wasn’t about doing anything. It was about undoing. Undoing pressure. Undoing lies I’d told myself about what I’m worth. Undoing the version of me that just survived instead of lived. 
Little by little, in the quiet, I started taking my life back. Journaling through the tears. Praying when I felt like giving up. Showing up for myself when no one else noticed.
It was ugly. Painful. Lonely. And that’s exactly why it was honest. Because honesty hurts. But honesty frees. Freedom came in realizing I didn’t have to compare. 
I didn’t have to pretend my story looked like anyone else’s. I didn’t have to rush.

The “lost” time? Not lost. God is digging into me, pulling out the weeds, planting me deeper than I ever imagined. I was learning to breathe. To trust Him. To stop micromanaging my life like I had all the answers.
If I could scream a message at my past self it would be this: You are not behind. You are being re-rooted. Without God, you are nothing — and with Him, you are becoming.

I’ll stumble. 

I’ll fail. 

My daily rhythms aren’t perfect yet. But I’m done putting myself on trial. Their race isn’t mine. My path is mine. And even in the silence, God’s plan is moving, shaping me. 
Not in the way I expected, but in the way I need. He's working in the background, even when I can’t see it.

So here’s my promise: no more pressure. No more comparison. Just me, Him, and this messy, unglamorous, heartbreaking, beautiful work of becoming.

`
  
    },
  {
    id: 4,
    title: "Mission: Take My Life Back",
    date: "August 6, 2025",
    excerpt: "Today I woke up with a bold declaration in mind: take my life back. Bold, right? Almost noble. The kind of...",
    content: `Today I woke up with a bold declaration in mind: take my life back. Bold, right? Almost noble. 
    The kind of thing people say in TED Talks before dramatically revealing they once lived in a van or something. But unlike them, my dramatic reveal is that I couldn’t get out of bed at 9am like I planned. 
    My alarm went off, sure. But I hit snooze like it owed me money and finally peeled my face off the pillow at 11 — only because someone had the audacity to call me. 
    So… mission failed before it even started. But hey, I made breakfast.

Let me back up. For the last month and a half, I’ve been procrastinating with Olympic-level commitment. It’s not even conscious half the time. 
It’s like I’m floating through each day in neutral, feeding myself, showering occasionally, doomscrolling a lot. The scary part? That might be the only consistency in my life right now. 
Everything else is foggy. And not the romantic, mysterious kind of fog. More like there’s-a-sinkhole-under-the-road-but-the-mist-won’t-let-you-see-it kind of fog.

I’m stuck in this weird limbo. I’m not in school. I’m not employed. I’m not sure if I’m going to university next year — and the not knowing is tearing my insides apart. 
I already took a gap year after matric. That decision came with hope. It was supposed to be one year. One break. A time to breathe, figure things out, gather myself. 

But now?

My mom still doesn’t have a job. The financial weight is slowly flattening every option I thought I had. 
I’ve applied to over 500 jobs, no exaggeration. No responses. No interviews. Nothing that even smells like forward movement. And I have prayed. I’ve cried and prayed and pleaded with God more times than I can count. 
Still — silence. Or maybe just stillness. I don’t know which is worse. 

I think I’m grieving a version of my life that was supposed to happen by now. A version where I knew what came next.
Where I had a plan and enough resources to execute it. Where my mother was okay. Where I wasn’t waking up every day trying to invent meaning for myself like some desperate playwright with writer’s block.

God is either silent or not listening.
I’m not sure which is worse. I’ve been trying to take my life back, but it feels like I’m just running in circles.

This morning’s goal to "stop procrastinating" was me trying to yank the emergency brake on this slow, numbing descent. 
I have a meeting coming up on Friday with Sarah and Davin — mentors, kind of — and they expect me to come prepared. 
They want to see some exploration into backend logging and debugging techniques in the web app I’m building. It sounds manageable. And honestly, I do know a good amount about my software’s architecture. 
It’s not like I’m walking in blind. But I still feel unmoored. I hate when people tell me to “play around” without giving a clear direction. I’m a practical learner. I want tangible goals, structure, an outcome to aim for. 
Otherwise it just feels like throwing darts in a pitch-black room and pretending I’m improving my aim.

After breakfast, I watched an episode of Black-ish. It was comforting in that “my-life-is-chaotic-but-here’s-some-scripted-chaos” way. 
Showered. Sat at my desk. Did a bit of research. That was the high point of the day, honestly. The rest was just thinking. A lot of that lately.
I’m trying to figure out what I actually want. What I care about. What I’m passionate about. And it’s like trying to find a needle in a haystack that keeps growing.

I don’t want to be told to "set small goals" or "celebrate tiny wins." I’m not a toddler learning to use the potty. I don’t want fake trophies. 
I want to feel like I’m building toward something that actually matters. I swear, I’ve read all the productivity blogs. Made the to-do lists. Drunk the water. Taken the walks. 
Done the journaling (obviously). But you can’t build a staircase to nowhere. Outside of the slim, flickering hope of university next year — there’s just… nothing I actually care about. 
Nothing that gives me that spark. Everything else feels like empty calories. And I’m starving for something real.

So yeah. I tried to take my life back today. Tried. Maybe I’ll try again tomorrow. Or maybe I won’t. But at least I’ve written it down. That has to count for something.
`

  },
  {
    id: 5,
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
It’s feeling the heaviness of choices that seem harmless but are actually like adding bricks to your soul’s backpack.
It’s about the little things that creep in, like a slow leak in your tire. You don’t notice it at first, but eventually, you’re driving on rims and wondering why your ride feels so rough.

Knowing that even if culture claps for your choices, the Spirit might be grieving. That’s the part no one warns you about — the conviction that hits like a freight train over the “harmless” stuff.

Like - vape. Yes. Flavour air. I feel stupid even writing that, but here we are. I’m addicted to flavoured air and the illusion of relief.

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
    id: 6,
    title: "Refactoring Grace",
    date: "July 10, 2025",
    excerpt: "I’ve been thinking about how messy it is to forgive yourself when there’s no dramatic apology scene. No violin swell. Just you, sitting with the memory of who you were and...",
    content: `I’ve been thinking about how messy it is to forgive yourself when there’s no dramatic apology scene. No violin swell. Just you, sitting with the memory of who you were and crying.

    Remembering the things you said — sharp, performative, or desperate—and realizing you can’t go back and revise the version of you someone else still holds in their head.

If life was code, I’d fork my own timeline. Roll back to a cleaner commit. Refactor the parts where I reacted out of fear, insecurity, loneliness. But that’s not how this works. 
People don’t version control their hearts. So instead, I’ve been trying to practice a kind of grace that feels less like a churchy buzzword and more like survival. 
A real, unpretty kind of grace. One where I can admit: Yeah, I hurt someone. And yeah, I disappointed myself. And I still deserve space to grow.

It’s hard though. No one warns you how long shame lingers. You think it’ll be a quick patch, but it worms into everything. 
Makes you second-guess your tone in texts. Makes you re-read old conversations like they’re crime scenes. Makes you wonder if the best version of you already came and went, and now you’re just scrambling to clean up the emotional debt.

But grace isn’t neat. It’s not a spiritual Instagram post. It’s looking at the parts of you that caused damage and saying: I see why you acted like that. 
You were scared. You didn’t know better. You were trying to protect yourself. It’s painful. Unsexy. Necessary.

I’m still learning how to hold space for the girl I used to be. The one who overextended herself just to feel worthy. 
The one who mistook attention for care. The one who performed stability while quietly unraveling. She did her best. Even if her best caused chaos.

Refactoring grace means I stop trying to delete her.
And start integrating her into who I’m becoming.

So yeah — maybe I don’t need a rebrand. Maybe I just need to let all versions of me have a seat at the table. Let the code be messy. Let the history exist. 
Not because I’m proud of it, but because it’s honest. And healing, I think, is rooted in honesty but most importantly - rooted in Christ.

`
  },
  {
    id: 7,
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