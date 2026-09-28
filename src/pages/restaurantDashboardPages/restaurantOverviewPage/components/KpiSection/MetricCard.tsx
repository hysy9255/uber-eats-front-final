import type { TrendType } from "./trendType";

interface MetricCardProps {
  icon: React.ReactNode;
  iconWrapClass: string;
  label: string;
  value: string;
  trend: string;
  trendType: TrendType;
}

export const MetricCard = ({
  icon,
  iconWrapClass,
  label,
  value,
  trend,
  trendType,
}: MetricCardProps) => {
  const trendClass =
    trendType === "positive"
      ? "font-semibold text-green-600"
      : trendType === "negative"
      ? "font-semibold text-red-500"
      : "font-semibold text-gray-500";

  const trendIcon =
    trendType === "positive" ? "↑" : trendType === "negative" ? "↓" : "";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 py-5 shadow-sm">
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center ${iconWrapClass}`}
        >
          {icon}
        </div>

        <div>
          <div className="text-sm text-gray-600">{label}</div>

          <div className="mt-0.5 text-[22px] font-bold tracking-[-0.5px] text-gray-950">
            {value}
          </div>

          <div className="mt-1 flex items-center gap-1 text-xs">
            <span className={trendClass}>
              {trendIcon && `${trendIcon} `}
              {trend}
            </span>

            <span className="text-gray-400">vs last week</span>
          </div>
        </div>
      </div>
    </div>
  );
};
