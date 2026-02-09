import { motion } from "framer-motion";
import { Plane, Triangle, Landmark, TowerControl, Castle, Waves } from "lucide-react";

const waypoints = [
  { icon: Plane, label: "Almaza Airport", desc: "Departure", position: "left-[5%] top-[45%]" },
  { icon: Triangle, label: "Pyramids & Sphinx", desc: "Face-to-face with eternity", position: "left-[20%] top-[25%]" },
  { icon: Landmark, label: "Grand Egyptian Museum", desc: "A modern marvel from above", position: "left-[38%] top-[15%]" },
  { icon: TowerControl, label: "Cairo Tower", desc: "The city's modern spike", position: "left-[55%] top-[30%]" },
  { icon: Castle, label: "The Citadel", desc: "Saladin's fortress on the hill", position: "left-[72%] top-[20%]" },
  { icon: Waves, label: "The Nile", desc: "Flying over the lifeblood of Egypt", position: "left-[90%] top-[40%]" },
];

const FlightPlanSection = () => {
  return (
    <section id="route" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            The Flight Plan
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Your <span className="text-gold-gradient italic">Route</span>
          </h2>
        </motion.div>

        {/* Route Line */}
        <div className="relative">
          {/* Horizontal gold line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {waypoints.map((wp, i) => (
              <motion.div
                key={wp.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary border border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:gold-glow transition-all duration-300">
                  <wp.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-medium text-foreground mb-1">
                  {wp.label}
                </h3>
                <p className="font-body text-xs text-muted-foreground">
                  {wp.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightPlanSection;
