import React from 'react';

const StatsCard = ({ title, value, change }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <h3 className="text-xl font-semibold">{value}</h3>
      <p className="text-gray-600">{title}</p>
      <span className={`text-sm ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
        {change > 0 ? `+${change}%` : `${change}%`}
      </span>
    </div>
  );
};

export default StatsCard;
