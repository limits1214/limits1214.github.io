import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';

import {projects} from '@site/src/data/projects';
import styles from '../section.module.css';

export default function Projects(): React.JSX.Element {
  const {withBaseUrl} = useBaseUrlUtils();

  return (
    <Layout
      title="Projects"
      description="Limits1214가 참여한 프로젝트와 기술 사례">
      <main className={styles.page}>
        <div className={styles.content}>
          <Heading as="h1" className={styles.title}>
            Projects
          </Heading>
          <p className={styles.description}>
            프로젝트 단위로 전체 맥락을 소개하고, 내부에서 기술 분야별
            사례를 분류합니다.
          </p>

          <section className={styles.grid} aria-label="프로젝트 목록">
            {projects.map((project) => (
              <Link
                key={project.slug}
                className={`${styles.card} ${styles.projectCard}`}
                to={`/projects/${project.slug}`}>
                {project.thumbnail && (
                  <img
                    className={styles.cardThumbnail}
                    src={withBaseUrl(project.thumbnail)}
                    alt={project.thumbnailAlt ?? `${project.title} 대표 화면`}
                    width={640}
                    height={360}
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <div className={styles.cardContent}>
                  <div>
                    <Heading as="h2" className={styles.cardTitle}>
                      {project.title}
                    </Heading>
                    <p className={styles.cardPeriod}>{project.period}</p>
                    <p className={styles.cardDescription}>
                      {project.description}
                    </p>
                  </div>
                  <span className={styles.cardLink}>프로젝트 보기 →</span>
                </div>
              </Link>
            ))}
          </section>
        </div>
      </main>
    </Layout>
  );
}
