import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import StatsCard from '../components/StatsCard';
import { fetchDashboardData } from '../services/api';

const Home = () => {
  const {isLoading, isError, data, error} = useQuery({
    queryKey: ['summary'],
    queryFn: fetchDashboardData,
    // queryFn: async () => {
    //   const response = await axios.get('/dashboardData.json');
    //   return response.data.summary;
    // }
  })

  if(isLoading) {
    return <div>Loading...</div>;
  }

  if(isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="space-y-4 px-14">
      <h1 className="text-3xl font-semibold text-gray-500">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {data.summary.map((stat, index) => (
          <StatsCard key={index} stat={stat} />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
