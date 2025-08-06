const moodItems = [
  {
    label: "Current Mood",
    content: "Present + Numb",
    color: "bg-primary/10 border-primary/30 text-primary"
  },
  {
    label: "Verse of the Week",
    content: "Galations 5:22-23",
    color: "bg-secondary/20 border-secondary/40 text-secondary-foreground"
  },
  {
    label: "Currently Listening",
    content: "Elohim by Sondae",
    color: "bg-accent/10 border-accent/30 text-accent"
  },
  {
    label: "Dreaming of",
    content: "Movement + Meaning",
    color: "bg-muted border-muted-foreground/20 text-muted-foreground"
  },
  {
    label: "Today's Prayer",
    content: "Clarity tomorrow",
    color: "bg-primary/5 border-primary/20 text-foreground"
  },
  {
    label: "Learning",
    content: "Slowness + Strength",
    color: "bg-secondary/15 border-secondary/30 text-secondary-foreground"
  }
];

const MoodBoard = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-medium text-center text-foreground mb-12">
          Current Mood Board
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {moodItems.map((item, index) => (
            <div
              key={index}
              className={`
                p-4 rounded-lg border-2 border-dashed transition-all duration-300 
                hover:rotate-1 hover:scale-105 hover:shadow-soft
                ${item.color}
              `}
              style={{
                transform: `rotate(${Math.random() * 4 - 2}deg)`,
              }}
            >
              <div className="text-xs font-lora uppercase tracking-wide opacity-70 mb-2">
                {item.label}
              </div>
              <div className="font-playfair text-lg font-medium">
                {item.content}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="font-lora text-sm text-muted-foreground italic">
            Sticky notes from the heart ✦ updated as I grow
          </p>
        </div>
      </div>
    </section>
  );
};

export default MoodBoard;