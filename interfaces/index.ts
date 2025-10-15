// interfaces/index.ts
export interface BookingDetails {
  propertyName: string;
  pricePerNight: number;
  bookingFee: number;
  totalNights: number;
  startDate: string; // human readable for now, e.g. "24 August 2024"
  imageUrl?: string;
  reviewScore?: number;
  reviewCount?: number;
}
