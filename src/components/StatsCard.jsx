import React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const StatsCard = ({ stat }) => {
  const isPositive = stat.change > 0;

  return (
    <div className="bg-white p-4 sm:rounded-md rounded-sm sm:shadow-md border border-[rgba(4, 32, 69, 0.1)] flex flex-col justify-between sm:h-40 h-32 w-full">
      <div className="flex justify-between items-center">
        <p className="text-gray-500 text-sm font-medium uppercase">{stat.title}</p>
        <div
          className={`flex items-center text-sm font-semibold ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          <span>{isPositive ? `+${stat.change}%` : `${stat.change}%`}</span>
          {isPositive ? (
            <ChevronUp className="w-4 h-4 ml-1" />
          ) : (
            <ChevronDown className="w-4 h-4 ml-1" />
          )}
        </div>
      </div>
      <h3 className="text-3xl font-semibold mt-2 text-center">{stat.value}</h3>
      <p className="text-gray-500 text-sm mt-1">Conversion rate</p>
      <div className="bg-gray-200 h-1 mt-2 rounded-full">
        <div
          className="bg-blue-500 h-1 rounded-full"
          style={{ width: `${stat.progress}%` }}
        />
      </div>
    </div>
  );
};

export default StatsCard;
