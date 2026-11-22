'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/Button/Button';
import styles from './SignupForm.module.scss';

type Status = 'idle' | 'invalid' | 'success';

export function SignupForm() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setStatus('invalid');
      return;
    }
    setStatus('success');
    form.reset();
  };

  return (
    <form className={styles.form} noValidate onSubmit={handleSubmit}>
      <div className={styles.fields}>
        <label htmlFor="signup-email" className="visually-hidden">
          Email address
        </label>
        <input
          id="signup-email"
          className={styles.input}
          type="email"
          name="email"
          placeholder="Your email address"
          autoComplete="email"
          required
          aria-invalid={status === 'invalid'}
          aria-describedby="signup-status"
          onChange={() => status !== 'idle' && setStatus('idle')}
        />
        <Button type="submit">Start now</Button>
      </div>
      <p id="signup-status" className={styles.status} role="status">
        {status === 'invalid' && 'Please enter a valid email address.'}
        {status === 'success' && "Thanks! We'll be in touch soon."}
      </p>
    </form>
  );
}
