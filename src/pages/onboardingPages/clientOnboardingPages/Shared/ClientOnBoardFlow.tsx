import { Outlet, useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import type { ClientOnBoardingForm } from "../constants/clientOnBoardingForm.type";
import LeaveThisPagePopup from "../../shared/components/LeaveThisPagePopup";
import { AddressAlias } from "@/shared/types/addressAlias.type";

export type ClientOnBoardContext = {
  handleExit: () => void;
};

const ClientOnBoardFlow = () => {
  const navigate = useNavigate();

  const methods = useForm<ClientOnBoardingForm>({
    mode: "onSubmit",
    defaultValues: {
      step1: {
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        profileImgUrl: "",
      },
      step2: {
        streetAddress: "",
        apt: "",
        city: "",
        state: "",
        zip: "",
        alias: AddressAlias.home,
        customAlias: "",
      },
    },
  });
  const [showExitConfirm, setShowExitConfirm] = useState<boolean>(false);

  const handleExit = () => setShowExitConfirm(true);

  const handleConfirmExit = () => {
    setShowExitConfirm(false);
    navigate("/create-account-choice");
  };

  const handleClosePopup = () => setShowExitConfirm(false);

  useEffect(() => {
    const step1 = methods.getValues("step1");

    if (!step1?.email || !step1?.firstName) {
      navigate("/on-board/client/step1", {
        replace: true,
      });
    }
  }, [methods, navigate]);

  return (
    <FormProvider {...methods}>
      <Outlet context={{ handleExit }} />
      {showExitConfirm && (
        <LeaveThisPagePopup
          onClose={handleClosePopup}
          onConfirmExit={handleConfirmExit}
        />
      )}
    </FormProvider>
  );
};

export default ClientOnBoardFlow;
