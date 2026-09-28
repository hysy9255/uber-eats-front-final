import type { LucideIcon } from "lucide-react";

interface AddressAliasButtonProps {
  title: string;
  Icon: LucideIcon;
  onClick: () => void;
  isActive: boolean;
}

const AddressAliasButton: React.FC<AddressAliasButtonProps> = ({
  title,
  Icon,
  onClick,
  isActive,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        hover:cursor-pointer
        flex
        h-[72px]
        flex-col
        items-center
        justify-center
        gap-1.5
        rounded-xl
        border
        transition
        ${
          isActive
            ? "border-green-500 bg-green-50/70 text-green-700"
            : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
        }
        `}
    >
      <div
        className={`
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-lg
            ${isActive ? "bg-white text-green-600" : "bg-gray-50 text-gray-500"}
            `}
      >
        <Icon className="h-[18px] w-[18px]" />
      </div>

      <span className="text-[12px] font-semibold">{title}</span>
    </button>
  );
};

export default AddressAliasButton;
