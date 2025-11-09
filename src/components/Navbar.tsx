import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl md:text-3xl font-serif font-bold text-gradient">
              LUXE ESTATES
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#properties" className="text-foreground/80 hover:text-luxury-gold transition-smooth">
              Properties
            </a>
            <a href="#about" className="text-foreground/80 hover:text-luxury-gold transition-smooth">
              About
            </a>
            <a href="#services" className="text-foreground/80 hover:text-luxury-gold transition-smooth">
              Services
            </a>
            <a href="#contact">
              <Button variant="luxury" size="lg">Contact Us</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#properties" className="block text-foreground/80 hover:text-luxury-gold transition-smooth">
              Properties
            </a>
            <a href="#about" className="block text-foreground/80 hover:text-luxury-gold transition-smooth">
              About
            </a>
            <a href="#services" className="block text-foreground/80 hover:text-luxury-gold transition-smooth">
              Services
            </a>
            <a href="#contact" className="block">
              <Button variant="luxury" className="w-full">Contact Us</Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
