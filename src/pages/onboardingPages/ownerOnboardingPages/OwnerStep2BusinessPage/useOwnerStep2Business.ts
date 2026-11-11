import { useNavigate } from "react-router-dom";
import { useFormContext, useWatch } from "react-hook-form";
import type { OwnerOnBoardingForm } from "../types/ownerOnBoardingForm.type";

export const useOwnerStep2Business = () => {
  const navigate = useNavigate();

  const { control, trigger } = useFormContext<OwnerOnBoardingForm>();

  const step2 = useWatch({
    control,
    name: "step2",
  });

  const isStep2Filled =
    !!step2.dba &&
    !!step2.lbn &&
    !!step2.cuisineType &&
    !!step2.storePhone &&
    !!step2.mainImgUrl?.file &&
    !!step2.sub1ImgUrl?.file &&
    !!step2.sub2ImgUrl?.file &&
    !!step2.bannerImgUrl?.file;

  const canContinue = isStep2Filled;

  const handleBack = () => navigate("/on-board/owner/step1");

  const handleContinue = async () => {
    if (!canContinue) return;
    const isValid = await trigger("step2");
    if (!isValid) return;
    navigate("/on-board/owner/step3");
  };

  return {
    handleBack,
    handleContinue,
    canContinue,
  };
};
