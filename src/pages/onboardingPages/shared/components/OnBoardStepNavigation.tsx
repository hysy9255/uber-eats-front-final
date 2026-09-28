interface OnBoardStepNavigationProps {
  onBack: () => void;
  onContinue: () => void;
  onExit: () => void;
  continueLabel: string;
}

const OnBoardStepNavigation: React.FC<OnBoardStepNavigationProps> = ({
  onBack,
  onContinue,
  onExit,
  continueLabel,
}) => {
  return (
    <div className="bg-white/80 backdrop-blur border-t border-black/5">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-10 py-4 flex items-center justify-between gap-3">
        <button
          onClick={onBack}
          className="rounded-full px-4 py-2 text-sm font-medium ring-1 ring-slate-300 hover:bg-slate-50 hover:cursor-pointer"
        >
          Back
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={onExit}
            className="border rounded-full px-4 py-2 text-sm font-medium text-red-600 ring-1 ring-red-200 hover:bg-red-50 hover:cursor-pointer"
          >
            Exit
          </button>
          <button
            onClick={onContinue}
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-black hover:bg-black/90 hover:cursor-pointer"
          >
            {continueLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnBoardStepNavigation;
