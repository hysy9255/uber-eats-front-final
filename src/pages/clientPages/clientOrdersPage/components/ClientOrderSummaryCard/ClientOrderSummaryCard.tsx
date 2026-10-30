import { Clock3, Truck, ChefHat, MapPin, CheckCircle2 } from "lucide-react";

import type { NewClientOrderSummaryDTO } from "../../api/getClientOrderSummaries/clientOrderSummary.dto";
import NoImgAvailable from "../../../../../shared/components/NoImgAvailable/NoImgAvailable";
import { capitalizeWords } from "../../../../../shared/utils/capitalizeWords";
import { ProgressTracker } from "./ProgressTracker";

interface ClientOrderSummaryCardProps {
  order: NewClientOrderSummaryDTO;
  onClickDetails?: (orderId: string) => void;
}

const statusConfig = {
  pending: {
    label: "Pending",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    message: "Waiting for confirmation",
  },
  cooking: {
    label: "Preparing",
    badge: "bg-orange-50 text-orange-600 border-orange-200",
    message: "Preparing your order",
  },
  ready: {
    label: "Ready",
    badge: "bg-green-50 text-green-700 border-green-200",
    message: "Ready for pickup",
  },
  delivering: {
    label: "On the way",
    badge: "bg-blue-50 text-blue-600 border-blue-200",
    message: "Your order is on the way",
  },
  delivered: {
    label: "Delivered",
    badge: "bg-gray-100 text-gray-600 border-gray-200",
    message: "Completed on",
  },
};

export const ClientOrderSummaryCard = ({
  order,
  onClickDetails,
}: ClientOrderSummaryCardProps) => {
  const config = statusConfig[order.status];

  const mainOrderItem = order.orderItems[0];
  const mainDishImg = mainOrderItem?.dishImg;
  const mainDishName = mainOrderItem?.dishName ?? "Order";
  const restItems = order.orderItems.slice(1);

  const isDelivering = order.status === "delivering";
  const isDelivered = order.status === "delivered";

  const statusMessage =
    isDelivered && order.deliveredAt
      ? `Completed on ${new Date(order.deliveredAt).toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
        })}`
      : config.message;

  return (
    <div
      onClick={() => onClickDetails?.(order.orderId)}
      className={`min-w-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5 xl:p-6 ${
        onClickDetails ? "cursor-pointer" : ""
      }`}
    >
      <div className="flex min-w-0 flex-col gap-4 lg:flex-row lg:items-start lg:gap-5">
        {/* Left: Image and Order Information */}
        <div className="flex min-w-0 flex-1 items-start gap-3 sm:gap-5">
          {/* Food Image */}
          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-28 sm:w-28 xl:h-32 xl:w-32">
            {mainDishImg ? (
              <img
                src={mainDishImg}
                alt={mainDishName}
                className="h-full w-full object-cover"
              />
            ) : (
              <NoImgAvailable />
            )}
          </div>

          {/* Main Information */}
          <div className="flex min-w-0 flex-1 flex-col gap-4">
            <div className="min-w-0">
              <h3 className="truncate text-xs font-medium text-gray-700 sm:text-sm">
                {capitalizeWords(order.restaurant)}
              </h3>

              <h2 className="mt-0.5 truncate text-base font-bold text-gray-950 sm:text-lg">
                {capitalizeWords(mainDishName)}
              </h2>

              {restItems.length > 0 && (
                <p className="mt-1 truncate text-xs font-medium text-gray-400">
                  {restItems
                    .slice(0, 2)
                    .map((item) => capitalizeWords(item.dishName))
                    .join(", ")}

                  {restItems.length > 2 && ` +${restItems.length - 2} more`}
                </p>
              )}

              <p className="mt-1 text-xs text-gray-400">
                Order #{order.orderId.slice(0, 8)}
                <span className="hidden sm:inline">
                  {" · "}
                  {new Date(order.orderedAt).toLocaleString()}
                </span>
              </p>
            </div>

            {/* Desktop Progress */}
            <div className="hidden w-full max-w-xl sm:block">
              <ProgressTracker status={order.status} />
            </div>
          </div>
        </div>

        {/* Mobile Progress */}
        <div className="w-full sm:hidden">
          <ProgressTracker status={order.status} />
        </div>

        {/* Right: Status and Delivery Details */}
        <div className="flex w-full min-w-0 flex-col gap-3 border-t border-gray-100 pt-4 lg:w-[300px] lg:shrink-0 lg:gap-4 lg:border-t-0 lg:pt-0 xl:w-[340px]">
          {/* Status and Price */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span
              className={`inline-flex items-center gap-2 whitespace-nowrap rounded-md border px-3 py-1.5 text-xs font-semibold ${config.badge}`}
            >
              {isDelivered ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : isDelivering ? (
                <Truck className="h-4 w-4" />
              ) : (
                <ChefHat className="h-4 w-4" />
              )}

              {config.label}
            </span>

            <span className="whitespace-nowrap text-base font-bold text-gray-950">
              ${order.totalPrice.toFixed(2)}
            </span>
          </div>

          {/* Order Status Message */}
          <div className="flex items-start gap-3">
            <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-gray-500" />

            <p className="min-w-0 text-xs leading-5 text-gray-600">
              {statusMessage}
            </p>
          </div>

          {/* Delivery Address */}
          <div className="border-t border-gray-100 pt-3">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gray-500" />

              <div className="min-w-0">
                <p className="text-xs font-medium text-gray-400">
                  {isDelivered ? "Delivered to" : "Delivering to"}
                </p>

                <p className="mt-1 break-words text-xs font-medium leading-5 text-gray-700">
                  {order.deliverTo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
