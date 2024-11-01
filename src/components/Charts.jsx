import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

// color schemes for each chart
const colorSchemes = {
  Purchases: ["#2E7D32", "#66BB6A", "#A5D6A7", "#1B5E20"],
  Sales: ["#1565C0", "#42A5F5", "#90CAF9", "#0D47A1"],
  Revenue: ["#4E342E", "#8D6E63", "#BCAAA4", "#3E2723"],
  "Today profit": ["#FF8F00", "#FFA726", "#FFCC80", "#EF6C00"],
};

// to select colors based on chart title
const getColors = (title) => colorSchemes[title] || ["#009688", "#FF5722", "#FF9800", "#3F51B5"];

const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text
      x={x}
      y={y}
      fill="#FFFFFF"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
      fontWeight="semibold"
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

const Charts = ({ charts }) => {
  return (
    <div>
      <div className="bg-blue-200 py-4 px-6">
        <h3>
          <span className="font-semibold">Read our documentation</span> with
          code samples
        </h3>
      </div>

      {/* charts */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
        {charts.map((chart, index) => (
          <div key={index} className="bg-white py-4 rounded-lg shadow-md">
            <div className="border-b border-gray-300">
              <h4 className="text-left font-semibold mb-4 pl-4">{chart.title}</h4>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={chart.values.map((value, idx) => ({
                    name: `Part ${idx + 1}`,
                    value,
                  }))}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={chart.title === "Purchases" ? 50 : 0}
                  outerRadius={80}
                  label={renderLabel}
                  labelLine={false}
                >
                  {chart.values.map((_, idx) => (
                    <Cell
                      key={`cell-${idx}`}
                      fill={getColors(chart.title)[idx % getColors(chart.title).length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Charts;
