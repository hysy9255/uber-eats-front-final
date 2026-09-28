import type { DayHours } from "../../constants/dayHours.type";
import type { DayOfWeek } from "../../constants/dayOfWeek.type";
import { Toggle } from "../shared/Toggle";

interface OperatingHoursListProps {
  hours: DayHours[];
  setHours: React.Dispatch<React.SetStateAction<DayHours[]>>;
  // updateSelectedDay: UpdateSelectedDay;
  // selectedHours?: DayHours;
  selectedDay: DayOfWeek;
  setSelectedDay: (day: DayOfWeek) => void;
}

const OperatingHoursList: React.FC<OperatingHoursListProps> = ({
  hours,
  setHours,
  // updateSelectedDay,
  // selectedHours,
  selectedDay,
  setSelectedDay,
}) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
      {hours.map((item, index) => {
        const selected = selectedDay === item.day;

        return (
          <div
            key={item.day}
            onClick={() => setSelectedDay(item.day)}
            className={`
          w-full
          min-h-[64px]
          px-4
          flex
          items-center
          justify-between
          text-left
          transition
          hover:cursor-pointer
          ${index !== hours.length - 1 ? "border-b border-gray-100" : ""}
          ${selected ? "bg-green-50/70" : "bg-white hover:bg-gray-50"}
        `}
          >
            <div>
              <div
                className={`
              text-sm
              font-semibold
              ${selected ? "text-green-800" : "text-gray-800"}
            `}
              >
                {item.day}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span
                className={`
              text-sm
              ${item.enabled ? "text-gray-600" : "text-gray-400"}
            `}
              >
                {item.enabled ? `${item.open} – ${item.close}` : "Closed"}
              </span>

              <Toggle
                checked={item.enabled}
                onClick={(e) => {
                  e.stopPropagation();
                  setHours((prev) =>
                    prev.map((day) =>
                      day.day === item.day
                        ? {
                            ...day,
                            enabled: !day.enabled,
                          }
                        : day
                    )
                  );
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OperatingHoursList;
