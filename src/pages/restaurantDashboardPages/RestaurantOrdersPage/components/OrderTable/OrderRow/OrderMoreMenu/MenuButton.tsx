interface MenuButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  danger?: boolean;
}

export const MenuButton = ({
  icon,
  label,
  onClick,
  danger = false,
}: MenuButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
          hover:cursor-pointer
          flex
          w-full
          items-center
          gap-3
          rounded-lg
          px-3
          py-2.5
          text-left
          text-sm
          transition
          ${
            danger
              ? "text-red-600 hover:bg-red-50"
              : "text-gray-700 hover:bg-gray-50"
          }
        `}
    >
      {icon}
      {label}
    </button>
  );
};
