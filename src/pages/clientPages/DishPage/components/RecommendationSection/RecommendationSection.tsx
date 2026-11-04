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

const RecommendationSection = () => {
  return (
    <div className="min-w-0">
      <h2 className="mb-4 text-lg font-bold text-gray-900 sm:mb-5 sm:text-xl">
        You may also like
      </h2>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {recommendedDishes.map((dish) => (
          <div
            key={dish.dishId}
            className="
              group relative min-w-0 overflow-hidden
              rounded-xl border border-gray-200
              bg-white shadow-sm
              transition-shadow
              hover:shadow-md
              sm:rounded-2xl
            "
          >
            {/* Dish Image */}
            <div className="relative">
              <img
                src={dish.imageUrl}
                alt={dish.name}
                loading="lazy"
                className="
                  h-[110px] w-full object-cover
                  transition-transform duration-300
                  group-hover:scale-105
                  sm:h-[150px]
                "
              />

              {/* Category Badge */}
              <span
                className="
                  absolute top-2 left-2
                  max-w-[calc(100%-16px)]
                  truncate rounded-full bg-green-50
                  px-2 py-1
                  text-[10px] font-medium text-green-700
                  sm:px-3 sm:text-xs
                "
              >
                {dish.category}
              </span>
            </div>

            {/* Dish Information */}
            <div className="min-w-0 p-3 sm:p-4">
              <h3
                className="
                  line-clamp-2 min-h-10
                  text-xs leading-5 font-semibold text-gray-900
                  sm:text-sm
                "
              >
                {dish.name}
              </h3>

              <div className="mt-2 text-sm font-bold text-gray-900">
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
