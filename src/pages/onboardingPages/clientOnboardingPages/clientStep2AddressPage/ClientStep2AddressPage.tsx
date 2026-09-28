import { CREATE_CLIENT_PAGE_STEPS } from "../constants/createClientPageSteps";
import { useNavigate, useOutletContext } from "react-router-dom";
import ClientStep2AddressInputs from "./components/ClientStep2AddressInputs";
import { useFormContext } from "react-hook-form";
import type { ClientOnBoardingForm } from "../constants/clientOnBoardingForm.type";
import { ClientStep2RightPanel } from "./components/ClientStep2RightPanel";
import type { ClientOnBoardContext } from "../Shared/ClientOnBoardFlow";
import OnBoardSteps from "../../shared/components/OnBoardSteps";
import OnBoardHeadline from "../../shared/components/OnBoardHeadline";
import OnBoardDescription from "../../shared/components/OnBoardDescription";
import OnBoardStepNavigation from "../../shared/components/OnBoardStepNavigation";

const ClientStep2Address = () => {
  const navigate = useNavigate();
  const { handleExit } = useOutletContext<ClientOnBoardContext>();
  const { handleSubmit } = useFormContext<ClientOnBoardingForm>();

  const handleBack = () => navigate("/on-board/client/step1");
  const handleContinue = handleSubmit(() => navigate("/on-board/client/step3"));

  return (
    <div className="mx-auto max-w-[1100px]">
      <OnBoardSteps steps={CREATE_CLIENT_PAGE_STEPS} active={1} />
      <div className="mx-auto max-w-[900px] flex flex-col gap-y-8 my-8">
        <OnBoardHeadline
          title="Add your delivery address"
          subtitle="We’ll use this to find restaurants that deliver to you."
        />
        <OnBoardDescription description={ClientStep2RightPanel} />
        <ClientStep2AddressInputs />
      </div>
      <OnBoardStepNavigation
        onBack={handleBack}
        onExit={handleExit}
        onContinue={handleContinue}
        continueLabel="Continue"
      />
    </div>
  );
};

export default ClientStep2Address;
