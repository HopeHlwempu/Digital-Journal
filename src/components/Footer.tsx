const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-gradient-sanctuary border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <blockquote className="font-playfair text-2xl md:text-3xl italic text-foreground mb-4 leading-relaxed">
            "You love so much, you love when love hurts."
          </blockquote>
          <p className="font-lora text-sm text-muted-foreground">
            — a gentle reminder for the tender-hearted
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-6 text-muted-foreground border-t border-border/20 pt-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="font-lora text-sm">Hope Logs</span>
          </div>
          <div className="text-xs opacity-50">•</div>
          <span className="font-lora text-sm">2024</span>
          <div className="text-xs opacity-50">•</div>
          <span className="font-lora text-sm italic">Written with ♡</span>
        </div>
        
        <div className="text-center mt-6">
          <p className="font-lora text-xs text-muted-foreground/70">
            "The Lord your God is with you, the Mighty Warrior who saves."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;