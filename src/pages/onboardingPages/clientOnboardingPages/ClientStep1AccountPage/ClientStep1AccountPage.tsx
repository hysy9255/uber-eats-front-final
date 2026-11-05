import { CREATE_CLIENT_PAGE_STEPS } from "../constants/createClientPageSteps";
import { useOutletContext } from "react-router-dom";
import { useClientStep1Account } from "./useClientStep1Account";
import { ClientStep1RightPanel } from "./components/ClientStep1RightPanel";
import ClientStep1AccountInputs from "./components/ClientStep1AccountInputs";
import type { ClientOnBoardContext } from "../shared/ClientOnBoardFlow";
import OnBoardSteps from "../../shared/components/OnBoardSteps";
import OnBoardHeadline from "../../shared/components/OnBoardHeadline";
import OnBoardDescription from "../../shared/components/OnBoardDescription";
import OnBoardStepNavigation from "../../shared/components/OnBoardStepNavigation";

const ClientStep1Account = () => {
  const { handleExit } = useOutletContext<ClientOnBoardContext>();

  const {
    handleContinue,
    handleRemoveProfileImage,
    handleProfileImageChange,
    handleCheckEmailAvailability,
    showEmailCheckMessage,
    profileImgPreview,
    pwd,
    emailCheck,
  } = useClientStep1Account();

  return (
    <main className="mx-auto w-full max-w-[1100px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      {/* Progress Steps */}
      <OnBoardSteps steps={CREATE_CLIENT_PAGE_STEPS} active={0} />

      {/* Main Content */}
      <div className="mx-auto mt-8 flex w-full max-w-[900px] flex-col gap-6 sm:mt-10 sm:gap-8">
        <OnBoardHeadline
          title="Create your client account"
          subtitle="Use your email or phone to sign up."
        />

        <OnBoardDescription description={ClientStep1RightPanel} />

        <ClientStep1AccountInputs
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
};

export default ClientStep1Account;
