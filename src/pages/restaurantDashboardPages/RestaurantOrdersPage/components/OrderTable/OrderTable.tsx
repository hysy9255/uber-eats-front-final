import type { OrderStatus } from "../../types/orderStatus.enum";
import { TableHeader } from "./TableHeader";
import { OrderRow } from "./OrderRow/OrderRow";
import type { RestaurantOrderSummaryDTO } from "../../api/getRestaurantOrderSummaries/restaurantOrderSummary.dto";
import { useState } from "react";

interface OrderTableProps {
  filteredOrders: RestaurantOrderSummaryDTO[];
  updateOrderStatusLocally: (orderId: string, status: OrderStatus) => void;
  className?: string;
}

const OrderTable: React.FC<OrderTableProps> = ({
  filteredOrders,
  updateOrderStatusLocally,
  className,
}) => {
  const [targetOrderId, setTargetOrderId] = useState<string | null>(null);

  const toggleMoreVeritcalButton = (orderId: string) => {
    if (targetOrderId) {
      setTargetOrderId(null);
      return;
    }

    setTargetOrderId(orderId);
  };

  const closeMoreDropdown = () => {
    setTargetOrderId(null);
  };

  return (
    <section
      className={`
    ${className} 
    rounded-xl border border-gray-200 bg-white`}
    >
      <table className="w-full border-collapse">
        <thead className="sticky top-0 z-10 bg-gray-50">
          <tr>
            <TableHeader>Order Id</TableHeader>
            <TableHeader>Customer</TableHeader>
            <TableHeader>Items</TableHeader>
            <TableHeader>Total</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Time</TableHeader>
            <th className="w-12" />
          </tr>
        </thead>

        <tbody>
          {filteredOrders.map((order, index) => (
            <OrderRow
              key={order.orderId}
              order={order}
              openUpward={index !== 0}
              onToggleDropdown={() => toggleMoreVeritcalButton(order.orderId)}
              closeMoreDropdown={closeMoreDropdown}
              targetOrderId={targetOrderId}
              updateOrderStatusLocally={updateOrderStatusLocally}
            />
          ))}
        </tbody>
      </table>
      {/* </div> */}
    </section>
  );
};

export default OrderTable;
