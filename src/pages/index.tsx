import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="임성윤 | Portfolio"
      description="임성윤(Limits1214)의 게임 클라이언트·엔진 개발 포트폴리오">
      <main className={styles.page}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>C++ GAME CLIENT · ENGINE</p>
          <Heading as="h1" className={styles.title}>
            임성윤
          </Heading>
          <p className={styles.nickname}>Limits1214</p>
          <p className={styles.aspiration}>
            동작하는 이유를 이해하고, 더 나은 방법을 고민합니다.
          </p>
          <p className={styles.description}>
            배우고 고민하고 경험한 것을 기록합니다.
          </p>
          <div className={styles.actions}>
            <Link
              className="button button--primary button--lg"
              to="/projects">
              Projects
            </Link>
            <Link
              className="button button--secondary button--lg"
              href="https://github.com/limits1214">
              GitHub
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
