import styles from "./Navbar.module.scss";
import linkedinIco from "../../assets/linkedinIco.png";
import githubIco from "../../assets/github.png";

export default function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <a className={styles.logo}>{"< />"}</a>
      <ul className={styles.navLinks}>
        <li>
          <img className={styles.socialIco} src={linkedinIco} alt="" />
          <a
            href="https://www.linkedin.com/in/daniel-kondlatsch/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <img className={styles.socialIco} src={githubIco} alt="" />
          <a href="https://github.com/dankwx" target="_blank">
            Github
          </a>
        </li>
      </ul>
    </div>
  );
}
