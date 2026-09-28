interface PaginationButtonProps {
  children: React.ReactNode;
}

export const PaginationButton = ({ children }: PaginationButtonProps) => {
  return (
    <button
      className="
            w-8 h-8
            rounded-lg
            flex items-center justify-center
            text-xs
            text-gray-500
            hover:bg-gray-50
          "
    >
      {children}
    </button>
  );
};
