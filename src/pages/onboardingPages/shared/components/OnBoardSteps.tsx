interface OnBoardStepsProps {
  steps: string[];
  active: number;
}

const OnBoardSteps: React.FC<OnBoardStepsProps> = ({ steps, active }) => {
  return (
    <div className="bg-gray-100 py-6 px-6">
      <ol className="flex items-center gap-4 text-sm">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-2">
            <span
              className={`grid h-6 w-6 place-items-center rounded-full border text-[12px] ${
                i <= active
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "bg-white text-slate-500 border-slate-300"
              }`}
            >
              {i + 1}
            </span>
            <span
              className={`${i <= active ? "text-slate-900" : "text-slate-500"}`}
            >
              {s}
            </span>
            {i < steps.length - 1 && (
              <span className="mx-2 h-px w-8 bg-slate-800" />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default OnBoardSteps;
