import { createPortal } from "react-dom";
import Overlay from "./Components/Overlay";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HourRow from "./Components/HourRow";
import ModalLayout from "./Components/ModalLayout";
import { sortHoursDataByDays } from "../../utils/sortHoursDataByDays";
import type { DayOfWeekType } from "../../api/restaurantDetail.dto";

interface StoreHoursModalProps {
  onClose: () => void;
  restaurantHours: {
    dayOfWeek: DayOfWeekType;
    isClosed: boolean;
    openTime: string | null;
    closeTime: string | null;
  }[];
}

const StoreHoursModal = ({
  onClose,
  restaurantHours,
}: StoreHoursModalProps) => {
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
      <Overlay onClick={onClose} />
      <ModalLayout>
        <Header onClose={onClose} />
        {/* Hours */}
        <div className="px-7 pb-7">
          <div className="overflow-hidden rounded-2xl border border-gray-200">
            {sortHoursDataByDays(restaurantHours).map((hour, index) => {
              const isLast = index === restaurantHours.length - 1;

              return (
                <HourRow key={hour.dayOfWeek} hour={hour} isLast={isLast} />
              );
            })}
          </div>
        </div>

        <Footer onClose={onClose} />
      </ModalLayout>
    </div>,
    document.body
  );
};

export default StoreHoursModal;
