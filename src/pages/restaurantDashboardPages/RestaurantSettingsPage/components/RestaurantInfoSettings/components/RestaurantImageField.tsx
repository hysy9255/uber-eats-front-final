import { useRef } from "react";
import UploadImageButton from "./UploadImageButton";
import type { RestaurantImageFieldValue } from "../../../types/restaurantImageFieldValue.type";
import type { UpdateRestaurantSettingForm } from "../../../types/updateRestaurantSettingForm";
import RemoveImageButton from "../../../../menuManagementPage/components/shared/components/ImageManagerButtons/RemoveImageButton";

interface RestaurantImageFieldProps {
  label: string;
  fieldValue: RestaurantImageFieldValue;
  handleImageChange: (
    file: File,
    field: keyof UpdateRestaurantSettingForm
  ) => void;
  removeImage: (
    field: keyof UpdateRestaurantSettingForm,
    shouldDirty: boolean
  ) => void;
  imageUrl: string | null;
  variant?: "default" | "banner";
}

export const RestaurantImageField = ({
  label,
  fieldValue,
  imageUrl,
  handleImageChange,
  removeImage,
  variant = "default",
}: RestaurantImageFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClickUpload = () => inputRef.current?.click();
  const handleRemoveImage = () => {
    removeImage(fieldValue, false);
  };
  return (
    <div>
      <label className="text-xs font-medium text-gray-700">{label}</label>

      <div className="mt-2">
        <div
          className={`
            w-full
            overflow-hidden
            rounded-xl
            border
            border-gray-200
            bg-gray-50
            ${variant === "banner" ? "aspect-[4/1]" : "aspect-[4/3]"}
          `}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={label}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-xs text-gray-400">
              No image
            </div>
          )}
        </div>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;

            handleImageChange(file, fieldValue);
          }}
        />

        <div className="mt-3 flex gap-x-1">
          <UploadImageButton
            title={"Change image"}
            onClickButton={handleClickUpload}
          />
          {imageUrl && <RemoveImageButton onClick={handleRemoveImage} />}
        </div>
      </div>
    </div>
  );
};
