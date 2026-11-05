import ProfileOrLogoUploadZone from "../../../../../shared/components/UploadZones/ProfileOrLogoUploadZone";
import type { EmailCheck } from "../../../shared/types/emailCheck.type";
import OnBoardInput from "../../../shared/components/OnBoardInput";
import { emailValidationMessage } from "../../../shared/utils/emailValidationMessage";
import { formatPhoneNumber } from "../../../../../shared/utils/formatPhoneNumber";

interface OwnerStep1AccountInputsProps {
  onRemoveProfileImage: () => void;
  onProfileImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckEmailAvailability: () => void;
  showEmailCheckMessage: boolean;
  profileImgPreview: string | null;
  pwd: string;
  emailCheck: EmailCheck;
}

const OwnerStep1AcountInputs = ({
  onRemoveProfileImage,
  onProfileImageChange,
  onCheckEmailAvailability,
  showEmailCheckMessage,
  profileImgPreview,
  pwd,
  emailCheck,
}: OwnerStep1AccountInputsProps) => {
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

        {/* First Name */}
        <OnBoardInput
          title="First name"
          field="step1.firstName"
          placeholder="Enter first name"
        />

        {/* Last Name */}
        <OnBoardInput
          title="Last name"
          field="step1.lastName"
          placeholder="Enter last name"
        />

        {/* Phone Number */}
        <OnBoardInput
          title="Phone number"
          field="step1.phoneNumber"
          placeholder="010-1234-5678"
          type="tel"
          formatValue={formatPhoneNumber}
          pattern={{
            value: /^010-\d{4}-\d{4}$/,
            message: "Use 010-xxxx-xxxx format",
          }}
        />

        {/* Email */}
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
              bg-green-700 px-3
              text-xs font-semibold text-white
              transition-colors cursor-pointer
              hover:bg-green-800
              active:bg-green-900
              sm:px-4
            "
          >
            Check availability
          </button>
        </OnBoardInput>

        {/* Password */}
        <OnBoardInput
          title="Password"
          field="step1.password"
          placeholder="Enter password"
          type="password"
        />

        {/* Confirm Password */}
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

export default OwnerStep1AcountInputs;
