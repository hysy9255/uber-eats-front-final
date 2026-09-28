import { useOutletContext } from "react-router-dom";
import type { OwnerOnBoardContext } from "../Shared/OwnerOnBoardFlow";
import { useOwnerStep1Account } from "./useOwnerStep1Account";
import OnBoardSteps from "../../shared/components/OnBoardSteps";
import OnBoardHeadline from "../../shared/components/OnBoardHeadline";
import { CREATE_OWNER_PAGE_STEPS } from "../constants/createOwnerPageSteps";
import { OwnerStep1RightPanel } from "./components/OwnerStep1RightPanel";
import OnBoardDescription from "../../shared/components/OnBoardDescription";
import OwnerStep1AcountInputs from "./components/OwnerStep1AcountInputs";
import OnBoardStepNavigation from "../../shared/components/OnBoardStepNavigation";

export default function OwnerStep1Account() {
  const { handleExit } = useOutletContext<OwnerOnBoardContext>();

  const {
    handleContinue,
    handleRemoveProfileImage,
    handleProfileImageChange,
    handleCheckEmailAvailability,
    showEmailCheckMessage,
    profileImgPreview,
    pwd,
    emailCheck,
  } = useOwnerStep1Account();

  return (
    <div className="mx-auto max-w-[1100px]">
      <OnBoardSteps steps={CREATE_OWNER_PAGE_STEPS} active={0} />
      <div className="mx-auto max-w-[900px] flex flex-col gap-y-8 my-8">
        <OnBoardHeadline
          title="Create your owner account"
          subtitle="Use your email or phone to sign up."
        />
        <OnBoardDescription description={OwnerStep1RightPanel} />
        <OwnerStep1AcountInputs
          onRemoveProfileImage={handleRemoveProfileImage}
          onProfileImageChange={handleProfileImageChange}
          onCheckEmailAvailability={handleCheckEmailAvailability}
          showEmailCheckMessage={showEmailCheckMessage}
          profileImgPreview={profileImgPreview}
          pwd={pwd}
          emailCheck={emailCheck}
        />
      </div>
      <OnBoardStepNavigation
        onBack={handleExit}
        onExit={handleExit}
        onContinue={handleContinue}
        continueLabel="Continue"
      />
    </div>
  );
}
