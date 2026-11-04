// interface DishInfoRowProps {
//   icon: React.ReactNode;
//   label: string;
//   value: React.ReactNode;
//   last?: boolean;
// }

// export const DishInfoRow: React.FC<DishInfoRowProps> = ({
//   icon,
//   label,
//   value,
//   last = false,
// }) => {
//   return (
//     <div
//       className={`grid grid-cols-[28px_160px_1fr] items-center gap-2 py-4 px-3 ${
//         last ? "" : "border-b border-gray-100"
//       }`}
//     >
//       <div className="text-gray-500">{icon}</div>
//       <span className="font-semibold text-gray-700 text-xs">{label}</span>
//       <div className="text-right text-gray-600 text-xs">{value}</div>
//     </div>
//   );
// };

import type { ReactNode } from "react";

interface DishInfoRowProps {
  icon: ReactNode;
  label: string;
  value: string;
  last?: boolean;
}

export const DishInfoRow = ({
  icon,
  label,
  value,
  last = false,
}: DishInfoRowProps) => {
  return (
    <div
      className={`
        flex min-w-0 items-start gap-3
        px-3 py-3.5
        sm:gap-4 sm:px-5 sm:py-4
        ${!last ? "border-b border-gray-100" : ""}
      `}
    >
      <div
        className="
          flex h-8 w-8 shrink-0 items-center justify-center
          rounded-lg bg-gray-50 text-gray-600
          sm:h-9 sm:w-9
        "
      >
        {icon}
      </div>

      <div
        className="
          flex min-w-0 flex-1 flex-col gap-1
          sm:gap-1.5
        "
      >
        <span className="text-xs font-semibold text-gray-900 sm:text-sm">
          {label}
        </span>

        <span
          className="
            wrap-break-word
            text-xs leading-5 text-gray-600
            sm:text-sm sm:leading-6
          "
        >
          {value}
        </span>
      </div>
    </div>
  );
};
