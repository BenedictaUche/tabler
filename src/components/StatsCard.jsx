import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const StatsCard = ({ stat }) => {
  const isPositive = stat.change > 0;

  return (
    <div className="bg-white p-6 rounded-md shadow-md text-center relative h-40 flex flex-col justify-center items-center">
      <div className={`text-sm flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'} absolute top-3 right-3`}>
        <span className='font-semibold'>{isPositive ? `+${stat.change}%` : `${stat.change}%`}</span>
        {isPositive ? <ChevronUp className="w-4 h-4 font-semibold" /> : <ChevronDown className="w-4 h-4 font-semibold" />}
      </div>
      <h3 className="text-2xl font-semibold">{stat.value}</h3>
      <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
    </div>
  );
};

export default StatsCard;
