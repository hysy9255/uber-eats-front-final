import { useOutletContext } from "react-router-dom";
import type { OwnerOnBoardContext } from "../Shared/OwnerOnBoardFlow";
import { useOwnerStep4Review } from "./useOwnerStep4Review";
import OnBoardSteps from "../../shared/components/OnBoardSteps";
import { CREATE_OWNER_PAGE_STEPS } from "../constants/createOwnerPageSteps";
import OnBoardHeadline from "../../shared/components/OnBoardHeadline";
import OnBoardDescription from "../../shared/components/OnBoardDescription";
import { OwnerStep4RightPanel } from "./components/OwnerStep4RightPanel";
import ReviewContent from "./components/ReviewContent";
import OnBoardStepNavigation from "../../shared/components/OnBoardStepNavigation";

const OwnerStep4Review = () => {
  const { handleExit } = useOutletContext<OwnerOnBoardContext>();

  const { handleBack, showSuccess, handleContinue, data } =
    useOwnerStep4Review();

  return (
    <main className="mx-auto w-full max-w-[1100px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      {/* Progress Steps */}
      <OnBoardSteps steps={CREATE_OWNER_PAGE_STEPS} active={3} />

      {/* Main Content */}
      <div className="mx-auto mt-8 flex w-full max-w-[900px] flex-col gap-6 sm:mt-10 sm:gap-8">
        <OnBoardHeadline
          title="Review and confirm"
          subtitle="Make sure everything looks good before you finish."
        />

        <OnBoardDescription description={OwnerStep4RightPanel} />

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

export default OwnerStep4Review;
