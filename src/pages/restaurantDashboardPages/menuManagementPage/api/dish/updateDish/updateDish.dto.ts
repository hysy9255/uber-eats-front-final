export class UpdateDishDTO {
  dishName?: string;
  price?: number;
  description?: string;
  dishImgUrl?: string | null;

  constructor(init: {
    dishName?: string;
    price?: number;
    description?: string;
    dishImgUrl?: string | null;
  }) {
    this.dishName = init.dishName;
    this.price = init.price;
    this.description = init.description;
    this.dishImgUrl = init.dishImgUrl;
  }
}
