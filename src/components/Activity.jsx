import React from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  ReferenceLine,
  Area,
  Legend
} from "recharts";
import { Trash } from "lucide-react";

const DevelopmentActivity = ({ activity }) => {
  // const {isLoading, isError, data, error} = useQuery({
  //     queryKey: ['activity'],
  //     queryFn: fetchDashboardData,
  //   })
  //   console.log(data)

  //   if (isLoading) return <div>Loading...</div>;
  //   if (isError) return <div>Error: {error.message}</div>;

  const chartData = activity.map((item, index) => ({
    date: item.date,
    commit: item.commit,
    Purchases: item.purchases
  }));

  return (
    <>
      <div className="bg-white pt-4 rounded-lg shadow-md">
      <div className="">
        <h2 className="text-xl font-semibold tablerText mb-4 px-4 border-b border-gray-300 py-2">
          Development Activity
        </h2>
        <div className="text-gray-500 px-4">
          <span className="text-lg font-semibold">Today's Earning: $4,262.40</span>
          <div className="text-green-500 text-sm">
            <span>+5% more than yesterday</span>
          </div>
        </div>
      </div>

        {/* Area chart */}
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={chartData}>
            <XAxis dataKey="date" tick={{ fontSize: 12 }} hide={true} />
            <YAxis hide={true} />
            <Tooltip />


            <Legend verticalAlign="top" height={36}/>
            <Area
              type="monotone"
              dataKey="Purchases"
              stroke="#066fd1"
              fill="#d7e8f8"
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* data table */}
        <div className="overflow-y-auto max-h-72 mt-4 border-t border-gray-200">
          <table className="min-w-full">
            <thead className=" text-gray-700 text-sm uppercase">
              <tr className="text-left">
                <th className="px-4 py-2">User</th>
                <th className="px-4 py-2">Commit</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-semibold">
              {activity.map((item, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="px-4 py-2 flex items-center gap-4 ">
                    {" "}
                    <span className="sm:h-6 sm:w-6 h-6 w-10 rounded-full">
                      <img
                        src={item.imageUrl}
                        alt="User image"
                        className="w-full rounded-full"
                      />
                    </span>
                    <p className="">{item.user}</p>
                  </td>
                  <td className="px-4 py-2">{item.commit}</td>
                  <td className="px-4 py-2">{item.date}</td>
                  <td className="px-4 py-2 cursor-pointer"><Trash size={24} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DevelopmentActivity;
