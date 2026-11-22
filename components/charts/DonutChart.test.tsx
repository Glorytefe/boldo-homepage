import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { DonutChart } from './DonutChart';

describe('DonutChart', () => {
  it('draws each arc with a dash pattern exactly one circle long, so arcs can wrap past the top', () => {
    const { container } = render(
      <DonutChart baseColor="navy" startAngle={300} segments={[{ percent: 40, color: 'blue' }]} />,
    );
    const [, arc] = container.querySelectorAll('circle');
    const circumference = 2 * Math.PI * Number(arc.getAttribute('r'));
    const [dash, gap] = arc.getAttribute('stroke-dasharray')!.split(' ').map(Number);

    expect(dash).toBeCloseTo(circumference * 0.4);
    expect(dash + gap).toBeCloseTo(circumference);
  });
});
