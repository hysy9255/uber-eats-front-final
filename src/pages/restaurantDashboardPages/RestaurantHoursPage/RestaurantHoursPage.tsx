import OwnerHoursPageHeader from "./components/OwnerHoursPageHeader";
import OperatingHoursList from "./components/OperatingHoursList/OperatingHoursList";
import OperatingHoursEditor from "./components/OperatingHoursEditor/OperatingHoursEditor";
import { useRestaurantHoursPage } from "./hooks/useRestaurantHoursPage";
import DiscardChangesButton from "./components/DiscardChangesButton";
import SaveChangesButton from "./components/SaveChangesButton";

const RestaurantHoursPage = () => {
  const {
    hours,
    setHours,
    selectedDay,
    setSelectedDay,
    hasBreakTime,
    setHasBreakTime,
    is24Hours,
    setIs24Hours,
    selectedHours,
    updateSelectedDay,
    copyMondayHours,
    handleUpdateRestaurantHours,
    loadOperatingHours,
  } = useRestaurantHoursPage();

  return (
    <div className="min-h-screen bg-[#fafafa] px-6 py-5">
      {/* Header */}
      <OwnerHoursPageHeader copyMondayHours={copyMondayHours} />
      <section className="mt-6 grid grid-cols-[0.85fr_1.3fr] gap-4">
        {/* Left - week */}
        <OperatingHoursList
          hours={hours}
          setHours={setHours}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
        {/* Right - selected day */}
        <OperatingHoursEditor
          selectedDay={selectedDay}
          selectedHours={selectedHours}
          updateSelectedDay={updateSelectedDay}
          is24Hours={is24Hours}
          setIs24Hours={setIs24Hours}
          hasBreakTime={hasBreakTime}
          setHasBreakTime={setHasBreakTime}
        />
      </section>
      {/* Save */}
      <div className="mt-10 flex justify-end gap-x-4">
        <DiscardChangesButton onClick={() => loadOperatingHours()} />
        <SaveChangesButton onClick={() => handleUpdateRestaurantHours()} />
      </div>
    </div>
  );
};

export default RestaurantHoursPage;
