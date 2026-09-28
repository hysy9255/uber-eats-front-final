import {
  AlarmClock,
  Bike,
  ChevronDown,
  Clock3,
  WalletCards,
} from "lucide-react";
import InfoSection from "./Components/InfoSection";
import type { RestaurantHoursDTO } from "../../../../../../api/restaurant/dto/restaurant-hours.dto";
import { formatTime } from "../../utils/formatTime";

const deliveryTime = "10 - 20 mins";
const minimumOrder = 15000;
const deliveryFee = 0;

interface RestaurantQuickInfoProps {
  onClickOperatingHours: () => void;
  todayHours?: RestaurantHoursDTO;
}

const RestaurantQuickInfo: React.FC<RestaurantQuickInfoProps> = ({
  onClickOperatingHours,
  todayHours,
}) => {
  return (
    <div
      className="
        mt-3
        flex
        overflow-hidden
        rounded-2xl
        border
        border-gray-100
        bg-white
        shadow-sm
      "
    >
      {/* Delivery Time */}
      <InfoSection
        Icon={AlarmClock}
        title="배달 시간"
        contents={deliveryTime}
      />

      {/* Minimum Order */}
      <InfoSection
        Icon={WalletCards}
        title="최소 주문 금액"
        contents={`$${minimumOrder.toLocaleString()}`}
      />

      {/* Delivery Fee */}
      <InfoSection
        Icon={Bike}
        title="배달비"
        contents={
          deliveryFee === 0 ? (
            <>
              <span className="text-green-600">무료</span>

              <span className="ml-1 text-gray-700">
                (${minimumOrder.toLocaleString()}+)
              </span>
            </>
          ) : (
            <span className="text-gray-900">${deliveryFee}</span>
          )
        }
      />

      {/* Hours */}
      <InfoSection
        Icon={Clock3}
        title="영업 시간"
        contents={
          <button
            type="button"
            onClick={onClickOperatingHours}
            className="
              flex
              items-center
              gap-3
              text-left
              hover:cursor-pointer
            "
          >
            {!todayHours ? (
              <span className="text-[14px] font-medium text-gray-400">
                영업 시간 확인
              </span>
            ) : todayHours.isClosed ? (
              <>
                <span
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    bg-red-50
                    px-2.5
                    py-1
                    text-[12px]
                    font-semibold
                    text-red-600
                  "
                >
                  Closed
                </span>

                <span className="text-[12px] text-gray-500">오늘</span>
              </>
            ) : (
              <>
                <p className="whitespace-nowrap text-[14px] font-semibold text-gray-900">
                  {formatTime(todayHours.openTime)}
                  {" – "}
                  {formatTime(todayHours.closeTime)}
                </p>

                <span className="text-[12px] text-gray-500">오늘</span>
              </>
            )}

            <ChevronDown className="h-4 w-4 shrink-0 text-gray-500" />
          </button>
        }
      />
    </div>
  );
};

export default RestaurantQuickInfo;
