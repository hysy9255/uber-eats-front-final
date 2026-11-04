import { ChevronRight } from "lucide-react";
import { getTrendType } from "../utils/getTrendType";
import { formatTrend } from "../utils/formatTrend";
import type { RestaurantTopSellingItemDTO } from "../api/queries/getRestaurantTopSellingItems/RestaurantTopSellingItem.dto";
import { NoImagePlaceholder } from "../../../../shared/components/NoImagePlaceHolder/NoImagePlaceHolder";

interface TopSellingItemsCardProps {
  items: RestaurantTopSellingItemDTO[];
}

export const TopSellingItemsCard = ({ items }: TopSellingItemsCardProps) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-950">Top selling items</h3>

        <button className="flex items-center gap-1 text-sm font-semibold text-green-700">
          View full report
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-3">
        {items.map((item, index) => {
          const trendType = getTrendType(item.percentChange);

          const trendClass =
            trendType === "positive"
              ? "text-green-600"
              : trendType === "negative"
              ? "text-red-500"
              : "text-gray-500";

          const trendIcon =
            trendType === "positive"
              ? "↑"
              : trendType === "negative"
              ? "↓"
              : "";

          return (
            <div
              key={item.dishId}
              className={`flex items-center justify-between gap-3 py-3 ${
                index !== items.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              {/* Dish Information */}
              <div className="flex min-w-0 items-center gap-3">
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <NoImagePlaceholder iconOnly />
                  )}
                </div>

                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-gray-900">
                    {item.name}
                  </div>

                  <div className="mt-1 text-sm text-gray-500">
                    {item.soldCount} sold
                  </div>
                </div>
              </div>

              {/* Revenue & Trend */}
              <div className="shrink-0 text-right">
                <div className="text-sm font-bold text-gray-900">
                  ${item.revenue.toLocaleString("en-US")}
                </div>

                <div className={`mt-1 text-xs font-semibold ${trendClass}`}>
                  {trendIcon && `${trendIcon} `}
                  {formatTrend(item.percentChange)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
