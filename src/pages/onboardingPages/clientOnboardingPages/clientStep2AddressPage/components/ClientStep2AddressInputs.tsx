import OnBoardInput from "../../../shared/components/OnBoardInput";
import AddressAliasSection from "./AddressAliasSection/AddressAliasSection";

const ClientStep2AddressInputs = () => {
  return (
    <section className="rounded-2xl bg-white ring-1 ring-black/10 shadow-sm p-6 lg:p-8">
      <form className="grid grid-cols-1 gap-4">
        <OnBoardInput
          css="col-span-2"
          title="Street address"
          field="step2.streetAddress"
          placeholder="123 Main St"
        />
        <OnBoardInput
          css="col-span-2"
          title="Apt / Unit"
          field="step2.apt"
          placeholder="Apt 5B"
        />
        <OnBoardInput
          css="col-span-2"
          title="City"
          field="step2.city"
          placeholder="San Francisco"
        />
        <OnBoardInput
          css="col-span-2"
          title="State"
          field="step2.state"
          placeholder="CA"
        />
        <OnBoardInput
          css="col-span-2"
          title="ZIP"
          field="step2.zip"
          placeholder="94103"
        />
        <AddressAliasSection />
      </form>
    </section>
  );
};

export default ClientStep2AddressInputs;
