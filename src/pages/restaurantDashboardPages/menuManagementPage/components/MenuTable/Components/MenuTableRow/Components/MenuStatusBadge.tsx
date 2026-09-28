export type MenuStatus = "Active" | "Inactive" | "Out of stock";

interface MenuStatusBadgeProps {
  status: MenuStatus;
}

export const MenuStatusBadge = ({ status }: MenuStatusBadgeProps) => {
  const baseClass =
    "inline-flex w-[90px] justify-center items-center rounded-full px-3 py-1 text-xs font-medium";

  switch (status) {
    case "Active":
      return (
        <span className={`${baseClass} bg-green-50 text-green-700`}>
          Active
        </span>
      );

    case "Inactive":
      return (
        <span className={`${baseClass} bg-gray-100 text-gray-600`}>
          Inactive
        </span>
      );

    case "Out of stock":
      return (
        <span className={`${baseClass} bg-red-50 text-red-600`}>
          Out of stock
        </span>
      );
  }
};
