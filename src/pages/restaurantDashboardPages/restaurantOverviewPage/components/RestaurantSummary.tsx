import { ExternalLink, Settings } from "lucide-react";
import DefaultRestaurantLogoImg from "../../../../shared/components/DefaultRestaurantLogoImg/DefaultRestaurantLogoImg";
import { capitalizeWords } from "../../../../shared/utils/capitalizeWords";
import type { RestaurantDetailDTO } from "../../../clientPages/restaurantPage/api/restaurantDetail.dto";

interface RestaurantSummaryProps {
  restaurantDetail?: RestaurantDetailDTO;
  renderRestaurantStatus: () => React.ReactNode;
  onClcickManageStatus: () => void;
  className?: string;
}

const RestaurantSummary: React.FC<RestaurantSummaryProps> = ({
  restaurantDetail,
  renderRestaurantStatus,
  onClcickManageStatus,
  className,
}) => {
  return (
    <section
      className={`
        ${className}
        rounded-lg border border-gray-200 bg-white px-5 py-4 shadow-sm
    `}
    >
      <div className="flex items-center justify-between gap-5">
        <div className="flex items-center gap-4 min-w-0">
          <div className="border border-gray-500 w-[92px] h-[92px] rounded-full overflow-hidden shrink-0 bg-emerald-950 flex items-center justify-center">
            {restaurantDetail?.logo ? (
              <img src={restaurantDetail?.logo} />
            ) : (
              <DefaultRestaurantLogoImg />
            )}
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <h2 className="text-[22px] font-bold text-gray-950">
                {capitalizeWords(restaurantDetail?.name)}
              </h2>
              {renderRestaurantStatus()}
            </div>

            <div className="mt-1 text-sm text-gray-500">
              Thai &nbsp;•&nbsp; Harbour City
            </div>

            <div className="mt-1 max-w-[620px] text-sm text-gray-600">
              {capitalizeWords(restaurantDetail?.address)}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onClcickManageStatus}
            className="
            hover:cursor-pointer
            h-11 px-4 rounded-lg border border-gray-200 flex items-center gap-2 text-sm font-semibold text-gray-800 hover:bg-gray-50"
          >
            Manage status
            <ExternalLink className="w-4 h-4" />
          </button>
          <button className="h-11 px-4 rounded-lg border border-gray-200 flex items-center gap-2 text-sm font-semibold text-gray-800 hover:bg-gray-50">
            View store
            <ExternalLink className="w-4 h-4" />
          </button>

          <button className="h-11 px-4 rounded-lg border border-gray-200 flex items-center gap-2 text-sm font-semibold text-gray-800 hover:bg-gray-50">
            <Settings className="w-4 h-4" />
            Settings
          </button>
        </div>
      </div>
    </section>
  );
};

export default RestaurantSummary;
