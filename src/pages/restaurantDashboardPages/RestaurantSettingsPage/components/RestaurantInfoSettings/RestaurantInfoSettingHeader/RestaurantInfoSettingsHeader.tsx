import PreviewButton from "./PreviewButton";

interface RestaurantInfoSettingsHeaderProps {
  onPreview: () => void;
}

const RestaurantInfoSettingsHeader: React.FC<
  RestaurantInfoSettingsHeaderProps
> = ({ onPreview }) => {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h2 className="text-base font-bold text-gray-950">
          Restaurant information
        </h2>

        <p className="mt-1 text-xs text-gray-500">
          Manage your restaurant details.
        </p>
      </div>

      <PreviewButton onClickPreview={onPreview} />
    </div>
  );
};

export default RestaurantInfoSettingsHeader;
