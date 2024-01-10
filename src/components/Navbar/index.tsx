import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <a className={styles.logo}>{"< />"}</a>
      <ul className={styles.navLinks}>
        <li>LinkedIn</li>
        <li>Github</li>
      </ul>
    </div>
  );
}
