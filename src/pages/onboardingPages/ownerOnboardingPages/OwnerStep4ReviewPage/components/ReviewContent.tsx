import { useNavigate } from "react-router-dom";
import type { OwnerOnBoardingForm } from "../../types/ownerOnBoardingForm.type";
import EditButton from "./EditButton";
import AgreementsSection from "./AgreementsSection";
import { formatAddress } from "../utils/formatAddress";
import SuccessDialog from "../../../shared/components/SuccessPopup";

interface ReviewContentProps {
  data: OwnerOnBoardingForm;
  showSuccess: boolean;
}

const ReviewContent = ({ data, showSuccess }: ReviewContentProps) => {
  const navigate = useNavigate();

  const cardClassName =
    "min-w-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8";

  const labelClassName = "mb-1 text-xs font-medium text-gray-500";

  const valueClassName = "wrap-break-word text-sm font-semibold text-gray-900";

  return (
    <div className="min-w-0">
      <div className="flex flex-col gap-5 sm:gap-6">
        {/* Account Information */}
        <section className={cardClassName}>
          <div className="flex items-center justify-between gap-4 border-b border-gray-100 pb-4">
            <h3 className="text-base font-bold text-gray-900 sm:text-lg">
              Account information
            </h3>

            <EditButton onClick={() => navigate("/on-board/owner/step1")} />
          </div>

          <dl className="mt-5 grid min-w-0 grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
            <div className="min-w-0">
              <dt className={labelClassName}>Full name</dt>
              <dd className={valueClassName}>
                {data.step1.firstName} {data.step1.lastName}
              </dd>
            </div>

            <div className="min-w-0">
              <dt className={labelClassName}>Phone number</dt>
              <dd className={valueClassName}>{data.step1.phoneNumber}</dd>
            </div>

            <div className="min-w-0 sm:col-span-2">
              <dt className={labelClassName}>Email address</dt>
              <dd className={valueClassName}>{data.step1.email}</dd>
            </div>
          </dl>
        </section>

        {/* Business Information */}
        <section className={cardClassName}>
          <div className="flex items-center justify-between gap-4 border-b border-gray-100 pb-4">
            <h3 className="text-base font-bold text-gray-900 sm:text-lg">
              Business information
            </h3>

            <EditButton onClick={() => navigate("/on-board/owner/step2")} />
          </div>

          <dl className="mt-5 grid min-w-0 grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
            <div className="min-w-0">
              <dt className={labelClassName}>Legal business name</dt>
              <dd className={valueClassName}>{data.step2.lbn || "—"}</dd>
            </div>

            <div className="min-w-0">
              <dt className={labelClassName}>Doing business as (DBA)</dt>
              <dd className={valueClassName}>{data.step2.dba || "—"}</dd>
            </div>

            <div className="min-w-0">
              <dt className={labelClassName}>Store phone</dt>
              <dd className={valueClassName}>{data.step2.storePhone || "—"}</dd>
            </div>

            <div className="min-w-0">
              <dt className={labelClassName}>Business email</dt>
              <dd className={valueClassName}>
                {data.step2.businessEmail || "—"}
              </dd>
            </div>

            <div className="min-w-0">
              <dt className={labelClassName}>Cuisine type</dt>
              <dd className={valueClassName}>
                {data.step2.cuisineType || "—"}
              </dd>
            </div>

            <div className="min-w-0">
              <dt className={labelClassName}>Website</dt>
              <dd className={valueClassName}>{data.step2.website || "—"}</dd>
            </div>

            <div className="min-w-0 sm:col-span-2">
              <dt className={labelClassName}>Instagram</dt>
              <dd className={valueClassName}>{data.step2.instagram || "—"}</dd>
            </div>
          </dl>
        </section>

        {/* Location */}
        <section className={cardClassName}>
          <div className="flex items-center justify-between gap-4 border-b border-gray-100 pb-4">
            <h3 className="text-base font-bold text-gray-900 sm:text-lg">
              Restaurant location
            </h3>

            <EditButton onClick={() => navigate("/on-board/owner/step3")} />
          </div>

          <div className="mt-5">
            <p className={labelClassName}>Restaurant address</p>

            <p className="wrap-break-word text-sm font-semibold leading-6 text-gray-900">
              {formatAddress(data.step3)}
            </p>
          </div>
        </section>

        {/* Agreements */}
        <AgreementsSection />
      </div>

      {/* Success Dialog */}
      <SuccessDialog
        open={showSuccess}
        message="Your account was created successfully. Please log in to continue."
        onConfirm={() => navigate("/login", { replace: true })}
      />
    </div>
  );
};

export default ReviewContent;
