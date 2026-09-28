import ProfileOrLogoUploadZone from "@/shared/components/UploadZones/ProfileOrLogoUploadZone";
import type { EmailCheck } from "../../../shared/types/emailCheck.type";
import OnBoardInput from "../../../shared/components/OnBoardInput";
import { emailValidationMessage } from "../../../shared/utils/emailValidationMessage";
import DefaultProfileImg from "../../../../../layouts/ClientPageLayout/Header/DefaultProfileImg/DefaultProfileImg";

interface ClientStep1AccountInputsProps {
  onRemoveProfileImage: () => void;
  onProfileImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckEmailAvailability: () => void;
  showEmailCheckMessage: boolean;
  profileImgPreview: string | null;
  pwd: string;
  emailCheck: EmailCheck;
}

const ClientStep1AccountInputs: React.FC<ClientStep1AccountInputsProps> = ({
  onRemoveProfileImage,
  onProfileImageChange,
  onCheckEmailAvailability,
  showEmailCheckMessage,
  profileImgPreview,
  pwd,
  emailCheck,
}) => {
  return (
    <section className="rounded-2xl bg-white ring-1 ring-black/10 shadow-sm p-6 lg:p-8">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <ProfileOrLogoUploadZone
          onRemove={onRemoveProfileImage}
          onProfileImageChange={onProfileImageChange}
          title="Profile photo"
          defaultImgBackground={
            <DefaultProfileImg className="w-52 border rounded-full" />
          }
          imgUrl={profileImgPreview}
        />
        <OnBoardInput
          css="col-span-1"
          title="First name"
          field="step1.firstName"
          placeholder="Jane"
        />
        <OnBoardInput
          css="col-span-1"
          title="Last name"
          field="step1.lastName"
          placeholder="Doe"
        />
        <OnBoardInput
          css="col-span-2"
          title="Phone number"
          field="step1.phoneNumber"
          placeholder="xxx-xxxx-xxxx"
          pattern={{
            value: /^010-\d{4}-\d{4}$/,
            message: "Use xxx-xxxx-xxxx format",
          }}
        />
        <OnBoardInput
          css="col-span-2"
          title="Email"
          field="step1.email"
          placeholder="you@example.com"
          pattern={{
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Please enter valid email",
          }}
          children={
            <button
              onClick={onCheckEmailAvailability}
              type="button"
              className="bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-white font-semibold rounded-md text-nowrap px-3 hover:cursor-pointer text-xs"
            >
              Check for availability
            </button>
          }
          customMessageFunction={() =>
            emailValidationMessage(emailCheck, showEmailCheckMessage)
          }
        />
        <OnBoardInput
          css="block col-span-2 md:col-span-1"
          title="Password"
          field="step1.password"
          placeholder="••••••••"
          type="password"
        />
        <OnBoardInput
          css="block col-span-2 md:col-span-1"
          title="Confirm Password"
          field="step1.confirmPassword"
          placeholder="••••••••"
          type="password"
          validateValue={pwd}
          validationMessage="Passwords do not match"
        />
      </form>
    </section>
  );
};

export default ClientStep1AccountInputs;
