import { motion } from "framer-motion";
import { Github, Linkedin, BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import React from "react";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Blog", href: "https://blog.dankwx.com/", icon: BookOpen },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/daniel-kondlatsch/", icon: Linkedin },
    { name: "GitHub", href: "https://github.com/dankwx", icon: Github },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={styles.navbar}
    >
      <div className={styles.container}>
        <motion.div 
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className={styles.logoIcon}>DK</div>
          <span>Daniel Kondlatsch</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          {navLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={styles.navLink}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={18} />
                <span>{link.name}</span>
              </motion.a>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.mobileNavLink}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon size={18} />
                  <span>{link.name}</span>
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
