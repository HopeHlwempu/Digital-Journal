import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-background border-t border-border/30">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Quote */}
        <div className="text-center">
          <blockquote className="font-playfair text-2xl md:text-3xl italic text-foreground leading-relaxed mb-2">
            "You love so much, you love when love hurts."
          </blockquote>
          <p className="font-lora text-sm text-muted-foreground">
            — Real by Kendrick Lamar
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center space-x-5">
          <a
            href="https://github.com/HopeHlwempu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-hope-magenta transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/hope-hlwempu-65a2a1338/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-hope-magenta transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:starrvansittert@gmail.com"
            className="text-muted-foreground hover:text-hope-magenta transition-colors"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://www.instagram.com/starr.hopey/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-hope-magenta transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Footer Info */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-muted-foreground border-t border-border/20 pt-6 text-sm font-lora">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>Starr Journals</span>
          </div>
          <span className="opacity-50">•</span>
          <span>2025</span>
          <span className="opacity-50">•</span>
          <span className="italic">Written with ♡</span>
        </div>

        {/* Bible Verse */}
        <div className="text-center">
          <p className="font-lora text-xs text-muted-foreground/70 italic">
            "If God is for us, who can be against us?" — Romans 8:31
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
