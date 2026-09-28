import { TableHeader } from "./Components/TableHeader";
import { MenuTableRow } from "./Components/MenuTableRow/MenuTableRow";
import type { OwnerDishSummaryDTO } from "../../api/dish/getOwnerDishSummaries/ownerDishSummary.dto";

interface MenuTableProps {
  menuItems: OwnerDishSummaryDTO[];
  loadMenu: () => void;
  openEditMenuItemModal: (value: OwnerDishSummaryDTO) => void;
}

const MenuTable: React.FC<MenuTableProps> = ({
  menuItems,
  loadMenu,
  openEditMenuItemModal,
}) => {
  return (
    <section className="mt-4 rounded-xl border border-gray-200 bg-white overflow-hidden">
      <div className="max-h-[520px] overflow-y-auto">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 z-10 bg-gray-50">
            <tr>
              <TableHeader>Item</TableHeader>
              <TableHeader>Category</TableHeader>
              <TableHeader>Price</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Sold</TableHeader>
              <th className="w-12" />
            </tr>
          </thead>

          <tbody>
            {menuItems.map((item) => (
              <MenuTableRow
                key={item.dishId}
                item={item}
                loadMenu={loadMenu}
                onClickEditMenuItem={() => openEditMenuItemModal(item)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MenuTable;
