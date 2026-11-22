import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LogoStrip } from './LogoStrip';

describe('LogoStrip', () => {
  it('announces each logo once, even though the marquee renders the list twice', () => {
    const { container } = render(<LogoStrip />);

    expect(container.querySelectorAll('ul')).toHaveLength(2);
    expect(screen.getAllByRole('list')).toHaveLength(1);
    expect(screen.getAllByRole('img', { name: 'Presto' })).toHaveLength(4);
  });
});
