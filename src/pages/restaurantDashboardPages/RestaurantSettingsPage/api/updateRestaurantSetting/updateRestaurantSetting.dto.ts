export type UpdateRestaurantSettingDTO = {
  updatedAddress?: {
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
    apt?: string | null;
  };
  updatedImages?: {
    logo?: string | null;
    mainImage?: string;
    sub1Image?: string;
    sub2Image?: string;
    bannerImage?: string;
  };
  updatedProfile?: {
    newName?: string;
    newCuisineType?: string;
    newStorePhone?: string | null;
  };
};
