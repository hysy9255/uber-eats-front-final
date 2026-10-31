import type { ReactNode } from "react";
import { ChevronRightIcon } from "./Icons";

interface ProfileRowProps {
  icon: ReactNode;
  title: string;
  description: string;
  right?: ReactNode;
  onClick?: () => void;
}

export const ProfileRow: React.FC<ProfileRowProps> = ({
  icon,
  title,
  description,
  right,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        w-full
        min-h-[62px]
        px-4
        flex
        items-center
        gap-x-4
        border-b
        border-gray-200
        last:border-b-0
        text-left
        hover:bg-gray-50
        transition
        cursor-pointer
      "
    >
      <div className="text-gray-800 shrink-0">{icon}</div>

      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-gray-900">{title}</div>

        <div className="text-xs text-gray-500 mt-0.5">{description}</div>
      </div>

      {right}

      <ChevronRightIcon className="w-4 h-4 text-gray-500 shrink-0" />
    </button>
  );
};
