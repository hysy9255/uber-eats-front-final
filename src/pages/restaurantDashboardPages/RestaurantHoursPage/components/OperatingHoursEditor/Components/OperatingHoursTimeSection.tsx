import type { DayHours } from "../../../constants/dayHours.type";
import type { UpdateSelectedDay } from "../../../types/updateSelectedDay.type";
import { TimeInput } from "./Shared/TimeInput";

interface OperatingHoursTimeSectionProps {
  selectedHours: DayHours;
  updateSelectedDay: UpdateSelectedDay;
  is24Hours: boolean;
  setIs24Hours: (value: boolean) => void;
}

const OperatingHoursTimeSection: React.FC<OperatingHoursTimeSectionProps> = ({
  selectedHours,
  updateSelectedDay,
  is24Hours,
  setIs24Hours,
}) => {
  return (
    <div className="mt-7">
      <div className="text-sm font-semibold text-gray-800">Operating hours</div>

      <div className="mt-3 flex items-center gap-3">
        <TimeInput
          value={selectedHours.open}
          onChange={(value) => updateSelectedDay("open", value)}
          disabled={is24Hours}
        />

        <span className="text-gray-400">–</span>

        <TimeInput
          value={selectedHours.close}
          onChange={(value) => updateSelectedDay("close", value)}
          disabled={is24Hours}
        />

        <label className="ml-2 flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={is24Hours}
            onChange={(e) => setIs24Hours(e.target.checked)}
            className="w-4 h-4 rounded border-gray-300"
          />

          <span className="text-sm text-gray-600">24 hours</span>
        </label>
      </div>
    </div>
  );
};

export default OperatingHoursTimeSection;
