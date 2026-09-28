import { useOrderSummary } from "./useOrderSummary";
import AddressCard from "./AddressCard/AddressCard";
import DeliveryTypeSelector from "./DeliveryTypeSelector/DeliveryTypeSelector";
import OrderRequest from "./OrderRequest";
import CheckoutButton from "./CheckoutButton";
import { DeliveryType } from "../../../clientOrdersPage/types/deliveryType.enum";

const OrderSummary = () => {
  const {
    cart,
    deliveryType,
    deliveryFee,
    calculateFinalPrice,
    handleClickDeliveryType,
    register,
    handleCheckout,
  } = useOrderSummary();

  return (
    <aside className="bg-gray-100 py-10 px-5">
      <article className="font-semibold text-xl mb-5 leading-none">
        Order Summary
      </article>
      <article className="text-sm font-semibold text-gray-600 py-5 space-y-4 border-y-2 border-gray-300">
        <div className="flex justify-between leading-none">
          <h2>{cart?.items.length} ITEMS</h2>
          <div>${cart?.totalCost}</div>
        </div>
        <div className="space-y-2 leading-none">
          <h2>ADDRESS</h2>
          <AddressCard />
        </div>
        <div className="space-y-2">
          <DeliveryTypeSelector
            onClick={() => handleClickDeliveryType(DeliveryType.free)}
            deliveryTypeState={deliveryType}
            assignedDeliveryType={DeliveryType.free}
            cost="Free"
            eta="35-45 mins"
            title="Free Delivery"
          />
          <DeliveryTypeSelector
            onClick={() => handleClickDeliveryType(DeliveryType.direct)}
            deliveryTypeState={deliveryType}
            assignedDeliveryType={DeliveryType.direct}
            cost={`+ $${deliveryFee}`}
            eta="20-30 mins"
            title="Direct Delivery"
          />
        </div>
        <OrderRequest register={register} />
      </article>
      <article className="text-sm font-semibold text-gray-600 py-5 space-y-5">
        <div className="flex justify-between leading-none">
          <h2>TOTAL COST</h2>
          <div>${calculateFinalPrice()}</div>
        </div>
        <CheckoutButton onCheckOut={handleCheckout} />
      </article>
    </aside>
  );
};

export default OrderSummary;
