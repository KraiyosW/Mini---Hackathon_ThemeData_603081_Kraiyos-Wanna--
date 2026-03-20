"use client";

import { getGenderStats } from "@/lib/data";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const COLORS: Record<string, string> = {
  ชาย: "#4f46e5",
  หญิง: "#e11d48",
  ไม่ระบุเพศ: "#64748b",
};

export function GenderChart() {
  const stats = getGenderStats();
  
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-bold text-slate-900 mb-1">
        สัดส่วนของเหยื่อแยกตามเพศ
      </h3>
      <p className="text-sm text-slate-600 mb-4">สัดส่วนผู้เสียหายแบ่งตามเพศ</p>
      <div className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={stats}
              dataKey="count"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={85}
              paddingAngle={3}
              strokeWidth={0}
            >
              {stats.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[entry.name] || "#6b7280"}
                />
              ))}
            </Pie>
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
            <Legend
              iconType="square"
              iconSize={10}
              wrapperStyle={{ fontSize: "14px", color: "#475569" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
