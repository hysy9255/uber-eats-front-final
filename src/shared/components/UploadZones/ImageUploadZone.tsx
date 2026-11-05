import { ImagePlus, Pencil, Upload } from "lucide-react";
import { useRef, type ChangeEvent } from "react";

interface ImageUploadZoneProps {
  label?: string;
  accept?: string;
  className?: string;
  previewSrc?: string;
  onSelect?: (file: File) => void;
  variant?: "default" | "banner";
}

const ImageUploadZone = ({
  label = "Click to upload an image",
  accept = "image/*",
  className = "aspect-square rounded-xl",
  previewSrc,
  onSelect,
  variant = "default",
}: ImageUploadZoneProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const isBanner = variant === "banner";

  const openPicker = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please choose an image file.");
      e.target.value = "";
      return;
    }

    onSelect?.(file);
    e.target.value = "";
  };

  return (
    <div className="min-w-0">
      <button
        type="button"
        onClick={openPicker}
        aria-label={previewSrc ? "Change image" : "Upload image"}
        className={`
          group relative flex w-full min-w-0
          cursor-pointer items-center justify-center
          overflow-hidden rounded-xl
          border-2 border-dashed border-gray-200
          bg-gray-50/70
          transition-colors duration-200
          hover:border-green-400 hover:bg-green-50/40
          focus-visible:outline-2
          focus-visible:outline-offset-2
          focus-visible:outline-green-600
          ${className}
        `}
      >
        {previewSrc ? (
          <>
            <img
              src={previewSrc}
              alt="Restaurant image preview"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40 group-focus-visible:bg-black/40">
              <span className="flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                <Pencil className="h-4 w-4" />
                Change image
              </span>
            </div>
          </>
        ) : isBanner ? (
          <div className="flex w-full min-w-0 flex-col items-center justify-center gap-4 p-5 text-center @[500px]:flex-row @[500px]:justify-between @[500px]:text-left">
            <div className="flex min-w-0 flex-col items-center gap-3 @[500px]:flex-row">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500">
                <ImagePlus className="h-6 w-6" />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-900">{label}</p>
                <p className="mt-1 text-xs text-gray-400">
                  JPG or PNG · Wide images work best
                </p>
              </div>
            </div>

            <span className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-700">
              <Upload className="h-4 w-4" />
              Browse files
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 px-3 py-4 text-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500">
              <ImagePlus className="h-5 w-5" />
            </div>

            <p className="text-sm font-semibold text-gray-800">{label}</p>

            <span className="text-xs text-gray-400">JPG or PNG</span>

            <span className="mt-1 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700">
              Browse files
            </span>
          </div>
        )}
      </button>

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="sr-only"
        tabIndex={-1}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ImageUploadZone;
