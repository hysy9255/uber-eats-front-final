import { useCallback, useEffect, useState } from "react";
import HomeDiscoverySection from "./components/HomeDiscorverySection/HomeDiscoverySection";
import { RestaurantCard } from "./components/RestaurantCard/RestaurantCard";
import type { RestaurantSummaryDTO } from "./api/restaurantSummary.dto";
import { getRestaurants } from "./api/getRestaurants";
import { ChevronRight } from "lucide-react";

const RestaurantsPage = () => {
  const [restaurantSummaries, setRestaurantSummaries] =
    useState<RestaurantSummaryDTO[]>();

  const loadRestaurants = useCallback(async () => {
    const restaurantSummariesData = await getRestaurants();
    setRestaurantSummaries(restaurantSummariesData);
  }, []);

  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <div
      className="
      w-full 
      px-[16px]
      pt-[8px]
      "
    >
      <HomeDiscoverySection />

      {/* Popular Header */}
      <div className="flex items-end justify-between mt-5">
        <div>
          <h3 className="text-xl font-bold text-gray-950">Popular near you</h3>

          <div className="mt-0.5 text-xs text-gray-500">
            Top-rated restaurants, fast delivery
          </div>
        </div>

        <button
          className="
              flex items-center gap-x-2
              rounded-lg
              border border-gray-200
              px-4 py-2
              text-xs font-medium
              hover:bg-gray-50
            "
        >
          View all
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
      <div
        id="restaurant-list"
        className="
        mt-5
        grid grid-cols-1
        min-[950px]:grid-cols-3 
        min-[570px]:grid-cols-2
        gap-x-4
        "
      >
        {restaurantSummaries?.map((row, index) => (
          <RestaurantCard
            key={index}
            restaurantId={row.restaurantId}
            logo={row.logo}
            name={row.name}
            address={row.address}
            prepTime={10}
            avgRating={row.avgRating}
            reviewCount={row.reviewCount}
            status={row.status}
            restaurantImgUrl={row.mainImg}
            restaurantImgUrl2={row.sub1Img}
            restaurantImgUrl3={row.sub2Img}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantsPage;
