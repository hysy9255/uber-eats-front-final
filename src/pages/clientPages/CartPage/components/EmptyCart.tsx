import { ArrowRight, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="p-5">
      <div className="w-full rounded-2xl border border-gray-100 bg-white px-6 py-6 shadow-sm">
        {/* Empty Cart Section */}
        <section className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl py-8 text-center">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[200px] w-[60%] rounded-full bg-green-50/70 blur-3xl" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Cart Icon */}
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
              <ShoppingCart
                className="h-10 w-10 text-green-600"
                strokeWidth={1.5}
              />
            </div>

            <h1 className="text-xl font-bold tracking-tight text-gray-950">
              Your cart is empty
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              When you add items to the cart, they will show up here.
            </p>

            <Link
              to="/restaurants"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-700"
            >
              Browse restaurants
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <div className="my-6 border-t border-gray-100" />
      </div>
    </div>
  );
};

export default EmptyCart;
