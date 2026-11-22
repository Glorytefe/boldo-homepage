import { BarChart } from '@/components/charts/BarChart';
import { DonutChart } from '@/components/charts/DonutChart';
import styles from './HeroGraphic.module.scss';

const progressBars = [
  { label: '80%', width: '85%', color: '#8fb6d5' },
  { label: '30%', width: '25%', color: '#0dbbfc' },
  { label: '100%', width: '100%', color: '#ffffff' },
  { label: '75%', width: '80%', color: '#65e4a3' },
];

function WindowDots() {
  return (
    <span className={styles.dots}>
      <span />
      <span />
      <span />
    </span>
  );
}

export function HeroGraphic({ className = '' }: { className?: string }) {
  return (
    <div className={`${styles.graphic} ${className}`} aria-hidden="true">
      <div className={`${styles.card} ${styles.progress}`}>
        <WindowDots />
        <ul className={styles.rows}>
          {progressBars.map((bar) => (
            <li key={bar.label} className={styles.row}>
              <span className={styles.rowLabel} />
              <span className={styles.track}>
                <span style={{ width: bar.width, background: bar.color }} />
              </span>
              <span className={styles.rowValue}>{bar.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`${styles.card} ${styles.bars}`}>
        <WindowDots />
        <BarChart
          className={styles.barChart}
          values={[-23, -13, 62, 43, 83, 59, 70, 32]}
          barWidth={9}
          gap={9.6}
          color="#0dbbfc"
          highlight={4}
          highlightColor="#95abbc"
          rounded
        />
      </div>

      <div className={`${styles.card} ${styles.donut}`}>
        <WindowDots />
        <div className={styles.donutBody}>
          <DonutChart
            className={styles.donutChart}
            baseColor="#0a2640"
            startAngle={210}
            segments={[
              { percent: 35, color: '#0dbbfc' },
              { percent: 30, color: '#69e6a6' },
            ]}
          />
          <span className={styles.lines}>
            <span />
            <span />
            <span />
          </span>
        </div>
      </div>
    </div>
  );
}
