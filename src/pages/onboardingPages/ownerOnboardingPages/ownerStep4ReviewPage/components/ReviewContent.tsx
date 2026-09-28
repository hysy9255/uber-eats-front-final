import { useNavigate } from "react-router-dom";
import type { OwnerOnBoardingForm } from "../../constants/OwnerOnBoardingForm.type";
import EditButton from "./EditButton";
import AgreementsSection from "./AgreementsSection";
import { formatAddress } from "../utils/formatAddress";
import SuccessDialog from "../../../shared/components/SuccessPopup";

interface ReviewContentProps {
  data: OwnerOnBoardingForm;
  showSuccess: boolean;
}

const ReviewContent: React.FC<ReviewContentProps> = ({ data, showSuccess }) => {
  const navigate = useNavigate();
  return (
    <div className="mt-8 space-y-6">
      <section className="rounded-xl ring-1 ring-slate-200 p-5 bg-white">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">Account</h3>
          <EditButton onClick={() => navigate("/on-board/owner/step1")} />
        </div>
        <dl className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
          <div>
            <dt className="text-slate-500">Name</dt>
            <dd className="text-slate-900">
              {data.step1.firstName} {data.step1.lastName}
            </dd>
          </div>
          <div>
            <dt className="text-slate-500">Email</dt>
            <dd className="text-slate-900">{data.step1.email}</dd>
          </div>
          <div>
            <dt className="text-slate-500">Phone number</dt>
            <dd className="text-slate-900">{data.step1.phoneNumber}</dd>
          </div>
        </dl>
      </section>
      <section className="rounded-xl ring-1 ring-slate-200 p-5 bg-white">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">Business</h3>
          <EditButton onClick={() => navigate("/on-board/owner/step2")} />
        </div>
        <dl className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div>
            <dt className="text-slate-500">Legal business name</dt>
            <dd className="text-slate-900">{data.step2.lbn || "—"}</dd>
          </div>
          <div>
            <dt className="text-slate-500">DBA</dt>
            <dd className="text-slate-900">{data.step2.dba || "—"}</dd>
          </div>
          <div>
            <dt className="text-slate-500">Store phone</dt>
            <dd className="text-slate-900">{data.step2.storePhone || "—"}</dd>
          </div>
          <div>
            <dt className="text-slate-500">Business email</dt>
            <dd className="text-slate-900">
              {data.step2.businessEmail || "—"}
            </dd>
          </div>
        </dl>
      </section>

      <section className="rounded-xl ring-1 ring-slate-200 p-5 bg-white">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">Location</h3>
          <EditButton onClick={() => navigate("/on-board/owner/step3")} />
        </div>
        <p className="mt-3 text-sm text-slate-900">
          {formatAddress(data.step3)}
        </p>
      </section>

      <AgreementsSection />
      <SuccessDialog
        open={showSuccess}
        message="Your account was created successfully. Please log in to continue."
        onConfirm={() => navigate("/login", { replace: true })}
      />
    </div>
  );
};

export default ReviewContent;
