// import { ArrowLeft, ArrowRight, LogOut } from "lucide-react";

// interface OnBoardStepNavigationProps {
//   onBack: () => void;
//   onContinue: () => void;
//   onExit: () => void;
//   continueLabel: string;
// }

// const OnBoardStepNavigation = ({
//   onBack,
//   onContinue,
//   onExit,
//   continueLabel,
// }: OnBoardStepNavigationProps) => {
//   return (
//     <nav aria-label="Onboarding navigation" className="w-full min-w-0">
//       <div className="flex flex-wrap items-center justify-between gap-3">
//         {/* Back */}
//         <button
//           type="button"
//           onClick={onBack}
//           className="
//             inline-flex h-11 items-center justify-center gap-2
//             rounded-xl border border-gray-200 bg-white
//             px-4 text-sm font-semibold text-gray-700
//             transition-colors cursor-pointer
//             hover:border-gray-300 hover:bg-gray-50
//             active:bg-gray-100
//             focus-visible:outline-2
//             focus-visible:outline-offset-2
//             focus-visible:outline-green-600
//           "
//         >
//           <ArrowLeft className="h-4 w-4" />
//           Back
//         </button>

//         {/* Exit / Continue */}
//         <div className="flex min-w-0 items-center gap-2 sm:gap-3">
//           <button
//             type="button"
//             onClick={onExit}
//             className="
//               inline-flex h-11 items-center justify-center gap-2
//               rounded-xl border border-red-100 bg-white
//               px-3 text-sm font-medium text-red-600
//               transition-colors cursor-pointer
//               hover:border-red-200 hover:bg-red-50
//               active:bg-red-100
//               focus-visible:outline-2
//               focus-visible:outline-offset-2
//               focus-visible:outline-red-500
//               sm:px-4
//             "
//           >
//             <LogOut className="h-4 w-4" />
//             <span className="hidden sm:inline">Exit</span>
//           </button>

//           <button
//             type="button"
//             onClick={onContinue}
//             className="
//               group inline-flex h-11 min-w-28
//               items-center justify-center gap-2
//               rounded-xl bg-green-700 px-4
//               text-sm font-semibold text-white
//               transition-all cursor-pointer
//               hover:bg-green-800
//               active:scale-[0.99] active:bg-green-900
//               focus-visible:outline-2
//               focus-visible:outline-offset-2
//               focus-visible:outline-green-600
//               sm:min-w-36 sm:px-5
//             "
//           >
//             {continueLabel}
//             <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default OnBoardStepNavigation;

import { ArrowLeft, ArrowRight, LogOut } from "lucide-react";

interface OnBoardStepNavigationProps {
  onBack: () => void;
  onContinue: () => void;
  onExit: () => void;
  continueLabel: string;
  isValid: boolean;
}

const OnBoardStepNavigation = ({
  onBack,
  onContinue,
  onExit,
  continueLabel,
  isValid,
}: OnBoardStepNavigationProps) => {
  return (
    <nav aria-label="Onboarding navigation" className="w-full min-w-0">
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Back */}
        <button
          type="button"
          onClick={onBack}
          className="
            inline-flex h-11 items-center justify-center gap-2
            rounded-xl border border-gray-200 bg-white
            px-4 text-sm font-semibold text-gray-700
            transition-colors hover:cursor-pointer
            hover:border-gray-300 hover:bg-gray-50
            active:bg-gray-100
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-green-600
          "
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        {/* Exit / Continue */}
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onExit}
            className="
              inline-flex h-11 items-center justify-center gap-2
              rounded-xl border border-red-100 bg-white
              px-3 text-sm font-medium text-red-600
              transition-colors hover:cursor-pointer
              hover:border-red-200 hover:bg-red-50
              active:bg-red-100
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-red-500
              sm:px-4
            "
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Exit</span>
          </button>

          <button
            type="button"
            onClick={onContinue}
            disabled={!isValid}
            className="
              group inline-flex h-11 min-w-28
              items-center justify-center gap-2
              rounded-xl bg-green-700 px-4
              text-sm font-semibold text-white
              transition-all

              enabled:hover:cursor-pointer
              enabled:hover:bg-green-800
              enabled:active:scale-[0.99]
              enabled:active:bg-green-900

              disabled:cursor-not-allowed
              disabled:bg-gray-300
              disabled:text-gray-500

              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-green-600

              sm:min-w-36 sm:px-5
            "
          >
            {continueLabel}
            <ArrowRight
              className="
                h-4 w-4 transition-transform
                group-enabled:hover:translate-x-0.5
              "
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default OnBoardStepNavigation;
