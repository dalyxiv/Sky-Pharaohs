import logoDark from "@/assets/logo-dark.png";

const FooterSection = () => {
  return (
    <footer id="book" className="section-padding bg-card border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <img src={logoDark} alt="Sky Pharaohs" className="h-24 mx-auto mb-10" />

        <div className="flex flex-wrap items-center justify-center gap-8 mb-12 font-body text-sm tracking-widest uppercase text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Flight Packages</a>
          <span className="text-border hidden md:inline">|</span>
          <a href="#" className="hover:text-primary transition-colors">Gift Cards</a>
          <span className="text-border hidden md:inline">|</span>
          <a href="#" className="hover:text-primary transition-colors">Pilot Bios</a>
          <span className="text-border hidden md:inline">|</span>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="w-24 h-px bg-primary mx-auto mb-8" />

        <p className="font-body text-xs text-muted-foreground tracking-wider">
          © 2026 Sky Pharaohs Aviation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
