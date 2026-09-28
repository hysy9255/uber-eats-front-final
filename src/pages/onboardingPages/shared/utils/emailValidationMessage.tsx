import type { EmailCheck } from "../types/emailCheck.type";
import { EmailStatus } from "../types/emailStatus.enum";

export const emailValidationMessage = (
  emailCheck: EmailCheck,
  showEmailCheckMessage: boolean
) => {
  if (emailCheck.status === EmailStatus.AVAILABLE) {
    return (
      <div className="font-medium text-green-500 text-xs">Available to use</div>
    );
  }
  if (emailCheck.status === EmailStatus.UNAVAILABLE) {
    return (
      <div className="font-medium text-red-500 text-xs">Already in use</div>
    );
  }

  if (showEmailCheckMessage) {
    return (
      <div className="font-medium text-red-500 text-xs">
        Check for availability
      </div>
    );
  }
};
