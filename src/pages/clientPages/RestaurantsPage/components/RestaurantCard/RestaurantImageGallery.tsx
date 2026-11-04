import { Clock3, Moon } from "lucide-react";

type RestaurantImageGalleryProps = {
  name: string;
  statusLabel: string | null;
  restaurantImgUrl: string;
  restaurantImgUrl2: string;
  restaurantImgUrl3: string;
};

export const RestaurantImageGallery: React.FC<RestaurantImageGalleryProps> = ({
  name,
  statusLabel,
  restaurantImgUrl,
  restaurantImgUrl2,
  restaurantImgUrl3,
}) => {
  const isClosed = statusLabel === "Closed";
  const isPaused = statusLabel === "Break Time";

  return (
    <div className="relative mb-3 overflow-hidden rounded-lg">
      {/* Image Gallery */}
      <div
        className={`grid grid-cols-4 gap-1 transition-all duration-300 ${
          statusLabel ? "brightness-[0.85] saturate-[0.85]" : ""
        }`}
      >
        {/* Main Image */}
        <div className="col-span-3 aspect-[3/2] overflow-hidden">
          <img
            src={restaurantImgUrl}
            alt={name}
            className="size-full object-cover"
          />
        </div>

        {/* Sub Images */}
        <div className="col-span-1 grid grid-rows-2 gap-1">
          <div className="aspect-square overflow-hidden">
            <img
              src={restaurantImgUrl2}
              alt={`${name} interior`}
              className="size-full object-cover"
            />
          </div>

          <div className="aspect-square overflow-hidden">
            <img
              src={restaurantImgUrl3}
              alt={`${name} food`}
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Status Badge */}
      {statusLabel && (
        <div
          className="
            pointer-events-none absolute top-3 left-3 z-10
            flex items-center gap-2
            rounded-full border border-white/80
            bg-white/95 px-3 py-2
            shadow-sm backdrop-blur-sm
          "
        >
          {isClosed ? (
            <Moon className="h-3.5 w-3.5 text-gray-500" />
          ) : isPaused ? (
            <Clock3 className="h-3.5 w-3.5 text-amber-600" />
          ) : null}

          <span
            className={`text-xs font-semibold ${
              isPaused ? "text-amber-700" : "text-gray-700"
            }`}
          >
            {statusLabel}
          </span>
        </div>
      )}
    </div>
  );
};
