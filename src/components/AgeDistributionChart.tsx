"use client";

import { useState } from "react";
import { getAgeRangeStats } from "@/lib/data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const COLORS = ["#0f766e", "#0e7490", "#0369a1", "#1d4ed8", "#4338ca"];

export function AgeDistributionChart() {
  const [mode, setMode] = useState<"victim" | "offender">("victim");
  const stats = getAgeRangeStats(mode);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900 mb-1">
            การกระจายตามช่วงอายุ
          </h3>
          <p className="text-sm text-slate-600">จำนวนเคสแบ่งตามช่วงอายุ</p>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-lg">
          <button
            onClick={() => setMode("victim")}
            className={`px-3 py-1 text-[10px] font-medium rounded-md transition-all ${
              mode === "victim"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            เหยื่อ
          </button>
          <button
            onClick={() => setMode("offender")}
            className={`px-3 py-1 text-[10px] font-medium rounded-md transition-all ${
              mode === "offender"
                ? "bg-white text-rose-600 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            ผู้กระทำผิด
          </button>
        </div>
      </div>
      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={stats}
            layout="vertical"
            margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f1f5f9"
              horizontal={false}
            />
            <XAxis
              type="number"
              tick={{ fill: "#475569", fontSize: 13 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fill: "#475569", fontSize: 13 }}
              width={160}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                color: "#0f172a",
                fontSize: "12px",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
              formatter={(value, _name, item) => [
                `${value} เคส (${item?.payload?.pct ?? 0}%)`,
                "จำนวน",
              ]}
            />
            <Bar dataKey="count" radius={[0, 6, 6, 0]} barSize={24}>
              {stats.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
