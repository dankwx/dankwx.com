import "../../assets/styles/reset.css"; // reset css
import styles from "./Home.module.scss";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <div className={styles.mainWrapper}>
      <Navbar />
    </div>
  );
}
