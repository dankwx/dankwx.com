import "../../assets/styles/reset.css"; // reset css
import styles from "./Home.module.scss";
import Navbar from "../../components/Navbar";
import PasswordProtection from "../PasswordProtection";

export default function Home() {
  return (
    <div className={styles.mainWrapper}>
      <Navbar />
      <PasswordProtection correctPassword={"danielzika@12"}>
        <div className={styles.home}>
          <h1>Daniel</h1>
          <h1>Kondlatsch</h1>
          <h1>Web</h1>
          <h1>Developer</h1>
        </div>
      </PasswordProtection>
    </div>
  );
}
