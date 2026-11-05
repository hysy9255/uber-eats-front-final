import ProfileOrLogoUploadZone from "@/shared/components/UploadZones/ProfileOrLogoUploadZone";
import type { EmailCheck } from "../../../shared/types/emailCheck.type";
import OnBoardInput from "../../../shared/components/OnBoardInput";
import { emailValidationMessage } from "../../../shared/utils/emailValidationMessage";
import { formatPhoneNumber } from "../utils/formatPhoneNumber";

interface ClientStep1AccountInputsProps {
  onRemoveProfileImage: () => void;
  onProfileImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckEmailAvailability: () => void;
  showEmailCheckMessage: boolean;
  profileImgPreview: string | null;
  pwd: string;
  emailCheck: EmailCheck;
}

const ClientStep1AccountInputs = ({
  onRemoveProfileImage,
  onProfileImageChange,
  onCheckEmailAvailability,
  showEmailCheckMessage,
  profileImgPreview,
  pwd,
  emailCheck,
}: ClientStep1AccountInputsProps) => {
  return (
    <section className="min-w-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
      <form className="flex min-w-0 flex-col gap-5">
        {/* Profile Photo */}
        <div className="flex min-w-0 justify-center pb-2">
          <ProfileOrLogoUploadZone
            onRemove={onRemoveProfileImage}
            onProfileImageChange={onProfileImageChange}
            title="Profile photo"
            imgUrl={profileImgPreview}
          />
        </div>

        <OnBoardInput
          title="First name"
          field="step1.firstName"
          placeholder="Enter first name"
        />

        <OnBoardInput
          title="Last name"
          field="step1.lastName"
          placeholder="Enter last name"
        />

        <OnBoardInput
          title="Phone number"
          field="step1.phoneNumber"
          placeholder="Enter phone number"
          formatValue={formatPhoneNumber}
          pattern={{
            value: /^010-\d{4}-\d{4}$/,
            message: "Use 010-xxxx-xxxx format",
          }}
        />

        <OnBoardInput
          title="Email"
          field="step1.email"
          placeholder="Enter email"
          type="email"
          pattern={{
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Please enter a valid email",
          }}
          customMessageFunction={() =>
            emailValidationMessage(emailCheck, showEmailCheckMessage)
          }
        >
          <button
            type="button"
            onClick={onCheckEmailAvailability}
            className="
              min-h-11 shrink-0 rounded-lg
              bg-green-700 px-3 text-xs font-semibold text-white
              transition-colors
              hover:cursor-pointer hover:bg-green-800
              active:bg-green-900
              sm:px-4
            "
          >
            Check availability
          </button>
        </OnBoardInput>

        <OnBoardInput
          title="Password"
          field="step1.password"
          placeholder="Enter password"
          type="password"
        />

        <OnBoardInput
          title="Confirm Password"
          field="step1.confirmPassword"
          placeholder="Enter confirm password"
          type="password"
          validateValue={pwd}
          validationMessage="Passwords do not match"
        />
      </form>
    </section>
  );
};

export default ClientStep1AccountInputs;
