import { RestaurantStatus } from "@/shared/types/restaurantStatus.type";

const statusText = {
  [RestaurantStatus.Open]: "Open now",
  [RestaurantStatus.Closed]: "Closed now",
  [RestaurantStatus.Paused]: "Break time",
};

const statusClassName = {
  [RestaurantStatus.Open]: "bg-green-600",
  [RestaurantStatus.Closed]: "bg-gray-600",
  [RestaurantStatus.Paused]: "bg-amber-600",
};

interface StatusBadgeProps {
  className?: string;
  restaurantStatus: RestaurantStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({
  className,
  restaurantStatus,
}) => {
  return (
    <div
      className={`${className} text-sm font-semibold px-3 py-1 rounded-full text-white opacity-80 ${statusClassName[restaurantStatus]}`}
    >
      {statusText[restaurantStatus]}
    </div>
  );
};

export default StatusBadge;
