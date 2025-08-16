const AboutSection = () => {
  return (
    <section className="py-16 px-6 bg-gradient-sanctuary">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-medium text-foreground mb-8">
          About This Blog
        </h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="font-lora text-lg leading-relaxed text-muted-foreground mb-6">
            ✨ Welcome to my little corner of chaos and clarity. This is where I spill the raw, 
            unfiltered stuff — faith, tech, and the awkwardly beautiful mess of growing closer to God 
            while surviving life as a baby developer. Around here, debugging isn’t just for code, 
            it’s therapy. Every bug I squash feels a little like healing. And those broken deployments? 
            Just holy reminders that grace still runs in the background, even when I crash.
          </p>
          
          <p className="font-lora text-lg leading-relaxed text-muted-foreground mb-6">
            For developers fighting imposter syndrome, believers wrestling doubt, or anyone just surviving life’s chaos — this journal is your ER. 
            A place for messy truths, tiny wins, hard questions, and a little grace that shows up whether you’re ready or not.
          </p>
          
          <div className="flex items-center justify-center gap-3 mt-8 text-primary">
            <div className="w-8 h-px bg-primary/50"></div>
            <span className="font-playfair italic text-xl">✦</span>
            <div className="w-8 h-px bg-primary/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;