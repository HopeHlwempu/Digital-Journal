import picture1 from "@/assets/picture-1.jpeg";
import picture2 from "@/assets/picture-2.jpeg";
import picture3 from "@/assets/picture-3.jpeg";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Calendar } from "lucide-react";

const pictures = [
  {
    id: 1,
    src: picture1,
    caption: "Running fit",
    date: "Friday",
    reflection: "Putting in the sweat for a healthier me",
  },
  {
    id: 2,
    src: picture2,
    caption: "My dream home library",
    date: "9 August 2025",
    reflection: "Interior design goals ✦ where every book is a friend",
  },
  {
    id: 3,
    src: picture3,
    caption: "Mikayla! God's sunshine",
    date: "19 August 2025",
    reflection: "A bundle of joy and laughter, showing me how Kingdom friendship looks like",
  },
];

const currentSong = {
  title: "Safe Place",
  artist: "Lauren Milne",
  mood: "peaceful + reflective",
};

const PicturesSection = () => {
  return (
    <section className="py-16 px-6 bg-gradient-sanctuary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-medium text-foreground mb-4">
            Pictures of the Day
          </h2>
          <p className="font-lora text-muted-foreground">
            Moments captured with my iPhone
          </p>
        </div>

        {/* Song of the Day */}
        <div className="max-w-md mx-auto mb-12">
          <Card className="bg-primary-purple/10 border-primary-purple/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Heart className="h-4 w-4 text-primary-purple" />
                <span className="font-lora text-sm text-primary-purple uppercase tracking-wide">
                  Song of the Day
                </span>
              </div>
              <h3 className="font-playfair text-xl font-medium text-foreground mb-1">
                {currentSong.title}
              </h3>
              <p className="font-lora text-muted-foreground text-sm mb-3">
                by {currentSong.artist}
              </p>
              <div className="bg-primary-purple/20 rounded-full px-3 py-1 inline-block">
                <span className="font-lora text-xs text-primary-purple">
                  mood: {currentSong.mood}
                </span>
              </div>
              <p className="font-lora text-xs text-muted-foreground mt-3 italic">
                (Playing softly in the background of my heart)
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Pictures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pictures.map((picture, index) => (
            <Card 
              key={picture.id} 
              className="group overflow-hidden hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur-sm"
              style={{
                transform: `rotate(${Math.random() * 3 - 1.5}deg)`,
              }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={picture.src} 
                  alt={picture.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-playfair text-lg font-medium text-foreground">
                    {picture.caption}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span className="font-lora">{picture.date}</span>
                  </div>
                </div>
                <p className="font-lora text-sm text-muted-foreground italic">
                  {picture.reflection}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="font-lora text-sm text-muted-foreground italic">
            Capturing beauty in the ordinary ✦ where sacred meets simple
          </p>
        </div>
      </div>
    </section>
  );
};

export default PicturesSection;