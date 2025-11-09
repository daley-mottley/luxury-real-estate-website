import PropertyCard from "./PropertyCard";
import penthouseImage from "@/assets/property-penthouse.jpg";
import villaImage from "@/assets/property-villa.jpg";
import mountainImage from "@/assets/property-mountain.jpg";

const properties = [
  {
    image: penthouseImage,
    title: "Skyline Penthouse",
    location: "Manhattan, New York",
    price: "$15,500,000",
    beds: 4,
    baths: 5,
    sqft: "5,200 sqft",
    featured: true,
  },
  {
    image: villaImage,
    title: "Mediterranean Villa",
    location: "Côte d'Azur, France",
    price: "$22,800,000",
    beds: 6,
    baths: 7,
    sqft: "8,500 sqft",
    featured: true,
  },
  {
    image: mountainImage,
    title: "Alpine Estate",
    location: "Aspen, Colorado",
    price: "$18,900,000",
    beds: 5,
    baths: 6,
    sqft: "7,200 sqft",
    featured: false,
  },
];

const FeaturedProperties = () => {
  return (
    <section id="properties" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            Featured <span className="text-gradient">Properties</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked selection of the world's most exceptional estates
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-luxury-gold hover:text-luxury-gold-light transition-smooth font-medium">
            View All Properties →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
