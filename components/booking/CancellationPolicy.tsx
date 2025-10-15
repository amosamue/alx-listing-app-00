// components/booking/CancellationPolicy.tsx
import React from "react";

const CancellationPolicy: React.FC = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg mt-6">
      <h2 className="text-xl font-semibold">Cancellation Policy</h2>
      <p className="mt-2 text-gray-600">
        Free cancellation before <strong>Aug 23</strong>. Cancel before check-in on <strong>Aug 24</strong> for a partial refund.
      </p>

      <h2 className="text-xl font-semibold mt-6">Ground Rules</h2>
      <ul className="mt-2 text-gray-600 list-disc list-inside">
        <li>Follow the house rules</li>
        <li>Treat your Host’s home like your own</li>
      </ul>
    </div>
  );
};

export default CancellationPolicy;
