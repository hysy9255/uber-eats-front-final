import type { RestaurantStatus } from "@/shared/types/restaurantStatus.type";

export type RestaurantSummaryDTO = {
  restaurantId: string;
  logo: string | null;
  name: string;
  address: string;
  status: RestaurantStatus;
  mainImg: string;
  sub1Img: string;
  sub2Img: string;
  avgRating: number | null;
  reviewCount: number;
};
