import { ImageOff } from "lucide-react";

interface NoImagePlaceholderProps {
  className?: string;
  compact?: boolean;
  iconOnly?: boolean;
}

export const NoImagePlaceholder = ({
  className = "",
  compact = false,
  iconOnly = false,
}: NoImagePlaceholderProps) => {
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
        className={`
          flex shrink-0 items-center justify-center
          rounded-full border border-gray-200
          bg-white shadow-sm
          ${iconOnly ? "h-7 w-7" : compact ? "h-9 w-9" : "h-14 w-14"}
        `}
      >
        <ImageOff
          className={
            iconOnly
              ? "h-3.5 w-3.5 text-gray-400"
              : compact
              ? "h-4 w-4 text-gray-400"
              : "h-6 w-6 text-gray-400"
          }
        />
      </div>

      {!iconOnly && (
        <>
          <p
            className={
              compact
                ? "mt-2 text-[10px] font-medium text-gray-500"
                : "mt-3 text-sm font-semibold text-gray-500"
            }
          >
            No image yet
          </p>

          {!compact && (
            <p className="mt-1 text-xs text-gray-400">
              Image will be added soon
            </p>
          )}
        </>
      )}
    </div>
  );
};
