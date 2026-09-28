import { useFormContext, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { type EmailCheck } from "../../shared/types/emailCheck.type";
import type { OwnerOnBoardingForm } from "../constants/OwnerOnBoardingForm.type";
import { uploadImage } from "../../../../shared/utils/uploadImage";
import { checkEmailAvailability } from "../../shared/api/checkEmailAvailability";
import { EmailStatus } from "../../shared/types/emailStatus.enum";

export const useOwnerStep1Account = () => {
  const navigate = useNavigate();
  const { control, setValue, trigger, getValues, handleSubmit } =
    useFormContext<OwnerOnBoardingForm>();

  const [emailCheck, setEmailCheck] = useState<EmailCheck>({
    status: EmailStatus.IDLE,
    email: null,
  });
  const [showEmailCheckMessage, setShowEmailCheckMessage] = useState(false);
  const [profileImgPreview, setProfileImgPreview] = useState<string | null>(
    () => getValues("step1.profileImgUrl")
  );

  const [pwd, email] = useWatch({
    control,
    name: ["step1.password", "step1.email"],
  });

  const handleRemoveProfileImage = () => {
    setProfileImgPreview(null);
    setValue("step1.profileImgUrl", null, { shouldDirty: true });
  };

  const handleProfileImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      e.target.value = "";
      return;
    }

    const url = URL.createObjectURL(file);
    setProfileImgPreview(url);

    const persistentUrl = await uploadImage(file);

    setValue("step1.profileImgUrl", persistentUrl, {
      shouldDirty: true,
    });
  };

  const handleCheckEmailAvailability = async () => {
    setShowEmailCheckMessage(false);
    const valid = await trigger("step1.email");
    if (!valid) return;

    const res = await checkEmailAvailability({ email });

    if (res.available) {
      setEmailCheck({
        status: EmailStatus.AVAILABLE,
        email,
      });
    } else {
      setEmailCheck({
        status: EmailStatus.UNAVAILABLE,
        email,
      });
    }
  };

  const handleContinue = handleSubmit(
    (data: OwnerOnBoardingForm) => {
      const emailVerified =
        emailCheck.status === "available" &&
        emailCheck.email === data.step1.email;

      if (!emailVerified) {
        setShowEmailCheckMessage(true);
        return;
      }

      navigate("/on-board/owner/step2");
    },
    (e) => console.error(e)
  );

  useEffect(() => {
    setShowEmailCheckMessage(false);
    setEmailCheck({ status: EmailStatus.IDLE, email: null });
  }, [email]);

  return {
    handleContinue,
    handleRemoveProfileImage,
    handleProfileImageChange,
    handleCheckEmailAvailability,
    showEmailCheckMessage,
    profileImgPreview,
    pwd,
    emailCheck,
  };
};
