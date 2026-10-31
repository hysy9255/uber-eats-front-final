type SingleStarProps = {
  fillPercent: number; // 0 ~ 100
  size: number;
  fillColor: string;
  emptyStrokeColor: string;
  id: string;
};

const STAR_PATH =
  "M12 2.75l2.84 5.76 6.36.92-4.6 4.48 1.09 6.33L12 17.27 6.31 20.24l1.09-6.33-4.6-4.48 6.36-.92L12 2.75z";

export const SingleStar: React.FC<SingleStarProps> = ({
  fillPercent,
  size,
  fillColor,
  emptyStrokeColor,
  id,
}) => {
  const safeFill = Math.max(0, Math.min(fillPercent, 100));

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="shrink-0"
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset={`${safeFill}%`} stopColor={fillColor} />
          <stop offset={`${safeFill}%`} stopColor="white" />
        </linearGradient>
      </defs>

      {/* 채움 */}
      <path d={STAR_PATH} fill={`url(#${id})`} />

      {/* 외곽선 */}
      <path
        d={STAR_PATH}
        fill="none"
        stroke={emptyStrokeColor}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
};
