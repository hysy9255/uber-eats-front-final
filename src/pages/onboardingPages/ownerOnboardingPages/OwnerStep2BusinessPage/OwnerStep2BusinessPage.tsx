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
    <main className="mx-auto w-full max-w-[1100px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      {/* Progress Steps */}
      <OnBoardSteps steps={CREATE_OWNER_PAGE_STEPS} active={1} />

      {/* Main Content */}
      <div className="mx-auto mt-8 flex w-full max-w-[900px] flex-col gap-6 sm:mt-10 sm:gap-8">
        <OnBoardHeadline
          title="Set up your restaurant"
          subtitle="Tell us about your restaurant and add photos to introduce your business."
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

      {/* Navigation */}
      <div className="mx-auto mt-8 w-full max-w-[900px] border-t border-gray-100 pt-5 sm:mt-10 sm:pt-6">
        <OnBoardStepNavigation
          onBack={handleBack}
          onExit={handleExit}
          onContinue={handleContinue}
          continueLabel="Continue"
        />
      </div>
    </main>
  );
};

export default OwnerStep2Business;
