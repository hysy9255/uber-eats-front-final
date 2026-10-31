import { Check } from "lucide-react";
import { OrderStatus } from "../../../../restaurantDashboardPages/RestaurantOrdersPage/types/orderStatus.enum";
import { capitalizeWords } from "../../../../../shared/utils/capitalizeWords";

const progressSteps: OrderStatus[] = [
  OrderStatus.Pending,
  OrderStatus.Cooking,
  OrderStatus.Ready,
  OrderStatus.Delivering,
  OrderStatus.Delivered,
];

export const ProgressTracker = ({ status }: { status: OrderStatus }) => {
  const currentIndex = progressSteps.indexOf(status);

  return (
    <div className="flex w-full items-start">
      {progressSteps.map((step, index) => {
        const completed = index < currentIndex;
        const current = index === currentIndex;

        return (
          <div
            key={step}
            className="relative flex min-w-0 flex-1 flex-col items-center"
          >
            {index > 0 && (
              <div
                className={`absolute top-[8px] right-1/2 h-[2px] w-full ${
                  index <= currentIndex ? "bg-green-600" : "bg-gray-200"
                }`}
              />
            )}

            <div
              className={`relative z-10 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 ${
                completed
                  ? "border-green-600 bg-green-600"
                  : current
                  ? "border-green-600 bg-white"
                  : "border-gray-300 bg-white"
              }`}
            >
              {completed ? (
                <Check className="h-3 w-3 text-white" strokeWidth={3} />
              ) : current ? (
                <span className="h-2 w-2 rounded-full bg-green-600" />
              ) : null}
            </div>

            <span
              className={`mt-2 text-[11px] font-medium ${
                completed || current ? "text-green-700" : "text-gray-400"
              }`}
            >
              {capitalizeWords(step)}
            </span>
          </div>
        );
      })}
    </div>
  );
};
