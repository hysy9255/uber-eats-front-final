import { OrderStatus } from "../../../../types/orderStatus.enum";

interface OrderStatusBadgeProps {
  status: OrderStatus;
}

export const OrderStatusBadge = ({ status }: OrderStatusBadgeProps) => {
  switch (status) {
    case OrderStatus.Pending:
      return (
        <span
          className="
            inline-flex items-center gap-1.5
            rounded-full
            bg-violet-50
            px-3 py-1
            text-xs font-medium
            text-violet-700
          "
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
          Pending
        </span>
      );

    case OrderStatus.Cooking:
      return (
        <span
          className="
            inline-flex items-center gap-1.5
            rounded-full
            bg-amber-50
            px-3 py-1
            text-xs font-medium
            text-amber-700
          "
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          Preparing
        </span>
      );

    case OrderStatus.Ready:
      return (
        <span
          className="
            inline-flex items-center gap-1.5
            rounded-full
            bg-emerald-50
            px-3 py-1
            text-xs font-medium
            text-emerald-700
          "
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Ready
        </span>
      );

    case OrderStatus.Delivering:
      return (
        <span
          className="
            inline-flex items-center gap-1.5
            rounded-full
            bg-sky-50
            px-3 py-1
            text-xs font-medium
            text-sky-700
          "
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
          Delivering
        </span>
      );

    case OrderStatus.Delivered:
      return (
        <span
          className="
            inline-flex items-center gap-1.5
            rounded-full
            bg-slate-100
            px-3 py-1
            text-xs font-medium
            text-slate-600
          "
        >
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          Delivered
        </span>
      );

    default:
      return null;
  }
};
