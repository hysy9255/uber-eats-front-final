import { useCart } from "../shared/context/cart/useCart";
import CartSummary from "./components/CartSummary/CartSummary";
import EmptyCart from "./components/EmptyCart";
import OrderSummary from "./components/OrderSummary/OrderSummary";

const CartPage = () => {
  const { cart } = useCart();

  if (cart?.items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <main className={`grid grid-cols-1 min-[950px]:grid-cols-[5fr_2fr]`}>
      <CartSummary />
      <OrderSummary />
    </main>
  );
};

export default CartPage;
