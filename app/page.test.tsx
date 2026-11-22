import { render, screen } from '@testing-library/react';
import axe from 'axe-core';
import { describe, expect, it } from 'vitest';
import HomePage from './page';

describe('HomePage', () => {
  it('renders one h1 and every section landmark', () => {
    render(<HomePage />);

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('points every in-page link at a section that exists', () => {
    const { container } = render(<HomePage />);
    const anchors = [...container.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')].filter(
      (a) => a.getAttribute('href') !== '#',
    );

    for (const anchor of anchors) {
      const id = anchor.getAttribute('href')!.slice(1);
      expect(container.querySelector(`#${id}`), `${anchor.textContent} → #${id}`).not.toBeNull();
    }
  });

  it('sends every "Services" link to the Our Services section', () => {
    render(<HomePage />);
    const servicesSection = screen.getByText('Our Services').closest('section')!;

    for (const link of screen.getAllByRole('link', { name: /^Services$/ })) {
      expect(link).toHaveAttribute('href', `#${servicesSection.id}`);
    }
  });

  it('has no detectable accessibility violations', async () => {
    const { container } = render(<HomePage />);

    // Colour contrast needs real layout and rendering, which jsdom doesn't do.
    const results = await axe.run(container, { rules: { 'color-contrast': { enabled: false } } });

    expect(results.violations.map((v) => `${v.id}: ${v.help}`)).toEqual([]);
  });
});
