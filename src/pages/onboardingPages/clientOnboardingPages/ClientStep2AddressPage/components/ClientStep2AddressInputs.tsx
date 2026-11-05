import OnBoardInput from "../../../shared/components/OnBoardInput";
import AddressAliasSection from "./AddressAliasSection/AddressAliasSection";

const ClientStep2AddressInputs = () => {
  return (
    <section className="rounded-2xl bg-white ring-1 ring-black/10 shadow-sm p-6 lg:p-8">
      <form className="grid grid-cols-1 gap-4">
        <OnBoardInput
          title="Street address"
          field="step2.streetAddress"
          placeholder="123 Main St"
        />
        <OnBoardInput
          title="Apt / Unit"
          field="step2.apt"
          placeholder="Apt 5B"
        />
        <OnBoardInput
          title="City"
          field="step2.city"
          placeholder="San Francisco"
        />
        <OnBoardInput title="State" field="step2.state" placeholder="CA" />
        <OnBoardInput title="ZIP" field="step2.zip" placeholder="94103" />
        <AddressAliasSection />
      </form>
    </section>
  );
};

export default ClientStep2AddressInputs;
