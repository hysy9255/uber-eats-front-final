import { Check, ChefHat, CircleCheck, PackageCheck, Bike } from "lucide-react";
import { OrderStatus } from "../../../../../restaurantDashboardPages/restaurantOrdersPage/types/orderStatus.enum";

interface OrderTrackerProps {
  status: OrderStatus;
}

interface TrackerStep {
  label: string;
  description: string;
  icon: React.ReactNode;
  order: number;
}

const OrderTracker: React.FC<OrderTrackerProps> = ({ status }) => {
  const getCurrentStep = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.Pending:
        return 0;

      case OrderStatus.Cooking:
      case OrderStatus.Ready:
        return 1;

      case OrderStatus.Delivering:
        return 2;

      case OrderStatus.Delivered:
        return 3;
    }
  };

  const currentStep = getCurrentStep(status);

  const steps: TrackerStep[] = [
    {
      label: "Order received",
      description: "Restaurant received your order",
      icon: <PackageCheck className="w-4 h-4" />,
      order: 0,
    },
    {
      label: "Preparing",
      description:
        status === OrderStatus.Ready
          ? "Your order is ready"
          : "Restaurant is preparing your food",
      icon: <ChefHat className="w-4 h-4" />,
      order: 1,
    },
    {
      label: "On the way",
      description: "Your order is heading to you",
      icon: <Bike className="w-4 h-4" />,
      order: 2,
    },
    {
      label: "Delivered",
      description: "Enjoy your meal!",
      icon: <CircleCheck className="w-4 h-4" />,
      order: 3,
    },
  ];

  return (
    <div className="py-6">
      {/* progress */}
      <div className="relative flex items-start justify-between">
        {/* background line */}
        <div className="absolute left-[6%] right-[6%] top-5 h-[2px] bg-gray-200" />

        {/* completed line */}
        <div
          className="absolute left-[6%] top-5 h-[2px] bg-green-500 transition-all duration-500"
          style={{
            width: `${(currentStep / (steps.length - 1)) * 88}%`,
          }}
        />

        {steps.map((step) => {
          const isCompleted = step.order < currentStep;
          const isCurrent = step.order === currentStep;

          return (
            <div
              key={step.label}
              className="relative z-10 flex w-1/4 flex-col items-center"
            >
              <div
                className={`
                    flex h-10 w-10 items-center justify-center rounded-full
                    border-2 transition-all duration-300
                    ${
                      isCompleted
                        ? "border-green-500 bg-green-500 text-white"
                        : isCurrent
                        ? "border-green-500 bg-white text-green-600 shadow-sm"
                        : "border-gray-200 bg-white text-gray-400"
                    }
                  `}
              >
                {isCompleted ? <Check className="h-4 w-4" /> : step.icon}
              </div>

              <div className="mt-3 flex flex-col items-center text-center">
                <div
                  className={`
                      text-xs font-semibold
                      ${
                        isCompleted || isCurrent
                          ? "text-gray-900"
                          : "text-gray-400"
                      }
                    `}
                >
                  {step.label}
                </div>

                <div
                  className={`
                      mt-1 max-w-[120px] text-[10px] leading-4
                      ${isCurrent ? "text-gray-500" : "text-gray-400"}
                    `}
                >
                  {isCurrent && step.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderTracker;
