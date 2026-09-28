export type DeliveryAddressDTO = {
  deliveryAddressId: string;
  streetAddress: string;
  apt: string | null;
  city: string;
  state: string;
  zip: string;
  alias: string;
  isDefault: boolean;
};
