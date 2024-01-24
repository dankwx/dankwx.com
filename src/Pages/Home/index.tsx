import "../../assets/styles/reset.css"; // reset css
import styles from "./Home.module.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PasswordProtection from "../PasswordProtection";
import experienceIco from "../../assets/experience.png";
import efficiencyIco from "../../assets/efficiency.png";
import githubIcon from "../../assets/github-white.png";
import websiteIco from "../../assets/website-white.png";
import minePrint from "../../assets/print.png";
import reactICo from "../../assets/react.png";
import luaIco from "../../assets/lua.png";

export default function Home() {
  return (
    <div className={styles.mainWrapper}>
      <PasswordProtection correctPassword={"danielzika@12"}>
        <Navbar />
        <div className={styles.home}>
          <div className={styles.description}>
            <a>Daniel Kondlatsch</a>
            <a className={styles.descriptionSmall}>Front-End Developer</a>
            {/* {/* <a>Web</a> */}
          </div>
          <div className={styles.resume}>
            <div className={styles.resumeDescription}>
              <p>
                Comprometido com a programação, segurança web, experiência de usuário
                e acessibilidade
              </p>
              <hr />
            </div>
          </div>
          <div className={styles.badgesWrapper}>
            <div className={styles.badgeItem}>
              <img className={styles.badgeIco} src={experienceIco} alt="" />
              <p>1 Ano de Experiência no Mercado</p>
            </div>
            <div className={styles.badgeItem}>
              <img className={styles.badgeIco} src={efficiencyIco} alt="" />
              <p>Projetos Pessoais com Casos Reais</p>
            </div>
          </div>
          <div className={styles.aboutWrapper}>
            <div className={styles.profileSection}>
              <img
                src="https://i.pinimg.com/564x/b7/b3/c4/b7b3c4d875429de1696f17a32b5eb253.jpg"
                alt=""
              />
            </div>
            <div className={styles.aboutDescription}>
            <p>
              Estou criando sites para a internet, para meus jogos favoritos e
              para meus familiares desde 2012. Após começar minha graduação em 
              Engenharia de Software e conseguir minha primeira experiência
              no mercado como desenvolvedor React, fiquei mais maduro em
              questões de acessibilidade e segurança em páginas. Também
              consolidou ainda mais minha vontade de continuar desenvolvendo
              projetos na área de tecnologia
            </p>
            </div>
            
          </div>
          <div className={styles.projectsWrapper}>
            <div className={styles.titleSection}>
              <h1>Projetos</h1>
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
                  <div className={styles.linkItem}>
                    <img src={websiteIco} alt="" />
                    <a
                      href="https://www.google.com.br/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Website
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
            <div className={styles.projectItem}>
              <div className={styles.sectionLeft}>
                <p>CopiaCola</p>
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
                  <div className={styles.linkItem}>
                    <img src={websiteIco} alt="" />
                    <a
                      href="https://www.google.com.br/"
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
                    <div className={styles.badgeItem}>
                      <img src={luaIco} alt="" />
                      <p>Lua</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.sectionRight}>
                <img src="https://picsum.photos/1000/1200" alt="" />
              </div>
            </div>
            <div className={styles.projectItem}>
              <div className={styles.sectionLeft}>
                <p>Diário</p>
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
                  <div className={styles.linkItem}>
                    <img src={websiteIco} alt="" />
                    <a
                      href="https://www.google.com.br/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Website
                    </a>
                  </div>
                </div>
                <div className={styles.projectDescription}>
                  <p>
                    Um projeto simples que fiz a um tempo atrás usando React,
                    para eu guardar anotações e pensamentos, não contém
                    informações pessoais ou sensíveis.
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
                <img src="https://picsum.photos/1000/1300" alt="" />
              </div>
            </div>
          </div>
          <div className={styles.slideWrapper}></div>
          <Footer />
        </div>
      </PasswordProtection>
    </div>
  );
}
