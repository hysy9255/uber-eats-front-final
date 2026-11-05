import type { UseFormRegister } from "react-hook-form";
import type { PlaceOrderForm } from "../../../ClientOrdersPage/types/placeOrderForm.type";

interface OrderRequestProps {
  register: UseFormRegister<PlaceOrderForm>;
}

const OrderRequest = ({ register }: OrderRequestProps) => {
  const textareaClassName = `
    block w-full min-w-0
    min-h-[80px] resize-y
    rounded-xl border border-gray-200
    bg-white px-3 py-3
    text-sm font-normal leading-5 text-gray-900
    placeholder:text-gray-400
    outline-none transition-colors
    focus:border-green-500 focus:ring-2 focus:ring-green-500/10
    sm:min-h-[90px]
  `;

  return (
    <div className="flex min-w-0 flex-col gap-4">
      {/* Restaurant Request */}
      <div className="min-w-0">
        <label
          htmlFor="requestToRestaurant"
          className="mb-2 block text-xs font-semibold text-gray-600"
        >
          To restaurant
        </label>

        <textarea
          id="requestToRestaurant"
          {...register("requestToRestaurant")}
          placeholder="e.g. No onions, extra sauce..."
          rows={3}
          className={textareaClassName}
        />
      </div>

      {/* Driver Request */}
      <div className="min-w-0">
        <label
          htmlFor="requestToDriver"
          className="mb-2 block text-xs font-semibold text-gray-600"
        >
          To driver
        </label>

        <textarea
          id="requestToDriver"
          {...register("requestToDriver")}
          placeholder="e.g. Please leave at the door..."
          rows={3}
          className={textareaClassName}
        />
      </div>
    </div>
  );
};

export default OrderRequest;
