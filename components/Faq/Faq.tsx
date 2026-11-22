import Image from 'next/image';
import { ChevronDown } from '@/components/icons';
import { faqs } from '@/content/faqs';
import styles from './Faq.module.scss';

export function Faq() {
  return (
    <section id="about" className={styles.section} aria-labelledby="faq-title">
      <Image
        className={styles.banner}
        src="/images/banner.jpg"
        alt="A team working together in a bright open-plan office"
        width={1100}
        height={403}
        sizes="(min-width: 1148px) 1100px, 100vw"
      />
      <div className={styles.content}>
        <h2 id="faq-title" className={styles.title}>
          We connect our customers with the best, and help them keep up-and stay open.
        </h2>
        <div className={styles.list}>
          {faqs.map((faq) => (
            <details key={faq.question} className={styles.item}>
              <summary className={styles.question}>
                {faq.question}
                <span className={styles.icon}>
                  <ChevronDown />
                </span>
              </summary>
              <p className={styles.answer}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
