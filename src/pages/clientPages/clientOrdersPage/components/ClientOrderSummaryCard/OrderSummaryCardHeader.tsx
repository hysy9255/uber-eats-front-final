import NoImgAvailable from "@/shared/components/NoImgAvailable/NoImgAvailable";
import { capitalizeWords } from "@/shared/utils/capitalizeWords";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { ClientOrderSummaryDTO } from "../../api/getClientOrderSummaries/clientOrderSummary.dto";
import { OrderStatusIcon } from "./OrderStatusIcon";

interface OrderSummaryCardHeaderProps {
  order: ClientOrderSummaryDTO;
  expanded: boolean;
  onClickChevron: () => void;
}

const OrderSummaryCardHeader: React.FC<OrderSummaryCardHeaderProps> = ({
  order,
  expanded,
  onClickChevron,
}) => {
  const visibleItems = order.orderItems.slice(0, 3);
  const remainingItemCount = order.orderItems.length - visibleItems.length;

  return (
    <div className="flex items-center justify-between">
      <div className="flex min-w-0 items-center gap-x-3">
        <div className="flex shrink-0 items-center">
          {visibleItems.map((item, index) =>
            item.dishImg === null ? (
              <NoImgAvailable
                key={item.dishId}
                className={`
                  h-10 w-10 rounded-full
                  border border-gray-300 bg-white
                  ${index !== 0 ? "-ml-2" : ""}
                `}
              />
            ) : (
              <img
                key={item.dishId}
                src={item.dishImg}
                alt={item.dishName}
                className={`
                  h-10 w-10 rounded-full
                  border border-gray-300
                  object-cover
                  ${index !== 0 ? "-ml-2" : ""}
                `}
              />
            )
          )}

          {remainingItemCount > 0 && (
            <div
              className="
                -ml-2
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-gray-300
                bg-white
                text-xs
              "
            >
              +{remainingItemCount}
            </div>
          )}
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-x-2 text-xs">
            <span className="text-gray-500 hidden sm:inline">주문 번호</span>
            <span className="font-medium">#{order.orderId.split("-")[0]}</span>
          </div>

          <div className="mt-1 flex min-w-0 items-center gap-x-1 text-xs">
            <div className="truncate">
              {visibleItems
                .map((item) => capitalizeWords(item.dishName))
                .join(", ")}
            </div>

            {remainingItemCount > 0 && (
              <span className="shrink-0 text-gray-500">
                외 {remainingItemCount}개
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex shrink-0 items-center">
        <div className="px-3">
          <OrderStatusIcon status={order.status} />
        </div>

        <div className="border-l border-gray-300 px-3 text-sm">
          ${order.totalPrice}
        </div>

        {expanded ? (
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center hover:cursor-pointer"
            onClick={onClickChevron}
          >
            <ChevronUp />
          </button>
        ) : (
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center hover:cursor-pointer"
            onClick={onClickChevron}
          >
            <ChevronDown />
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderSummaryCardHeader;
