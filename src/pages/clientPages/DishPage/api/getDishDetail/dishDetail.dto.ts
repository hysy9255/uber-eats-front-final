export type ReviewDTO = {
  content: string;
  userName: string;
  rating: number;
  postedAt: string;
};

export type DishDetailDTO = {
  restaurantName: string;
  logo: string | null;
  name: string;
  dishImg: string | null;
  description: string;
  price: number;
  avgRating: number | null;
  reviews: ReviewDTO[];
};
