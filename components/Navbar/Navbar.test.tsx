import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { mainNav } from '@/content/navigation';
import { Navbar } from './Navbar';

const menu = () => screen.getByRole('dialog', { hidden: true });

describe('Navbar', () => {
  it('opens the full-screen menu and closes it with the close button', async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    const toggle = screen.getByRole('button', { name: 'Open menu' });

    await user.click(toggle);
    expect(menu()).toHaveAttribute('open');
    expect(menu()).toHaveFocus();
    expect(toggle).toHaveAttribute('aria-expanded', 'true');

    await user.click(screen.getByRole('button', { name: 'Close menu' }));
    expect(menu()).not.toHaveAttribute('open');
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(toggle).toHaveFocus();
  });

  it('closes the menu when a link is chosen', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    await user.click(screen.getByRole('button', { name: 'Open menu' }));
    const links = screen.getAllByRole('link', { name: mainNav[1].label });
    await user.click(links.at(-1)!);

    expect(menu()).not.toHaveAttribute('open');
    expect(screen.getByRole('button', { name: 'Open menu' })).not.toHaveFocus();
  });
});
