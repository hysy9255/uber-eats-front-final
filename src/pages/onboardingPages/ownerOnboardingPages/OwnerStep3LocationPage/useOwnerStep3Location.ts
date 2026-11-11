import { useNavigate } from "react-router-dom";
import { useFormContext, useWatch } from "react-hook-form";
import type { OwnerOnBoardingForm } from "../types/ownerOnBoardingForm.type";

export const useOwnerStep3LocationAndTime = () => {
  const navigate = useNavigate();
  const { control, trigger } = useFormContext<OwnerOnBoardingForm>();

  const step3 = useWatch({
    control,
    name: "step3",
  });

  const isStep3Filled =
    !!step3.streetAddress &&
    !!step3.city &&
    !!step3.state &&
    !!step3.zip &&
    !!step3.unit;

  const canContinue = isStep3Filled;

  const handleBack = () => navigate("/on-board/owner/step2");

  const handleContinue = async () => {
    if (!canContinue) return;
    const isValid = await trigger("step3");
    if (!isValid) return;
    navigate("/on-board/owner/step4");
  };

  return {
    handleBack,
    handleContinue,
    canContinue,
  };
};
