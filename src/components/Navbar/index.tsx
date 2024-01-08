import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <a className={styles.logo}>{"< />"}</a>
      <ul className={styles.navLinks}>
        <li>Home</li>
        <li>Projetos</li>
      </ul>
    </div>
  );
}
