import { useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import type { ClientOnBoardingForm } from "../../types/clientOnBoardingForm.type";
import type { EmailCheck } from "../../../shared/types/emailCheck.type";
import { EmailStatus } from "../../../shared/types/emailStatus.enum";
import { checkEmailAvailability } from "../../../shared/api/checkEmailAvailability";

export const useEmailAvailability = () => {
  const { control, trigger, setValue } = useFormContext<ClientOnBoardingForm>();

  const email = useWatch({
    control,
    name: "step1.email",
  });

  const verifiedEmail = useWatch({
    control,
    name: "step1.verifiedEmail",
  });

  const [emailCheck, setEmailCheck] = useState<EmailCheck>({
    status: EmailStatus.IDLE,
    email: null,
  });

  const isEmailFormatValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email ?? "");

  const isCheckEmailActive =
    isEmailFormatValid && emailCheck.status === EmailStatus.IDLE;

  const [showEmailCheckMessage, setShowEmailCheckMessage] = useState(false);

  const handleCheckEmailAvailability = async () => {
    setShowEmailCheckMessage(false);

    const valid = await trigger("step1.email");
    if (!valid) return;

    const res = await checkEmailAvailability({ email });

    if (res.available) {
      setValue("step1.verifiedEmail", email);

      setEmailCheck({
        status: EmailStatus.AVAILABLE,
        email,
      });
    } else {
      setValue("step1.verifiedEmail", null);

      setEmailCheck({
        status: EmailStatus.UNAVAILABLE,
        email,
      });
    }
  };

  useEffect(() => {
    setShowEmailCheckMessage(false);

    if (email === verifiedEmail && email) {
      setEmailCheck({
        status: EmailStatus.AVAILABLE,
        email,
      });
    } else {
      setEmailCheck({
        status: EmailStatus.IDLE,
        email: null,
      });
    }
  }, [email, verifiedEmail]);

  return {
    emailCheck,
    showEmailCheckMessage,
    setShowEmailCheckMessage,
    handleCheckEmailAvailability,
    isCheckEmailActive,
  };
};
