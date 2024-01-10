import "../../assets/styles/reset.css"; // reset css
import styles from "./Home.module.scss";
import Navbar from "../../components/Navbar";
import PasswordProtection from "../PasswordProtection";

export default function Home() {
  return (
    <div className={styles.mainWrapper}>
      <PasswordProtection correctPassword={"danielzika@12"}>
        <Navbar />
        <div className={styles.home}>
          <div className={styles.description}>
            <a>Daniel</a>
            <a>Kondlatsch</a>
            <a>Web</a>
            <a>Developer</a>
          </div>
          <div className={styles.projects}>
            <a className={styles.projectsTitle}>Projetos</a>
            <div className={styles.projectsList}>
              <div className={styles.projectItem}>
                <a className={styles.projectNumber}>01</a>
                <a>Minecraft Smart House</a>
              </div>
              <div className={styles.projectItem}>
                <a className={styles.projectNumber}>02</a>
                <a>CopiaCola</a>
              </div>
            </div>
          </div>
        </div>
      </PasswordProtection>
    </div>
  );
}
