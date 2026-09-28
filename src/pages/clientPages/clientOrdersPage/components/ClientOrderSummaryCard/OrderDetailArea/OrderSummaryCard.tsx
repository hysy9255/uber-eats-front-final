import type { ClientOrderDetailDTO } from "@/new/features/orders/client/api/dto/\bclientOrderDetail.dto";
import { CreditCard, Motorbike } from "lucide-react";

interface OrderSummaryCardProps {
  order: ClientOrderDetailDTO;
}

const OrderSummaryCard: React.FC<OrderSummaryCardProps> = ({ order }) => {
  return (
    <div
      className=" rounded-2xl
        border border-gray-200
        bg-white
        p-4 flex flex-col flex-[1]"
    >
      <div className="text-sm text-gray-800 font-medium">Order Summary</div>
      <div className="border-b border-gray-400 py-2 flex flex-col gap-y-1 text-sm text-gray-500">
        <div className="flex justify-between">
          <div>items ({order.orderItems.length})</div>
          <div>${order.totalPrice}</div>
        </div>
        <div className="flex justify-between">
          <div>Delivery Fee</div>
          <div>${order.totalPrice}</div>
        </div>
        <div className="flex justify-between">
          <div>Discount</div>
          <div className="text-red-600">- $3.85</div>
        </div>
      </div>
      <div className="flex justify-between font-semibold py-2">
        <div className="text-sm">Total</div>
        <div className="text-md">${order.totalPrice}</div>
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-x-3">
          <Motorbike className="w-4 h-4" />
          <div className="flex flex-col">
            <div className="text-xs font-medium text-gray-700 leading-none">
              Delivery
            </div>
            <div className="text-xs text-gray-500">
              Free Delivery • 35-40 mins
            </div>
          </div>
        </div>
        <div className="flex gap-x-3">
          <CreditCard className="w-4 h-4" />
          <div className="flex flex-col">
            <div className="text-xs font-medium text-gray-700 leading-none">
              Payment
            </div>
            <div className="text-xs text-gray-500">Visa **** 4242</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
