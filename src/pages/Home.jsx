import React from "react";
import { useQuery } from "@tanstack/react-query";
import StatsCard from "../components/StatsCard";
import { fetchDashboardData } from "../services/api";
import DevelopmentActivity from "../components/Activity";
import Charts from "../components/Charts";
import Skeleton from "../components/Skeleton";

const Home = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["summary"],
    queryFn: fetchDashboardData,
  });

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="space-y-4 sm:px-14 px-2">
      <h1 className="text-3xl font-semibold text-gray-500">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {data.summary.map((stat, index) => (
          <StatsCard key={index} stat={stat} />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <DevelopmentActivity activity={data.activity} />
        <Charts charts={data.charts} />
      </div>
    </div>
  );
};

export default Home;
