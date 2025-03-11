"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    date: "ינואר",
    weight: 85,
  },
  {
    date: "פברואר",
    weight: 83,
  },
  {
    date: "מרץ",
    weight: 82,
  },
  {
    date: "אפריל",
    weight: 80,
  },
  {
    date: "מאי",
    weight: 79,
  },
  {
    date: "יוני",
    weight: 78,
  },
];

export function WeightChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 0,
        }}
      >
        <XAxis
          dataKey="date"
          stroke="#F4F4F4"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#F4F4F4"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}kg`}
          domain={["dataMin - 5", "dataMax + 5"]}
        />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border border-[#1E1E1E] bg-[#333533] p-2 shadow-md">
                  <div className="flex flex-col">
                    <span className="text-[0.70rem] uppercase text-[#F4F4F4]/50">
                      משקל
                    </span>
                    <span className="font-bold text-[#00A896]">
                      {payload[0].value}kg
                    </span>
                  </div>
                </div>
              );
            }
            return null;
          }}
        />
        <Area
          type="monotone"
          dataKey="weight"
          strokeWidth={2}
          fillOpacity={0.2}
          style={{
            stroke: "#00A896",
            fill: "#00A896",
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
