'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight } from '@/components/icons';
import { testimonials } from '@/content/testimonials';
import styles from './Testimonials.module.scss';

export function Testimonials() {
  const [start, setStart] = useState(0);
  const count = testimonials.length;
  const ordered = testimonials.map((_, i) => testimonials[(start + i) % count]);

  const show = (step: number) => setStart((current) => (current + step + count) % count);

  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 id="testimonials-title" className={styles.title}>
            An enterprise template to ramp up your company website
          </h2>
          <div className={styles.controls}>
            <button
              type="button"
              className={styles.arrow}
              aria-label="Previous testimonial"
              onClick={() => show(-1)}
            >
              <ArrowRight className={styles.flip} />
            </button>
            <button
              type="button"
              className={styles.arrow}
              aria-label="Next testimonial"
              onClick={() => show(1)}
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        <ul className={styles.track}>
          {ordered.map((item) => (
            <li key={item.name} className={styles.card}>
              <figure>
                <blockquote className={styles.quote}>“{item.quote}”</blockquote>
                <figcaption className={styles.author}>
                  <Image
                    className={styles.avatar}
                    src={item.avatar}
                    alt=""
                    width={58}
                    height={58}
                  />
                  <span>
                    <span className={styles.name}>{item.name}</span>
                    <span className={styles.role}>{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
