import Image from "next/image";
import styles from "@/app/page.module.css";
import LinkButtons from "@/components/common/linkButtons";
import Footer from "@/components/common/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.headerContainer}>
        <div className={styles.header}>
          <div className={styles.headerTitleSection}>
            <h3 className={styles.headerIntro}>
              네가 자꾸 보고 싶어서,
              <br />
              나를 보여주고 싶어져
            </h3>
            <h2 className={styles.headerSubtitle}>
              | 우리가 더 가까워지는 공간
            </h2>
            <h1 className={styles.headerTitle}>Couplix</h1>
            <LinkButtons />
          </div>
          <div className={styles.headerImageWrapper}>
            <Image
              className={styles.headerImage}
              src="/images/app-screens.png"
              alt="App Screen Image"
              fill
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </header>
      <div className={styles.introContainer}>
        <div className={styles.introContent}>
          <h2 className={styles.introTitle}>
            함께한 순간들은 <strong>차곡차곡 기록</strong>하고,
            <br />
            서로의 순간들은 <strong>주고받아</strong> 보세요
          </h2>
          <p className={styles.introDescription}>
            언제나 서로가 곁에 있음을 느낄 수 있을 거에요
          </p>
        </div>
      </div>
      <div className={styles.giveAndTakeContainer}>
        <div className={styles.giveAndTakeContent}>
          <div className={styles.giveAndTakeWrapper}>
            <div className={styles.giveAndTakeTextWrapper}>
              <h3 className={styles.giveAndTakeTitle}>주고받기</h3>
            </div>
            <div className={styles.giveAndTakeImageWrapper1}>
              <Image
                className={styles.giveAndTakeImage}
                src="/images/app-screen-1.png"
                alt="Give and Take Default"
                fill
                objectFit="contain"
                priority
              />
            </div>
          </div>
          <div className={styles.giveAndTakeWrapper}>
            <div className={styles.giveAndTakeImageWrapper2}>
              <Image
                className={styles.giveAndTakeImage}
                src="/images/app-screen-2.png"
                alt="Give and Take Filled"
                fill
                objectFit="contain"
                priority
              />
            </div>
            <div className={styles.giveAndTakeTextWrapper}>
              <p className={styles.giveAndTakeText}>
                서로가 주고받기를 완료해야
                <br />
                비로소 서로의 내용이 공개돼요
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.diaryContainer}>
        <div className={styles.diaryContent}>
          <div className={styles.diaryTextWrapper}>
            <h3 className={styles.diaryTitle}>기록하기</h3>
            <p className={styles.diaryText}>
              함께한 순간마다 기록을 남겨보세요
              <br />
              날짜별로 기록을 정리할 수 있어요
            </p>
          </div>
          <div className={styles.diaryImageWrapper}>
            <Image
              className={styles.diaryImage}
              src="/images/app-screen-3.png"
              alt="Diary"
              fill
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </div>
      <footer className={styles.footerContainer}>
        <h2 className={styles.footerTitle}>
          지금 바로 사랑하는 사람과 함께 시작해보세요
        </h2>
        <LinkButtons />
        <div className={styles.footerWrapper}>
          <Footer />
        </div>
      </footer>
    </main>
  );
}
