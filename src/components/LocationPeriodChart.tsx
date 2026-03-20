import { getLocationPeriodStats } from "@/lib/data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0ea5e9", "#f43f5e", "#10b981", "#8b5cf6", "#f59e0b", "#64748b"];

export function LocationPeriodChart() {
  const { data, locales } = getLocationPeriodStats();

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 flex flex-col h-full">
      <h3 className="text-base font-bold text-slate-900 mb-1">
        สถานที่เกิดเหตุแยกตามช่วงเวลา
      </h3>
      <p className="text-sm text-slate-600 mb-4">สัดส่วนสถานที่ที่เกิดความรุนแรงในแต่ละช่วงเวลา</p>
      <div className="flex-1 min-h-[250px] w-full mt-auto">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: -10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="period" tick={{ fill: "#475569", fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#475569", fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                fontSize: "12px",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
              cursor={{ fill: "#f8fafc" }}
            />
            <Legend wrapperStyle={{ fontSize: "12px", color: "#475569", paddingTop: "10px" }} />
            {locales.map((locale, index) => (
              <Bar
                key={locale}
                dataKey={locale}
                name={locale}
                stackId="a"
                fill={COLORS[index % COLORS.length]}
                barSize={40}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
