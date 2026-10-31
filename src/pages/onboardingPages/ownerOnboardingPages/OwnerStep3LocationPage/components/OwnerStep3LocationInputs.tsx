import OnBoardInput from "../../../shared/components/OnBoardInput";

const OwnerStep3LocationAndTimeInputs = () => {
  return (
    <form className="grid grid-cols-2 gap-4 rounded-2xl bg-white ring-1 ring-black/10 shadow-sm p-6 lg:p-8">
      <div className="col-span-2 grid grid-cols-3 gap-4">
        <OnBoardInput
          css="col-span-1"
          title="Street address"
          field="step3.streetAddress"
          placeholder="123 Main St"
        />
        <OnBoardInput
          css="col-span-1"
          title="City"
          field="step3.city"
          placeholder="San Francisco"
        />
        <OnBoardInput
          css="col-span-1"
          title="Suite / Unit"
          field="step3.unit"
          placeholder="Suite 2"
        />
        <OnBoardInput
          css="col-span-1"
          title="State"
          field="step3.state"
          placeholder="NY"
        />
        <OnBoardInput
          css="col-span-1"
          title="ZIP"
          field="step3.zip"
          placeholder="10002"
        />
      </div>
    </form>
  );
};

export default OwnerStep3LocationAndTimeInputs;
