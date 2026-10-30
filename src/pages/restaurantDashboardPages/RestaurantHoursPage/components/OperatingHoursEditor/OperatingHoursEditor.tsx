import type { DayHours } from "../../types/dayHours.type";
import type { DayOfWeek } from "../../types/dayOfWeek.type";
import OperatingHoursEditorHeader from "./Components/OperatingHoursEditorHeader/OperatingHoursEditorHeader";
import OperatingHoursTimeSection from "./Components/OperatingHoursTimeSection";
import ClosedDayState from "./Components/ClosedDayState";
import type { UpdateSelectedDay } from "../../types/updateSelectedDay.type";

interface OperatingHoursEditorProps {
  selectedDay: DayOfWeek;
  selectedHours?: DayHours;
  updateSelectedDay: UpdateSelectedDay;
}

const OperatingHoursEditor: React.FC<OperatingHoursEditorProps> = ({
  selectedDay,
  selectedHours,
  updateSelectedDay,
}) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <OperatingHoursEditorHeader
        selectedDay={selectedDay}
        selectedHours={selectedHours}
        updateSelectedDay={updateSelectedDay}
      />
      {selectedHours?.enabled ? (
        <>
          {/* Operating hours */}
          <OperatingHoursTimeSection
            selectedHours={selectedHours}
            updateSelectedDay={updateSelectedDay}
          />
        </>
      ) : (
        <ClosedDayState selectedDay={selectedDay} />
      )}
    </div>
  );
};

export default OperatingHoursEditor;
