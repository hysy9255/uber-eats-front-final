import OwnerHoursPageHeader from "./components/OwnerHoursPageHeader";
import OperatingHoursList from "./components/OperatingHoursList";
import OperatingHoursEditor from "./components/OperatingHoursEditor/OperatingHoursEditor";
import DiscardChangesButton from "./components/DiscardChangesButton";
import SaveChangesButton from "./components/SaveChangesButton";
import Toast from "../../clientPages/shared/components/Toast";
import { useRestaurantHoursPage } from "./hooks/useRestaurantHoursPage";

const RestaurantHoursPage = () => {
  const {
    hours,
    selectedDay,
    selectedHours,
    isDirty,
    showSuccessToast,

    setSelectedDay,

    updateSelectedDay,
    toggleOperatingDay,
    applyMondayHoursToAllDays,

    saveHours,
    discardChanges,
    closeSuccessToast,
  } = useRestaurantHoursPage();

  return (
    <div className="h-dvh bg-[#fafafa] px-6 py-5">
      {/* Header */}
      <OwnerHoursPageHeader copyMondayHours={applyMondayHoursToAllDays} />
      <section className="mt-5 grid grid-cols-[0.85fr_1.3fr] gap-4">
        {/* Left - week */}
        <OperatingHoursList
          hours={hours}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          toggleOperatingDayStatus={toggleOperatingDay}
        />
        {/* Right - selected day */}
        <OperatingHoursEditor
          selectedDay={selectedDay}
          selectedHours={selectedHours}
          updateSelectedDay={updateSelectedDay}
        />
      </section>
      {/* Save */}
      <div className="mt-5 flex justify-end gap-x-4">
        <DiscardChangesButton onClick={discardChanges} disabled={!isDirty} />
        <SaveChangesButton disabled={!isDirty} onClick={saveHours} />
      </div>
      {showSuccessToast && (
        <Toast
          message="Operating hours have been updated"
          onClose={closeSuccessToast}
        />
      )}
    </div>
  );
};

export default RestaurantHoursPage;
