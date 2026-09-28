import { InfoRow } from "./InfoRow";

interface IconProps {
  className?: string;
}

interface ManagementButtonProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
}

const ManagementButton: React.FC<ManagementButtonProps> = ({
  icon,
  title,
  description,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="
          min-h-[90px]
          border border-gray-200
          rounded-xl
          flex flex-col
          items-center
          justify-center
          gap-y-1
          hover:bg-gray-50
          hover:border-gray-300
          hover:cursor-pointer
          transition
        "
    >
      <div className="text-gray-700 mb-1">{icon}</div>

      <div className="text-xs font-semibold text-gray-700">{title}</div>

      <div className="text-[10px] text-gray-400">{description}</div>
    </button>
  );
};

const RequestIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={className}
  >
    <rect x="5" y="4" width="14" height="16" rx="2" />
    <path d="M8 9h8M8 13h8M8 17h5" />
  </svg>
);

const LocationIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={className}
  >
    <path d="M12 21s6-5 6-11a6 6 0 1 0-12 0c0 6 6 11 6 11Z" />
    <circle cx="12" cy="10" r="2" />
  </svg>
);

const CardIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={className}
  >
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <path d="M3 10h18" />
  </svg>
);

const PhoneIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={className}
  >
    <path d="M7 3l3 4-2 2c1.5 3 3.5 5 6 6l2-2 4 3c-1 4-4 5-7 4C7 18 3 13 3 7c0-2 1-3 4-4Z" />
  </svg>
);

const FlagIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={className}
  >
    <path d="M5 21V4" />
    <path d="M5 5h11l-2 4 2 4H5" />
  </svg>
);

interface OrderManagementAreaProps {
  request?: string | null;
  address: string;
  paymentMethod: string;
  onClickRequest?: () => void;
  onClickMap?: () => void;
  onClickCancel?: () => void;
  onClickRestaurant?: () => void;
  onClickReport?: () => void;
  onClickHelp?: () => void;
}

const OrderManagementArea: React.FC<OrderManagementAreaProps> = ({
  request,
  address,
  paymentMethod,
  onClickRequest,
  onClickMap,
  onClickCancel,
  onClickRestaurant,
  onClickReport,
  onClickHelp,
}) => {
  return (
    <div className="border border-gray-200 rounded-2xl bg-white overflow-hidden my-3">
      {/* Information */}
      <div>
        <InfoRow
          icon={<RequestIcon className="w-4 h-4" />}
          title="주문 요청사항"
          value={request ?? "요청사항 없음"}
          onClick={onClickRequest}
          showArrow
        />

        <InfoRow
          icon={<LocationIcon className="w-4 h-4" />}
          title="배달 주소"
          value={address}
          right={
            <button
              onClick={onClickMap}
              className="
                  border border-gray-300
                  rounded-md
                  px-3 py-1.5
                  flex items-center gap-x-1.5
                  text-xs text-gray-600
                  hover:bg-gray-50
                  hover:cursor-pointer
                "
            >
              <LocationIcon className="w-3.5 h-3.5" />
              지도에서 보기
            </button>
          }
        />

        <InfoRow
          icon={<CardIcon className="w-4 h-4" />}
          title="결제 수단"
          value={paymentMethod}
        />
      </div>

      {/* Order Management */}
      <div className="border-t border-gray-200 p-5">
        <div className="text-sm font-semibold text-gray-800 mb-3">
          주문 관리
        </div>

        <div className="grid grid-cols-4 gap-3">
          <ManagementButton
            icon={
              <div className="border-2 border-red-500 rounded-full w-5 h-5 flex items-center justify-center text-red-500">
                ×
              </div>
            }
            title="주문 취소"
            description="주문을 취소합니다"
            onClick={onClickCancel}
          />

          <ManagementButton
            icon={<PhoneIcon className="w-5 h-5" />}
            title="가게에 연락"
            description="가게에 문의합니다"
            onClick={onClickRestaurant}
          />

          <ManagementButton
            icon={<FlagIcon className="w-5 h-5" />}
            title="문제 신고"
            description="문제가 발생했어요"
            onClick={onClickReport}
          />

          <ManagementButton
            icon={
              <div className="border-2 border-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                ?
              </div>
            }
            title="도움 받기"
            description="고객센터로 이동"
            onClick={onClickHelp}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderManagementArea;
