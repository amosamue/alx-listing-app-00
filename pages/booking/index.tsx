// pages/booking/index.tsx
import React from "react";
import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";
import { BookingDetails } from "@/interfaces";

const BookingPage: React.FC = () => {
  const bookingDetails: BookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    pricePerNight: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
    imageUrl: "https://images.unsplash.com/photo-1505691723518-36a4f5e6ad06?auto=format&fit=crop&w=800&q=60",
    reviewScore: 4.76,
    reviewCount: 345,
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <BookingForm />
          <CancellationPolicy />
        </div>

        <OrderSummary bookingDetails={bookingDetails} />
      </div>
    </div>
  );
};

export default BookingPage;
