import React from "react";
import { Link } from "react-router-dom";
import { RestaurantImageGallery } from "./RestaurantImageGallery";
import { RestaurantCardInfo } from "./RestaurantCardInfo";
import type { RestaurantStatus } from "@/shared/types/restaurantStatus.type";

type RestaurantCardProps = {
  restaurantId: string;
  logo: string | null;
  name: string;
  address: string;
  prepTime: number;
  avgRating: number | null;
  reviewCount: number;
  status: RestaurantStatus;
  restaurantImgUrl: string;
  restaurantImgUrl2: string;
  restaurantImgUrl3: string;
};

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurantId,
  logo,
  name,
  address,
  prepTime,
  avgRating,
  reviewCount,
  status,
  restaurantImgUrl,
  restaurantImgUrl2,
  restaurantImgUrl3,
}) => {
  const statusLabel =
    status === "paused" ? "Break Time" : status === "closed" ? "Closed" : null;

  return (
    <Link to={`/restaurants/${restaurantId}`} className="block">
      <article className="group relative mx-2 mb-8">
        <div
          className="
            pointer-events-none
            absolute -inset-[12px] z-0
            rounded-2xl
            bg-orange-500/10
            opacity-0
            transition-opacity
            group-hover:opacity-100
          "
        />

        <div className="relative z-10">
          <RestaurantImageGallery
            name={name}
            statusLabel={statusLabel}
            restaurantImgUrl={restaurantImgUrl}
            restaurantImgUrl2={restaurantImgUrl2}
            restaurantImgUrl3={restaurantImgUrl3}
          />

          <RestaurantCardInfo
            logo={logo}
            name={name}
            address={address}
            prepTime={prepTime}
            avgRating={avgRating}
            reviewCount={reviewCount}
          />
        </div>
      </article>
    </Link>
  );
};
