import Image from 'next/image';
import { ArrowRight } from '@/components/icons';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import { services } from '@/content/services';
import styles from './Services.module.scss';

export function Services() {
  return (
    <section id="services" className={styles.services}>
      <SectionHeading
        label="Our Services"
        title="Handshake infographic mass market crowdfunding iteration."
      />
      <ul className={styles.grid}>
        {services.map((service, i) => (
          <li key={i} className={styles.card}>
            <Image
              className={styles.image}
              src={service.image}
              alt=""
              width={300}
              height={354}
              sizes="(min-width: 1024px) 300px, (min-width: 768px) 33vw, 100vw"
            />
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
            <a href={service.href} className={styles.link}>
              Explore page <span className="visually-hidden">for {service.title}</span>
              <ArrowRight />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
