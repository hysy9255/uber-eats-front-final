import { CREATE_CLIENT_PAGE_STEPS } from "../constants/createClientPageSteps";
import { useOutletContext } from "react-router-dom";
import ReviewContent from "./components/ReviewContent";
import { ClientStep3RightPanel } from "./components/ClientStep3RightPanel";
import { useClientStep3Review } from "./useClientStep3Review";
import type { ClientOnBoardContext } from "../shared/ClientOnBoardFlow";
import OnBoardSteps from "../../shared/components/OnBoardSteps";
import OnBoardHeadline from "../../shared/components/OnBoardHeadline";
import OnBoardDescription from "../../shared/components/OnBoardDescription";
import OnBoardStepNavigation from "../../shared/components/OnBoardStepNavigation";

const ClientStep3Review = () => {
  const { handleExit } = useOutletContext<ClientOnBoardContext>();

  const { handleBack, handleContinue, data, showSuccess } =
    useClientStep3Review();

  return (
    <main className="mx-auto w-full max-w-[1100px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      {/* Progress Steps */}
      <OnBoardSteps steps={CREATE_CLIENT_PAGE_STEPS} active={2} />

      {/* Main Content */}
      <div className="mx-auto mt-8 flex w-full max-w-[900px] flex-col gap-6 sm:mt-10 sm:gap-8">
        <OnBoardHeadline
          title="Review and confirm"
          subtitle="Make sure everything looks good before you finish."
        />

        <OnBoardDescription description={ClientStep3RightPanel} />

        <ReviewContent data={data} showSuccess={showSuccess} />
      </div>

      {/* Navigation */}
      <div className="mx-auto mt-8 w-full max-w-[900px] border-t border-gray-100 pt-5 sm:mt-10 sm:pt-6">
        <OnBoardStepNavigation
          onBack={handleBack}
          onExit={handleExit}
          onContinue={handleContinue}
          continueLabel="Create account"
          isValid={true}
        />
      </div>
    </main>
  );
};

export default ClientStep3Review;
