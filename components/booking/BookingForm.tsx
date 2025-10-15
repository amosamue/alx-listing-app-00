// components/booking/BookingForm.tsx
import React, { useState } from "react";

const BookingForm: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    street: "",
    apt: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For milestone: just log or show a simple alert. In production you'd validate + hit an API.
    console.log("Booking submitted", form);
    alert("Booking simulated — form data logged to console.");
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Contact Details</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              type="text"
              required
              className="border p-2 w-full mt-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              type="text"
              required
              className="border p-2 w-full mt-2 rounded"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              required
              className="border p-2 w-full mt-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="tel"
              className="border p-2 w-full mt-2 rounded"
            />
          </div>
        </div>

        {/* Payment */}
        <h3 className="text-lg font-semibold mt-4">Payment Information</h3>
        <div>
          <label className="block text-sm font-medium">Card Number</label>
          <input
            name="cardNumber"
            value={form.cardNumber}
            onChange={handleChange}
            type="text"
            inputMode="numeric"
            placeholder="1234 5678 9012 3456"
            className="border p-2 w-full mt-2 rounded"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Expiration Date</label>
            <input
              name="expiry"
              value={form.expiry}
              onChange={handleChange}
              type="text"
              placeholder="MM/YY"
              className="border p-2 w-full mt-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">CVV</label>
            <input
              name="cvv"
              value={form.cvv}
              onChange={handleChange}
              type="password"
              placeholder="123"
              className="border p-2 w-full mt-2 rounded"
              required
            />
          </div>
        </div>

        {/* Billing */}
        <h3 className="text-lg font-semibold mt-4">Billing Address</h3>

        <div>
          <label className="block text-sm font-medium">Street Address</label>
          <input
            name="street"
            value={form.street}
            onChange={handleChange}
            type="text"
            className="border p-2 w-full mt-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Apt / Suite</label>
          <input
            name="apt"
            value={form.apt}
            onChange={handleChange}
            type="text"
            className="border p-2 w-full mt-2 rounded"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium">City</label>
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              type="text"
              className="border p-2 w-full mt-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">State</label>
            <input
              name="state"
              value={form.state}
              onChange={handleChange}
              type="text"
              className="border p-2 w-full mt-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Zip Code</label>
            <input
              name="zip"
              value={form.zip}
              onChange={handleChange}
              type="text"
              className="border p-2 w-full mt-2 rounded"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Country</label>
          <input
            name="country"
            value={form.country}
            onChange={handleChange}
            type="text"
            className="border p-2 w-full mt-2 rounded"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md w-full"
        >
          Confirm & Pay
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
