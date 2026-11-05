import { useOrderSummary } from "./useOrderSummary";
import AddressCard from "./AddressCard/AddressCard";
import DeliveryTypeSelector from "./DeliveryTypeSelector/DeliveryTypeSelector";
import OrderRequest from "./OrderRequest";
import CheckoutButton from "./CheckoutButton";
import { DeliveryType } from "../../types/deliveryType.enum";
import { CheckoutErrorModal } from "./CheckoutErrorModal";
import { calculateOrderTotal } from "./calculateOrderTotal";
import { useForm } from "react-hook-form";
import type { PlaceOrderForm } from "../../types/placeOrderForm.type";

const OrderSummary = () => {
  const {
    cart,
    deliveryType,
    setDeliveryType,
    handleCheckout,
    showCheckoutErrorModal,
    setShowCheckoutErrorModal,
  } = useOrderSummary();

  const deliveryFee = 4.75;

  const finalPrice = cart
    ? calculateOrderTotal(cart, deliveryType, deliveryFee)
    : 0;

  const { register, handleSubmit } = useForm<PlaceOrderForm>({
    mode: "onSubmit",
  });

  return (
    <aside className="min-w-0">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 border-b border-gray-100 pb-5">
          <h2 className="text-lg font-bold text-gray-950 sm:text-xl">
            Order Summary
          </h2>

          <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
            {cart?.items.length ?? 0} items
          </span>
        </div>

        {/* Subtotal */}
        <div className="flex items-center justify-between gap-3 py-5">
          <span className="text-sm text-gray-500">Subtotal</span>

          <span className="text-sm font-semibold tabular-nums text-gray-900">
            ${Number(cart?.totalCost ?? 0).toFixed(2)}
          </span>
        </div>

        <div className="border-t border-gray-100" />

        {/* Delivery Address */}
        <section className="min-w-0 py-5">
          <h3 className="mb-3 text-sm font-semibold text-gray-900">
            Delivery address
          </h3>

          <AddressCard />
        </section>

        <div className="border-t border-gray-100" />

        {/* Delivery Options */}
        <section className="min-w-0 py-5">
          <h3 className="mb-3 text-sm font-semibold text-gray-900">
            Delivery options
          </h3>

          <div className="flex flex-col gap-3">
            <DeliveryTypeSelector
              onSelect={() => setDeliveryType(DeliveryType.free)}
              deliveryTypeState={deliveryType}
              assignedDeliveryType={DeliveryType.free}
              cost="Free"
              eta="35-45 mins"
              title="Free Delivery"
            />

            <DeliveryTypeSelector
              onSelect={() => setDeliveryType(DeliveryType.direct)}
              deliveryTypeState={deliveryType}
              assignedDeliveryType={DeliveryType.direct}
              cost={`+ $${Number(deliveryFee).toFixed(2)}`}
              eta="20-30 mins"
              title="Direct Delivery"
            />
          </div>
        </section>

        <div className="border-t border-gray-100" />

        {/* Order Request */}
        <section className="min-w-0 py-5">
          <h3 className="mb-3 text-sm font-semibold text-gray-900">
            Special instructions
          </h3>

          <OrderRequest register={register} />
        </section>

        {/* Total */}
        <div className="border-t border-gray-200 pt-5">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-gray-600">Total</p>

              <p className="mt-1 text-xs text-gray-400">
                Including delivery fee
              </p>
            </div>

            <p className="text-2xl font-bold tracking-tight tabular-nums text-gray-950 sm:text-[26px]">
              ${Number(finalPrice).toFixed(2)}
            </p>
          </div>

          <div className="mt-5">
            <CheckoutButton
              onCheckout={handleSubmit(handleCheckout, (e) => console.error(e))}
            />
          </div>
        </div>
      </div>
      {showCheckoutErrorModal && (
        <CheckoutErrorModal onOk={() => setShowCheckoutErrorModal(false)} />
      )}
    </aside>
  );
};

export default OrderSummary;
