"use client";

import dynamic from "next/dynamic";
import { AgeDistributionChart } from "@/components/AgeDistributionChart";
import { FactorsChart } from "@/components/FactorsChart";
import { GenderChart } from "@/components/GenderChart";
import { RegionalChart } from "@/components/RegionalChart";
import { ProvinceChart } from "@/components/ProvinceChart";
import { SourceChart } from "@/components/SourceChart";
import { RelationshipChart } from "@/components/RelationshipChart";
import { PeriodChart } from "@/components/PeriodChart";
import { LocationPeriodChart } from "@/components/LocationPeriodChart";

// Dynamically import the map component to avoid SSR issues with react-simple-maps
const ThailandMap = dynamic(
  () => import("@/components/ThailandMap").then((mod) => mod.ThailandMap),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-xl border border-slate-200 bg-white p-5 h-[600px] flex items-center justify-center shadow-sm">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-slate-500">กำลังโหลดแผนที่...</p>
        </div>
      </div>
    ),
  }
);

export function DashboardCharts() {
  return (
    <>
      {/* Map and Province Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <ThailandMap />
        </div>
        <div className="lg:col-span-1">
          <ProvinceChart />
        </div>
      </div>

      {/* Tall Charts (400px height) */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
        <FactorsChart />
      </div>

      {/* Medium Charts (260px height) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <SourceChart />
        <AgeDistributionChart />
        <RelationshipChart />
      </div>

      {/* Short Charts (240px height) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <RegionalChart />
        <GenderChart />
      </div>

      {/* Time & Location Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-1">
          <PeriodChart />
        </div>
        <div className="lg:col-span-2">
          <LocationPeriodChart />
        </div>
      </div>
    </>
  );
}
