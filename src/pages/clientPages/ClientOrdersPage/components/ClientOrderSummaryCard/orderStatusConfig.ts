export const statusConfig = {
  pending: {
    label: "Pending",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    message: "Waiting for confirmation",
  },
  cooking: {
    label: "Preparing",
    badge: "bg-orange-50 text-orange-600 border-orange-200",
    message: "Preparing your order",
  },
  ready: {
    label: "Ready",
    badge: "bg-green-50 text-green-700 border-green-200",
    message: "Ready for pickup",
  },
  delivering: {
    label: "On the way",
    badge: "bg-blue-50 text-blue-600 border-blue-200",
    message: "Your order is on the way",
  },
  delivered: {
    label: "Delivered",
    badge: "bg-gray-100 text-gray-600 border-gray-200",
    message: "Completed on",
  },
};
