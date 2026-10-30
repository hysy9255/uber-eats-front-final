import type { DayHours } from "../../../types/dayHours.type";
import type { UpdateSelectedDay } from "../../../types/updateSelectedDay.type";
import { TimeInput } from "./Shared/TimeInput";

interface OperatingHoursTimeSectionProps {
  selectedHours: DayHours;
  updateSelectedDay: UpdateSelectedDay;
}

const OperatingHoursTimeSection: React.FC<OperatingHoursTimeSectionProps> = ({
  selectedHours,
  updateSelectedDay,
}) => {
  return (
    <div className="mt-7">
      <div className="text-sm font-semibold text-gray-800">Operating hours</div>

      <div className="mt-3 flex items-center gap-3">
        <TimeInput
          value={selectedHours.open}
          onChange={(value) => updateSelectedDay("open", value)}
        />

        <span className="text-gray-400">–</span>

        <TimeInput
          value={selectedHours.close}
          onChange={(value) => updateSelectedDay("close", value)}
        />
      </div>
    </div>
  );
};

export default OperatingHoursTimeSection;
