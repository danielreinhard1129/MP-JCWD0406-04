export interface ICouponDiscount {
  id?: number;
  userId: number;
  couponCode: string;
  discountPersentase: number;
  dateReceived?: Date;
  expiresOn: Date;
}

export interface IReferralPoints {
  id?: number;
  userId: number;
  pointEarned: number;
  dateEarned?: Date;
  expiresOn: Date;
}
