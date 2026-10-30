import { useMemo, useState } from "react";
import { CalendarDays, Clock3, MoreVertical, Plus } from "lucide-react";

type PromotionTab = "active" | "scheduled" | "past";

interface Promotion {
  id: string;
  title: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
  allDay: boolean;
  orders: number;
  revenue: number;
  enabled: boolean;
  tab: PromotionTab;
}

const initialPromotions: Promotion[] = [
  {
    id: "promo-1",
    title: "20% off on orders over HK$120",
    description: "Get 20% off on all orders over HK$120.",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=300",
    startDate: "May 10",
    endDate: "May 16, 2026",
    allDay: true,
    orders: 24,
    revenue: 3240,
    enabled: true,
    tab: "active",
  },
  {
    id: "promo-2",
    title: "Free delivery weekend",
    description: "Free delivery on all orders this weekend.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300",
    startDate: "May 17",
    endDate: "May 18, 2026",
    allDay: true,
    orders: 18,
    revenue: 2160,
    enabled: true,
    tab: "active",
  },
  {
    id: "promo-3",
    title: "Buy 1 Get 1 50% off",
    description: "Buy any curry and get the second 50% off.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300",
    startDate: "May 24",
    endDate: "May 31, 2026",
    allDay: true,
    orders: 0,
    revenue: 0,
    enabled: false,
    tab: "scheduled",
  },
];

const promotionTabs: {
  key: PromotionTab;
  label: string;
  count?: number;
}[] = [
  {
    key: "active",
    label: "Active",
    count: 3,
  },
  {
    key: "scheduled",
    label: "Scheduled",
    count: 2,
  },
  {
    key: "past",
    label: "Past",
  },
];

