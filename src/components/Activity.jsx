import React from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  ReferenceLine,
  Area,
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
    value: item.development
  }));

  return (
    <>
      <div className="bg-white py-4 rounded-lg shadow-md">
        <div className="border-b border-gray-300">
          <h2 className="text-xl font-semibold text-gray-500 mb-4 px-4">
            Development Activity
          </h2>
        </div>

        {/* Area chart */}
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={chartData}>
            <XAxis dataKey="date" tick={{ fontSize: 12 }} hide={true} />
            <YAxis hide={true} />
            <Tooltip />
            <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
            <ReferenceLine
              y={4000}
              label="Max"
              stroke="red"
              strokeDasharray="3 3"
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              fill="#8884d8"
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
