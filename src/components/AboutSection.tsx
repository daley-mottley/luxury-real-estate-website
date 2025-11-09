import { Award, Shield, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Unparalleled Expertise",
    description: "Decades of experience in luxury real estate, serving distinguished clientele worldwide.",
  },
  {
    icon: Shield,
    title: "Discretion Assured",
    description: "Complete confidentiality and privacy for every transaction, protecting your interests.",
  },
  {
    icon: TrendingUp,
    title: "Investment Excellence",
    description: "Strategic guidance to maximize your real estate portfolio's value and potential.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Where Luxury Meets <span className="text-gradient">Legacy</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              For over three decades, Luxe Estates has redefined luxury real estate, curating 
              exceptional properties for the world's most discerning clients. Our commitment to 
              excellence, discretion, and personalized service has established us as the premier 
              choice in luxury property acquisition.
            </p>
            <p className="text-lg text-muted-foreground">
              Each property in our portfolio represents not just a home, but a statement of 
              refined taste and elevated living. We don't simply sell properties—we facilitate 
              the realization of extraordinary lifestyles.
            </p>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex gap-4 p-6 bg-background rounded-lg border border-border hover:border-luxury-gold transition-smooth"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg luxury-gradient flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
