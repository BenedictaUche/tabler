import React from "react";

const SkeletonCard = () => (
  <div className="bg-gray-200 p-6 rounded-md shadow-md animate-pulse h-40 flex flex-col justify-center items-center">
    <div className="bg-gray-300 h-4 w-1/4 mb-2 rounded"></div>
    <div className="bg-gray-300 h-6 w-2/4 rounded"></div>
    <div className="bg-gray-300 h-4 w-1/3 mt-2 rounded"></div>
  </div>
);

const SkeletonCharts = () => (
  <div className="bg-gray-200 p-6 rounded-md shadow-md animate-pulse h-64 flex justify-center items-center">
    <div className="bg-gray-300 h-24 w-24 rounded-full"></div>
  </div>
);

const Skeleton = () => {
  return (
    <div className="space-y-4 sm:px-14 px-2">
      <h1 className="text-3xl font-semibold text-gray-300 animate-pulse">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {Array(4).fill(null).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <SkeletonCharts />
        <SkeletonCharts />
      </div>
    </div>
  );
};

export default Skeleton;
