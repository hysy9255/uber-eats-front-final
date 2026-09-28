import { useState } from "react";
import { Upload, ChevronDown } from "lucide-react";

type SettingsTab = "restaurant" | "payment" | "notifications" | "account";

interface RestaurantSettings {
  restaurantName: string;
  cuisineType: string;
  phoneNumber: string;
  address: string;
  logoUrl: string | null;
}

const initialSettings: RestaurantSettings = {
  restaurantName: "Nara Thai Cuisine",
  cuisineType: "Thai",
  phoneNumber: "+852 1234 5678",
  address:
    "3/F, Canton Rd, 3-27號 shop 3303, Harbour City, Tsim Sha Tsui, Hong Kong",
  logoUrl: null,
};

const tabs: {
  key: SettingsTab;
  label: string;
}[] = [
  {
    key: "restaurant",
    label: "Restaurant info",
  },
  {
    key: "payment",
    label: "Payment",
  },
  {
    key: "notifications",
    label: "Notifications",
  },
  {
    key: "account",
    label: "Account",
  },
];

const RestaurantSettingsPage = () => {
  const [currentTab, setCurrentTab] = useState<SettingsTab>("restaurant");

  const [settings, setSettings] = useState<RestaurantSettings>(initialSettings);

  const [isDirty, setIsDirty] = useState(false);

  const updateField = <K extends keyof RestaurantSettings>(
    field: K,
    value: RestaurantSettings[K]
  ) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));

    setIsDirty(true);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] px-6 py-5">
      {/* Header */}
      <header>
        <h1 className="text-[24px] font-bold tracking-[-0.5px] text-gray-950">
          Settings
        </h1>
      </header>

      {/* Tabs */}
      <div className="mt-5 border-b border-gray-200">
        <div className="flex items-center gap-8">
          {tabs.map((tab) => {
            const selected = currentTab === tab.key;

            return (
              <button
                key={tab.key}
                onClick={() => setCurrentTab(tab.key)}
                className={`
                  relative
                  h-11
                  text-sm
                  font-medium
                  transition
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
      </div>

      {/* Content */}
      <div className="mt-5">
        {currentTab === "restaurant" && (
          <RestaurantInfoSettings
            settings={settings}
            updateField={updateField}
            isDirty={isDirty}
            onSave={() => setIsDirty(false)}
          />
        )}

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

interface RestaurantInfoSettingsProps {
  settings: RestaurantSettings;
  updateField: <K extends keyof RestaurantSettings>(
    field: K,
    value: RestaurantSettings[K]
  ) => void;
  isDirty: boolean;
  onSave: () => void;
}

const RestaurantInfoSettings = ({
  settings,
  updateField,
  isDirty,
  onSave,
}: RestaurantInfoSettingsProps) => {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-5">
      {/* Section header */}
      <div>
        <h2 className="text-base font-bold text-gray-950">
          Restaurant information
        </h2>

        <p className="mt-1 text-xs text-gray-500">
          Manage your restaurant details.
        </p>
      </div>

      {/* First row */}
      <div className="mt-6 grid grid-cols-[1fr_1fr_1.2fr] gap-6">
        {/* Restaurant Name */}
        <FormField label="Restaurant name">
          <input
            value={settings.restaurantName}
            onChange={(e) => updateField("restaurantName", e.target.value)}
            className="
              h-10
              w-full
              rounded-lg
              border
              border-gray-200
              bg-white
              px-3
              text-sm
              text-gray-800
              outline-none
              focus:border-green-500
              focus:ring-1
              focus:ring-green-500
            "
          />
        </FormField>

        {/* Cuisine */}
        <FormField label="Cuisine type">
          <div className="relative">
            <select
              value={settings.cuisineType}
              onChange={(e) => updateField("cuisineType", e.target.value)}
              className="
                h-10
                w-full
                appearance-none
                rounded-lg
                border
                border-gray-200
                bg-white
                px-3
                pr-9
                text-sm
                text-gray-700
                outline-none
                focus:border-green-500
                focus:ring-1
                focus:ring-green-500
              "
            >
              <option>Thai</option>
              <option>Korean</option>
              <option>Japanese</option>
              <option>Chinese</option>
              <option>Italian</option>
              <option>American</option>
            </select>

            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 w-4 h-4 -translate-y-1/2 text-gray-400" />
          </div>
        </FormField>

        {/* Logo */}
        <div>
          <label className="text-xs font-medium text-gray-700">
            Restaurant logo
          </label>

          <div className="mt-2 flex items-center gap-4">
            <div
              className="
                w-[90px]
                h-[90px]
                shrink-0
                overflow-hidden
                rounded-xl
                bg-emerald-950
                flex
                items-center
                justify-center
              "
            >
              {settings.logoUrl ? (
                <img
                  src={settings.logoUrl}
                  alt="restaurant logo"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <div className="text-yellow-500 text-xs">♛</div>

                  <div className="mt-1 text-yellow-400 text-lg font-serif tracking-[0.14em]">
                    NARA
                  </div>

                  <div className="text-yellow-500 text-[7px] tracking-[0.16em]">
                    THAI CUISINE
                  </div>
                </div>
              )}
            </div>

            <div>
              <button
                className="
                  h-9
                  rounded-lg
                  border
                  border-gray-200
                  bg-white
                  px-3
                  flex
                  items-center
                  gap-2
                  text-xs
                  font-medium
                  text-gray-700
                  hover:bg-gray-50
                "
              >
                <Upload className="w-4 h-4" />
                Change logo
              </button>

              <p className="mt-2 text-[11px] text-gray-400">
                JPG, PNG or GIF. Max size 2MB.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Phone */}
      <div className="mt-5 max-w-[420px]">
        <FormField label="Phone number">
          <input
            value={settings.phoneNumber}
            onChange={(e) => updateField("phoneNumber", e.target.value)}
            className="
              h-10
              w-full
              rounded-lg
              border
              border-gray-200
              bg-white
              px-3
              text-sm
              text-gray-800
              outline-none
              focus:border-green-500
              focus:ring-1
              focus:ring-green-500
            "
          />
        </FormField>
      </div>

      {/* Address */}
      <div className="mt-5">
        <FormField label="Address">
          <input
            value={settings.address}
            onChange={(e) => updateField("address", e.target.value)}
            className="
              h-10
              w-full
              rounded-lg
              border
              border-gray-200
              bg-white
              px-3
              text-sm
              text-gray-800
              outline-none
              focus:border-green-500
              focus:ring-1
              focus:ring-green-500
            "
          />
        </FormField>
      </div>

      {/* Footer */}
      <div className="mt-8 flex justify-end">
        <button
          disabled={!isDirty}
          onClick={onSave}
          className={`
            h-10
            rounded-lg
            px-5
            text-sm
            font-semibold
            transition
            ${
              isDirty
                ? "bg-green-700 text-white hover:bg-green-800"
                : "bg-green-50 text-green-200 cursor-not-allowed"
            }
          `}
        >
          Save changes
        </button>
      </div>
    </section>
  );
};

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
}

const FormField = ({ label, children }: FormFieldProps) => {
  return (
    <div>
      <label className="text-xs font-medium text-gray-700">{label}</label>

      <div className="mt-2">{children}</div>
    </div>
  );
};

interface PlaceholderSettingsProps {
  title: string;
  description: string;
}

const PlaceholderSettings = ({
  title,
  description,
}: PlaceholderSettingsProps) => {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-5">
      <h2 className="text-base font-bold text-gray-950">{title}</h2>

      <p className="mt-1 text-sm text-gray-500">{description}</p>
    </section>
  );
};

export default RestaurantSettingsPage;
