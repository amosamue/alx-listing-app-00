// components/booking/OrderSummary.tsx
import React from "react";
import { BookingDetails } from "@/interfaces";

const formatCurrency = (n: number) =>
  n.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({ bookingDetails }) => {
  const { pricePerNight, totalNights, bookingFee, propertyName, startDate, imageUrl, reviewScore = 4.76, reviewCount = 345 } =
    bookingDetails;

  const subtotal = pricePerNight * totalNights;
  const grandTotal = subtotal + bookingFee;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Review Order Details</h2>

      <div className="flex items-start mt-4">
        <img
          src={imageUrl ?? "/placeholder-property.jpg"}
          alt={propertyName}
          className="w-28 h-20 object-cover rounded-md flex-shrink-0"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{propertyName}</h3>
          <p className="text-sm text-gray-500">
            {reviewScore.toFixed(2)} ({reviewCount} reviews)
          </p>
          <p className="text-sm text-gray-500 mt-1">
            {startDate} • {totalNights} {totalNights === 1 ? "Night" : "Nights"}
          </p>
        </div>
      </div>

      {/* Price breakdown */}
      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between">
          <p>Price ({totalNights} nights)</p>
          <p>{formatCurrency(subtotal)}</p>
        </div>

        <div className="flex justify-between mt-2">
          <p>Booking Fee</p>
          <p>{formatCurrency(bookingFee)}</p>
        </div>

        <div className="flex justify-between mt-4 font-semibold text-lg">
          <p>Grand Total</p>
          <p>{formatCurrency(grandTotal)}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
