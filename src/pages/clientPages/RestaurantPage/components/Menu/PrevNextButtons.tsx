import { ChevronLeft, ChevronRight } from "lucide-react";

interface PrevNextButtonsProps {
  prevActive: boolean;
  nextActive: boolean;
  onClickPrev: () => void;
  onClickNext: () => void;
  className?: string;
}

const PrevNextButtons: React.FC<PrevNextButtonsProps> = ({
  prevActive,
  nextActive,
  onClickPrev,
  onClickNext,
  className,
}) => {
  return (
    <div className={`flex gap-x-2 items-center ${className}`}>
      <button
        disabled={!prevActive}
        onClick={onClickPrev}
        className={`border border-gray-200 rounded-full w-7 h-7 flex items-center justify-center hover:cursor-pointer`}
      >
        <ChevronLeft
          className={`w-4 h-4  ${
            prevActive ? "text-gray-700" : "text-gray-300"
          }`}
        />
      </button>
      <button
        disabled={!nextActive}
        onClick={onClickNext}
        className={`border border-gray-200 rounded-full w-7 h-7 flex items-center justify-center hover:cursor-pointer`}
      >
        <ChevronRight
          className={`w-4 h-4 ${
            nextActive ? "text-gray-700" : "text-gray-300"
          }`}
        />
      </button>
    </div>
  );
};

export default PrevNextButtons;
