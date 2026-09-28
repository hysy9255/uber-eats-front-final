import { Search } from "lucide-react";
import OrderFiltersDropdown from "./OrderFiltersDropdown/OrderFiltersDropdown";
import FilterButton from "./FilterButton";
import type { OrderFilters } from "./OrderFiltersDropdown/constants/orderFilters.type";

interface OrderToolBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  filters: OrderFilters;
  setFilters: React.Dispatch<React.SetStateAction<OrderFilters>>;
  filtersOpen: boolean;
  setFiltersOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onApplyFilters: () => void;
  onResetFilters: () => void;
}

const OrderToolBar: React.FC<OrderToolBarProps> = ({
  searchTerm,
  setSearchTerm,
  filters,
  setFilters,
  filtersOpen,
  setFiltersOpen,
  onApplyFilters,
  onResetFilters,
}) => {
  return (
    <section className="mt-5 flex items-center gap-3">
      <div
        className="
      w-[360px]
      h-10
      rounded-lg
      border border-gray-200
      bg-white
      px-3
      flex items-center gap-2
    "
      >
        <Search className="w-4 h-4 text-gray-400 shrink-0" />

        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search order ID, customer or items..."
          className="
        w-full
        bg-transparent
        outline-none
        text-sm
        text-gray-800
        placeholder:text-gray-400
      "
        />
      </div>

      <select
        className="
      h-10
      min-w-[170px]
      rounded-lg
      border border-gray-200
      bg-white
      px-3
      text-sm
      text-gray-700
      outline-none
    "
      >
        <option>All platforms</option>
        <option>Delivery</option>
        <option>Pickup</option>
      </select>

      <div className="relative ml-auto">
        <FilterButton onClick={() => setFiltersOpen((prev) => !prev)} />

        {filtersOpen && (
          <OrderFiltersDropdown
            filters={filters}
            setFilters={setFilters}
            onClose={() => setFiltersOpen(false)}
            onReset={onResetFilters}
            onApply={onApplyFilters}
          />
        )}
      </div>
    </section>
  );
};

export default OrderToolBar;
