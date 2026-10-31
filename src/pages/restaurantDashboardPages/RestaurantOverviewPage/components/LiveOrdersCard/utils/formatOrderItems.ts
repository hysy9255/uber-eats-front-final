export const formatOrderItems = (
  items: {
    name: string;
    quantity: number;
  }[]
) => {
  return items.map((item) => `${item.quantity}x ${item.name}`).join(", ");
};
