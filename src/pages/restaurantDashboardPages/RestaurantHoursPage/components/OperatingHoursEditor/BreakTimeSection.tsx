import { TimeInput } from "./TimeInput";

interface BreakTimeSectionProps {
  hasBreakTime: boolean;
  setHasBreakTime: (value: boolean) => void;
}

const BreakTimeSection: React.FC<BreakTimeSectionProps> = ({
  hasBreakTime,
  setHasBreakTime,
}) => {
  return (
    <div className="mt-8">
      <div className="text-sm font-semibold text-gray-800">Break time</div>

      <label className="mt-3 flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={hasBreakTime}
          onChange={(e) => setHasBreakTime(e.target.checked)}
          className="w-4 h-4 rounded border-gray-300"
        />

        <span className="text-sm text-gray-600">Add break time</span>
      </label>

      <p className="mt-1 ml-6 text-xs text-gray-400">Break time is optional</p>

      {hasBreakTime && (
        <div className="mt-4 ml-6 flex items-center gap-3">
          <TimeInput value="15:00" onChange={() => {}} />

          <span className="text-gray-400">–</span>

          <TimeInput value="16:00" onChange={() => {}} />
        </div>
      )}
    </div>
  );
};

export default BreakTimeSection;
