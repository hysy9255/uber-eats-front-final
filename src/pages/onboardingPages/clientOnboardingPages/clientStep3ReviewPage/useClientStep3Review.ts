import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import type { ClientOnBoardingForm } from "../types/clientOnBoardingForm.type";
import { registerClient } from "../api/registerClient";

export const useClientStep3Review = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate("/on-board/client/step2");

  const [showSuccess, setShowSuccess] = useState(false);

  const { getValues, handleSubmit } = useFormContext<ClientOnBoardingForm>();

  const handleContinue = handleSubmit(async (data: ClientOnBoardingForm) => {
    try {
      await registerClient({
        account: {
          email: data.step1.email,
          password: data.step1.password,
          name: `${data.step1.firstName} ${data.step1.lastName}`,
          phoneNumber: data.step1.phoneNumber,
          profileImage: data.step1.profileImgUrl ?? null,
        },
        deliveryAddress: {
          streetAddress: data.step2.streetAddress,
          apt: data.step2.apt,
          city: data.step2.city,
          state: data.step2.state,
          zip: data.step2.zip,
          alias: data.step2.alias,
          customAlias:
            data.step2.alias !== "other" ? null : data.step2.customAlias,
        },
      });
      setShowSuccess(true);
    } catch (err) {
      console.error(err);
      alert(err instanceof Error ? err.message : "Unexpected error");
    }
  });

  const data = getValues();

  return {
    handleBack,
    handleContinue,
    data,
    showSuccess,
  };
};
