import { useOutletContext } from "react-router-dom";
import type { OwnerOnBoardContext } from "../Shared/OwnerOnBoardFlow";
import { useOwnerStep2Business } from "./useOwnerStep2Business";
import OnBoardSteps from "../../shared/components/OnBoardSteps";
import OnBoardHeadline from "../../shared/components/OnBoardHeadline";
import { CREATE_OWNER_PAGE_STEPS } from "../constants/createOwnerPageSteps";
import OnBoardDescription from "../../shared/components/OnBoardDescription";
import { OwnerStep2RightPanel } from "./components/OwnerStep2RightPanel";
import OwnerStep2BusinessInputs from "./components/OwnerStep2BusinessInputs";
import OnBoardStepNavigation from "../../shared/components/OnBoardStepNavigation";

const OwnerStep2Business = () => {
  const { handleExit } = useOutletContext<OwnerOnBoardContext>();

  const {
    images,
    handleBack,
    handleContinue,
    handleSelectMainImage,
    handleSelectSub1Image,
    handleSelectSub2Image,
    handleSelectBannerImage,
    handleRemoveLogoImage,
    handleLogoImageChange,
  } = useOwnerStep2Business();

  return (
    <div className="mx-auto max-w-[1100px]">
      <OnBoardSteps steps={CREATE_OWNER_PAGE_STEPS} active={1} />
      <div className="mx-auto max-w-[900px] flex flex-col gap-y-8 my-8">
        <OnBoardHeadline
          title="Create your owner account"
          subtitle="Use your email or phone to sign up."
        />
        <OnBoardDescription description={OwnerStep2RightPanel} />

        <OwnerStep2BusinessInputs
          logoImgUrl={images.logoImgUrl}
          mainImgUrl={images.mainImgUrl}
          sub1ImgUrl={images.sub1ImgUrl}
          sub2ImgUrl={images.sub2ImgUrl}
          bannerImgUrl={images.bannerImgUrl}
          onRemoveLogoImage={handleRemoveLogoImage}
          onLogoImageChange={handleLogoImageChange}
          onSelectMainImage={handleSelectMainImage}
          onSelectSub1Image={handleSelectSub1Image}
          onSelectSub2Image={handleSelectSub2Image}
          onSelectBannerImage={handleSelectBannerImage}
        />
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

export default OwnerStep2Business;
