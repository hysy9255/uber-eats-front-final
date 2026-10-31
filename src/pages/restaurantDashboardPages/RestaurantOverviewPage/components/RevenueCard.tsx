import type { RestaurantRevenueDTO } from "../api/queries/getRestaurantRevenue/RestaurantRevenue.dto";

interface RevenueCardProps {
  overviewRevenue?: RestaurantRevenueDTO;
}

export const RevenueCard: React.FC<RevenueCardProps> = ({
  overviewRevenue,
}) => {
  const revenueData = overviewRevenue?.dailyRevenue ?? [];

  const chartWidth = 700;
  const chartHeight = 230;

  const paddingX = 45;
  const paddingTop = 25;
  const paddingBottom = 45;

  const maxRevenue = Math.max(...revenueData.map((item) => item.revenue), 1);

  const drawableWidth = chartWidth - paddingX * 2;
  const drawableHeight = chartHeight - paddingTop - paddingBottom;

  const points = revenueData.map((item, index) => {
    const x =
      revenueData.length <= 1
        ? chartWidth / 2
        : paddingX + (index / (revenueData.length - 1)) * drawableWidth;

    const y =
      paddingTop +
      drawableHeight -
      (item.revenue / maxRevenue) * drawableHeight;

    return {
      ...item,
      x,
      y,
    };
  });

  const path = points
    .map((point, index) =>
      index === 0 ? `M${point.x} ${point.y}` : `L${point.x} ${point.y}`
    )
    .join(" ");

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const formatCurrency = (value: number) => {
    return `$ ${value.toLocaleString("en-US")}`;
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-950">Revenue</h3>

          <p className="mt-1 text-sm text-gray-500">
            Daily revenue trend for the selected period
          </p>
        </div>

        <div className="text-right">
          <div className="text-[20px] font-bold text-gray-950">
            {formatCurrency(overviewRevenue?.totalRevenue ?? 0)}
          </div>

          <div className="mt-1 text-xs text-gray-500">Total revenue</div>
        </div>
      </div>

      <div className="mt-7 h-[230px] relative">
        {/* horizontal guides */}
        {[0, 1, 2, 3, 4].map((line) => (
          <div
            key={line}
            className="absolute left-0 right-0 border-t border-dashed border-gray-200"
            style={{
              top: `${line * 25}%`,
            }}
          />
        ))}

        {points.length > 0 && (
          <svg
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            className="absolute inset-0 w-full h-full overflow-visible"
          >
            <path d={path} fill="none" stroke="#16a34a" strokeWidth="3" />

            {points.map((point) => (
              <circle
                key={point.date}
                cx={point.x}
                cy={point.y}
                r="5"
                fill="#16a34a"
              />
            ))}
          </svg>
        )}

        <div className="absolute left-0 right-0 bottom-0 flex justify-between px-3 text-[11px] text-gray-500">
          {revenueData.map((item) => (
            <span key={item.date}>{formatDate(item.date)}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
