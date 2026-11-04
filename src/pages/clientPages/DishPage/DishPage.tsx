import { DishDetailSection } from "./components/DishDetailSection/DishDetailSection";
import ReviewSection from "./components/ReviewSection/ReviewSection";
import RecommendationSection from "./components/RecommendationSection/RecommendationSection";

const DishPage = () => {
  return (
    <main className="min-w-0 w-full">
      <div className="mx-auto w-full max-w-[1450px] px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
        <DishDetailSection />

        <div className="mt-8 grid min-w-0 grid-cols-1 gap-6 border-t border-gray-100 pt-7 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] xl:gap-8">
          <section className="min-w-0">
            <RecommendationSection />
          </section>

          <section className="min-w-0">
            <ReviewSection />
          </section>
        </div>
      </div>
    </main>
  );
};

export default DishPage;
