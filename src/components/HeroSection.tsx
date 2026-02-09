import { motion } from "framer-motion";
import heroImage from "@/assets/hero-pyramids.jpg";
import logoHorizontal from "@/assets/logo-horizontal-dark.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Aircraft flying over the Pyramids of Giza at golden hour"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </div>

      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-6 md:px-12 lg:px-24">
        <img src={logoHorizontal} alt="Sky Pharaohs" className="h-10 md:h-12" />
        <div className="hidden md:flex items-center gap-8 font-body text-sm tracking-widest uppercase text-foreground/80">
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#route" className="hover:text-primary transition-colors">Route</a>
          <a href="#fleet" className="hover:text-primary transition-colors">Fleet</a>
          <a href="#book" className="bg-gold-gradient text-primary-foreground px-6 py-2.5 font-medium tracking-wider hover:opacity-90 transition-opacity">
            Book Now
          </a>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-6"
        >
          Premium Aviation Tourism
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-wide text-foreground mb-6"
        >
          Rule the Skies.
          <br />
          <span className="text-gold-gradient font-medium italic">Witness History.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Experience Cairo's timeless wonders from the ultimate vantage point.
          Private air tours from Almaza Airport.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#book"
            className="inline-block bg-gold-gradient text-primary-foreground px-10 py-4 font-body font-semibold text-base tracking-widest uppercase gold-glow hover:opacity-90 transition-all"
          >
            Book Your Flight
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