const RestaurantPromotionsPage = () => {
  const [currentTab, setCurrentTab] = useState<PromotionTab>("active");

  const [promotions, setPromotions] = useState<Promotion[]>(initialPromotions);

  const visiblePromotions = useMemo(
    () => promotions.filter((promotion) => promotion.tab === currentTab),
    [promotions, currentTab]
  );

  const togglePromotion = (promotionId: string) => {
    setPromotions((prev) =>
      prev.map((promotion) =>
        promotion.id === promotionId
          ? {
              ...promotion,
              enabled: !promotion.enabled,
            }
          : promotion
      )
    );
  };

  return (
    <div className="h-dvh bg-[#fafafa] px-6 py-5">
      {/* Header */}
      <header className="flex justify-between h-10">
        <h1 className="text-[24px] font-bold tracking-[-0.5px] text-gray-950">
          Promotions
        </h1>

        <button
          className="
            rounded-lg
            border border-green-500
            bg-white
            px-4
            flex items-center gap-2
            text-sm font-semibold
            text-green-700
            hover:bg-green-50
            hover:cursor-pointer
          "
        >
          <Plus className="w-4 h-4" />
          Create promotion
        </button>
      </header>

      {/* Tabs */}
      <div className="mt-5 border-b border-gray-200">
        <div className="flex items-center gap-8">
          {promotionTabs.map((tab) => {
            const selected = currentTab === tab.key;

            return (
              <button
                key={tab.key}
                onClick={() => setCurrentTab(tab.key)}
                className={`
                  relative
                  h-11
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  ${
                    selected
                      ? "text-green-700"
                      : "text-gray-500 hover:text-gray-800"
                  }
                `}
              >
                {tab.label}

                {tab.count !== undefined && (
                  <span
                    className={`
                      min-w-5
                      h-5
                      px-1.5
                      rounded-full
                      flex
                      items-center
                      justify-center
                      text-[10px]
                      font-semibold
                      ${
                        selected
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-500"
                      }
                    `}
                  >
                    {tab.count}
                  </span>
                )}

                {selected && (
                  <span className="absolute left-0 right-0 bottom-0 h-[2px] rounded-full bg-green-600" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Promotion list */}
      <section className="mt-5 overflow-hidden rounded-xl border border-gray-200 bg-white">
        {visiblePromotions.length > 0 ? (
          visiblePromotions.map((promotion, index) => (
            <PromotionRow
              key={promotion.id}
              promotion={promotion}
              onToggle={() => togglePromotion(promotion.id)}
              showBorder={index !== visiblePromotions.length - 1}
            />
          ))
        ) : (
          <EmptyPromotionState tab={currentTab} />
        )}
      </section>
    </div>
  );
};

interface PromotionRowProps {
  promotion: Promotion;
  onToggle: () => void;
  showBorder: boolean;
}

const PromotionRow = ({
  promotion,
  onToggle,
  showBorder,
}: PromotionRowProps) => {
  return (
    <div
      className={`
        min-h-[118px]
        px-4
        py-4
        flex
        items-center
        gap-4
        ${showBorder ? "border-b border-gray-100" : ""}
      `}
    >
      {/* Image */}
      <img
        src={promotion.image}
        alt={promotion.title}
        className="
          w-[110px]
          h-[78px]
          rounded-lg
          object-cover
          shrink-0
        "
      />

      {/* Promotion info */}
      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-semibold text-gray-900">
          {promotion.title}
        </h3>

        <p className="mt-1 text-xs text-gray-500">{promotion.description}</p>

        <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <CalendarDays className="w-3.5 h-3.5 text-gray-400" />

            <span>
              {promotion.startDate} – {promotion.endDate}
            </span>
          </div>

          {promotion.allDay && (
            <div className="flex items-center gap-1.5">
              <Clock3 className="w-3.5 h-3.5 text-gray-400" />
              <span>All day</span>
            </div>
          )}
        </div>
      </div>

      {/* Orders */}
      <div className="w-[100px] shrink-0">
        <div className="text-xs text-gray-400">Orders</div>

        <div className="mt-1 text-sm font-semibold text-gray-900">
          {promotion.orders}
        </div>
      </div>

      {/* Revenue */}
      <div className="w-[130px] shrink-0">
        <div className="text-xs text-gray-400">Revenue</div>

        <div className="mt-1 text-sm font-semibold text-gray-900">
          HK$ {promotion.revenue.toLocaleString()}
        </div>
      </div>

      {/* Toggle */}
      <div className="w-[50px] flex justify-center shrink-0">
        <Toggle checked={promotion.enabled} onClick={onToggle} />
      </div>

      {/* More */}
      <button
        className="
          w-8
          h-8
          shrink-0
          rounded-lg
          flex
          items-center
          justify-center
          text-gray-400
          hover:bg-gray-100
          hover:text-gray-700
        "
      >
        <MoreVertical className="w-4 h-4" />
      </button>
    </div>
  );
};

interface ToggleProps {
  checked: boolean;
  onClick: () => void;
}

const Toggle = ({ checked, onClick }: ToggleProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        relative
        w-9
        h-5
        rounded-full
        transition-colors
        ${checked ? "bg-green-600" : "bg-gray-300"}
      `}
    >
      <span
        className={`
          absolute
          top-0.5
          w-4
          h-4
          rounded-full
          bg-white
          shadow-sm
          transition-all
          ${checked ? "left-[18px]" : "left-0.5"}
        `}
      />
    </button>
  );
};

interface EmptyPromotionStateProps {
  tab: PromotionTab;
}

const EmptyPromotionState = ({ tab }: EmptyPromotionStateProps) => {
  const text = {
    active: "No active promotions",
    scheduled: "No scheduled promotions",
    past: "No past promotions",
  };

  return (
    <div className="py-20 flex flex-col items-center justify-center">
      <div
        className="
          w-12
          h-12
          rounded-full
          bg-green-50
          flex
          items-center
          justify-center
        "
      >
        <span className="text-xl">🏷️</span>
      </div>

      <div className="mt-4 text-sm font-semibold text-gray-800">
        {text[tab]}
      </div>

      <p className="mt-1 text-xs text-gray-400">Promotions will appear here.</p>
    </div>
  );
};

export default RestaurantPromotionsPage;
