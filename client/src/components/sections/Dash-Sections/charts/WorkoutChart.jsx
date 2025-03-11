"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    date: "ינואר",
    benchPress: 70,
    squat: 100,
    deadlift: 120,
  },
  {
    date: "פברואר",
    benchPress: 72,
    squat: 105,
    deadlift: 125,
  },
  {
    date: "מרץ",
    benchPress: 75,
    squat: 110,
    deadlift: 130,
  },
  {
    date: "אפריל",
    benchPress: 78,
    squat: 112,
    deadlift: 132,
  },
  {
    date: "מאי",
    benchPress: 80,
    squat: 115,
    deadlift: 135,
  },
  {
    date: "יוני",
    benchPress: 85,
    squat: 120,
    deadlift: 140,
  },
];

export function WorkoutChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
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
        />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border border-[#1E1E1E] bg-[#333533] p-2 shadow-md">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-[#F4F4F4]/50">
                        Bench Press
                      </span>
                      <span className="font-bold text-[#FFD100]">
                        {payload[0].value}kg
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-[#F4F4F4]/50">
                        Squat
                      </span>
                      <span className="font-bold text-[#00A896]">
                        {payload[1].value}kg
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-[#F4F4F4]/50">
                        Deadlift
                      </span>
                      <span className="font-bold text-[#B8860B]">
                        {payload[2].value}kg
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          }}
        />
        <Line
          type="monotone"
          strokeWidth={2}
          dataKey="benchPress"
          activeDot={{
            r: 6,
            style: { fill: "#FFD100", opacity: 0.8 },
          }}
          style={{
            stroke: "#FFD100",
          }}
        />
        <Line
          type="monotone"
          dataKey="squat"
          strokeWidth={2}
          activeDot={{
            r: 6,
            style: { fill: "#00A896", opacity: 0.8 },
          }}
          style={{
            stroke: "#00A896",
          }}
        />
        <Line
          type="monotone"
          dataKey="deadlift"
          strokeWidth={2}
          activeDot={{
            r: 6,
            style: { fill: "#B8860B", opacity: 0.8 },
          }}
          style={{
            stroke: "#B8860B",
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
