import { getToken } from "@/shared/utils/getToken";
import { useState } from "react";
import type { ClientOrderSummaryDTO } from "../../api/getClientOrderSummaries/clientOrderSummary.dto";
import type { ClientOrderDetailDTO } from "../../api/getClientOrderDetail/clientOrderDetail.dto";
import { getClientOrderDetail } from "../../api/getClientOrderDetail/getClientOrderDetail";
import OrderSummaryCardHeader from "./OrderSummaryCardHeader";
import OrderDetailArea from "./OrderDetailArea/OrderDetailArea";
import OrderSummaryCardFooter from "./OrderSummaryCardFooter/OrderSummaryCardFooter";

interface ClientOrderSummaryCardProps {
  order: ClientOrderSummaryDTO;
}

const ClientOrderSummaryCard: React.FC<ClientOrderSummaryCardProps> = ({
  order,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [orderDetail, setOrderDetail] = useState<ClientOrderDetailDTO>();
  const token = getToken();

  const handleClickExpand = async () => {
    if (!orderDetail) {
      try {
        if (!token) throw new Error("No Token");
        const detailData = await getClientOrderDetail(token, order.orderId);
        setOrderDetail(detailData);
      } catch (e) {
        console.error("Error loading order detail", e);
      }
    }
    setExpanded((prev) => !prev);
  };

  return (
    <div
      style={
        {
          "--max-width": "528px",
          "--x-padding": "20px",
          "--y-padding": "12px",
        } as React.CSSProperties
      }
      className="
        w-full
        overflow-hidden
        rounded-2xl
        border border-gray-300
        bg-slate-50
        shadow-md
      "
    >
      <article
        className="
          border-b border-gray-300
          px-[var(--x-padding)]
          py-[var(--y-padding)]
        "
      >
        <OrderSummaryCardHeader
          expanded={expanded}
          onClickChevron={handleClickExpand}
          order={order}
        />

        {expanded && orderDetail && (
          <OrderDetailArea orderDetail={orderDetail} />
        )}
      </article>

      <OrderSummaryCardFooter order={order} />
    </div>
  );
};

export default ClientOrderSummaryCard;
