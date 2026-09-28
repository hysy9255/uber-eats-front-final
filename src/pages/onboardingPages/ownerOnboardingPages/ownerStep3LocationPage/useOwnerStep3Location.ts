import { useNavigate } from "react-router-dom";
import type { OwnerOnBoardingForm } from "../../constants/OwnerOnBoardingForm.type";
import { useFormContext } from "react-hook-form";

export const useOwnerStep3LocationAndTime = () => {
  const navigate = useNavigate();
  const { handleSubmit } = useFormContext<OwnerOnBoardingForm>();

  const handleBack = () => navigate("/on-board/owner/step2");
  const handleContinue = handleSubmit(
    () => navigate("/on-board/owner/step4"),
    (e) => console.error(e)
  );

  return {
    handleBack,
    handleContinue,
  };
};
