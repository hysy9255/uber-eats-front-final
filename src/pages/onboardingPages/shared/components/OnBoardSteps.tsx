interface OnBoardStepsProps {
  steps: string[];
  active: number;
}

const OnBoardSteps = ({ steps, active }: OnBoardStepsProps) => {
  const progress = steps.length > 0 ? ((active + 1) / steps.length) * 100 : 0;

  return (
    <nav
      aria-label="Onboarding progress"
      className="w-full rounded-2xl bg-gray-50 px-4 py-5 sm:px-6 sm:py-6"
    >
      {/* Mobile */}
      <div className="sm:hidden">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-medium text-gray-500">
              Step {active + 1} of {steps.length}
            </p>

            <p className="mt-1 truncate text-sm font-semibold text-gray-900">
              {steps[active]}
            </p>
          </div>

          <span className="shrink-0 text-xs font-semibold text-green-700">
            {Math.round(progress)}%
          </span>
        </div>

        <div
          className="mt-4 h-1.5 overflow-hidden rounded-full bg-gray-200"
          role="progressbar"
          aria-valuenow={active + 1}
          aria-valuemin={0}
          aria-valuemax={steps.length}
          aria-label="Onboarding progress"
        >
          <div
            className="h-full rounded-full bg-emerald-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Tablet / Desktop */}
      <ol className="hidden items-start justify-between gap-3 sm:flex">
        {steps.map((step, index) => {
          const isActive = index === active;
          const isCompleted = index < active;

          return (
            <li
              key={index}
              className="flex min-w-0 flex-1 items-center gap-3"
              aria-current={isActive ? "step" : undefined}
            >
              <div className="flex min-w-0 items-center gap-2.5">
                <span
                  className={`
                    flex h-8 w-8 shrink-0 items-center justify-center
                    rounded-full border text-xs font-semibold
                    ${
                      isActive || isCompleted
                        ? "border-emerald-600 bg-emerald-600 text-white"
                        : "border-gray-300 bg-white text-gray-400"
                    }
                  `}
                >
                  {index + 1}
                </span>

                <span
                  className={`
                    min-w-0 text-xs font-medium leading-5 lg:text-sm
                    ${
                      isActive
                        ? "font-semibold text-gray-950"
                        : isCompleted
                        ? "text-gray-700"
                        : "text-gray-400"
                    }
                  `}
                >
                  {step}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div
                  className={`h-px min-w-3 flex-1 ${
                    isCompleted ? "bg-emerald-500" : "bg-gray-200"
                  }`}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default OnBoardSteps;
