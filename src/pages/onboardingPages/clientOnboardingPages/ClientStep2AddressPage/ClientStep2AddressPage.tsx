import { CREATE_CLIENT_PAGE_STEPS } from "../constants/createClientPageSteps";
import { useNavigate, useOutletContext } from "react-router-dom";
import ClientStep2AddressInputs from "./components/ClientStep2AddressInputs";
import { useFormContext } from "react-hook-form";
import type { ClientOnBoardingForm } from "../types/clientOnBoardingForm.type";
import { ClientStep2RightPanel } from "./components/ClientStep2RightPanel";
import type { ClientOnBoardContext } from "../shared/ClientOnBoardFlow";
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
    <main className="mx-auto w-full max-w-[1100px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      {/* Progress Steps */}
      <OnBoardSteps steps={CREATE_CLIENT_PAGE_STEPS} active={1} />

      {/* Main Content */}
      <div className="mx-auto mt-8 flex w-full max-w-[900px] flex-col gap-6 sm:mt-10 sm:gap-8">
        <OnBoardHeadline
          title="Add your delivery address"
          subtitle="We’ll use this to find restaurants that deliver to you."
        />

        <OnBoardDescription description={ClientStep2RightPanel} />

        <ClientStep2AddressInputs />
      </div>

      {/* Navigation */}
      <div className="mx-auto mt-8 w-full max-w-[900px] border-t border-gray-100 pt-5 sm:mt-10 sm:pt-6">
        <OnBoardStepNavigation
          onBack={handleBack}
          onExit={handleExit}
          onContinue={handleContinue}
          continueLabel="Continue"
        />
      </div>
    </main>
  );
};

export default ClientStep2Address;
