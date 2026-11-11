type ImageState = {
  status: "unchanged" | "changed" | "removed";
  preview: string | null;
  file: File | null;
};

export interface OwnerOnBoardingForm {
  step1: {
    email: string;
    verifiedEmail: string | null;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    profileImgUrl: ImageState;
  };
  step2: {
    logoImgUrl: ImageState;
    lbn: string;
    dba: string;
    cuisineType: string;
    storePhone: string;
    businessEmail: string | null;
    website: string | null;
    instagram: string | null;
    mainImgUrl: ImageState;
    sub1ImgUrl: ImageState;
    sub2ImgUrl: ImageState;
    bannerImgUrl: ImageState;
  };
  step3: {
    streetAddress: string;
    unit: string;
    city: string;
    state: string;
    zip: string;
  };
}
