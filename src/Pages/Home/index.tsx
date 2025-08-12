import "../../assets/styles/reset.css";
import { motion } from "framer-motion";
import React from "react";
import styles from "./Home.module.scss";

// Import modern components
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import ExperienceSection from "../../components/ExperienceSection";
import ProjectsSection from "../../components/ProjectsSection";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <motion.div 
      className={styles.mainWrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Navbar />
      <main className={styles.main}>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <Footer />
    </motion.div>
  );
}
