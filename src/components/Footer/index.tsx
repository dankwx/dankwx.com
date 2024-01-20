import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        
        <div className={styles.footerWrapper}>
            <div className={styles.footerDescription}>
                <p>Orgulhosamente criado por Daniel Kondlatsch</p>
                <p>❤️</p>
            </div>
        </div>
        )
}