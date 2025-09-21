import React, { useState } from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import Pill from "@/components/common/Pill";

const filters = ["Luxury Villa", "Self Checkin", "Beachfront", "Mountain View", "Countryside", "Rooms", "Mansion"];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProperties = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter(p => p.category.includes(activeFilter))
    : PROPERTYLISTINGSAMPLE;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-100 text-center py-20">
        <h1 className="text-4xl sm:text-5xl font-bold">Find your favorite place here!</h1>
        <p className="mt-4 text-lg sm:text-xl">The best prices for over 2 million properties worldwide.</p>
      </section>

      {/* Filter Pills */}
      <section className="flex gap-3 p-4 overflow-x-auto">
        {filters.map(filter => (
          <Pill
            key={filter}
            label={filter}
            active={activeFilter === filter}
            onClick={() => setActiveFilter(activeFilter === filter ? null : filter)}
          />
        ))}
      </section>

      {/* Property Listing */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {filteredProperties.map((property: PropertyProps) => (
          <div
            key={property.name}
            className="border rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform overflow-hidden bg-white"
          >
            <div className="relative">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-48 object-cover"
              />
              {property.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                  {property.discount}% OFF
                </span>
              )}
            </div>
            <div className="p-4">
              <h2 className="font-bold text-lg">{property.name}</h2>
              <p className="text-gray-600">{property.address.city}, {property.address.country}</p>
              <p className="mt-1 font-semibold">${property.price}/night</p>
              <p className="text-yellow-500 mt-1">⭐ {property.rating}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {property.category.map(cat => (
                  <span key={cat} className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
