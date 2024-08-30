import Image from "next/image";
import styles from "@/components/common/linkButtons.module.css";

export default function LinkButtons() {
  return (
    <div className={styles.container}>
      <a
        className={styles.button}
        href="https://apps.apple.com/kr/app/id6593673752"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.logoWrapper}>
          <Image
            src="/logo/app-store.png"
            alt="App Store Logo"
            className={styles.logo}
            fill
            objectFit="contain"
            priority
          />
        </div>
      </a>
      <a
        className={styles.button}
        href="/announce/request-android"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.logoWrapper}>
          <Image
            src="/logo/google-store.png"
            alt="App Store Logo"
            className={styles.logo}
            fill
            objectFit="contain"
            priority
          />
        </div>
      </a>
    </div>
  );
}
