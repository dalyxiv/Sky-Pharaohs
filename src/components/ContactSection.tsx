import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, User, CalendarIcon, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [date, setDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
      setDate(undefined);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-gold-gradient mb-4">
            Contact Us
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Ready to rule the skies? Fill in the form below and our team will craft your perfect flight.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-body text-foreground flex items-center gap-2">
                <User className="h-4 w-4 text-primary" /> Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Your full name"
                required
                maxLength={100}
                className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="font-body text-foreground flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" /> Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                maxLength={255}
                className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
              />
            </div>
          </div>

          {/* Phone & Flight Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-body text-foreground flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" /> Phone / WhatsApp
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+20 1xx xxxx xxxx"
                required
                maxLength={20}
                className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label className="font-body text-foreground flex items-center gap-2">
                <CalendarIcon className="h-4 w-4 text-primary" /> Preferred Flight Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-card border-border hover:bg-muted",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-card border-border" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(d) => d < new Date()}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Other Info */}
          <div className="space-y-2">
            <Label htmlFor="info" className="font-body text-foreground flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-primary" /> Other Information
            </Label>
            <Textarea
              id="info"
              name="info"
              placeholder="Number of passengers, special requests, questions..."
              maxLength={1000}
              rows={4}
              className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary resize-none"
            />
          </div>

          <div className="text-center pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="bg-gold-gradient text-primary-foreground font-body font-semibold tracking-wider uppercase px-12 hover:opacity-90 transition-opacity"
            >
              {isSubmitting ? "Sending..." : (
                <>
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </>
              )}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
