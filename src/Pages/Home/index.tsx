import "../../assets/styles/reset.css"; // reset css
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import profileImg from "./profile3.jpg";
import experienceIco from "../../assets/experience.png";
import efficiencyIco from "../../assets/efficiency.png";
import githubIcon from "../../assets/github-white.png";
import websiteIco from "../../assets/website-white.png";
import nextjsIco from "../../assets/nextjs-icon.png"
import minePrint from "../../assets/print.png";
import pettresPrint from "../../assets/pettres.png"
import copypasteSite from "./danlucopypaste.png";
import diarioPrint from "../../assets/diarioPrint.png";
import reactICo from "../../assets/react.png";
import luaIco from "../../assets/lua.png";
import { useState, useEffect } from "react";
import React from "react";
import styles from "./Home.module.scss";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  function isScreenSmall() {
    return window.innerWidth <= 576;
  }
  const shouldRenderComponent = isScreenSmall();

  //

  // Função para pré-carregar as imagens do modal
  const preloadImages = () => {
    const imageUrls = [
      'https://funlec.com.br/wp-content/uploads/2023/09/Logo_Poliedro_Horiz_SIST_ENSINO.png',
      'https://logodownload.org/wp-content/uploads/2017/11/sicredi-logo-1.png',
    ];

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  };

  useEffect(() => {
    preloadImages();
  }, []);

  return (
    <div className={styles.mainWrapper}>
      <Navbar />
      <div className={styles.home}>
        <div className={styles.description}>
          {shouldRenderComponent && <p className={styles.name}>Oi. sou</p>}
          <p className={styles.name}>Daniel Kondlatsch</p>
          <p className={styles.descriptionSmall}>Front-End Developer</p>
          {/* {/* <a>Web</a> */}
        </div>
        <div className={styles.resume}>
          <div className={styles.resumeDescription}>
            <p>
              Comprometido com a programação, segurança web, experiência de
              usuário e acessibilidade
            </p>
            <hr />
          </div>
        </div>
        <div className={styles.badgesWrapper}>
          <div className={styles.badgeItem} onClick={handleModalOpen}>
            <img className={styles.badgeIco} src={experienceIco} alt="" />
            <p className={styles.experienceModal}>
              1 Ano de Experiência no Mercado
            </p>
          </div>
          {/* Renderize o Modal com as informações desejadas */}
          {isModalOpen && (
            <div className={styles.modalOverlay} onClick={handleModalClose}>
              <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
              >
                <span className={styles.closeButton} onClick={handleModalClose}>
                  {/* botao de fechar  &times; */}&times;
                </span>
                <p className={styles.modalTitle}>
                  Minhas experiências de trabalho
                </p>
                <p className={styles.modalDescription}>
                  Trabalhei 1 ano como desenvolvedor Front-End na Compass.uol,
                  uma empresa de inovação tecnológica. Minha tarefas, em
                  detalhe, foram:
                </p>

                <div className={styles.experienceWrapper}>
                  <img
                    src="https://funlec.com.br/wp-content/uploads/2023/09/Logo_Poliedro_Horiz_SIST_ENSINO.png"
                    alt=""
                  />
                  <p className={styles.experienceTitle}>
                    Shadow na equipe da Poliedro
                  </p>

                  <p className={styles.experienceDescription}>
                    {" "}
                    Atuei por <strong>6 meses</strong> como shadow da equipe da
                    Poliedro, onde fiz pequenas correções e implementações de
                    features simples no sistema de livros PDF e provas online
                    que o sistema de educação online Poliedro providencia.{" "}
                    <br />
                    Usei <strong>React</strong>,{" "}
                    <strong>Styled Components</strong> e<strong> Scrum</strong>{" "}
                    como metodologia ágil pelo sistema
                    <strong> Azure DevOps</strong> (Kanbam, Pipelines e Git) da
                    Microsoft.
                    <hr />
                  </p>
                </div>
                <div className={styles.experienceWrapper}>
                  <img
                    src="https://logodownload.org/wp-content/uploads/2017/11/sicredi-logo-1.png"
                    alt=""
                  />
                  <p className={styles.experienceTitle}>
                    Front-end Developer na equipe da Sicredi
                  </p>

                  <p className={styles.experienceDescription}>
                    {" "}
                    Atuei por <strong>6 meses</strong> como desenvolvedor
                    Front-end na equipe da Sicredi, migrando seu projeto
                    inteiramente em
                    <strong> Angular</strong>, para React. Também criei pequenas
                    features nas páginas de consulta por CPF. Utilizei{" "}
                    <strong>React</strong>, <strong>Styled Components</strong>{" "}
                    com versionamento e controle de Pipelines pelo{" "}
                    <strong>GitLab</strong>, também utilizei{" "}
                    <strong>Scrum</strong> como metodologia ágil da equipe.
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className={styles.badgeItem}>
            <img className={styles.badgeIco} src={efficiencyIco} alt="" />
            <p>Projetos Pessoais com Casos Reais</p>
          </div>
        </div>
        <div className={styles.aboutWrapper}>
          <div className={styles.profileSection}>
            <img
              src={profileImg}
              alt=""
            />
          </div>
          <div className={styles.aboutDescription}>
            <p>
              Estou criando sites para a internet, para meus jogos favoritos e
              para meus familiares desde 2012. Após começar minha graduação em
              Engenharia de Software e conseguir minha primeira experiência no
              mercado como desenvolvedor React, fiquei mais maduro em questões
              de acessibilidade e segurança em páginas. Também consolidou ainda
              mais minha vontade de continuar desenvolvendo projetos na área de
              tecnologia
            </p>
          </div>
        </div>
        <div className={styles.projectsWrapper}>
          <div className={styles.titleSection}>
            <h1>Alguns dos meus Projetos</h1>
          </div>
          <div className={styles.projectItem}>
            <div className={styles.sectionLeft}>
              <p>Minecraft Smart Hub</p>
              <div className={styles.projectLinks}>
                <div className={styles.linkItem}>
                  <img src={githubIcon} alt="" />
                  <a
                    href="https://github.com/dankwx/minecraft-irl-interaction"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div className={styles.projectDescription}>
                <p>
                  Meu projeto mais ambicioso. Este projeto permite a interação
                  de um mundo no Minecraft com a internet. Uma Smart House, só
                  que no Minecraft
                </p>
                <div className={styles.projectBadges}>
                  <div className={styles.badgeItem}>
                    <img src={reactICo} alt="" />
                    <p>React.js</p>
                  </div>
                  <div className={styles.badgeItem}>
                    <img src={luaIco} alt="" />
                    <p>Lua</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sectionRight}>
              <img src={minePrint} alt="" />
            </div>
          </div>
          <hr />
          <div className={styles.projectItem}>
            <div className={styles.sectionLeft}>
              <p>Sistema de Controle de Vendas</p>
              <div className={styles.projectLinks}>
                <div className={styles.linkItem}>
                  <img src={githubIcon} alt="" />
                  <a
                    href="https://github.com/dankwx/sales-system-pettres"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
                <div className={styles.linkItem}>
                  <img src={websiteIco} alt="" />
                  <a
                    href="https://sales-system-pettres.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Website
                  </a>
                </div>
              </div>
              <div className={styles.projectDescription}>
                <p>
                  Este é um projeto feito para uma necessidade real, para a empresa de Tornearia do meu pai,
                  que fazia o registro de vendas e recibos através de notas físicas, e com este projeto,
                  supri totalmente a necessidade de papéis, permitindo o controle eficiente de registro
                  de vendas.
                  Providenciei o link para o repositório do projeto, mas criei um novo repositório privado em que dei o deploy para meu
                  pai utilizar. O Projeto é totalmente seguro com acesso restrito e com middleware robusto.
                </p>
                <div className={styles.projectBadges}>
                  <div className={styles.badgeItem}>
                    <img src={reactICo} alt="" />
                    <p>React.js</p>
                  </div>
                  <div className={styles.badgeItem}>
                    <img src={nextjsIco} alt="" />
                    <p>Next.js</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sectionRight}>
              <img src={pettresPrint} alt="" />
            </div>
          </div>
          <hr />
          <div className={styles.projectItem}>
            <div className={styles.sectionLeft}>
              <p>CopiaCola</p>
              <div className={styles.projectLinks}>
                <div className={styles.linkItem}>
                  <img src={githubIcon} alt="" />
                  <a
                    href="https://github.com/dankwx/copyPasteSite"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
                <div className={styles.linkItem}>
                  <img src={websiteIco} alt="" />
                  <a
                    href="https://danlu-copy-paste.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Website
                  </a>
                </div>
              </div>
              <div className={styles.projectDescription}>
                <p>
                  Projeto feito para uma necessidade. Facilita a transferência
                  de textos por telefone a computador e vice-versa, mantendo a
                  estrutura do texto.
                </p>
                <div className={styles.projectBadges}>
                  <div className={styles.badgeItem}>
                    <img src={reactICo} alt="" />
                    <p>React.js</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sectionRight}>
              <img src={copypasteSite} alt="" />
            </div>
          </div>
          <hr />
          <div className={styles.projectItem}>
            <div className={styles.sectionLeft}>
              <p>Diário</p>
              <div className={styles.projectLinks}>
                <div className={styles.linkItem}>
                  <img src={githubIcon} alt="" />
                  <a
                    href="https://github.com/dankwx/sitezin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
                <div className={styles.linkItem}>
                  <img src={websiteIco} alt="" />
                  <a
                    href="https://sitezin-sooty.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Website
                  </a>
                </div>
              </div>
              <div className={styles.projectDescription}>
                <p>
                  Um projeto simples que fiz a um tempo atrás usando React, para
                  eu guardar anotações e pensamentos, não contém informações
                  pessoais ou sensíveis.
                </p>
                <div className={styles.projectBadges}>
                  <div className={styles.badgeItem}>
                    <img src={reactICo} alt="" />
                    <p>React.js</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sectionRight}>
              <img src={diarioPrint} alt="" />
            </div>
          </div>
        </div>
        {/* <div className={styles.slideWrapper}></div> */}
        <Footer />
      </div>
    </div>
  );
}
