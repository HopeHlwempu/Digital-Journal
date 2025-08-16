import heroImage from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Peaceful journal and coffee scene" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-sanctuary"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 leading-tight">
          Starr Journals
        </h1>
        <p className="font-lora text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
          A creative outlet for faith, writing, and the beautiful mess of life.
        </p>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <div className="w-12 h-px bg-primary/40"></div>
          <span className="font-lora italic text-sm">✦ where heart meets keyboard ✦</span>
          <div className="w-12 h-px bg-primary/40"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;