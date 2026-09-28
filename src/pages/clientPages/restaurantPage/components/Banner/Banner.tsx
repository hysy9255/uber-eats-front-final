import { StarIcon } from "lucide-react";
import { useState } from "react";
import StatusBadge from "./StatusBadge";
import FavoriteButton from "./FavoriteButton";
import DefaultRestaurantLogoImg from "@/shared/components/DefaultRestaurantLogoImg/DefaultRestaurantLogoImg";
import type { RestaurantStatus } from "@/shared/types/restaurantStatus.type";

interface BannerProps {
  bannerInfo: {
    bannerImg: string;
    logo: string | null;
    name: string;
    avgRating: number | null;
    reviewCount: number;
    address: string;
    status: RestaurantStatus;
  };
}

const Banner: React.FC<BannerProps> = ({
  bannerInfo: {
    bannerImg,
    logo,
    name,
    avgRating,
    reviewCount,
    address,
    status,
  },
}) => {
  const [favorited, setFavorited] = useState<boolean>(false);
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <img src={bannerImg} className="h-[200px] w-full object-cover" />

      <div
        className="
      absolute inset-0
      bg-gradient-to-t
      from-black/75
      via-black/25
      to-transparent
    "
      />
      <StatusBadge
        className="absolute top-5 left-5"
        restaurantStatus={status}
      />
      <FavoriteButton
        className="absolute top-5 right-5"
        isSelected={favorited}
        onClick={() => setFavorited((prev) => !prev)}
      />

      <div className="absolute bottom-5 left-5 flex space-x-4 text-white">
        {logo ? (
          <img
            className="rounded-full object-cover w-20 h-20 border-1 border-gray-300"
            src={logo}
          />
        ) : (
          <DefaultRestaurantLogoImg className="rounded-full object-cover w-20 h-20 border-1 border-gray-300" />
        )}
        <div className="flex flex-col items-start justify-center">
          <div className="text-nowrap font-bold text-lg">{name}</div>

          <div className="flex gap-x-2 text-sm flex-col min-[1000px]:flex-row">
            <div className="flex items-center gap-1">
              <StarIcon className="w-[15px] h-[15px] text-yellow-400 fill-yellow-400" />

              <div className="">
                {avgRating} ({reviewCount}) • {10} min
              </div>
            </div>
            <div>{address}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
