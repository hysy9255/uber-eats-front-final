import OnBoardInput from "../../../shared/components/OnBoardInput";

const OwnerStep3LocationAndTimeInputs = () => {
  return (
    <form className="flex min-w-0 flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
      <div className="border-b border-gray-100 pb-3">
        <h3 className="text-base font-bold text-gray-900">
          Restaurant address
        </h3>
        <p className="mt-1 text-xs leading-5 text-gray-500">
          Enter the address where your restaurant is located.
        </p>
      </div>

      <OnBoardInput
        title="Street address"
        field="step3.streetAddress"
        placeholder="Enter street address"
      />

      <OnBoardInput title="City" field="step3.city" placeholder="Enter city" />

      <OnBoardInput
        title="Suite / Unit"
        field="step3.unit"
        placeholder="Enter suite or unit number"
        required={false}
      />

      <OnBoardInput
        title="State"
        field="step3.state"
        placeholder="Enter state"
      />

      <OnBoardInput
        title="ZIP"
        field="step3.zip"
        placeholder="Enter ZIP code"
      />
    </form>
  );
};

export default OwnerStep3LocationAndTimeInputs;
