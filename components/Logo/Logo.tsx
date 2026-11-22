import styles from './Logo.module.scss';

type Props = {
  markColor?: string;
  className?: string;
};

export function Logo({ markColor = 'currentColor', className = '' }: Props) {
  return (
    <span className={`${styles.logo} ${className}`}>
      <svg className={styles.mark} viewBox="0 0 24 34" aria-hidden="true">
        <path
          d="M0 15.47h14.32a8.84 8.84 0 0 1 0 17.69H0V15.47ZM0 0h9.48a6.63 6.63 0 0 1 0 13.26H0V0Z"
          fill={markColor}
        />
      </svg>
      Boldo
    </span>
  );
}
