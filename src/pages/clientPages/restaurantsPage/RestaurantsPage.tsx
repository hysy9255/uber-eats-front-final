import { useCallback, useEffect, useState } from "react";
import HomeDiscoverySection from "./components/HomeDiscorverySection/HomeDiscoverySection";
import { RestaurantCard } from "./components/RestaurantCard/RestaurantCard";
import type { RestaurantSummaryDTO } from "./api/restaurantSummary.dto";
import { getRestaurants } from "./api/getRestaurants";

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
