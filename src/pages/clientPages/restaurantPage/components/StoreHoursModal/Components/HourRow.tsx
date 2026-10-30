import type { DayOfWeekType } from "../../../api/restaurantDetail.dto";
import { formatTime } from "../../../utils/formatTime";

export interface RestaurantHour {
  dayOfWeek: "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
  openTime: string | null;
  closeTime: string | null;
  isClosed: boolean;
}

const dayLabel: Record<RestaurantHour["dayOfWeek"], string> = {
  mon: "Mon",
  tue: "Tue",
  wed: "Wed",
  thu: "Thu",
  fri: "Fri",
  sat: "Sat",
  sun: "Sun",
};

const todayMap: Record<number, string> = {
  0: "sun",
  1: "mon",
  2: "tue",
  3: "wed",
  4: "thu",
  5: "fri",
  6: "sat",
};

interface HourRowProps {
  isLast: boolean;
  hour: {
    dayOfWeek: DayOfWeekType;
    isClosed: boolean;
    openTime: string | null;
    closeTime: string | null;
  };
}

const HourRow: React.FC<HourRowProps> = ({ isLast, hour }) => {
  const today = todayMap[new Date().getDay()];

  const isToday = hour.dayOfWeek === today;

  return (
    <div
      className={`
        flex
        h-[58px]
        items-center
        px-5
        transition-colors

        ${!isLast ? "border-b border-gray-100" : ""}

        ${isToday ? "bg-green-50/60" : "bg-white"}
      `}
    >
      {/* Day */}
      <div className="flex w-[130px] items-center gap-2">
        <span
          className={`
            text-sm
            font-semibold

            ${isToday ? "text-green-700" : "text-gray-900"}
          `}
        >
          {dayLabel[hour.dayOfWeek]}
        </span>

        {isToday && (
          <span
            className="
              inline-flex
              items-center
              rounded-full
              bg-green-100
              px-2
              py-0.5
              text-[10px]
              font-semibold
              text-green-700
            "
          >
            Today
          </span>
        )}
      </div>

      {/* Hours */}
      {hour.isClosed ? (
        <span
          className="
            inline-flex
            items-center
            rounded-full
            bg-gray-100
            px-3
            py-1
            text-xs
            font-semibold
            text-gray-500
          "
        >
          Closed
        </span>
      ) : (
        <div className="flex flex-1 items-center">
          {/* Open time */}
          <div className="flex w-[150px] items-center gap-3">
            <span
              className={`
                size-2
                rounded-full

                ${isToday ? "bg-green-600" : "bg-green-500"}
              `}
            />

            <span className="text-sm font-medium text-gray-900">
              {formatTime(hour.openTime)}
            </span>
          </div>

          {/* Divider */}
          <span className="mx-4 text-gray-300">—</span>

          {/* Close time */}
          <span className="text-sm font-medium text-gray-900">
            {formatTime(hour.closeTime)}
          </span>
        </div>
      )}
    </div>
  );
};

export default HourRow;
