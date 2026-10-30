import { Clock3 } from "lucide-react";
import type { DayOfWeek } from "../../../types/dayOfWeek.type";

interface ClosedDayStateProps {
  selectedDay: DayOfWeek;
}

const ClosedDayState: React.FC<ClosedDayStateProps> = ({ selectedDay }) => {
  return (
    <div className="mt-10 rounded-xl bg-gray-50 py-12 text-center">
      <Clock3 className="mx-auto w-6 h-6 text-gray-400" />

      <div className="mt-3 text-sm font-semibold text-gray-700">
        Restaurant closed
      </div>

      <p className="mt-1 text-xs text-gray-400">
        Your restaurant won't accept orders on {selectedDay}.
      </p>
    </div>
  );
};

export default ClosedDayState;
