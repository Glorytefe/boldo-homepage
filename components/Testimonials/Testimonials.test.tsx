import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { testimonials } from '@/content/testimonials';
import { Testimonials } from './Testimonials';

const firstAuthor = () => screen.getAllByRole('listitem')[0];

describe('Testimonials', () => {
  it('shows the next testimonial first after clicking "Next"', async () => {
    const user = userEvent.setup();
    render(<Testimonials />);

    expect(firstAuthor()).toHaveTextContent(testimonials[0].name);
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }));
    expect(firstAuthor()).toHaveTextContent(testimonials[1].name);
  });

  it('wraps around to the last testimonial when clicking "Previous" at the start', async () => {
    const user = userEvent.setup();
    render(<Testimonials />);

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }));
    expect(firstAuthor()).toHaveTextContent(testimonials.at(-1)!.name);
  });
});
