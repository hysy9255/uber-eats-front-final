import type { DayHours } from "../../types/dayHours.type";
import type { DayOfWeek } from "../../types/dayOfWeek.type";
import OperatingHoursEditorHeader from "./Components/OperatingHoursEditorHeader/OperatingHoursEditorHeader";
import OperatingHoursTimeSection from "./Components/OperatingHoursTimeSection";
import BreakTimeSection from "./Components/BreakTimeSection";
import ClosedDayState from "./Components/ClosedDayState";
import type { UpdateSelectedDay } from "../../types/updateSelectedDay.type";

interface OperatingHoursEditorProps {
  selectedDay: DayOfWeek;
  selectedHours?: DayHours;
  updateSelectedDay: UpdateSelectedDay;
  is24Hours: boolean;
  setIs24Hours: (value: boolean) => void;
  hasBreakTime: boolean;
  setHasBreakTime: (value: boolean) => void;
}

const OperatingHoursEditor: React.FC<OperatingHoursEditorProps> = ({
  selectedDay,
  selectedHours,
  updateSelectedDay,
  is24Hours,
  setIs24Hours,
  hasBreakTime,
  setHasBreakTime,
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
            is24Hours={is24Hours}
            setIs24Hours={setIs24Hours}
          />

          {/* Break */}
          <BreakTimeSection
            hasBreakTime={hasBreakTime}
            setHasBreakTime={setHasBreakTime}
          />
        </>
      ) : (
        <ClosedDayState selectedDay={selectedDay} />
      )}
    </div>
  );
};

export default OperatingHoursEditor;
