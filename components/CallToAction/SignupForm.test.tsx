import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SignupForm } from './SignupForm';

describe('SignupForm', () => {
  it('shows an error for an invalid email address', async () => {
    const user = userEvent.setup();
    render(<SignupForm />);

    await user.type(screen.getByLabelText('Email address'), 'not-an-email');
    await user.click(screen.getByRole('button', { name: 'Start now' }));

    expect(screen.getByRole('status')).toHaveTextContent('Please enter a valid email address.');
    expect(screen.getByLabelText('Email address')).toHaveAttribute('aria-invalid', 'true');
  });

  it('confirms and clears the field for a valid email address', async () => {
    const user = userEvent.setup();
    render(<SignupForm />);

    const input = screen.getByLabelText('Email address');
    await user.type(input, 'jane@example.com');
    await user.click(screen.getByRole('button', { name: 'Start now' }));

    expect(screen.getByRole('status')).toHaveTextContent("Thanks! We'll be in touch soon.");
    expect(input).toHaveValue('');
  });

  it('never renders what was typed, so markup in the field cannot inject anything', async () => {
    const user = userEvent.setup();
    const { container } = render(<SignupForm />);
    const payload = '"><img src=x onerror=alert(1)><script>alert(2)</script>';

    await user.type(screen.getByLabelText('Email address'), payload);
    await user.click(screen.getByRole('button', { name: 'Start now' }));

    expect(screen.getByRole('status')).toHaveTextContent('Please enter a valid email address.');
    expect(container.querySelector('img, script, iframe, svg')).toBeNull();
    expect(container.textContent).not.toContain('alert(');
  });
});
