import { Button } from '@/components/Button/Button';
import { LogoStrip } from '@/components/LogoStrip/LogoStrip';
import { HeroGraphic } from './HeroGraphic';
import styles from './Hero.module.scss';

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.intro}>
            <h1 id="hero-title" className={styles.title}>
              Save time by building fast with Boldo Template
            </h1>
            <p className={styles.text}>
              Funding handshake buyer business-to-business metrics iPad partnership. First mover
              advantage innovator success deployment non-disclosure.
            </p>
          </div>
          <div className={styles.actions}>
            <Button href="#cta" className={styles.buy}>
              Buy template
            </Button>
            <Button href="#services" variant="outline-inverse">
              Explore
            </Button>
          </div>
        </div>
        <HeroGraphic className={styles.graphic} />
      </div>
      <LogoStrip />
    </section>
  );
}
