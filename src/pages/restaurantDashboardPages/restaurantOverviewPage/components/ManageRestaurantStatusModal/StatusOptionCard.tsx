import type { RestaurantStatus } from "@/shared/types/restaurantStatus.type";
import type { StatusOptionType } from "./constants/statusOptionType";

interface StatusOptionCardProps {
  option: StatusOptionType;
  selected: boolean;
  setSelectedStatus: (status: RestaurantStatus) => void;
}

const StatusOptionCard: React.FC<StatusOptionCardProps> = ({
  option,
  selected,
  setSelectedStatus,
}) => {
  return (
    <button
      key={option.value}
      type="button"
      onClick={() => setSelectedStatus(option.value)}
      className={`
      w-full rounded-xl border p-4 text-left transition
      hover:cursor-pointer
      ${
        selected
          ? option.selectedClass
          : "border-gray-200 bg-white hover:bg-gray-50"
      }
    `}
    >
      <div className="flex items-center gap-4">
        <div
          className={`
          w-5 h-5 rounded-full border-2
          flex items-center justify-center shrink-0
          ${selected ? "border-green-600" : "border-gray-300"}
        `}
        >
          {selected && (
            <div className="w-2.5 h-2.5 rounded-full bg-green-600" />
          )}
        </div>

        <div
          className={`
          w-11 h-11 rounded-xl
          flex items-center justify-center shrink-0
          ${option.iconClass}
        `}
        >
          {option.icon}
        </div>

        <div className="min-w-0 flex-1">
          <div className="font-semibold text-gray-950">{option.title}</div>

          <div className="mt-1 text-sm leading-5 text-gray-500">
            {option.description}
          </div>
        </div>

        <span
          className={`
          shrink-0 rounded-full px-2.5 py-1
          text-[11px] font-semibold
          ${option.badgeClass}
        `}
        >
          {option.badge}
        </span>
      </div>
    </button>
  );
};

export default StatusOptionCard;
