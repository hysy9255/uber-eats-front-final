import { useFormContext, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { ClientOnBoardingForm } from "../types/clientOnBoardingForm.type";
import { AddressAlias } from "../../../../shared/types/addressAlias.type";

export const useClientStep2Address = () => {
  const navigate = useNavigate();

  const { control, trigger } = useFormContext<ClientOnBoardingForm>();

  const step2 = useWatch({
    control,
    name: "step2",
  });

  const isStep2Filled =
    !!step2.streetAddress?.trim() &&
    !!step2.apt?.trim() &&
    !!step2.city?.trim() &&
    !!step2.state?.trim() &&
    !!step2.zip?.trim() &&
    !!step2.alias &&
    (step2.alias !== AddressAlias.other || !!step2.customAlias?.trim());

  const canContinue = isStep2Filled;

  const handleBack = () => navigate("/on-board/client/step1");

  const handleContinue = async () => {
    if (!canContinue) return;
    const isValid = await trigger("step2");
    if (!isValid) return;
    navigate("/on-board/client/step3");
  };

  return {
    handleBack,
    handleContinue,
    canContinue,
  };
};
