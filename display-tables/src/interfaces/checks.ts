export interface CheckInterface {
  id: string;
  monthId: string;
  yearId: string;
  checkSpentDay: number;
  checkSpentNight: number;
  priceDay: number;
  priceNight: number;
  invoiceAmount: number;
}

export interface ChangeCheckInterface {
  id: string;
  checkSpentDay: number;
  checkSpentNight: number;
  priceDay: number;
  priceNight: number;
  invoiceAmount: number;
}
