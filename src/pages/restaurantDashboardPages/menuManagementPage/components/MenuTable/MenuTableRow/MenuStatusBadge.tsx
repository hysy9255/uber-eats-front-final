export type MenuStatus = "Available" | "Unavailable";

interface MenuStatusBadgeProps {
  status: MenuStatus;
}

export const MenuStatusBadge = ({ status }: MenuStatusBadgeProps) => {
  const baseClass =
    "inline-flex w-[90px] justify-center items-center rounded-full px-3 py-1 text-xs font-medium";

  switch (status) {
    case "Available":
      return (
        <span className={`${baseClass} bg-green-50 text-green-700`}>
          Available
        </span>
      );

    case "Unavailable":
      return (
        <span className={`${baseClass} bg-gray-100 text-gray-600`}>
          Unavailable
        </span>
      );
  }
};
