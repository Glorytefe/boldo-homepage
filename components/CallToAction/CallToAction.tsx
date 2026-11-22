import { SignupForm } from './SignupForm';
import styles from './CallToAction.module.scss';

export function CallToAction() {
  return (
    <section id="cta" className={styles.wrapper} aria-label="Get started">
      <div className={styles.panel}>
        <h2 className={styles.title}>An enterprise template to ramp up your company website</h2>
        <SignupForm />
      </div>
    </section>
  );
}
