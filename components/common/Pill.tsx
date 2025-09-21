import React from "react";

interface PillProps {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

const Pill: React.FC<PillProps> = ({ label, onClick, active }) => (
  <button
    onClick={onClick}
    className={`px-4 py-1 rounded-full border transition ${
      active ? "bg-blue-500 text-white" : "bg-white border-gray-300 hover:bg-blue-500 hover:text-white"
    }`}
  >
    {label}
  </button>
);

export default Pill;
