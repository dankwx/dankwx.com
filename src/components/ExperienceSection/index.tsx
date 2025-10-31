import { motion } from "framer-motion";
import { Briefcase, Award, ArrowDown } from "lucide-react";
import React, { useState } from "react";
import styles from "./ExperienceSection.module.scss";

interface Experience {
  company: string;
  logo: string;
  role: string;
  duration: string;
  description: string;
  technologies: string[];
}

export default function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  const experiences: Experience[] = [
    {
      company: "UnC - Atual",
      logo: "https://uni-contestado-site.s3.amazonaws.com/compressed/15211-1584478466055.jpg",
      role: "Full Stack Developer",
      duration: "",
      description: "Atualmente trabalhando como desenvolvedor full stack, desenvolvendo soluções com React no front-end e PostgreSQL no back-end, utilizando Docker para containerização.",
      technologies: ["React","TypeScript", "PostgreSQL", "Docker", "Node.js"]
    },
    {
      company: "Compass.uol - Sicredi",
      logo: "https://logodownload.org/wp-content/uploads/2017/11/sicredi-logo-1.png",
      role: "Analista de Sistemas",
      duration: "",
      description: "Atuei como desenvolvedor Front-end na equipe da Sicredi, migrando seu projeto inteiramente em Angular para React. Também criei pequenas features nas páginas de consulta por CPF.",
      technologies: ["React", "Angular", "Styled Components", "GitLab", "Scrum"]
    },
    {
      company: "Compass.uol - Poliedro",
      logo: "https://funlec.com.br/wp-content/uploads/2023/09/Logo_Poliedro_Horiz_SIST_ENSINO.png",
      role: "Analista de Sistemas",
      duration: "",
      description: "Atuei como shadow da equipe da Poliedro, onde fiz pequenas correções e implementações de features simples no sistema de livros PDF e provas online que o sistema de educação online Poliedro providencia.",
      technologies: ["React","TypeScript", "Styled Components", "Azure DevOps", "Scrum"]
    },
    {
      company: "Compass.uol",
      logo: "https://awsmp-logos.s3.amazonaws.com/c859e2b3-99ed-4dad-8ca5-5bbed6556ff0/efa7397e34f3d513cc3053f30b46c040.png",
      role: "Scholarship Program - React",
      duration: "",
      description: "Participei do programa de bolsas da Compass.uol focado em desenvolvimento React, onde aprendi fundamentos e boas práticas de desenvolvimento front-end, fui efetivado após ser aprovado na etapa final.",
      technologies: ["React", "JavaScript", "CSS", "Git"]
    }
  ];

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
    <section id="experiencias" className={styles.experience}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className={styles.header} variants={itemVariants}>
            <div className={styles.badge}>
              <Briefcase size={20} />
              <span>Experiência</span>
            </div>
            <h2>Experiência no Mercado</h2>
            <p>Trabalhei como desenvolvedor Front-End na Compass.uol, uma empresa de inovação tecnológica</p>
          </motion.div>

          <motion.div className={styles.experienceGrid} variants={itemVariants}>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={styles.experienceCard}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedExperience(exp)}
              >
                <div className={styles.cardHeader}>
                  <img src={exp.logo} alt={exp.company} />
                  <div className={styles.cardInfo}>
                    <h3>{exp.role}</h3>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                </div>
                <p className={styles.cardDescription}>{exp.description}</p>
                <div className={styles.technologies}>
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className={styles.projectsButton} variants={itemVariants}>
            <motion.a
              href="#projetos"
              className={styles.btn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowDown size={18} />
              Ver Projetos
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal for detailed experience view */}
      {selectedExperience && (
        <motion.div
          className={styles.modal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedExperience(null)}
        >
          <motion.div
            className={styles.modalContent}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className={styles.closeButton}
              onClick={() => setSelectedExperience(null)}
            >
              ×
            </button>
            <img src={selectedExperience.logo} alt={selectedExperience.company} />
            <h3>{selectedExperience.role}</h3>
            <p className={styles.company}>{selectedExperience.company}</p>
            <p className={styles.description}>{selectedExperience.description}</p>
            <div className={styles.technologies}>
              {selectedExperience.technologies.map((tech, index) => (
                <span key={index} className={styles.tech}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
