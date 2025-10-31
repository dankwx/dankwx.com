import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import React from "react";
import styles from "./HeroSection.module.scss";
import profileImg from "../../Pages/Home/test5.png";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.textContent} variants={itemVariants}>
            <motion.p className={styles.greeting} variants={itemVariants}>
              Olá, eu sou
            </motion.p>
            <motion.h1 className={styles.name} variants={itemVariants}>
              Daniel Kondlatsch
            </motion.h1>
            <motion.h2 className={styles.title} variants={itemVariants}>
              Front-End Developer
            </motion.h2>
            <motion.p className={styles.description} variants={itemVariants}>
              Comprometido com a programação, segurança web, experiência de
              usuário e acessibilidade. Criando interfaces modernas e funcionais
              desde 2012.
            </motion.p>
            
            <motion.div className={styles.actions} variants={itemVariants}>
              <motion.a
                href="#projetos"
                className={`${styles.btn} ${styles.btnPrimary}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowDown size={18} />
                Ver Projetos
              </motion.a>
              <motion.a
                href="mailto:danielpettres@gmail.com"
                className={`${styles.btn} ${styles.btnSecondary}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} />
                Contato
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div className={styles.imageContent} variants={itemVariants}>
            <motion.div
              className={styles.imageWrapper}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={profileImg} alt="Daniel Kondlatsch" />
              <div className={styles.imageBg}></div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <ArrowDown className={styles.scrollIcon} />
        </motion.div>
      </div>
    </section>
  );
}
