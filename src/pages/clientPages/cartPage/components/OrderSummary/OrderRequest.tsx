import type { PlaceOrderForm } from "@/new/features/orders/client/types/placeOrderForm.type";
import { type UseFormRegister } from "react-hook-form";

interface OrderRequestProps {
  register: UseFormRegister<PlaceOrderForm>;
}

const OrderRequest: React.FC<OrderRequestProps> = ({ register }) => {
  return (
    <div>
      <div>ORDER REQUEST</div>
      <div>
        <div className="font-normal italic">To restaurant</div>
        <textarea
          {...register("requestToRestaurant")}
          placeholder="Leave a note..."
          className="
          px-2 py-1
          border border-gray-300
        bg-white w-full 
          rounded-sm text-black font-normal"
        />
      </div>
      <div>
        <div className="font-normal italic">To driver</div>
        <textarea
          {...register("requestToDriver")}
          placeholder="Leave a note..."
          className="
          px-2 py-1
          border border-gray-300
          bg-white w-full 
          rounded-sm text-black font-normal"
        />
      </div>
    </div>
  );
};

export default OrderRequest;
