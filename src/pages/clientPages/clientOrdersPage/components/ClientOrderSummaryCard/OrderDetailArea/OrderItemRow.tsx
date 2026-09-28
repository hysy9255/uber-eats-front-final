import NoImgAvailable from "@/shared/components/NoImgAvailable/NoImgAvailable";
import type { OrderItemDTO } from "@/new/features/orders/client/api/dto/orderItem.dto";
import { capitalizeWords } from "@/shared/utils/capitalizeWords";
import { Fragment } from "react/jsx-runtime";

interface OrderItemRowProps {
  orderItem: OrderItemDTO;
}

const OrderItemRow: React.FC<OrderItemRowProps> = ({ orderItem: item }) => {
  return (
    <Fragment>
      <div className="flex-1 flex gap-x-3 py-1 items-center">
        {item.dishImg === null ? (
          <NoImgAvailable className="w-[40px] h-[40px]" />
        ) : (
          <img src={item.dishImg} className="w-[40px] h-[40px]" />
        )}
        <div className="flex flex-col">
          <div className="text-sm">{capitalizeWords(item.dishName)}</div>
          <div className="text-xs text-gray-500">{item.quantity} items</div>
        </div>
      </div>
      <div className="flex-1 flex items-center">
        <div className="text-sm text-gray-600 flex-1">${item.unitPrice}</div>
        <div className="text-gray-600 flex items-center gap-x-1 w-10">
          <div className="text-xs">x</div>
          <div className="text-sm">{item.quantity}</div>
        </div>
        <div className="text-sm text-gray-600 flex-1 flex justify-end">
          ${(item.unitPrice * item.quantity).toFixed(2)}
        </div>
      </div>
    </Fragment>
  );
};

export default OrderItemRow;
