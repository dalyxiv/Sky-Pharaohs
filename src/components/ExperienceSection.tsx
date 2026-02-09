import { motion } from "framer-motion";
import { Eye, Shield, Crown } from "lucide-react";
import cockpitView from "@/assets/cockpit-view.jpg";

const features = [
  {
    icon: Eye,
    title: "Unobstructed Views",
    description: "High-wing design ensures perfect photography from every angle.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Expert pilots and state-of-the-art maintenance protocols.",
  },
  {
    icon: Crown,
    title: "VIP Service",
    description: "Private departures from the exclusive Almaza Airport.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              The Experience
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-tight">
              An Aerial <span className="text-gold-gradient italic">Odyssey</span>
            </h2>
            <p className="font-body text-secondary-foreground text-lg leading-relaxed mb-10">
              Forget the bus. Escape the crowds. Sky Pharaohs offers an exclusive
              aerial odyssey aboard our fleet of Zenith aircraft. Designed for
              unparalleled visibility, our high-wing planes offer panoramic views
              that turn a sightseeing trip into a life-changing memory.
            </p>

            <div className="space-y-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded bg-secondary flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden border-gold border">
              <img
                src={cockpitView}
                alt="View from cockpit over Cairo and the Nile"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/30" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-primary/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
