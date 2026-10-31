import { Bike, CheckCircle2, ChefHat, Clock3 } from "lucide-react";
import { OrderStatus } from "../../../RestaurantOrdersPage/types/orderStatus.enum";

export const OrderStatusBadge = ({ status }: { status: OrderStatus }) => {
  switch (status) {
    case OrderStatus.Pending:
      return (
        <span className="rounded-full bg-gray-100 text-gray-600 px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5">
          <Clock3 className="w-4 h-4" />
          Pending
        </span>
      );

    case OrderStatus.Cooking:
      return (
        <span className="rounded-full bg-amber-50 text-amber-600 px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5">
          <ChefHat className="w-4 h-4" />
          Cooking
        </span>
      );

    case OrderStatus.Ready:
      return (
        <span className="rounded-full bg-green-50 text-green-700 px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4" />
          Ready
        </span>
      );

    case OrderStatus.Delivering:
      return (
        <span className="rounded-full bg-blue-50 text-blue-600 px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5">
          <Bike className="w-4 h-4" />
          Delivering
        </span>
      );

    default:
      return null;
  }
};
