import type { DeliveryType } from "../../../../ClientOrdersPage/types/deliveryType.enum";
import { RoundCheckBox } from "./RoundCheckBox";

interface DeliveryTypeSelectorProps {
  onSelect: () => void;
  deliveryTypeState: DeliveryType;
  assignedDeliveryType: DeliveryType;
  cost: string;
  eta: string;
  title: string;
}

const DeliveryTypeSelector = ({
  onSelect,
  deliveryTypeState,
  assignedDeliveryType,
  cost,
  eta,
  title,
}: DeliveryTypeSelectorProps) => {
  const isSelected = deliveryTypeState === assignedDeliveryType;

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isSelected}
      className={`
        group flex w-full min-w-0 items-center gap-3
        rounded-xl border p-3 text-left
        transition-colors duration-200
        cursor-pointer
        sm:p-4
        ${
          isSelected
            ? "border-green-500 bg-green-50/70"
            : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/50"
        }
      `}
    >
      {/* Selection Indicator */}
      <div className="shrink-0">
        <RoundCheckBox isChecked={isSelected} />
      </div>

      {/* Delivery Information */}
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="text-sm font-semibold text-gray-900">{title}</span>

        <span className="text-xs text-gray-500 sm:text-[13px]">{eta}</span>
      </div>

      {/* Delivery Cost */}
      <span
        className={`
          shrink-0 whitespace-nowrap text-sm font-semibold tabular-nums
          ${isSelected ? "text-green-700" : "text-gray-800"}
        `}
      >
        {cost}
      </span>
    </button>
  );
};

export default DeliveryTypeSelector;
