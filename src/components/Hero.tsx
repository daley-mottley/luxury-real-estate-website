import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-luxury-estate.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 animate-fade-in">
          Exceptional Living
          <br />
          <span className="text-gradient">Refined by Excellence</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Discover extraordinary estates curated for those who demand nothing but the finest
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="luxuryOutline" size="xl">
            Explore Properties
          </Button>
          <Button variant="luxury" size="xl">
            Schedule Viewing
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#properties"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-luxury-gold transition-smooth animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default Hero;
