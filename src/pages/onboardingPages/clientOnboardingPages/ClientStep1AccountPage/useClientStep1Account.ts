import { useNavigate } from "react-router-dom";
import { useFormContext, useWatch } from "react-hook-form";
import type { ClientOnBoardingForm } from "../types/clientOnBoardingForm.type";

export const useClientStep1Account = () => {
  const navigate = useNavigate();

  const { control, trigger } = useFormContext<ClientOnBoardingForm>();

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
    navigate("/on-board/client/step2");
  };

  return {
    handleContinue,
    canContinue,
  };
};
