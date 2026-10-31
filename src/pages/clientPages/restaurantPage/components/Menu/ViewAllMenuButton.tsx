import { ChevronDown, ChevronUp } from "lucide-react";

interface ViewAllMenuButtonProps {
  onClick: () => void;
  expanded: boolean;
}

const ViewAllMenuButton: React.FC<ViewAllMenuButtonProps> = ({
  onClick,
  expanded,
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="
        inline-flex
        items-center
        justify-center
        gap-x-2
        rounded-lg
        border
        border-gray-200
        bg-white
        px-5
        py-2
        text-sm
        font-semibold
        text-gray-800
        shadow-sm
        transition
        hover:bg-gray-50
        hover:border-gray-300
        active:scale-[0.98]
        hover:cursor-pointer
        "
    >
      {expanded ? (
        <>
          <span className="text-xs">View All Menu</span>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </>
      ) : (
        <>
          <span className="text-xs">Collapse</span>
          <ChevronUp className="h-4 w-4 text-gray-500" />
        </>
      )}
    </button>
  );
};

export default ViewAllMenuButton;
