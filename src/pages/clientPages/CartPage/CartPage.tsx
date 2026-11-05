import { useCart } from "../shared/context/cart/useCart";
import CartSummary from "./components/CartSummary/CartSummary";
import EmptyCart from "./components/EmptyCart";
import OrderSummary from "./components/OrderSummary/OrderSummary";

const CartPage = () => {
  const { cart } = useCart();

  if (cart && cart.items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <main className="@container w-full min-w-0">
      <div
        className="
        grid grid-cols-1 gap-y-4 gap-x-6
        @[1250px]:grid-cols-[minmax(0,1fr)_420px]
        @[1250px]:items-start
        py-5 px-3
        "
      >
        <CartSummary />
        <OrderSummary />
      </div>
    </main>
  );
};

export default CartPage;
