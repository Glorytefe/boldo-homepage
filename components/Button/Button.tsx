import type { ComponentProps } from 'react';
import styles from './Button.module.scss';

type StyleProps = {
  /** `-inverse` variants are for dark backgrounds. */
  variant?: 'primary' | 'secondary' | 'secondary-inverse' | 'outline' | 'outline-inverse';
  size?: 'sm' | 'md';
  className?: string;
};

type LinkButtonProps = StyleProps & ComponentProps<'a'> & { href: string };
type NativeButtonProps = StyleProps & ComponentProps<'button'> & { href?: never };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button({ variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ');

  if (props.href !== undefined) {
    return <a className={classes} {...props} />;
  }
  return <button className={classes} {...props} />;
}
