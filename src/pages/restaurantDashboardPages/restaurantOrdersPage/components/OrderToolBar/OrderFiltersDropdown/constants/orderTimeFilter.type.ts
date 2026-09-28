export enum OrderTimeFilterEnum {
  ANY = "any",
  THIRTY_MINUTES = "30min",
  ONE_HOUR = "1hour",
  TODAY = "today",
}

export type OrderTimeFilter =
  | OrderTimeFilterEnum.ANY
  | OrderTimeFilterEnum.THIRTY_MINUTES
  | OrderTimeFilterEnum.ONE_HOUR
  | OrderTimeFilterEnum.TODAY;
