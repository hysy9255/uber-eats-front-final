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
}: RestaurantImageGalleryProps) => {
  return (
    <div className="relative mb-3">
      <div className="grid grid-cols-4 gap-1">
        <div className="col-span-3 aspect-[3/2] overflow-hidden rounded-l-lg">
          <img
            src={restaurantImgUrl}
            alt={name}
            className="size-full object-cover"
          />
        </div>

        <div className="col-span-1 grid grid-rows-2 gap-1">
          <div className="aspect-square overflow-hidden rounded-tr-lg">
            <img
              src={restaurantImgUrl2}
              alt={name}
              className="size-full object-cover"
            />
          </div>

          <div className="aspect-square overflow-hidden rounded-br-lg">
            <img
              src={restaurantImgUrl3}
              alt={name}
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>

      {statusLabel && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-lg bg-black/40">
          <span className="text-xl font-bold text-white">{statusLabel}</span>
        </div>
      )}
    </div>
  );
};
