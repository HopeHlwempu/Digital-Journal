const AboutSection = () => {
  return (
    <section className="py-16 px-6 bg-gradient-sanctuary">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-medium text-foreground mb-8">
          About This Blog
        </h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="font-lora text-lg leading-relaxed text-muted-foreground mb-6">
            This is a space for honesty — raw, unfiltered thoughts about faith, 
            technology, and the messy, beautiful process of growing closer to God 
            while navigating the digital world as a young developer. Here, debugging code becomes a metaphor 
            for spiritual healing, and every broken deployment is a reminder that 
            grace covers our mistakes.
          </p>
          
          <p className="font-lora text-lg leading-relaxed text-muted-foreground mb-6">
            Whether you're a developer wrestling with imposter syndrome, a believer 
            struggling with doubt, navigating heartbreak, or simply trying to stay afloat—this journal is for you. 
            It’s a quiet space to process emotions, celebrate small victories, ask hard questions, and remember that we’re not alone in any of it. 
            Rooted in faith but open to the full human experience, this is a space for honesty, healing, and grace—wherever you’re at on the journey.
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