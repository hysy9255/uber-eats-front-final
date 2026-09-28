import type { DayHours } from "../../../../types/dayHours.type";
import type { DayOfWeek } from "../../../../types/dayOfWeek.type";
import type { UpdateSelectedDay } from "../../../../types/updateSelectedDay.type";
import { Toggle } from "../../../shared/Toggle";

interface OperatingHoursEditorHeaderProps {
  selectedDay: DayOfWeek;
  selectedHours?: DayHours;
  updateSelectedDay: UpdateSelectedDay;
}

const OperatingHoursEditorHeader: React.FC<OperatingHoursEditorHeaderProps> = ({
  selectedDay,
  selectedHours,
  updateSelectedDay,
}) => {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h2 className="text-lg font-bold text-gray-950">{selectedDay}</h2>

        <div className="mt-1 text-sm text-gray-500">Operating hours</div>
      </div>

      <Toggle
        checked={selectedHours?.enabled ?? false}
        onClick={() =>
          updateSelectedDay("enabled", !(selectedHours?.enabled ?? false))
        }
      />
    </div>
  );
};

export default OperatingHoursEditorHeader;
