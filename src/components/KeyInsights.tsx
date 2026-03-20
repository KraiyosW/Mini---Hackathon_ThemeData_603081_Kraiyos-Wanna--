"use client";

import { Lightbulb } from "lucide-react";

export function KeyInsights() {
  return (
    <div className="rounded-xl border border-indigo-900/50 bg-indigo-950/30 backdrop-blur-sm p-6 animate-in zoom-in-95 duration-700 h-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-indigo-500/10 rounded-lg">
          <Lightbulb className="w-5 h-5 text-indigo-400" />
        </div>
        <h3 className="text-lg font-bold text-indigo-100 italic tracking-wide">
          💡 Key Insights: ความเป็นจริงที่ตัวเลขไม่ได้บอกทั้งหมด
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-2 group transition-all duration-300">
          <div className="flex items-center gap-2 text-indigo-200 font-bold">
            <span className="text-indigo-500">👥</span>
            <h4>ใครเสี่ยงที่สุด?</h4>
          </div>
          <p className="text-sm text-indigo-300/80 leading-relaxed">
            <span className="text-white font-bold">ชายวัยทำงาน (36-59 ปี)</span> คือกลุ่มผู้กระทำหลัก | <span className="text-white font-bold">หญิงวัยทำงาน</span> คือเหยื่อหลัก โดยผู้ก่อเหตุอันดับ 1 คือ <span className="text-rose-400 font-bold">&quot;คู่ชีวิต/สามี&quot;</span>
          </p>
        </div>

        <div className="space-y-2 group transition-all duration-300">
          <div className="flex items-center gap-2 text-indigo-200 font-bold">
            <span className="text-indigo-500">📍</span>
            <h4>เกิดที่ไหน เมื่อไหร่?</h4>
          </div>
          <p className="text-sm text-indigo-300/80 leading-relaxed">
            <span className="text-white font-bold">&quot;บ้าน&quot;</span> คือพื้นที่อันตรายอันดับ 1 | จุดเดือดช่วง <span className="text-amber-400 font-bold">&quot;บ่าย&quot; (ตจว.)</span> และ <span className="text-amber-400 font-bold">&quot;ค่ำ&quot; (กทม.)</span> ตามบริบทวิถีชีวิต
          </p>
        </div>

        <div className="space-y-2 group transition-all duration-300">
          <div className="flex items-center gap-2 text-indigo-200 font-bold">
            <span className="text-indigo-500">🚨</span>
            <h4>สัญญาณเตือนคืออะไร?</h4>
          </div>
          <p className="text-sm text-indigo-300/80 leading-relaxed">
            <span className="text-rose-400 font-bold">ยาเสพติดและสุรา</span> คือตัวจุดระเบิดหลัก ปลดล็อกพฤติกรรม <span className="text-white font-semibold">&quot;บันดาลโทสะ&quot;</span> และ <span className="text-white font-semibold">&quot;อำนาจปกครอง&quot;</span> เพื่อกดขี่คนในบ้าน
          </p>
        </div>

        <div className="space-y-2 group transition-all duration-300">
          <div className="flex items-center gap-2 text-indigo-200 font-bold">
            <span className="text-indigo-500">🔇</span>
            <h4>ใครคือผู้ส่งเสียง?</h4>
          </div>
          <p className="text-sm text-indigo-300/80 leading-relaxed">
            เหยื่อแจ้งเหตุเองเพียง <span className="text-rose-400 font-bold">14.5%</span> | ข้อมูลส่วนใหญ่มาจาก <span className="text-white font-semibold">ตำรวจ, โรงพยาบาล, สายด่วน 1300</span> ซึ่งมักเกิดขึ้นเมื่อบานปลายแล้ว
          </p>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-indigo-900/40">
        <div className="flex items-start gap-2 text-xs text-indigo-300/60 bg-indigo-500/5 p-3 rounded-lg border border-indigo-500/10">
          <span className="text-rose-500 font-bold shrink-0">🚩</span>
          <p>
            สถิตินี้เป็นเพียง <span className="text-rose-400 font-bold italic underline decoration-rose-500/30">ยอดภูเขาน้ำแข็ง (The Dark Figure of Crime)</span> เนื่องจากสังคมไทยยังถูกพันธนาการด้วยมายาคติ <span className="text-white font-bold">&quot;เรื่องของผัวเมียคนนอกไม่ควรยุ่ง&quot;</span> ทำให้เหยื่อถูกทิ้งให้อยู่กับผู้กระทำเพียงลำพัง
          </p>
        </div>
      </div>
    </div>
  );
}
