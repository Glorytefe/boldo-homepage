import Image from 'next/image';
import { Logo } from '@/components/Logo/Logo';
import styles from './LogoStrip.module.scss';

// Each copy must be wider than the strip, or the loop shows a gap.
const partners = [
  'boldo',
  'presto',
  'boldo',
  'presto',
  'boldo',
  'presto',
  'boldo',
  'presto',
] as const;

function LogoList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className={styles.logos}
      aria-label={hidden ? undefined : 'Companies using Boldo'}
      aria-hidden={hidden || undefined}
    >
      {partners.map((partner, i) => (
        <li key={i}>
          {partner === 'boldo' ? (
            <Logo className={styles.boldo} />
          ) : (
            <Image
              src="/images/presto.svg"
              alt={hidden ? '' : 'Presto'}
              width={147}
              height={37}
              unoptimized
            />
          )}
        </li>
      ))}
    </ul>
  );
}

export function LogoStrip() {
  return (
    <div className={styles.strip}>
      <div className={styles.track}>
        <LogoList />
        <LogoList hidden />
      </div>
    </div>
  );
}
