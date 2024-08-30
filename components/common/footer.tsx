import styles from "@/components/common/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <a href="/doc/terms" target="_blank" rel="noopener noreferrer">
          <p className={styles.label}>이용약관</p>
        </a>
        <div className={styles.divider} />
        <a
          href="/doc/privacy-and-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={styles.label}>개인정보처리방침</p>
        </a>
        <div className={styles.divider} />
        <a
          className={styles.button}
          href="mailto:official.couplix@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={styles.label}>제휴문의</p>
        </a>
      </div>
      <p className={styles.copyRight}>© 2024 Couplix. All rights reserved.</p>
    </div>
  );
}
