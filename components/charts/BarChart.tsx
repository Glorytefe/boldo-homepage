type Props = {
  /** Bar heights in px. Negative values hang below the baseline. */
  values: number[];
  barWidth: number;
  gap: number;
  color: string;
  highlight: number;
  highlightColor: string;
  rounded?: boolean;
  className?: string;
};

export function BarChart({
  values,
  barWidth,
  gap,
  color,
  highlight,
  highlightColor,
  rounded = false,
  className,
}: Props) {
  const above = Math.max(0, ...values);
  const below = Math.max(0, ...values.map((v) => -v));
  const width = values.length * barWidth + (values.length - 1) * gap;

  return (
    <svg className={className} viewBox={`0 0 ${width} ${above + below}`} aria-hidden="true">
      {values.map((value, i) => (
        <rect
          key={i}
          x={i * (barWidth + gap)}
          y={value >= 0 ? above - value : above}
          width={barWidth}
          height={Math.abs(value)}
          rx={rounded ? barWidth / 2 : 0}
          fill={i === highlight ? highlightColor : color}
        />
      ))}
    </svg>
  );
}
