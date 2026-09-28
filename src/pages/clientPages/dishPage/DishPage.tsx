import { useParams } from "react-router-dom";
import DishDescSection from "./components/DishDescSection/DishDescSection";
import DishImgSection from "./components/DishImgSection/DishImgSection";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import RecommendationSection from "./components/RecommendationSection/RecommendationSection";

import { useDishPage } from "./hooks/useDishPage";
import PageNotFound from "../../../shared/components/PageNotFound";
import CartErrorModal from "../clientOrdersPage/components/ClientOrderSummaryCard/OrderDetailArea/CartErrorModal";

const recommendedDishes = [
  {
    dishId: "dish-001",
    name: "Classic Caesar Salad",
    category: "Salad",
    price: 11,
    imageUrl:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=80",
  },
  {
    dishId: "dish-002",
    name: "Penne Arrabbiata",
    category: "Pasta",
    price: 12.5,
    imageUrl:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80",
  },
  {
    dishId: "dish-003",
    name: "Prosciutto & Arugula Pizza",
    category: "Pizza",
    price: 16.5,
    imageUrl:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
  },
];

const DishPage = () => {
  const { dishId, restaurantId } = useParams();

  const {
    addToCartError,
    increment,
    decrement,
    quantity,
    totalPrice,
    handleAddToCart,
    handleClickAddAnyway,
    dishDetail,
    setAddToCartError,
  } = useDishPage(restaurantId, dishId);

  if (!restaurantId || !dishId) {
    return <PageNotFound />;
  }

  if (!dishDetail) {
    return <div>Failed to load dish</div>;
  }

  return (
    <main className="w-full">
      <div className="mx-auto w-full max-w-[1450px] px-5 py-5 lg:px-8">
        {/* =========================
            TOP
            Image + Dish Detail
        ========================== */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.35fr] lg:gap-8">
          <section>
            <DishImgSection dishImg={dishDetail.dishImg} />
          </section>

          <section>
            <DishDescSection
              restaurantId={restaurantId}
              dishDetail={dishDetail}
              onClickAddToCart={handleAddToCart}
              totalPrice={totalPrice}
              decrement={decrement}
              increment={increment}
              quantity={quantity}
            />
          </section>
        </div>

        {/* =========================
            BOTTOM
            Recommendation + Reviews
        ========================== */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.25fr_0.9fr] lg:gap-8">
          <section>
            <RecommendationSection recommendedDishes={recommendedDishes} />
          </section>

          <section>
            <ReviewSection />
          </section>
        </div>
      </div>

      {addToCartError && (
        <CartErrorModal
          onClickCancel={() => setAddToCartError(undefined)}
          onClickAddAnyway={handleClickAddAnyway}
        />
      )}
    </main>
  );
};

export default DishPage;
