'use client';

import Image from 'next/image';
import { useRef, useState, type KeyboardEvent } from 'react';
import { DonutChart } from '@/components/charts/DonutChart';
import { Eye, Feather, Sun } from '@/components/icons';
import { featureTabs } from '@/content/featureTabs';
import rowStyles from './Features.module.scss';
import styles from './FeatureTabs.module.scss';

const icons = { feather: Feather, eye: Eye, sun: Sun };
const shareColors = ['#0dbbfc', '#69e6a6', '#c4c4c4'];

export function FeatureTabs({ heading }: { heading: string }) {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = featureTabs[selected];

  const select = (index: number) => {
    const next = (index + featureTabs.length) % featureTabs.length;
    setSelected(next);
    tabRefs.current[next]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const moves: Record<string, number> = {
      ArrowDown: selected + 1,
      ArrowRight: selected + 1,
      ArrowUp: selected - 1,
      ArrowLeft: selected - 1,
      Home: 0,
      End: featureTabs.length - 1,
    };
    if (!(event.key in moves)) return;
    event.preventDefault();
    select(moves[event.key]);
  };

  return (
    <div className={rowStyles.row}>
      <div className={rowStyles.text}>
        <h2 className={rowStyles.heading}>{heading}</h2>
        <div
          role="tablist"
          aria-label="Feature highlights"
          aria-orientation="vertical"
          className={styles.tabs}
          onKeyDown={handleKeyDown}
        >
          {featureTabs.map((tab, i) => {
            const Icon = icons[tab.icon];
            const isSelected = i === selected;
            return (
              <button
                key={tab.label}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                id={`feature-tab-${i}`}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls="feature-panel"
                tabIndex={isSelected ? 0 : -1}
                className={styles.tab}
                onClick={() => setSelected(i)}
              >
                <Icon />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        id="feature-panel"
        role="tabpanel"
        aria-labelledby={`feature-tab-${selected}`}
        className={`${rowStyles.media} ${rowStyles.mediaNarrow}`}
      >
        <div className={styles.photos}>
          {featureTabs.map((tab, i) => (
            <Image
              key={tab.image.src}
              className={styles.photo}
              data-active={i === selected}
              src={tab.image.src}
              alt={i === selected ? tab.image.alt : ''}
              aria-hidden={i !== selected}
              fill
              sizes="(min-width: 492px) 444px, 100vw"
            />
          ))}
        </div>

        <div
          key={selected}
          className={`${rowStyles.statCard} ${rowStyles.statCardPie} ${styles.card}`}
        >
          <DonutChart
            className={rowStyles.donutChart}
            baseColor="#0a2640"
            startAngle={205}
            thickness={14.5}
            segments={active.breakdown
              .slice(0, 2)
              .map((share, i) => ({ percent: share.percent, color: shareColors[i] }))}
          />
          <ul className={rowStyles.legend}>
            {active.breakdown.map((share, i) => (
              <li key={share.label}>
                <span style={{ background: shareColors[i] }} aria-hidden="true" />
                {share.percent}% - {share.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
