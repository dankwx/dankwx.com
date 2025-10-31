import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Lightbulb } from "lucide-react";
import React from "react";
import styles from "./ProjectsSection.module.scss";

// Import images
import minePrint from "../../assets/print.png";
import pettresPrint from "../../assets/pettres.png";
import copypasteSite from "../../Pages/Home/danlucopypaste.png";
import diarioPrint from "../../assets/diarioPrint.png";
import mirsuiPrint from "../../assets/mirsuiPrint.png";
import wiie from "../../assets/wiie.png";
import reactIcon from "../../assets/react.png";
import luaIcon from "../../assets/lua.png";
import nextjsIcon from "../../assets/nextjs-icon.png";
import typescriptIcon from "../../assets/ts-logo-128.png";
import postgresqlIcon from "../../assets/elephant.png";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: Array<{ name: string; icon?: string }>;
  github: string;
  demo?: string;
  featured?: boolean;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "Mirsui",
      description: "Rede social baseada em música. Uma plataforma completa onde usuários podem compartilhar suas músicas favoritas, descobrir novos artistas e conectar-se através da música.",
      image: mirsuiPrint,
      technologies: [
        { name: "Next.js", icon: nextjsIcon },
        { name: "React.js", icon: reactIcon },
        { name: "TypeScript", icon: typescriptIcon },
        { name: "PostgreSQL", icon: postgresqlIcon }
      ],
      github: "https://github.com/dankwx/Mirsui",
      demo: "https://www.mirsui.com/",
      featured: true
    },
    {
      title: "What if Internet ends",
      description: "Uma experiência interativa que explora cenários hipotéticos sobre o fim da internet. Um projeto criativo que combina storytelling e tecnologia web moderna.",
      image: wiie,
      technologies: [
        { name: "Next.js", icon: nextjsIcon },
        { name: "React.js", icon: reactIcon },
        { name: "TypeScript", icon: typescriptIcon }
      ],
      github: "https://github.com/dankwx/whatifinternetends",
      demo: "https://whatifinternetends.com/",
      featured: true
    },
    {
      title: "Minecraft Smart Hub",
      description: "Meu projeto mais ambicioso. Este projeto permite a interação de um mundo no Minecraft com a internet. Uma Smart House, só que no Minecraft.",
      image: minePrint,
      technologies: [
        { name: "React.js", icon: reactIcon },
        { name: "Lua", icon: luaIcon }
      ],
      github: "https://github.com/dankwx/minecraft-irl-interaction",
      featured: true
    },
    {
      title: "Controle de Vendas - Micro-empresa familiar",
      description: "Projeto feito para uma necessidade real, para a empresa de Tornearia do meu pai. Supri totalmente a necessidade de papéis, permitindo o controle eficiente de registro de vendas.",
      image: pettresPrint,
      technologies: [
        { name: "React.js", icon: reactIcon },
        { name: "Next.js", icon: nextjsIcon }
      ],
      github: "https://github.com/dankwx/sales-system-pettres",
      demo: "https://sales-system-pettres.vercel.app/",
      featured: true
    },
    {
      title: "CopiaCola",
      description: "Projeto feito para uma necessidade. Facilita a transferência de textos por telefone a computador e vice-versa, mantendo a estrutura do texto.",
      image: copypasteSite,
      technologies: [
        { name: "React.js", icon: reactIcon }
      ],
      github: "https://github.com/dankwx/copyPasteSite",
      demo: "https://danlu-copy-paste.vercel.app/"
    },
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
    <section id="projetos" className={styles.projects}>
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
              <Code size={20} />
              <span>Projetos</span>
            </div>
            <h2>Alguns dos meus Projetos</h2>
            <p>
              Todos meus projetos são de autoria própria, criados para resolver problemas reais
              ou explorar novas tecnologias. Cada um representa uma jornada de aprendizado.
            </p>
          </motion.div>

          <motion.div className={styles.projectsGrid} variants={itemVariants}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {project.featured && (
                  <div className={styles.featuredBadge}>
                    <Lightbulb size={16} />
                    Destaque
                  </div>
                )}
                
                <div className={styles.imageWrapper}>
                  <img src={project.image} alt={project.title} />
                  <div className={styles.imageOverlay}>
                    <div className={styles.projectLinks}>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.projectLink}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className={styles.projectLink}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                <div className={styles.projectInfo}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className={styles.technologies}>
                    {project.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className={styles.tech}>
                        {tech.icon && <img src={tech.icon} alt={tech.name} />}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className={styles.projectsNote} variants={itemVariants}>
            <div className={styles.noteIcon}>
              <Lightbulb size={24} />
            </div>
            <div className={styles.noteContent}>
              <h3>Projetos Pessoais De Autoria</h3>
              <p>
                Todos meus projetos que você vê aqui e no meu GitHub, nenhum deles é proveniente 
                de algum template pronto ou algo de algum curso da internet. Todos eles foram feitos 
                para alguma resolução de problema, utilidade ou hobby, todo design feito por conta própria.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
