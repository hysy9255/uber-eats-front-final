import type { ClientOrderSummaryDTO } from "@/new/features/orders/client/api/dto/clientOrderSummary.dto";
import { formatDateParts } from "./utils/formatDateParts";
import { Calendar, MapPinned, Package2 } from "lucide-react";

interface OrderSummaryCardFooterProps {
  order: ClientOrderSummaryDTO;
}

const OrderSummaryCardFooter: React.FC<OrderSummaryCardFooterProps> = ({
  order,
}) => {
  const orderedAt = formatDateParts(order.orderedAt);
  const deliveredAt = order.deliveredAt
    ? formatDateParts(order.deliveredAt)
    : null;
  return (
    <article
      className={`px-[var(--x-padding)] text-xs text-gray-700 flex min-w-0`}
    >
      <div
        className={`border-r border-gray-300 py-[var(--y-padding)] pr-5 gap-x-3 items-center flex flex-[1] min-w-0`}
      >
        <Calendar className="w-[16px] h-[16px]" />
        <div className="min-w-0">
          <div className="font-semibold">Ordered:</div>
          <div className="truncate">
            {orderedAt.date} {orderedAt.time}
          </div>
        </div>
      </div>
      <div
        className={`border-r border-gray-300 py-[var(--y-padding)] px-5 gap-x-3 items-center flex flex-[1] min-w-0`}
      >
        <Package2 className="w-[16px] h-[15px]" />
        <div className="min-w-0">
          <div className="font-semibold">Delivered:</div>
          <div className="truncate">
            {deliveredAt === null
              ? "--"
              : `${deliveredAt.date} ${deliveredAt.time}`}
          </div>
        </div>
      </div>

      <div
        className={` border-gray-300 py-[var(--y-padding)] px-5 gap-x-3 items-center flex flex-[2] min-w-0`}
      >
        <MapPinned className="w-[16px] h-[15px] " />
        <div className="min-w-0">
          <div className="font-semibold">Deliver To:</div>
          <div className="truncate">{order.deliverTo}</div>
        </div>
      </div>
    </article>
  );
};

export default OrderSummaryCardFooter;
