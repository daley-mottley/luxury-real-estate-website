const Footer = () => {
  return (
    <footer className="bg-luxury-charcoal text-luxury-ivory py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold text-gradient mb-4">LUXE ESTATES</h3>
            <p className="text-luxury-ivory/70 text-sm">
              Redefining luxury living through exceptional properties and unparalleled service.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Properties</h4>
            <ul className="space-y-2 text-sm text-luxury-ivory/70">
              <li><a href="#" className="hover:text-luxury-gold transition-smooth">For Sale</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-smooth">For Rent</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-smooth">Commercial</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-smooth">Investment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-luxury-ivory/70">
              <li><a href="#about" className="hover:text-luxury-gold transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-smooth">Our Team</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-smooth">Careers</a></li>
              <li><a href="#contact" className="hover:text-luxury-gold transition-smooth">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-luxury-ivory/70">
              <li><a href="#" className="hover:text-luxury-gold transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-smooth">Terms of Service</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-smooth">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-luxury-ivory/20 pt-8 text-center text-sm text-luxury-ivory/70">
          <p>© 2024 Luxe Estates. All rights reserved. Excellence in Luxury Real Estate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
