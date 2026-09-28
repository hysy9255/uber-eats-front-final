interface TabButtonProps {
  onClickTab: () => void;
  title: string;
  onGoingCount: number;
  selected: boolean;
  selectedCss1: string;
  selectedCss2: string;
}

const TabButton: React.FC<TabButtonProps> = ({
  onClickTab,
  title,
  onGoingCount,
  selected,
  selectedCss1,
  selectedCss2,
}) => {
  return (
    <button
      type="button"
      onClick={onClickTab}
      className={`
            hover:cursor-pointer
              flex flex-1 items-center justify-center gap-2
              rounded-full px-4 py-1
              text-sm font-semibold
              transition-all
              ${selected ? selectedCss1 : "text-gray-500 hover:text-gray-800"}
            `}
    >
      {title}
      <span
        className={`
                flex h-6 min-w-6 items-center justify-center
                rounded-full px-2
                text-xs font-semibold
                ${selected ? selectedCss2 : "bg-gray-200 text-gray-500"}
              `}
      >
        {onGoingCount}
      </span>
    </button>
  );
};

export default TabButton;
