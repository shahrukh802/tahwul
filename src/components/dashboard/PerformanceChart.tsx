"use client";

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Card } from "@/components/ui/card";
import AppHeading from "../common/AppHeading";

// --- Chart Data ---
const performanceData = [
  { name: "Jan", value: 88 },
  { name: "Feb", value: 76 },
  { name: "Mar", value: 82 },
  { name: "Apr", value: 42 },
  { name: "May", value: 88 },
  { name: "Jun", value: 80 },
  { name: "Jul", value: 55 },
  { name: "Aug", value: 88 },
  { name: "Sept", value: 80 },
  { name: "Oct", value: 55 },
  { name: "Nov", value: 88 },
  { name: "Dec", value: 80 },
];

const PerformanceChart = () => (
  <Card className="p-5 w-full md:col-span-2">
    <AppHeading title="12-Month Performance" />
    <div className="flex flex-col items-center">
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={performanceData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#e0f2fe" />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 10 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 10 }}
            />
            <Bar
              dataKey="value"
              radius={[4, 4, 0, 0]}
              fill="url(#barGradient)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </Card>
);
export default PerformanceChart;
