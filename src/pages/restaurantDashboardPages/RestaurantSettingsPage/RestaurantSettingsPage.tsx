import { RestaurantInfoSettings } from "./components/RestaurantInfoSettings/RestaurantInfoSettings";
import { PlaceholderSettings } from "./components/PlaceholderSettings";
import { tabs } from "./constants/tabs";
import { useRestaurantSettingsPage } from "./useRestaurantSettingsPage";

const RestaurantSettingsPage = () => {
  const { currentTab, setCurrentTab } = useRestaurantSettingsPage();

  return (
    <div className="h-dvh overflow-y-auto bg-[#fafafa] px-6 py-5">
      {/* Header */}

      <h1 className="h-10 flex items-center text-[24px] font-bold tracking-[-0.5px] text-gray-950">
        Settings
      </h1>

      {/* Tabs */}
      <div className="mt-5 flex h-10 gap-8 border-b border-gray-200">
        {tabs.map((tab) => {
          const selected = currentTab === tab.key;

          return (
            <button
              key={tab.key}
              onClick={() => setCurrentTab(tab.key)}
              className={`
                  relative
                  text-sm
                  font-medium
                  transition
                  hover:cursor-pointer
                  ${
                    selected
                      ? "text-green-700"
                      : "text-gray-500 hover:text-gray-800"
                  }
                `}
            >
              {tab.label}

              {selected && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-green-600" />
              )}
            </button>
          );
        })}
      </div>

      {/* Content */}

      <div className="mt-5">
        {currentTab === "restaurant" && <RestaurantInfoSettings />}

        {currentTab === "payment" && (
          <PlaceholderSettings
            title="Payment"
            description="Manage payouts and payment information."
          />
        )}

        {currentTab === "notifications" && (
          <PlaceholderSettings
            title="Notifications"
            description="Choose how you receive restaurant notifications."
          />
        )}

        {currentTab === "account" && (
          <PlaceholderSettings
            title="Account"
            description="Manage your owner account."
          />
        )}
      </div>
    </div>
  );
};

export default RestaurantSettingsPage;
