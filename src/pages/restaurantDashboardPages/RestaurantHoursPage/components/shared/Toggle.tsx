interface ToggleProps {
  checked: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Toggle = ({ checked, onClick }: ToggleProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
          relative
          w-9
          h-5
          rounded-full
          transition-colors
          hover:cursor-pointer
          ${checked ? "bg-green-600" : "bg-gray-300"}
        `}
    >
      <span
        className={`
            absolute
            top-0.5
            w-4
            h-4
            rounded-full
            bg-white
            shadow-sm
            transition-all
            ${checked ? "left-[18px]" : "left-0.5"}
          `}
      />
    </button>
  );
};
