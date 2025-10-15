import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    discount: ""
  },
  {
    name: "Mountain Escape Chalet",
    address: { state: "Aspen", city: "Colorado", country: "USA" },
    rating: 4.7,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    discount: "30"
  },
  {
    name: "Urban Penthouse Suite",
    address: { state: "Manhattan", city: "New York", country: "USA" },
    rating: 4.95,
    category: ["Luxury", "City View", "Self Checkin"],
    price: 4500,
    offers: { bed: "5", shower: "4", occupants: "6-8" },
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    discount: ""
  },
  {
    name: "Tropical Beach House",
    address: { state: "Phuket", city: "Patong", country: "Thailand" },
    rating: 4.8,
    category: ["Beachfront", "Private Pool", "Luxury Villa"],
    price: 2500,
    offers: { bed: "4", shower: "3", occupants: "6-8" },
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    discount: "20"
  },
  {
    name: "Countryside Farm Cottage",
    address: { state: "Somerset", city: "Bath", country: "UK" },
    rating: 4.6,
    category: ["Countryside", "Family", "Self Checkin"],
    price: 900,
    offers: { bed: "3", shower: "2", occupants: "3-5" },
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    discount: ""
  }
];
