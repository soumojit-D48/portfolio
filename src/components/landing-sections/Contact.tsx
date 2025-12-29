

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, MessageSquare } from "lucide-react";
import { toast } from 'sonner';
import TerminalWindow from "../terminal/TerminalWindow";

const contactInfo = [
  { icon: Mail, label: "email", value: "soumojitdas107@gmail.com", cmd: "mailto:", color: "text-terminal-cyan" },
  { icon: MapPin, label: "location", value: "Howrah, West Bengal, India", cmd: "gps --locate", color: "text-terminal-amber" },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Your message has been sent successfully. Awaiting response...");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <MessageSquare className="w-6 h-6 text-primary glow-text" />
            <span className="text-terminal-cyan">visitor@portfolio</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-terminal-amber">~/contact</span>
            <span className="text-muted-foreground">$</span>
            <span className="text-foreground">./send_message.sh</span>
            <span className="status-dot status-online" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2" style={{ textShadow: "0 0 10px hsl(120 100% 45% / 0.3)" }}>
            {"/* CONTACT */"}
          </h2>
          <p className="text-muted-foreground text-lg">
            <span className="text-terminal-cyan">//</span> Have a project in mind? Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <TerminalWindow title="contact_info.json">
              <div className="mb-3 text-xs flex items-center gap-2">
                <span className="status-dot status-info" />
                <span className="text-terminal-cyan">$</span>
                <span className="text-foreground">cat contact_info.json</span>
              </div>
              <pre className="text-sm">
                <span className="text-muted-foreground">{"{"}</span>
                {contactInfo.map((info, index) => (
                  <div key={info.label} className="ml-4 flex items-center gap-2">
                    <span className="status-dot status-online" />
                    <span className={info.color}>"{info.label}"</span>
                    <span className="text-muted-foreground">: </span>
                    <span className="text-foreground">"{info.value}"</span>
                    {index < contactInfo.length - 1 && <span className="text-muted-foreground">,</span>}
                  </div>
                ))}
                <span className="text-muted-foreground">{"}"}</span>
              </pre>
            </TerminalWindow>

            <TerminalWindow title="social_links.sh">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="status-dot status-online" />
                  <span className="text-terminal-cyan">$</span>
                  <span className="text-foreground">echo "Let's build something amazing together"</span>
                </div>
                <div className="text-muted-foreground pl-4 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-terminal-green">▸</span>
                    <span>Open to freelance opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-terminal-cyan">▸</span>
                    <span>Available for collaboration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-terminal-amber">▸</span>
                    <span>Response time: {"<"} 24 hours</span>
                  </div>
                </div>
              </div>
            </TerminalWindow>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TerminalWindow title="compose_message.sh">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs mb-1 flex items-center gap-2">
                    <span className="status-dot status-info" />
                    <span className="text-terminal-cyan">$</span>
                    <span className="text-muted-foreground">read -p "Your name: " NAME</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-3 py-2 text-sm rounded border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground font-mono"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs mb-1 flex items-center gap-2">
                    <span className="status-dot status-info" />
                    <span className="text-terminal-cyan">$</span>
                    <span className="text-muted-foreground">read -p "Your email: " EMAIL</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-3 py-2 text-sm rounded border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground font-mono"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs mb-1 flex items-center gap-2">
                    <span className="status-dot status-info" />
                    <span className="text-terminal-cyan">$</span>
                    <span className="text-muted-foreground">cat {"<<"} EOF {">"} message.txt</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-3 py-2 text-sm rounded border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground font-mono"
                    placeholder="Your message here..."
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-terminal-filled w-full py-3 px-4 rounded flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="status-dot status-warning" />
                      <span className="animate-pulse">Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span className="text-terminal-cyan">$</span>
                      ./send --now
                    </>
                  )}
                </motion.button>
              </form>
            </TerminalWindow>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;