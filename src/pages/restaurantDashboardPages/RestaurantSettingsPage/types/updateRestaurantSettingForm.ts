export type LogoImageState = {
  status: "unchanged" | "changed" | "removed";
  preview: string | null;
  file: File | null;
};

// export type ImageState = {
//   status: "unchanged" | "changed" | "removed";
//   preview: string | null;
//   file: File | null;
// };

export type ImageState = {
  status: "unchanged" | "changed";
  preview: string;
  file: File | null;
};

export type UpdateRestaurantSettingForm = {
  name: string;
  cuisineType: string;
  logo: LogoImageState;
  mainImage: ImageState;
  sub1Image: ImageState;
  sub2Image: ImageState;
  bannerImage: ImageState;
  storePhone: string | null;
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
  apt: string | null;
};
