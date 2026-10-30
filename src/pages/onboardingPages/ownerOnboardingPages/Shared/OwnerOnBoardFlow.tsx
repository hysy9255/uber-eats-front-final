import { Outlet, useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import LeaveThisStepPopup from "../../shared/components/LeaveThisPagePopup";
import type { OwnerOnBoardingForm } from "../types/ownerOnBoardingForm.type";

export type OwnerOnBoardContext = {
  handleExit: () => void;
};

const OwnerOnBoardFlow = () => {
  const navigate = useNavigate();

  const methods = useForm<OwnerOnBoardingForm>({
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
        logoImgUrl: "",
        lbn: "",
        dba: "",
        cuisineType: "",
        storePhone: "",
        businessEmail: "",
        website: "",
        instagram: "",
        mainImgUrl: "",
        sub1ImgUrl: "",
        sub2ImgUrl: "",
        bannerImgUrl: "",
      },
      step3: {
        streetAddress: "",
        unit: "",
        city: "",
        state: "",
        zip: "",
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

  // useEffect(() => {
  //   const step1 = methods.getValues("step1");

  //   if (!step1?.email || !step1?.firstName) {
  //     navigate("/on-board/owner/step1", {
  //       replace: true,
  //     });
  //   }
  // }, [methods, navigate]);

  return (
    <FormProvider {...methods}>
      <Outlet context={{ handleExit }} />
      {showExitConfirm && (
        <LeaveThisStepPopup
          onClose={handleClosePopup}
          onConfirmExit={handleConfirmExit}
        />
      )}
    </FormProvider>
  );
};

export default OwnerOnBoardFlow;
