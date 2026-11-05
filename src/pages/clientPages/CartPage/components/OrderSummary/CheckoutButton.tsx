import { ArrowRight } from "lucide-react";

interface CheckoutButtonProps {
  onCheckout: () => void;
}

const CheckoutButton = ({ onCheckout }: CheckoutButtonProps) => {
  return (
    <button
      type="button"
      onClick={onCheckout}
      className="
        group flex min-h-12 w-full
        items-center justify-center gap-2
        rounded-xl bg-green-700
        px-4 py-3
        text-sm font-semibold text-white
        transition-all duration-200
        cursor-pointer
        hover:bg-green-800
        active:scale-[0.99] active:bg-green-900
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-green-600
      "
    >
      <span>Checkout</span>

      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </button>
  );
};

export default CheckoutButton;
