import { Camera, Trash2, Store } from "lucide-react";
import { useId } from "react";
import DefaultProfileImg from "../../../layouts/ClientPageLayout/Header/DefaultProfileImg/DefaultProfileImg";

interface ProfileOrLogoUploadZoneProps {
  onRemove: () => void;
  onChange: (file: File) => void;
  title: string;
  imgUrl: string | null;
  variant?: "profile" | "logo";
}

const ProfileOrLogoUploadZone = ({
  onRemove,
  onChange,
  title,
  imgUrl,
  variant = "profile",
}: ProfileOrLogoUploadZoneProps) => {
  const inputId = useId();
  const isLogo = variant === "logo";

  return (
    <div className="flex w-full min-w-0 flex-col items-center text-center">
      {/* Title */}
      <h3 className="mb-4 text-sm font-semibold text-gray-800">{title}</h3>

      {/* Image Preview */}
      <div className="relative">
        <div
          className="
            flex h-28 w-28 items-center justify-center
            overflow-hidden rounded-full
            border-4 border-white bg-gray-100
            shadow-sm ring-1 ring-gray-200
            sm:h-32 sm:w-32
          "
        >
          {imgUrl ? (
            <img
              src={imgUrl}
              alt={`${title} preview`}
              className="h-full w-full object-cover"
            />
          ) : isLogo ? (
            <Store className="h-12 w-12 text-gray-400" strokeWidth={1.5} />
          ) : (
            <DefaultProfileImg className="h-full w-full rounded-full object-cover" />
          )}
        </div>

        {/* Camera Icon */}
        {!imgUrl && (
          <label
            htmlFor={inputId}
            aria-label={`Upload ${title.toLowerCase()}`}
            className="
              absolute right-0 bottom-0
              flex h-9 w-9 cursor-pointer
              items-center justify-center
              rounded-full border-2 border-white
              bg-green-700 text-white shadow-sm
              transition-colors
              hover:bg-green-800
            "
          >
            <Camera className="h-4 w-4" />
          </label>
        )}
      </div>

      {/* Hidden File Input */}
      <input
        id={inputId}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (!file) return;

          onChange(file);
        }}
      />

      {/* Actions */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
        <label
          htmlFor={inputId}
          className="
            inline-flex min-h-10 cursor-pointer
            items-center justify-center gap-2
            rounded-lg bg-green-700 px-4
            text-sm font-semibold text-white
            transition-colors
            hover:bg-green-800
          "
        >
          <Camera className="h-4 w-4" />
          {imgUrl
            ? isLogo
              ? "Change logo"
              : "Change photo"
            : isLogo
            ? "Upload logo"
            : "Upload photo"}
        </label>

        {imgUrl && (
          <button
            type="button"
            onClick={onRemove}
            className="
              inline-flex min-h-10 cursor-pointer
              items-center justify-center gap-2
              rounded-lg border border-gray-200
              bg-white px-4
              text-sm font-medium text-gray-600
              transition-colors
              hover:border-red-200
              hover:bg-red-50 hover:text-red-600
            "
          >
            <Trash2 className="h-4 w-4" />
            Remove
          </button>
        )}
      </div>

      {/* Helper Text */}
      <p className="mt-3 text-xs leading-5 text-gray-400">
        PNG or JPG, up to 2MB. Square images work best.
      </p>
    </div>
  );
};

export default ProfileOrLogoUploadZone;
