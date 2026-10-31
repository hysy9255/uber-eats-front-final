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
    <div className="mx-auto max-w-[1100px]">
      <OnBoardSteps steps={CREATE_OWNER_PAGE_STEPS} active={3} />
      <div className="mx-auto max-w-[900px] flex flex-col gap-y-8 my-8">
        <OnBoardHeadline
          title="Review and confirm"
          subtitle="Make sure everything looks good before you finish."
        />
        <OnBoardDescription description={OwnerStep4RightPanel} />
        <ReviewContent data={data} showSuccess={showSuccess} />
      </div>
      <OnBoardStepNavigation
        onBack={handleBack}
        onExit={handleExit}
        onContinue={handleContinue}
        continueLabel="Create account"
      />
    </div>
  );
};

export default OwnerStep4Review;
