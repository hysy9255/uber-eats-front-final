interface RecommendedDish {
  dishId: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
}

interface RecommendationSectionProps {
  recommendedDishes: RecommendedDish[];
}

const RecommendationSection: React.FC<RecommendationSectionProps> = ({
  recommendedDishes,
}) => {
  return (
    <div>
      <h2 className="mb-5 text-xl font-bold text-gray-900">
        You may also like
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {recommendedDishes.map((dish) => (
          <div
            key={dish.dishId}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm relative"
          >
            <img
              src={dish.imageUrl}
              alt={dish.name}
              className="h-[150px] w-full object-cover"
            />

            <span className="absolute top-2 left-2 inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
              {dish.category}
            </span>

            <div className="p-2">
              <h3 className="mt-2 text-sm line-clamp-1 font-semibold text-gray-900">
                {dish.name}
              </h3>

              <div className="mt-2 text-sm font-semibold text-gray-900">
                ${dish.price.toFixed(2)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationSection;
