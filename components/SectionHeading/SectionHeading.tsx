import styles from './SectionHeading.module.scss';

type Props = {
  label: string;
  title: string;
};

export function SectionHeading({ label, title }: Props) {
  return (
    <div className={styles.heading}>
      <p className={styles.label}>{label}</p>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}
