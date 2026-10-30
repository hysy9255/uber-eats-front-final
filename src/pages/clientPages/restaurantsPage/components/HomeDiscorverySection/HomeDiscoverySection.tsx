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
      icon: <Zap className="h-3.5 w-3.5" />,
    },
    {
      key: "openNow",
      label: "Open Now",
      icon: <span className="h-2 w-2 rounded-full bg-green-600" />,
    },
    {
      key: "topRated",
      label: "Top Rated",
      icon: <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />,
    },
  ];

  return (
    <div className="w-full min-w-0 overflow-x-auto">
      {addressPopUpOpen && (
        <ManageDeliveryAddressModal
          closeAddressPopUp={() => setAddressPopUpOpen(false)}
        />
      )}

      <div className="flex min-w-[1100px] flex-col gap-y-3">
        {/* Filter Bar */}
        <div
          className="
            flex items-center gap-x-3
            rounded-xl
            border border-gray-100
            bg-white
            px-4 py-3
            shadow-sm
          "
        >
          {address && (
            <button
              onClick={() => setAddressPopUpOpen(true)}
              className="
                flex h-9 shrink-0 items-center gap-x-2
                rounded-lg
                border border-gray-200
                px-3
                hover:cursor-pointer
                hover:bg-gray-50
              "
            >
              <MapPin className="h-4 w-4 shrink-0 text-green-600" />

              <span className="whitespace-nowrap text-xs text-gray-500">
                Deliver to
              </span>

              <span className="whitespace-nowrap text-xs font-semibold text-gray-900">
                {formatViewAddress(
                  address.streetAddress,
                  address.apt,
                  address.city,
                  address.state,
                  address.zip
                )}
              </span>

              <ChevronDown className="h-3.5 w-3.5 shrink-0 text-gray-700" />
            </button>
          )}

          <div className="flex shrink-0 items-center gap-x-2">
            {filters.map((filter) => {
              const selected = selectedFilter === filter.key;

              return (
                <button
                  key={filter.key}
                  onClick={() => setSelectedFilter(filter.key)}
                  className={`
                    flex h-9 shrink-0 items-center gap-x-1.5
                    whitespace-nowrap
                    rounded-lg border px-4
                    text-xs font-medium
                    transition
                    ${
                      selected
                        ? "border-gray-950 bg-gray-950 text-white"
                        : "border-gray-200 bg-white text-gray-800 hover:bg-gray-50"
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
            flex min-h-[190px] items-center
            overflow-hidden
            rounded-xl
            bg-[#eff9f5]
            px-7
          "
        >
          {/* Left Content */}
          <div className="relative z-10 flex flex-col items-start">
            <div
              className="
                mb-2
                rounded
                bg-green-700
                px-2 py-0.5
                text-[10px] font-medium
                text-white
              "
            >
              Limited time
            </div>

            <h2
              className="
                max-w-[340px]
                text-[27px] font-bold
                leading-[1.08]
                text-gray-950
              "
            >
              Free delivery on your
              <br />
              first order
            </h2>

            <div className="mt-3 flex items-center gap-x-2">
              <span className="text-sm text-gray-500">Use code</span>

              <span
                className="
                  rounded
                  border border-green-600
                  px-1.5 py-0.5
                  text-sm font-semibold
                  text-green-700
                "
              >
                EATSNEW
              </span>

              <span className="text-sm text-gray-500">at checkout.</span>
            </div>

            <button
              className="
                mt-4
                flex items-center gap-x-2
                rounded-lg
                bg-gray-950
                px-4 py-2
                text-xs font-medium
                text-white
                hover:bg-gray-800
              "
            >
              Order Now
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Right Visual */}
          <div
            className="
              absolute
              right-7 top-1/2
              flex -translate-y-1/2 items-center
              gap-x-4
            "
          >
            <PromoFoodCircle src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ieoSpIYal4jeiQCPJw4JoEelnnhF0aV_JYBQcUL1rE1snw4ZUoMEglKv&s=10" />

            <PromoFoodCircle src="https://www.chewoutloud.com/wp-content/uploads/2025/09/Chicken-Fajita-Pasta-in-Pan-Square.jpg" />

            <div
              className="
                flex h-[130px] w-[105px] shrink-0
                rotate-[-2deg]
                items-center justify-center
                border border-gray-200
                bg-white
                shadow-md
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
                flex h-[88px] w-[88px] shrink-0
                flex-col items-center justify-center
                rounded-full
                border border-gray-200
                bg-white/70
                shadow-xl
              "
            >
              <div className="text-lg font-semibold">₩0</div>

              <div className="text-[10px] font-medium">Delivery Fee</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDiscoverySection;
