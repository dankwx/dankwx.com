import "../../assets/styles/reset.css"; // reset css
import styles from "./Home.module.scss";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <div className={styles.mainWrapper}>
      <Navbar />
      <div className={styles.home}>
        <h1>Daniel</h1>
        <h1>Kondlatsch</h1>
        <h1>Web</h1>
        <h1>Developer</h1>
      </div>
    </div>
  );
}
