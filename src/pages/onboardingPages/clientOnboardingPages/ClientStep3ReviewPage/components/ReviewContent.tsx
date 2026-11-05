import { useNavigate } from "react-router-dom";
import type { ClientOnBoardingForm } from "../../types/clientOnBoardingForm.type";
import AgreementSection from "./AgreementSection";
import EditButton from "./EditButton";
import SuccessDialog from "../../../shared/components/SuccessPopup";

interface ReviewContentProps {
  data: ClientOnBoardingForm;
  showSuccess: boolean;
}

const ReviewContent = ({ data, showSuccess }: ReviewContentProps) => {
  const navigate = useNavigate();

  const address = [
    data.step2.streetAddress,
    data.step2.apt,
    data.step2.city,
    data.step2.state,
    data.step2.zip,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <div className="min-w-0">
      <div className="flex flex-col gap-5 sm:gap-6">
        {/* Account Information */}
        <section className="min-w-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
          <div className="flex items-center justify-between gap-4 border-b border-gray-100 pb-4">
            <h3 className="text-base font-bold text-gray-900 sm:text-lg">
              Account information
            </h3>

            <EditButton onClick={() => navigate("/on-board/client/step1")} />
          </div>

          <dl className="mt-5 grid min-w-0 grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
            <div className="min-w-0">
              <dt className="mb-1 text-xs font-medium text-gray-500">
                Full name
              </dt>
              <dd className="wrap-break-word text-sm font-semibold text-gray-900">
                {data.step1.firstName} {data.step1.lastName}
              </dd>
            </div>

            <div className="min-w-0">
              <dt className="mb-1 text-xs font-medium text-gray-500">
                Phone number
              </dt>
              <dd className="wrap-break-word text-sm font-semibold text-gray-900">
                {data.step1.phoneNumber}
              </dd>
            </div>

            <div className="min-w-0 sm:col-span-2">
              <dt className="mb-1 text-xs font-medium text-gray-500">
                Email address
              </dt>
              <dd className="wrap-break-word text-sm font-semibold text-gray-900">
                {data.step1.email}
              </dd>
            </div>
          </dl>
        </section>

        {/* Delivery Address */}
        <section className="min-w-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
          <div className="flex items-center justify-between gap-4 border-b border-gray-100 pb-4">
            <h3 className="text-base font-bold text-gray-900 sm:text-lg">
              Delivery address
            </h3>

            <EditButton onClick={() => navigate("/on-board/client/step2")} />
          </div>

          <div className="mt-5">
            <p className="mb-1 text-xs font-medium text-gray-500">Address</p>

            <p className="wrap-break-word text-sm font-semibold leading-6 text-gray-900">
              {address}
            </p>
          </div>
        </section>

        {/* Agreement */}
        <AgreementSection />
      </div>

      {/* Success Modal */}
      <SuccessDialog
        open={showSuccess}
        message="Your account was created successfully. Please log in to continue."
        onConfirm={() => navigate("/login", { replace: true })}
      />
    </div>
  );
};

export default ReviewContent;
