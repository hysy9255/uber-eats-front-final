import { useFormContext, useWatch } from "react-hook-form";
import { ImagePlaceholder } from "./ImagePlaceHolder";
import type { UpdateRestaurantSettingForm } from "../../../../types/updateRestaurantSettingForm";

export const RestaurantCustomerPreview = () => {
  const { control } = useFormContext<UpdateRestaurantSettingForm>();

  const restaurantSetting = useWatch({
    control,
  });

  return (
    <div
      className="
        w-[820px]
        max-w-full
        rounded-[28px]
        bg-[#fff1e8]
        p-6
      "
    >
      {/* Images */}
      <div
        className="
          grid
          aspect-[2/1]
          grid-cols-[3fr_1fr]
          gap-2
          overflow-hidden
          rounded-2xl
        "
      >
        {/* Main */}
        <div className="overflow-hidden bg-gray-100">
          {restaurantSetting?.mainImage?.preview ? (
            <img
              src={restaurantSetting.mainImage.preview}
              alt=""
              className="h-full w-full object-cover"
            />
          ) : (
            <ImagePlaceholder />
          )}
        </div>

        {/* Sub images */}
        <div className="grid grid-rows-2 gap-2">
          <div className="overflow-hidden bg-gray-100">
            {restaurantSetting?.sub1Image?.preview ? (
              <img
                src={restaurantSetting.sub1Image.preview}
                alt=""
                className="h-full w-full object-cover"
              />
            ) : (
              <ImagePlaceholder />
            )}
          </div>

          <div className="overflow-hidden bg-gray-100">
            {restaurantSetting?.sub2Image?.preview ? (
              <img
                src={restaurantSetting.sub2Image.preview}
                alt=""
                className="h-full w-full object-cover"
              />
            ) : (
              <ImagePlaceholder />
            )}
          </div>
        </div>
      </div>

      {/* Restaurant info */}
      <div className="mt-6 flex items-start gap-5">
        {/* Logo */}
        <div
          className="
            h-[72px]
            w-[72px]
            shrink-0
            overflow-hidden
            rounded-full
            border
            border-gray-300
            bg-white
          "
        >
          {restaurantSetting?.logo?.preview ? (
            <img
              src={restaurantSetting.logo.preview}
              alt=""
              className="h-full w-full object-cover"
            />
          ) : (
            <ImagePlaceholder />
          )}
        </div>

        {/* Info */}
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-[15px] font-bold leading-tight text-gray-950">
            {restaurantSetting?.name || "Restaurant name"}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-[13px] text-gray-700">
            <span>⭐</span>
            <span>0 (0)</span>
            <span>·</span>
            <span>10 mins</span>
          </div>

          <p className="mt-1 truncate text-[15px] text-slate-500">
            {[
              restaurantSetting?.streetAddress,
              restaurantSetting?.apt,
              restaurantSetting?.city,
              restaurantSetting?.state,
              restaurantSetting?.zip,
            ]
              .filter(Boolean)
              .join(" ")}
          </p>
        </div>

        {/* Favorite */}
        <button type="button" className="mt-1 text-3xl text-gray-400">
          ♡
        </button>
      </div>
    </div>
  );
};
