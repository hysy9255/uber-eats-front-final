import { ChevronRight } from "lucide-react";
import NoImgAvailable from "../../../../shared/components/NoImgAvailable/NoImgAvailable";
import { getTrendType } from "../utils/getTrendType";
import { formatTrend } from "../utils/formatTrend";
import type { RestaurantTopSellingItemDTO } from "../api/queries/getRestaurantTopSellingItems/RestaurantTopSellingItem.dto";

interface TopSellingItemsCardProps {
  items: RestaurantTopSellingItemDTO[];
}

export const TopSellingItemsCard: React.FC<TopSellingItemsCardProps> = ({
  items,
}) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-950">Top selling items</h3>

        <button className="text-sm font-semibold text-green-700 flex items-center gap-1">
          View full report
          <ChevronRight className="w-4 h-4" />
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
              className={`py-3 flex items-center justify-between ${
                index !== items.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                ) : (
                  <NoImgAvailable className="w-14 h-14 rounded-xl object-cover" />
                )}

                <div>
                  <div className="font-semibold text-sm text-gray-900">
                    {item.name}
                  </div>

                  <div className="mt-1 text-sm text-gray-500">
                    {item.soldCount} sold
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="font-bold text-sm text-gray-900">
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
