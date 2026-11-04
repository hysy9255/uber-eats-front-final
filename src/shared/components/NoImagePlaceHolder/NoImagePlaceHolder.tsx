import { ImageOff } from "lucide-react";

interface NoImagePlaceholderProps {
  className?: string;
}

export const NoImagePlaceholder: React.FC<NoImagePlaceholderProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`
        flex h-full w-full flex-col items-center justify-center
        bg-linear-to-br from-gray-50 to-gray-100
        text-center
        ${className}
      `}
    >
      <div
        className="
          flex h-14 w-14 items-center justify-center
          rounded-full border border-gray-200
          bg-white shadow-sm
        "
      >
        <ImageOff className="h-6 w-6 text-gray-400" />
      </div>

      <p className="mt-3 text-sm font-semibold text-gray-500">No image yet</p>

      <p className="mt-1 text-[12px] text-gray-400">Image will be added soon</p>
    </div>
  );
};
