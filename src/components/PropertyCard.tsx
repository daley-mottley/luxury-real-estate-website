import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square } from "lucide-react";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  featured?: boolean;
}

const PropertyCard = ({ 
  image, 
  title, 
  location, 
  price, 
  beds, 
  baths, 
  sqft,
  featured = false 
}: PropertyCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:border-luxury-gold transition-smooth cursor-pointer">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
        />
        {featured && (
          <Badge className="absolute top-4 left-4 luxury-gradient border-0 text-foreground">
            Featured
          </Badge>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-serif font-semibold mb-2 group-hover:text-luxury-gold transition-smooth">
            {title}
          </h3>
          <div className="flex items-center text-muted-foreground mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>
          <p className="text-3xl font-serif font-bold text-luxury-gold">{price}</p>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-border pt-4">
          <div className="flex items-center gap-2">
            <Bed className="h-4 w-4" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="h-4 w-4" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center gap-2">
            <Square className="h-4 w-4" />
            <span>{sqft}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;
