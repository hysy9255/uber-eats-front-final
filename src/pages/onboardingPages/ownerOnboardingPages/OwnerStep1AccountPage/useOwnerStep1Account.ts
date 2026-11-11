import { useFormContext, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { OwnerOnBoardingForm } from "../types/ownerOnBoardingForm.type";

export const useOwnerStep1Account = () => {
  const navigate = useNavigate();
  const { control, trigger } = useFormContext<OwnerOnBoardingForm>();

  const step1 = useWatch({
    control,
    name: "step1",
  });

  const isEmailVerified = !!step1.email && step1.email === step1.verifiedEmail;

  const isStep1Filled =
    !!step1.firstName &&
    !!step1.lastName &&
    !!step1.phoneNumber &&
    !!step1.email &&
    !!step1.password &&
    !!step1.confirmPassword;

  const canContinue = isStep1Filled && isEmailVerified;

  const handleContinue = async () => {
    if (!canContinue) return;
    const isValid = await trigger("step1");
    if (!isValid) return;
    navigate("/on-board/owner/step2");
  };

  return {
    handleContinue,
    canContinue,
  };
};
