import { useNavigate } from "react-router-dom";
import type { ClientOnBoardingForm } from "../../types/clientOnBoardingForm.type";
import AgreementSection from "./AgreementSection";
import EditButton from "./EditButton";
import SuccessDialog from "../../../shared/components/SuccessPopup";

interface ReviewContentProps {
  data: ClientOnBoardingForm;
  showSuccess: boolean;
}

const ReviewContent: React.FC<ReviewContentProps> = ({ data, showSuccess }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="space-y-6">
        <section className="rounded-xl ring-1 ring-slate-200 p-5 bg-white">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-semibold">Account</h3>
            <EditButton onClick={() => navigate("/on-board/client/step1")} />
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
            <h3 className="text-lg font-semibold">Delivery address</h3>
            <EditButton onClick={() => navigate("/on-board/client/step2")} />
          </div>
          <p className="mt-3 text-sm text-slate-900">
            {data.step2.streetAddress}, {data.step2.apt}, {data.step2.city},{" "}
            {data.step2.state} {data.step2.zip}
          </p>
        </section>

        <AgreementSection />
      </div>
      <SuccessDialog
        open={showSuccess}
        message="Your account was created successfully. Please log in to continue."
        onConfirm={() => navigate("/login", { replace: true })}
      />
    </div>
  );
};

export default ReviewContent;
