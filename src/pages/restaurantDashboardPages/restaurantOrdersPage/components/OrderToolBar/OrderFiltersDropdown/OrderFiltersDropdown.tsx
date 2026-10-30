import ApplyButton from "./Components/ApplyButton";
import ResetButton from "./Components/ResetButton";
import type { OrderFilters } from "./constants/orderFilters.type";
import {
  OrderTimeFilterEnum,
  type OrderTimeFilter,
} from "./constants/orderTimeFilter.type";
import XButton from "./XButton";

interface OrderFiltersDropdownProps {
  filters: OrderFilters;
  setFilters: React.Dispatch<React.SetStateAction<OrderFilters>>;
  onClose: () => void;
  onReset: () => void;
  onApply: () => void;
  className?: string;
}

const OrderFiltersDropdown = ({
  filters,
  setFilters,
  onClose,
  onReset,
  onApply,
  className,
}: OrderFiltersDropdownProps) => {
  return (
    <div
      className={`
        ${className}
        z-50
        w-[340px]
        rounded-2xl
        border border-gray-200 bg-white
        p-5
        shadow-xl  
        `}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-gray-900">Filters</h3>

        <XButton onClick={onClose} />
      </div>

      {/* Order time */}
      <div className="mt-5">
        <p className="text-sm font-semibold text-gray-800">Order time</p>

        <div className="mt-3 space-y-3">
          {[
            { value: OrderTimeFilterEnum.ANY, label: "Any time" },
            {
              value: OrderTimeFilterEnum.THIRTY_MINUTES,
              label: "Last 30 minutes",
            },
            { value: OrderTimeFilterEnum.ONE_HOUR, label: "Last hour" },
            { value: OrderTimeFilterEnum.TODAY, label: "Today" },
          ].map((option) => (
            <label
              key={option.value}
              className="
                flex
                cursor-pointer
                items-center
                gap-3
                text-sm
                text-gray-700
              "
            >
              <input
                type="radio"
                name="orderTime"
                value={option.value}
                checked={filters.time === option.value}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    time: e.target.value as OrderTimeFilter,
                  }))
                }
                className="h-4 w-4 accent-green-600"
              />

              {option.label}
            </label>
          ))}
        </div>
      </div>

      <div className="my-5 border-t border-gray-100" />

      {/* Order total */}
      <div>
        <p className="text-sm font-semibold text-gray-800">Order total</p>

        <div className="mt-3 flex items-center gap-2">
          <div className="relative flex-1">
            <span
              className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-sm
                text-gray-400
              "
            >
              $
            </span>

            <input
              type="number"
              value={filters.minTotal}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  minTotal: e.target.value,
                }))
              }
              placeholder="Min"
              className="
                h-10
                w-full
                rounded-lg
                border
                border-gray-200
                pl-7
                pr-3
                text-sm
                outline-none
                focus:border-green-500
              "
            />
          </div>

          <span className="text-gray-400">—</span>

          <div className="relative flex-1">
            <span
              className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-sm
                text-gray-400
              "
            >
              $
            </span>

            <input
              type="number"
              value={filters.maxTotal}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  maxTotal: e.target.value,
                }))
              }
              placeholder="Max"
              className="
                h-10
                w-full
                rounded-lg
                border
                border-gray-200
                pl-7
                pr-3
                text-sm
                outline-none
                focus:border-green-500
              "
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex justify-end gap-2">
        <ResetButton onClick={onReset} />
        <ApplyButton onClick={onApply} />
      </div>
    </div>
  );
};

export default OrderFiltersDropdown;
