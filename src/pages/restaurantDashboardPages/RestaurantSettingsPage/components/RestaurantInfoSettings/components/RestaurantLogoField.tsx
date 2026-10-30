import { useRef } from "react";
import UploadImageButton from "./UploadImageButton";
import type { UpdateRestaurantSettingForm } from "../../../types/updateRestaurantSettingForm";
import RemoveImageButton from "../../../../menuManagementPage/components/shared/components/ImageManagerButtons/RemoveImageButton";

interface RestaurantLogoFieldProps {
  logoImage: string | null;
  handleImageChange: (
    file: File,
    field: keyof UpdateRestaurantSettingForm
  ) => void;
  removeImage: (
    field: keyof UpdateRestaurantSettingForm,
    shouldDirty: boolean
  ) => void;
}

const RestaurantLogoField: React.FC<RestaurantLogoFieldProps> = ({
  logoImage,
  handleImageChange,
  removeImage,
}) => {
  const logoInnputRef = useRef<HTMLInputElement>(null);
  const handleClickUploadLogo = () => logoInnputRef.current?.click();
  const handleRemoveImage = () => {
    removeImage("logo", true);
  };

  return (
    <div>
      <label className="text-xs font-medium text-gray-700">
        Restaurant logo
      </label>
      <span className="text-xs font-light text-gray-700 ml-2">
        (not required)
      </span>

      <div className="mt-2 flex items-center gap-4">
        <div
          className="
            flex
            h-[90px]
            w-[90px]
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-xl
            bg-gray-100
            border
            border-gray-200
        "
        >
          {logoImage ? (
            <img
              src={logoImage}
              alt="restaurant logo"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-gray-400">
              <span className="mt-1 text-[11px] font-medium">No Logo</span>
            </div>
          )}
          <input
            ref={logoInnputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;

              handleImageChange(file, "logo");
            }}
          />
        </div>

        <div>
          <div className="flex gap-x-1">
            <UploadImageButton
              title={"Change logo"}
              onClickButton={handleClickUploadLogo}
            />
            {logoImage && <RemoveImageButton onClick={handleRemoveImage} />}
          </div>

          <p className="mt-2 text-[11px] text-gray-400">
            JPG, PNG or GIF. Max size 2MB.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantLogoField;
