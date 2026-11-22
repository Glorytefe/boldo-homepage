import Image from 'next/image';
import { Button } from '@/components/Button/Button';
import { BarChart } from '@/components/charts/BarChart';
import { Check } from '@/components/icons';
import { FeatureTabs } from './FeatureTabs';
import styles from './Features.module.scss';

const HEADING = 'We connect our customers with the best, and help them keep up-and stay open.';

const checklist = [
  'We connect our customers with the best.',
  'Advisor success customer launch party.',
  'Business-to-consumer long tail.',
];

export function Features() {
  return (
    <section id="features" className={styles.features} aria-label="Features">
      <div className={`${styles.row} ${styles.photoFirst}`}>
        <div className={styles.media}>
          <Image
            className={styles.photo}
            src="/images/feature-1.jpg"
            alt="Smiling man on a phone call at his desk"
            width={494}
            height={506}
            sizes="(min-width: 542px) 494px, 100vw"
          />
          <div className={`${styles.statCard} ${styles.statCardBars}`}>
            <BarChart
              className={styles.barChart}
              values={[-50, -29, 133, 92, 177, 125, 150, 68]}
              barWidth={11}
              gap={11.7}
              color="#0dbbfc"
              highlight={4}
              highlightColor="#0a2640"
            />
            <p className={styles.statValue}>30%</p>
            <p className={styles.statLabel}>More income in June</p>
          </div>
        </div>

        <div className={styles.text}>
          <h2 className={styles.heading}>{HEADING}</h2>
          <ul className={styles.checklist}>
            {checklist.map((item) => (
              <li key={item}>
                <span className={styles.check}>
                  <Check />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Button href="#cta" variant="secondary" className={styles.cta}>
            Start now
          </Button>
        </div>
      </div>

      <FeatureTabs heading={HEADING} />
    </section>
  );
}
