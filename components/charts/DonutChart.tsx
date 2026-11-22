type Segment = { percent: number; color: string };

type Props = {
  segments: Segment[];
  /** Where the first arc starts, in degrees clockwise from 12 o'clock. */
  startAngle?: number;
  baseColor: string;
  thickness?: number;
  className?: string;
};

const SIZE = 100;

export function DonutChart({
  segments,
  startAngle = 0,
  baseColor,
  thickness = 14,
  className,
}: Props) {
  const radius = (SIZE - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const firstStart = (startAngle / 360) * circumference;

  const arcs = segments.map(({ percent, color }, i) => {
    const before = segments.slice(0, i).reduce((sum, s) => sum + s.percent, 0);
    return {
      color,
      length: (percent / 100) * circumference,
      start: firstStart + (before / 100) * circumference,
    };
  });

  return (
    <svg className={className} viewBox={`0 0 ${SIZE} ${SIZE}`} aria-hidden="true">
      <g transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`} fill="none" strokeWidth={thickness}>
        <circle cx={SIZE / 2} cy={SIZE / 2} r={radius} stroke={baseColor} />
        {arcs.map(({ color, length, start }, i) => (
          <circle
            key={i}
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={radius}
            stroke={color}
            // Dash + gap must equal the circumference, or arcs that cross 12 o'clock get cut off.
            strokeDasharray={`${length} ${circumference - length}`}
            strokeDashoffset={-start}
          />
        ))}
      </g>
    </svg>
  );
}
