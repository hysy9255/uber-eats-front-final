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
    <main className="mx-auto w-full max-w-[1100px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      {/* Progress Steps */}
      <OnBoardSteps steps={CREATE_OWNER_PAGE_STEPS} active={0} />

      {/* Main Content */}
      <div className="mx-auto mt-8 flex w-full max-w-[900px] flex-col gap-6 sm:mt-10 sm:gap-8">
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

      {/* Navigation */}
      <div className="mx-auto mt-8 w-full max-w-[900px] border-t border-gray-100 pt-5 sm:mt-10 sm:pt-6">
        <OnBoardStepNavigation
          onBack={handleExit}
          onExit={handleExit}
          onContinue={handleContinue}
          continueLabel="Continue"
        />
      </div>
    </main>
  );
}
