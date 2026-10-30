export interface OwnerOnBoardingForm {
  step1: {
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    profileImgUrl: string | null;
  };
  step2: {
    logoImgUrl: string;
    lbn: string;
    dba: string;
    cuisineType: string;
    storePhone: string;
    businessEmail: string;
    website: string;
    instagram: string;
    mainImgUrl: string;
    sub1ImgUrl: string;
    sub2ImgUrl: string;
    bannerImgUrl: string;
  };
  step3: {
    streetAddress: string;
    unit: string;
    city: string;
    state: string;
    zip: string;
  };
}
