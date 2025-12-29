
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Terminal } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-muted-foreground text-sm font-mono"
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-primary">$</span>
            <span>echo "© {currentYear} Soumojit Das. MIT License."</span>
          </motion.div>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/soumojitdas", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/soumojitdas", label: "LinkedIn" },
              { icon: Twitter, href: "https://x.com/soumojitdas", label: "X" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        <motion.pre
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-center text-xs text-muted-foreground hidden md:block"
        >
{`┌─────────────────────────────────────────────────────────────────┐
│  Made with ❤️ and lots of ☕ | Built with Next.js + Tailwind     │
│  Source: github.com/soumojit-D48/portfolio                       │
└─────────────────────────────────────────────────────────────────┘`}
        </motion.pre>
      </div>
    </footer>
  );
};

export default Footer;
