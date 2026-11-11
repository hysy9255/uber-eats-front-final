import ProfileOrLogoUploadZone from "@/shared/components/UploadZones/ProfileOrLogoUploadZone";
import OnBoardInput from "../../../shared/components/OnBoardInput";
import { emailValidationMessage } from "../../../shared/utils/emailValidationMessage";
import { formatPhoneNumber } from "../../../../../shared/utils/formatPhoneNumber";
import { useProfileImageUpload } from "../hooks/useProfileImageUpload";
import { useEmailAvailability } from "../hooks/useEmailAvailability";
import { useFormContext, useWatch } from "react-hook-form";
import type { ClientOnBoardingForm } from "../../types/clientOnBoardingForm.type";

const ClientStep1AccountInputs = () => {
  const { control, watch } = useFormContext<ClientOnBoardingForm>();

  const pwd = useWatch({
    control,
    name: "step1.password",
  });

  const { handleRemoveProfileImage, handleProfileImageChange } =
    useProfileImageUpload();

  const {
    emailCheck,
    showEmailCheckMessage,
    handleCheckEmailAvailability,
    isCheckEmailActive,
  } = useEmailAvailability();

  const profileImg = watch("step1.profileImgUrl");
  const profilePreview = profileImg?.preview ?? null;

  return (
    <section className="min-w-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
      <form className="flex min-w-0 flex-col gap-5">
        {/* Profile Photo */}
        <div className="flex min-w-0 justify-center pb-2">
          <ProfileOrLogoUploadZone
            onRemove={handleRemoveProfileImage}
            onChange={handleProfileImageChange}
            title="Profile photo"
            imgUrl={profilePreview}
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
        />

        <OnBoardInput
          title="Email"
          field="step1.email"
          placeholder="Enter email"
          type="email"
          customMessageFunction={() =>
            emailValidationMessage(emailCheck, showEmailCheckMessage)
          }
        >
          <button
            type="button"
            disabled={!isCheckEmailActive}
            onClick={handleCheckEmailAvailability}
            className={`min-h-11 shrink-0 rounded-lg
              px-3 text-xs font-semibold 
              transition-colors
              sm:px-4
              ${
                !isCheckEmailActive
                  ? "cursor-not-allowed bg-gray-300 text-gray-500"
                  : "hover:cursor-pointer bg-green-700 hover:bg-green-800 active:bg-green-900 text-white"
              }
              `}
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
