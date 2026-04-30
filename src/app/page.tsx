import { DashboardHeader } from "@/components/DashboardHeader";
import { KpiCards } from "@/components/KpiCards";
import { KeyInsights } from "@/components/KeyInsights";
import { DashboardCharts } from "@/components/DashboardCharts";
import { ExecutiveSummary } from "@/components/ExecutiveSummary";
import { AIChat } from "@/components/AIChat";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <DashboardHeader />
      <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
          <KpiCards />
          <KeyInsights />
          <DashboardCharts />
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <ExecutiveSummary />
          </div>
        </div>
      </main>

      <AIChat />

      {/* Footer */}
      <footer className="border-t border-slate-800/60 py-8 text-center text-slate-500 bg-slate-950/50">
        <div className="max-w-2xl mx-auto space-y-2">
          <p className="text-sm font-semibold text-slate-300">
            Super AI Engineer season 6 | 603081_Kraiyos Wanna
          </p>
          <p className="text-xs">
            Mini-Hackathon 1 Theme: Data ชุดข้อมูลเหตุความรุนแรงในครอบครัว
            <br />
            AIAT : สมาคมปัญญาประดิษฐ์แห่งประเทศไทย
            <br />
            Thackle : Big Data Institute
          </p>
        </div>
      </footer>
    </div>
  );
}
