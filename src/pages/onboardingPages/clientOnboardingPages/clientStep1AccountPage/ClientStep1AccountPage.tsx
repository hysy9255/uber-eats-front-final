import { CREATE_CLIENT_PAGE_STEPS } from "../constants/createClientPageSteps";
import { useOutletContext } from "react-router-dom";
import { useClientStep1Account } from "./useClientStep1Account";
import { ClientStep1RightPanel } from "./components/ClientStep1RightPanel";
import ClientStep1AccountInputs from "./components/ClientStep1AccountInputs";
import type { ClientOnBoardContext } from "../Shared/ClientOnBoardFlow";
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
    <div className="mx-auto max-w-[1100px]">
      <OnBoardSteps steps={CREATE_CLIENT_PAGE_STEPS} active={0} />
      <div className="mx-auto max-w-[900px] flex flex-col gap-y-8 my-8">
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
      <OnBoardStepNavigation
        onBack={handleExit}
        onExit={handleExit}
        onContinue={handleContinue}
        continueLabel="Continue"
      />
    </div>
  );
};

export default ClientStep1Account;
