type RegisterAccountDTO = {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
  profileImage: string | null;
};

type RegisterRestaurantAddressDTO = {
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
  apt: string | null;
};

type RegisterRestaurantImagesDTO = {
  logo: string | null;
  mainImage: string;
  sub1Image: string;
  sub2Image: string;
  bannerImage: string;
};

type RegisterRestaurantProfileDTO = {
  name: string;
  cuisineType: string;
  email: string | null;
  instagram: string | null;
  website: string | null;
  storePhone: string | null;
};

type RegisterRestaurantDTO = {
  profile: RegisterRestaurantProfileDTO;
  images: RegisterRestaurantImagesDTO;
  address: RegisterRestaurantAddressDTO;
};

export type RegisterOwnerDTO = {
  account: RegisterAccountDTO;
  restaurant: RegisterRestaurantDTO;
};
