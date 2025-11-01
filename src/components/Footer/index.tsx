import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/dankwx",
      icon: Github,
    },
    {
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/daniel-kondlatsch/",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:danielpettres@gmail.com",
      icon: Mail,
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.brand}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>DK</div>
              <span>Daniel Kondlatsch</span>
            </div>
            <p className={styles.tagline}>
              Transformando café em código
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Navegação</h4>
              <a href="#projetos">Projetos</a>
              <a href="https://blog.dankwx.com/" target="_blank" rel="noreferrer">Blog</a>
            </div>
            
            <div className={styles.linkGroup}>
              <h4>Contato</h4>
              <a href="mailto:danielpettres@gmail.com">danielpettres@gmail.com</a>
              <a href="https://www.linkedin.com/in/daniel-kondlatsch/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className={styles.social}>
            <h4>Redes Sociais</h4>
            <div className={styles.socialLinks}>
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.socialLink}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={20} />
                    <span className={styles.tooltip}>{link.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.bottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.copyright}>
            <span>© {currentYear} Daniel Kondlatsch. Todos os direitos reservados.</span>
          </div>
          <div className={styles.madeWith}>
            <span>Feito com</span>
            <Heart size={16} className={styles.heart} />
            <span>e muito café ☕</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}