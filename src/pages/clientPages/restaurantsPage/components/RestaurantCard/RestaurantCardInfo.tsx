import DefaultRestaurantLogoImg from "@/shared/components/DefaultRestaurantLogoImg/DefaultRestaurantLogoImg";
import { Heart, StarIcon } from "lucide-react";
import { useState } from "react";

type RestaurantCardInfoProps = {
  logo: string | null;
  name: string;
  address: string;
  prepTime: number;
  avgRating: number | null;
  reviewCount: number;
};

export const RestaurantCardInfo: React.FC<RestaurantCardInfoProps> = ({
  logo,
  name,
  address,
  prepTime,
  avgRating,
  reviewCount,
}: RestaurantCardInfoProps) => {
  const [favorited, setFavorited] = useState<boolean>(false);
  return (
    <div className="flex">
      <div className="mr-3 shrink-0">
        {logo ? (
          <img
            src={logo}
            alt={`${name} logo`}
            className="size-[36px] rounded-full border border-gray-300 object-cover"
          />
        ) : (
          <DefaultRestaurantLogoImg className="size-[36px] rounded-full border border-gray-300 object-cover" />
        )}
      </div>

      <div className="min-w-0 flex-1 relative">
        <div className="truncate text-[16px] font-bold">{name}</div>

        <div className="flex items-center gap-x-1 text-xs text-slate-700">
          <StarIcon className="size-[10px] shrink-0 text-yellow-400 fill-yellow-400" />

          <span>
            {avgRating ?? 0} ({reviewCount})
          </span>

          <span>• {prepTime} mins</span>
        </div>

        <div className="truncate text-xs text-slate-500">{address}</div>
        <button
          className="hover:cursor-pointer absolute right-0 top-0"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            setFavorited((prev) => !prev);
          }}
        >
          <Heart
            className={`w-4 h-4  ${
              favorited ? "text-red-400 fill-red-400" : "text-gray-400"
            }`}
          />
        </button>
      </div>
    </div>
  );
};
