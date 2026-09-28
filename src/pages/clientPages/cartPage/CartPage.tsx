import { useCart } from "../shared/context/cart/useCart";
import CartSummary from "./components/CartSummary/CartSummary";
import OrderSummary from "./components/OrderSummary/OrderSummary";

const CartPage = () => {
  const { cart } = useCart();

  if (cart?.items.length === 0) {
    return (
      <section className="p-2">
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white/60 py-14 text-center">
          <div className="text-gray-900 font-semibold">
            No items in the cart
          </div>
          <div className="text-sm text-gray-500 mt-2">
            When you add items to the cart, it will show up here.
          </div>
        </div>
      </section>
    );
  }

  return (
    <main className={`grid grid-cols-1 min-[950px]:grid-cols-[5fr_2fr]`}>
      <CartSummary />
      <OrderSummary />
    </main>
  );
};

export default CartPage;
