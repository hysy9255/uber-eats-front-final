import { useOutletContext } from "react-router-dom";
import type { OwnerOnBoardContext } from "../Shared/OwnerOnBoardFlow";
import { useOwnerStep3LocationAndTime } from "./useOwnerStep3Location";
import OnBoardSteps from "../../shared/components/OnBoardSteps";
import { CREATE_OWNER_PAGE_STEPS } from "../constants/createOwnerPageSteps";
import OnBoardHeadline from "../../shared/components/OnBoardHeadline";
import OnBoardDescription from "../../shared/components/OnBoardDescription";
import { OwnerStep3RightPanel } from "./components/OwnerStep3RightPanel";
import OwnerStep3LocationAndTimeInputs from "./components/OwnerStep3LocationInputs";
import OnBoardStepNavigation from "../../shared/components/OnBoardStepNavigation";

const OwnerStep3Location = () => {
  const { handleExit } = useOutletContext<OwnerOnBoardContext>();
  const { handleBack, handleContinue } = useOwnerStep3LocationAndTime();

  return (
    <div className="mx-auto max-w-[1100px]">
      <OnBoardSteps steps={CREATE_OWNER_PAGE_STEPS} active={2} />
      <div className="mx-auto max-w-[900px] flex flex-col gap-y-8 my-8">
        <OnBoardHeadline
          title="Set up your location & hours"
          subtitle="Customers will see this on your store page."
        />
        <OnBoardDescription description={OwnerStep3RightPanel} />
        <OwnerStep3LocationAndTimeInputs />
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

export default OwnerStep3Location;
