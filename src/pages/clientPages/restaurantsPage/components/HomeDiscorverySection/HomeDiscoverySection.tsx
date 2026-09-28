import { useState } from "react";
import { MapPin, ChevronDown, ChevronRight, Star, Zap } from "lucide-react";
import { PromoFoodCircle } from "./PromoFoodCircle";
import { formatViewAddress } from "@/shared/utils/formatViewAddress";
import ManageDeliveryAddressModal from "../../../shared/components/ManageDeliveryAddressModal/ManageDeliveryAddressModal";
import { useAddress } from "../../../shared/context/address/useAddress";

type FilterType =
  | "all"
  | "korean"
  | "pizza"
  | "fastDelivery"
  | "openNow"
  | "topRated";

const HomeDiscoverySection = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("all");

  const [addressPopUpOpen, setAddressPopUpOpen] = useState(false);

  const { address } = useAddress();

  const filters: {
    key: FilterType;
    label: string;
    icon?: React.ReactNode;
  }[] = [
    {
      key: "all",
      label: "All",
    },
    {
      key: "korean",
      label: "Korean",
    },
    {
      key: "pizza",
      label: "Pizza",
    },
    {
      key: "fastDelivery",
      label: "Fast Delivery",
      icon: <Zap className="w-3.5 h-3.5" />,
    },
    {
      key: "openNow",
      label: "Open Now",
      icon: <span className="w-2 h-2 bg-green-600 rounded-full" />,
    },
    {
      key: "topRated",
      label: "Top Rated",
      icon: <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />,
    },
  ];

  return (
    <div className="flex flex-col gap-y-3">
      {addressPopUpOpen && (
        <ManageDeliveryAddressModal
          closeAddressPopUp={() => setAddressPopUpOpen(false)}
        />
      )}

      {/* Filter Bar */}
      <div
        className="
          bg-white
          border border-gray-100
          rounded-xl
          px-4 py-3
          flex items-center gap-x-3
          shadow-sm
        "
      >
        {address && (
          <button
            onClick={() => setAddressPopUpOpen(true)}
            className="
            h-9
            px-3
            border border-gray-200
            rounded-lg
            flex items-center gap-x-2
            hover:bg-gray-50
            shrink-0
            hover:cursor-pointer
          "
          >
            <MapPin className="w-4 h-4 text-green-600" />

            <span className="text-xs text-gray-500">Deliver to</span>

            <span className="text-xs font-semibold text-gray-900">
              {formatViewAddress(
                address?.streetAddress,
                address?.apt,
                address?.city,
                address?.state,
                address?.zip
              )}
            </span>

            <ChevronDown className="w-3.5 h-3.5 text-gray-700" />
          </button>
        )}

        <div className="flex items-center gap-x-2">
          {filters.map((filter) => {
            const selected = selectedFilter === filter.key;

            return (
              <button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                className={`
                  h-9
                  px-4
                  rounded-lg
                  border
                  flex items-center gap-x-1.5
                  text-xs
                  font-medium
                  transition
                  ${
                    selected
                      ? "bg-gray-950 text-white border-gray-950"
                      : "bg-white text-gray-800 border-gray-200 hover:bg-gray-50"
                  }
                `}
              >
                {filter.icon}
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Promotion Banner */}
      <div
        className="
          relative
          min-h-[190px]
          overflow-hidden
          rounded-xl
          bg-[#eff9f5]
          px-7
          flex items-center
        "
      >
        {/* Left Content */}
        <div className="relative z-10 flex flex-col items-start">
          <div
            className="
              bg-green-700
              text-white
              text-[10px]
              font-medium
              rounded
              px-2 py-0.5
              mb-2
            "
          >
            Limited time
          </div>

          <h2
            className="
              text-[27px]
              leading-[1.08]
              font-bold
              text-gray-950
              max-w-[340px]
            "
          >
            Free delivery on your
            <br />
            first order
          </h2>

          <div className="mt-3 flex items-center gap-x-2">
            <span className="text-gray-500 text-sm">Use code</span>

            <span
              className="
                border border-green-600
                text-green-700
                font-semibold
                rounded
                px-1.5 py-0.5
                text-sm
              "
            >
              EATSNEW
            </span>

            <span className="text-gray-500 text-sm">at checkout.</span>
          </div>

          <button
            className="
              mt-4
              bg-gray-950
              text-white
              rounded-lg
              px-4 py-2
              text-xs
              font-medium
              flex items-center gap-x-2
              hover:bg-gray-800
            "
          >
            Order Now
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right Visual */}
        <div
          className="
            absolute
            right-7
            top-1/2
            -translate-y-1/2
            flex items-center
            gap-x-4
          "
        >
          <PromoFoodCircle src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ieoSpIYal4jeiQCPJw4JoEelnnhF0aV_JYBQcUL1rE1snw4ZUoMEglKv&s=10" />

          <PromoFoodCircle src="https://www.chewoutloud.com/wp-content/uploads/2025/09/Chicken-Fajita-Pasta-in-Pan-Square.jpg" />

          <div
            className="
              w-[105px]
              h-[130px]
              bg-white
              border border-gray-200
              shadow-md
              flex items-center
              justify-center
              rotate-[-2deg]
            "
          >
            <div className="text-center">
              <div className="text-base text-gray-900">Uber</div>

              <div className="text-lg font-bold text-green-600">Eats</div>
            </div>
          </div>

          <PromoFoodCircle src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe_X_m07RKu_WkybZFFrWRsiIZ7pOwV_H5tFV018INxoYtTYmxUf0Owhbm&s=10" />

          <div
            className="
              w-[88px]
              h-[88px]
              rounded-full
              border border-gray-200
              shadow-xl
              flex flex-col
              items-center
              justify-center
              bg-white/70
            "
          >
            <div className="text-lg font-semibold">₩0</div>

            <div className="text-[10px] font-medium">Delivery Fee</div>
          </div>
        </div>
      </div>

      {/* Popular Header */}
      <div className="flex items-end justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-950">Popular near you</h3>

          <div className="mt-0.5 text-xs text-gray-500">
            Top-rated restaurants, fast delivery
          </div>
        </div>

        <button
          className="
            border border-gray-200
            rounded-lg
            px-4 py-2
            flex items-center gap-x-2
            text-xs
            font-medium
            hover:bg-gray-50
          "
        >
          View all
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default HomeDiscoverySection;
