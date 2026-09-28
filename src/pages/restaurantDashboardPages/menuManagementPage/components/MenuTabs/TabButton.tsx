import type { TabType } from "../../constants/tabs";

interface TabButtonProps {
  tab: TabType;
  selected: boolean;
  onClick: () => void;
  count?: number;
}

const TabButton: React.FC<TabButtonProps> = ({
  tab,
  selected,
  onClick,
  count,
}) => {
  return (
    <button
      key={tab.key}
      onClick={onClick}
      className={`
                  relative
                  h-11
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  hover:cursor-pointer
                  ${
                    selected
                      ? "text-green-700"
                      : "text-gray-500 hover:text-gray-800"
                  }
                `}
    >
      {tab.label}

      {count !== undefined && (
        <span
          className={`
                      min-w-5
                      h-5
                      px-1.5
                      rounded-full
                      flex
                      items-center
                      justify-center
                      text-[10px]
                      font-semibold
                      ${
                        selected
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-500"
                      }
                    `}
        >
          {count}
        </span>
      )}

      {selected && (
        <span className="absolute left-0 right-0 bottom-0 h-[2px] rounded-full bg-green-600" />
      )}
    </button>
  );
};

export default TabButton;
