import styles from "@/app/announce/request-android/page.module.css";

export default function RequestAndroid() {
  return (
    <main className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.h1}>안드로이드 베타 테스트 참여하기</h1>
        <div className={styles.content}>
          <p className={styles.p}>
            <strong>안녕하세요, 커플릭스입니다</strong>
          </p>
          <p className={styles.p}>
            현재 안드로이드 앱은 베타 테스트를 진행 중으로 정식 출시 예정에
            있습니다.
          </p>
          <p className={styles.p}>
            베타 버전의 사용을 원하시는 분께서는 아래 이메일로{" "}
            <strong>
              {"현재 기기에서 사용 중인 이메일 (필수* Google 계정)"}
            </strong>
            을 보내주시면 참여 안내를 드리도록 하겠습니다.
          </p>
          <br />
          <br />
          <br />
        </div>
        <a className={styles.button} href="mailto:official.couplix@gmail.com">
          이메일 보내기
        </a>
      </div>
    </main>
  );
}
