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
  openFilterModal: () => void;
  closeFilterModal: () => void;
  onApplyFilters: () => void;
  onResetFilters: () => void;
  className?: string;
}

const OrderToolBar: React.FC<OrderToolBarProps> = ({
  searchTerm,
  setSearchTerm,
  filters,
  setFilters,
  filtersOpen,
  openFilterModal,
  closeFilterModal,
  onApplyFilters,
  onResetFilters,
  className,
}) => {
  return (
    <section className={`${className} flex gap-3 h-10 relative`}>
      <div
        className="
        w-[360px]
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
        w-[170px]
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

      <FilterButton className="ml-auto" onClick={openFilterModal} />

      {filtersOpen && (
        <OrderFiltersDropdown
          className="absolute right-0 top-[calc(100%+8px)]"
          filters={filters}
          setFilters={setFilters}
          onClose={closeFilterModal}
          onReset={onResetFilters}
          onApply={onApplyFilters}
        />
      )}
    </section>
  );
};

export default OrderToolBar;
