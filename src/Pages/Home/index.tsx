import "../../assets/styles/reset.css"; // reset css
import styles from "./Home.module.scss";
import Navbar from "../../components/Navbar";
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
                Fascinado por programação, segurança web, experiência de usuário
                e acessibilidade
              </p>
              <p>
                <br />
                ˗ˏˋ ♡ ˎˊ˗
              </p>
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
          <div className={styles.projectsWrapper}>
            <div className={styles.titleSection}>
              <h1>Projetos</h1>
            </div>
            <hr />
            <div className={styles.projectItem}>
              <div className={styles.sectionLeft}>
                <p>Minecraft Smart Hub</p>
                <div className={styles.projectLinks}>
                  <div className={styles.linkItem}>
                    <img src={githubIcon} alt="" />
                    <a
                      href="https://github.com/dankwx/minecraft-irl-interaction"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>
                  <div className={styles.linkItem}>
                    <img src={websiteIco} alt="" />
                    <a href="https://www.google.com.br/" target="_blank">
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
                    >
                      GitHub
                    </a>
                  </div>
                  <div className={styles.linkItem}>
                    <img src={websiteIco} alt="" />
                    <a href="https://www.google.com.br/" target="_blank">
                      Website
                    </a>
                  </div>
                </div>
                <div className={styles.projectDescription}>
                  <p>
                    Este projeto permite a transferência fácil entre textos entre celulares e computadores.
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
            
            </div>
          </div>
        </div>
      </PasswordProtection>
    </div>
  );
}
