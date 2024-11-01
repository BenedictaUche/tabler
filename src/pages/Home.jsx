import React from 'react';
import StatsCard from '../components/StatsCard';

const Home = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatsCard title="New Tickets" value="43" change={6} />
        <StatsCard title="Closed Today" value="17" change={-3} />
        <StatsCard title="New Replies" value="7" change={9} />

      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">

      </div>
    </div>
  );
};

export default Home;
