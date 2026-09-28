import { ChevronLeft, ChevronRight } from "lucide-react";
import type { OrderStatus } from "../../types/orderStatus.enum";
import { TableHeader } from "./TableHeader";
import { OrderRow } from "./OrderRow/OrderRow";
import { PaginationButton } from "./PaginationButton";
import type { RestaurantOrderSummaryDTO } from "../../api/getRestaurantOrderSummaries/restaurantOrderSummary.dto";

interface OrderTableProps {
  filteredOrders: RestaurantOrderSummaryDTO[];
  updateOrderStatusLocally: (orderId: string, status: OrderStatus) => void;
}

const OrderTable: React.FC<OrderTableProps> = ({
  filteredOrders,
  updateOrderStatusLocally,
}) => {
  return (
    <section className="mt-4 overflow-y-auto rounded-xl border border-gray-200 bg-white">
      <table className="w-full border-collapse">
        <thead className="bg-gray-50/80">
          <tr>
            <th className="w-12 px-4 py-3 text-left">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300"
              />
            </th>

            <TableHeader>Order ID</TableHeader>
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
              updateOrderStatusLocally={updateOrderStatusLocally}
            />
          ))}
        </tbody>
      </table>

      {/* Footer */}
      <div className="h-16 border-t border-gray-100 px-4 flex items-center">
        <span className="text-xs text-gray-500">
          Showing 1 to {filteredOrders.length} of 18 orders
        </span>

        <div className="mx-auto flex items-center gap-1">
          <PaginationButton>
            <ChevronLeft className="w-4 h-4" />
          </PaginationButton>

          <button
            className="
          w-8 h-8
          rounded-lg
          border border-gray-200
          bg-white
          text-xs font-semibold
          text-gray-800
        "
          >
            1
          </button>

          <PaginationButton>2</PaginationButton>
          <PaginationButton>3</PaginationButton>

          <PaginationButton>
            <ChevronRight className="w-4 h-4" />
          </PaginationButton>
        </div>

        <div className="w-[130px]" />
      </div>
    </section>
  );
};

export default OrderTable;
