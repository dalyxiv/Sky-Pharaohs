import { motion } from "framer-motion";
import zenithImage from "@/assets/zenith-aircraft.jpg";

const FleetSection = () => {
  return (
    <section id="fleet" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            The Fleet
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Meet the <span className="text-gold-gradient italic">Zenith</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={zenithImage}
              alt="Zenith STOL CH750 aircraft on the tarmac"
              className="w-full aspect-video object-cover border-gold border"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-lg text-secondary-foreground leading-relaxed mb-8">
              Rugged, reliable, and built for observation. Its unique Short Take-Off
              and Landing (STOL) capabilities allow us to fly slower and lower than
              commercial jets, giving you the time to savor every detail of Old Cairo.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "STOL", label: "Capability" },
                { value: "2", label: "Passengers" },
                { value: "360°", label: "Visibility" },
                { value: "1hr", label: "Flight Time" },
              ].map((stat) => (
                <div key={stat.label} className="border border-border p-4">
                  <p className="font-display text-3xl text-gold-gradient font-semibold">
                    {stat.value}
                  </p>
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
