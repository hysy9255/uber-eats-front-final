import { CREATE_CLIENT_PAGE_STEPS } from "../constants/createClientPageSteps";
import { useOutletContext } from "react-router-dom";
import ReviewContent from "./components/ReviewContent";
import { ClientStep3RightPanel } from "./components/ClientStep3RightPanel";
import { useClientStep3Review } from "./useClientStep3Review";
import type { ClientOnBoardContext } from "../Shared/ClientOnBoardFlow";
import OnBoardSteps from "../../shared/components/OnBoardSteps";
import OnBoardHeadline from "../../shared/components/OnBoardHeadline";
import OnBoardDescription from "../../shared/components/OnBoardDescription";
import OnBoardStepNavigation from "../../shared/components/OnBoardStepNavigation";

const ClientStep3Review = () => {
  const { handleExit } = useOutletContext<ClientOnBoardContext>();
  const { handleBack, handleContinue, data, showSuccess } =
    useClientStep3Review();

  return (
    <div className="mx-auto max-w-[1100px]">
      <OnBoardSteps steps={CREATE_CLIENT_PAGE_STEPS} active={2} />
      <div className="mx-auto max-w-[900px] flex flex-col gap-y-8 my-8">
        <OnBoardHeadline
          title="Review and confirm"
          subtitle="Make sure everything looks good before you finish."
        />
        <OnBoardDescription description={ClientStep3RightPanel} />
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

export default ClientStep3Review;
