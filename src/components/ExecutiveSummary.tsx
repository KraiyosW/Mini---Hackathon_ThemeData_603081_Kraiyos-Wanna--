"use client";

import { useState } from "react";
import { Lightbulb, Target, Users, MapPin, AlertTriangle, ShieldAlert, Ban, Pill, Smartphone, Scale, Home as HomeIcon, RefreshCw } from "lucide-react";

export function ExecutiveSummary() {
  const [activeTab, setActiveTab] = useState<"insights" | "policy" | "kpi-loop">("insights");

  return (
    <div className="bg-slate-900/80 rounded-xl border border-slate-800 mt-8 text-slate-300 overflow-hidden shadow-lg backdrop-blur-sm">
      {/* Header Section */}
      <div className="p-6 md:p-8 border-b border-slate-800 bg-slate-800/30">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
          6️⃣ 🏆 Grand Finale: บทสรุปภาพรวมและข้อเสนอแนะเชิงนโยบาย
        </h2>
        <blockquote className="border-l-4 border-rose-500 pl-4 py-3 italic bg-slate-900/50 text-rose-100/90 shadow-sm rounded-r-lg">
          <strong>&quot;ความรุนแรงในครอบครัว ไม่ใช่เพียงปัญหาการกระทบกระทั่งทั่วไป แต่เป็นอาชญากรรมเชิงโครงสร้างที่ถูกจุดชนวนด้วยสารเสพติดและแอลกอฮอล์ โดยมี &apos;มายาคติทางสังคม&apos; เป็นกำแพงคุ้มครองผู้กระทำผิด... ถึงเวลาที่รัฐและสังคมต้องเลิกมองว่าเรื่องในบ้านคือเรื่องส่วนตัว เพราะความเงียบในวันนี้ อาจหมายถึงความสูญเสียในวันหน้า&quot;</strong>
        </blockquote>
      </div>

      {/* Tabs Navigation */}
      <div className="flex border-b border-slate-800 px-6 md:px-8 pt-4 overflow-x-auto">

        <button
          onClick={() => setActiveTab("insights")}
          className={`flex items-center gap-2 pb-4 px-4 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
            activeTab === "insights"
              ? "border-indigo-500 text-indigo-400"
              : "border-transparent text-slate-500 hover:text-slate-300 hover:border-slate-600"
          }`}
        >
          <Lightbulb className="w-4 h-4" />
          สรุปข้อมูลเชิงลึก (Core Insights)
        </button>
        <button
          onClick={() => setActiveTab("policy")}
          className={`flex items-center gap-2 pb-4 px-4 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
            activeTab === "policy"
              ? "border-rose-500 text-rose-400"
              : "border-transparent text-slate-500 hover:text-slate-300 hover:border-slate-600"
          }`}
        >
          <Target className="w-4 h-4" />
          5 นโยบายเร่งด่วน (Actionable Policy)
        </button>
        <button
          onClick={() => setActiveTab("kpi-loop")}
          className={`flex items-center gap-2 pb-4 px-4 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
            activeTab === "kpi-loop"
              ? "border-emerald-500 text-emerald-400"
              : "border-transparent text-slate-500 hover:text-slate-300 hover:border-slate-600"
          }`}
        >
          <RefreshCw className="w-4 h-4" />
          Closing the KPI Loop
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-6 md:p-8 bg-slate-950/30">

        {activeTab === "insights" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-amber-950/30 border border-amber-900/50 text-amber-300/90 rounded-lg p-4 text-sm">
              <em>⚠️ <strong>ข้อสังเกตสำคัญ (Data Limitation):</strong> สถิติ 877 เคสนี้เป็นเพียง &quot;ยอดภูเขาน้ำแข็ง&quot; (The Dark Figure of Crime) เนื่องจากสังคมไทยยังถูกพันธนาการด้วยมายาคติ <strong>&quot;เรื่องของผัวเมียคนนอกไม่ควรยุ่ง&quot;</strong> ทำให้เหยื่อถูกทิ้งให้อยู่กับผู้กระทำเพียงลำพัง</em>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 hover:border-slate-600 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-indigo-900/50 text-indigo-400 rounded-lg"><Users className="w-5 h-5" /></div>
                  <h3 className="font-bold text-white">1. ใครเสี่ยงที่สุด?</h3>
                </div>
                <p className="text-sm font-semibold text-indigo-400 mb-3">&quot;โครงสร้างอำนาจที่บิดเบี้ยวภายในบ้าน&quot;</p>
                <ul className="list-disc pl-5 text-sm text-slate-400 space-y-2">
                  <li><strong>ผู้กระทำหลัก:</strong> <strong>เพศชายวัยทำงาน (36-59 ปี)</strong> คือกลุ่มที่ใช้ความรุนแรงสูงสุด (239 เคส)</li>
                  <li><strong>เหยื่อที่ถูกปิดปาก:</strong> <strong className="text-slate-300">เพศหญิงในวัยทำงาน</strong> คือกลุ่มรับผลกระทบหลัก โดยผู้ก่อเหตุอันดับ 1 คือ <strong>&quot;คู่ชีวิต / สามี&quot;</strong> ยิ่งตอกย้ำว่ามายาคติเรื่องครอบครัวทำให้เหยื่อไม่กล้าส่งเสียงขอความช่วยเหลือ</li>
                </ul>
              </div>

              <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 hover:border-slate-600 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-emerald-900/50 text-emerald-400 rounded-lg"><MapPin className="w-5 h-5" /></div>
                  <h3 className="font-bold text-white">2. เหตุเกิดที่ไหนและเมื่อไหร่?</h3>
                </div>
                <p className="text-sm font-semibold text-emerald-400 mb-3">เมื่อบ้านไม่ใช่ &quot;เซฟโซน&quot;</p>
                <ul className="list-disc pl-5 text-sm text-slate-400 space-y-2">
                  <li><strong>จุดเกิดเหตุ:</strong> <strong>&quot;สถานที่ส่วนบุคคล (บ้าน)&quot;</strong> คือพื้นที่อันตรายอันดับ 1 ซึ่งสอดคล้องกับมายาคติที่สังคมมักเกรงใจไม่กล้าเข้าไปแทรกแซงพื้นที่ส่วนตัว</li>
                  <li><strong>เวลาจุดเดือด:</strong> พุ่งสูงช่วง <strong>&quot;บ่าย&quot; (ต่างจังหวัด)</strong> และช่วง <strong>&quot;ค่ำ&quot; (กทม.)</strong> ตามบริบทวิถีชีวิต</li>
                </ul>
              </div>

              <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 hover:border-slate-600 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-rose-900/50 text-rose-400 rounded-lg"><AlertTriangle className="w-5 h-5" /></div>
                  <h3 className="font-bold text-white">3. อะไรคือสัญญาณเตือน?</h3>
                </div>
                <p className="text-sm font-semibold text-rose-400 mb-3">&quot;สารเสพติด&quot; และ &quot;อำนาจนิยม&quot;</p>
                <ul className="list-disc pl-5 text-sm text-slate-400 space-y-2">
                  <li><strong>ตัวจุดระเบิด:</strong> <strong className="text-slate-300">ยาเสพติดและสุรา</strong> เข้าไปทำลายฟังก์ชันสมองและสติสัมปชัญญะ ปลดล็อกพฤติกรรม <strong>&quot;บันดาลโทสะ (Rage)&quot;</strong> และการอ้าง <strong>&quot;อำนาจปกครอง (Authoritative)&quot;</strong> เพื่อกดขี่คนในบ้าน</li>
                </ul>
              </div>

              <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 hover:border-slate-600 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-slate-700/50 text-slate-400 rounded-lg"><ShieldAlert className="w-5 h-5" /></div>
                  <h3 className="font-bold text-white">4. ใครคือผู้ส่งเสียง?</h3>
                </div>
                <p className="text-sm font-semibold text-slate-400 mb-3">&quot;สถิติสะท้อนความกลัว&quot;</p>
                <ul className="list-disc pl-5 text-sm text-slate-400 space-y-2">
                  <li><strong>ช่องว่างของการแจ้งเหตุ:</strong> เหยื่อแจ้งเหตุเองเพียง <strong>14.5%</strong> เพราะถูกกรอบสังคมตราหน้าว่าการแจ้งความคือการ &quot;ประจานครอบครัว&quot;</li>
                  <li><strong>การพึ่งพามือที่สาม:</strong> ข้อมูลส่วนใหญ่มาจาก <strong>ตำรวจ, โรงพยาบาล และสายด่วน 1300</strong> ซึ่งมักเกิดขึ้นเมื่อเหตุการณ์บานปลายจนบาดเจ็บสาหัสแล้วเท่านั้น</li>
                </ul>
              </div>
          </div>
        </div>
        )}

        {activeTab === "policy" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="space-y-4">
              <div className="bg-slate-800/40 border-l-4 border-rose-500 rounded-r-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-rose-950/50 p-1.5 rounded-md text-rose-400"><Ban className="w-5 h-5" /></div>
                  <h3 className="font-bold text-white">นโยบายที่ 1: &quot;Zero Tolerance & Anti-Myth Campaign&quot;</h3>
                </div>
                <p className="text-sm font-semibold text-rose-400 mb-2 pl-[42px]">(ทลายมายาคติ &apos;เรื่องส่วนตัว&apos;)</p>
                <p className="text-sm text-slate-400 pl-[42px]"><strong>Action:</strong> ภาครัฐต้องประกาศสงครามกับมายาคติ <strong>&quot;เรื่องครอบครัวคนนอกไม่ควรยุ่ง&quot;</strong> โดยเฉพาะในกลุ่มเจ้าหน้าที่รัฐ (ตำรวจ/นักสังคมสงเคราะห์) <strong>ห้ามใช้ทัศนคติส่วนตัวมาตัดสินให้เหยื่อไกล่เกลี่ยหรือยอมความ</strong> และต้องรณรงค์ให้สังคมมองว่าการแจ้งเหตุคือ &quot;การช่วยชีวิต&quot; ไม่ใช่ &quot;การจุ้นจ้าน&quot; โดยรัฐต้องการันตีความปลอดภัยให้พลเมืองดีเป็นลำดับแรก</p>
              </div>

              <div className="bg-slate-800/40 border-l-4 border-amber-500 rounded-r-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-amber-950/50 p-1.5 rounded-md text-amber-400"><Pill className="w-5 h-5" /></div>
                  <h3 className="font-bold text-white">นโยบายที่ 2: &quot;Targeted Suppression & Alcohol Ban&quot;</h3>
                </div>
                <p className="text-sm font-semibold text-amber-400 mb-2 pl-[42px]">(ตัดวงจรสารเสพติดและแบนผู้กระทำผิด)</p>
                <div className="text-sm text-slate-400 pl-[42px] space-y-2">
                  <p><strong>Action:</strong></p>
                  <ul className="list-disc pl-5">
                    <li><strong>บังคับบำบัด:</strong> หากพบว่าความรุนแรงเกิดจากยาเสพติด/แอลกอฮอร์ ต้องแยกผู้กระทำออกมาเข้าศูนย์บำบัดและปรับทัศนคติทันที (Involuntary Treatment) เพื่อคุ้มครองคนในครอบครัวที่ยังอยู่ในบ้าน</li>
                    <li><strong>Blacklist สุรา:</strong> เสนอมาตรการ <strong>&quot;ห้ามจำหน่ายแอลกอฮอล์แก่บุคคลที่มีประวัติคดีความรุนแรงในครอบครัว&quot;</strong> (โดยใช้ระบบเลขบัตรประชาชนเชื่อมโยงร้านค้า) เพื่อลดโอกาสการกลับไปก่อเหตุซ้ำจากปัจจัยกระตุ้นเดิม</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800/40 border-l-4 border-indigo-500 rounded-r-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-indigo-950/50 p-1.5 rounded-md text-indigo-400"><Smartphone className="w-5 h-5" /></div>
                  <h3 className="font-bold text-white">นโยบายที่ 3: &quot;Transparent Proactive Rescue&quot;</h3>
                </div>
                <p className="text-sm font-semibold text-indigo-400 mb-2 pl-[42px]">(ระบบแจ้งเหตุไร้ตัวตนและติดตามสถานะ)</p>
                <div className="text-sm text-slate-400 pl-[42px] space-y-2">
                  <p><strong>Action:</strong> ยกระดับแพลตฟอร์มแจ้งเหตุที่ไม่ใช่แค่การ &quot;รับเรื่อง&quot; แต่ต้องมี <strong>&quot;Live Status Tracking&quot;</strong></p>
                  <ul className="list-disc pl-5">
                    <li><strong>สำหรับพลเมืองดี:</strong> ระบบต้องแจ้งเตือนสถานะ (เช่น รับเรื่องแล้ว -&gt; เจ้าหน้าที่ถึงจุดเกิดเหตุ -&gt; เหยื่อถึงพื้นที่ปลอดภัย) เพื่อสร้างความเชื่อมั่นและแรงจูงใจให้คนในสังคมกล้าเป็นหูเป็นตามากขึ้น</li>
                    <li><strong>สำหรับเหยื่อ:</strong> มีปุ่ม SOS ที่เชื่อมโยงพิกัด GPS ถึงศูนย์ช่วยเหลือที่ใกล้ที่สุดทันที</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800/40 border-l-4 border-emerald-500 rounded-r-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-emerald-950/50 p-1.5 rounded-md text-emerald-400"><Scale className="w-5 h-5" /></div>
                  <h3 className="font-bold text-white">นโยบายที่ 4: &quot;Step-by-Step Legal Protection&quot;</h3>
                </div>
                <p className="text-sm font-semibold text-emerald-400 mb-2 pl-[42px]">(มาตรการทางกฎหมายแบบเป็นขั้นเป็นตอน)</p>
                <p className="text-sm text-slate-400 pl-[42px]"><strong>Action:</strong> ในเมื่อคำสั่งศาลทันทีอาจทำได้ยากในทางปฏิบัติ รัฐต้องใช้ <strong>&quot;มาตรการคุ้มครองชั่วคราวโดยพนักงานเจ้าหน้าที่&quot;</strong> (Administrative Protection) ที่มีอำนาจสั่งแยกผู้กระทำออกจากบ้านได้ใน 24 ชม. แรก ก่อนจะส่งเรื่องให้ศาลพิจารณาออกคำสั่งคุ้มครองระยะยาว (Restraining Order) ในขั้นถัดไป เพื่อให้การช่วยเหลือรวดเร็วและเป็นไปได้จริงในทางกฎหมาย</p>
              </div>

              <div className="bg-slate-800/40 border-l-4 border-blue-500 rounded-r-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-blue-950/50 p-1.5 rounded-md text-blue-400"><HomeIcon className="w-5 h-5" /></div>
                  <h3 className="font-bold text-white">นโยบายที่ 5: &quot;Community Safe Haven & Public-Private Partnership&quot;</h3>
                </div>
                <p className="text-sm font-semibold text-blue-400 mb-2 pl-[42px]">(พื้นที่หลบภัยอัจฉริยะ)</p>
                <p className="text-sm text-slate-400 pl-[42px]"><strong>Action:</strong> จัดตั้ง Safe Zone ในชุมชนที่มีงบประมาณสนับสนุนร่วมกันระหว่าง <strong>&quot;ภาครัฐและเอกชน (CSR)&quot;</strong> โดยให้ผู้นำชุมชนหรืออาสาสมัครที่ผ่านการอบรมเป็นผู้ดูแลพื้นที่ เพื่อให้เหยื่อมีที่พักพิงฉุกเฉินใกล้บ้าน ไม่ต้องถูกส่งไปไกลจนขาดการติดต่อกับสังคมปกติ โดยพื้นที่นี้ต้องสแตนด์บายรับเหตุได้ทั้งช่วง <strong>บ่าย (ตจว.) และ ค่ำ (กทม.)</strong> ตามสถิติที่พบจริง</p>
            </div>
          </div>
        </div>
        )}

        {activeTab === "kpi-loop" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <p className="text-sm text-slate-400">
              เพื่อให้สอดคล้องกับ <strong className="text-white">Executive Summary KPIs</strong> ที่เราได้กำหนดไว้ ข้อเสนอเชิงนโยบายทั้ง 5 ข้อนี้ ถูกออกแบบมาเพื่อ &quot;สกัดกั้น&quot; ปัญหาและขับเคลื่อนตัวเลข KPI อย่างเป็นเหตุเป็นผล ดังนี้:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🎯</span>
                  <h3 className="font-bold text-white text-sm">KPI 1: ลดการเกิดเหตุซ้ำในพื้นที่เดิม <span className="text-slate-500">(จากฐาน 877 เคส)</span></h3>
                </div>
                <p className="text-sm text-slate-400">
                  <strong className="text-slate-300">กลไก:</strong> สถิติ 877 เคส ส่วนหนึ่งคือ &quot;การกระทำผิดซ้ำ&quot; เพราะผู้ก่อเหตุได้ใจจากการไกล่เกลี่ย การใช้ <strong className="text-rose-400">นโยบายที่ 1 (Zero Tolerance)</strong> ควบคู่ <strong className="text-emerald-400">นโยบายที่ 4 (Legal Protection)</strong> จะแยกผู้กระทำออกทันที ลดตัวเลข &quot;Repeat Offender&quot; อย่างมีนัยสำคัญ
                </p>
              </div>

              <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 hover:border-amber-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🎯</span>
                  <h3 className="font-bold text-white text-sm">KPI 2: ลดเคสใน Hotspot พื้นที่สีแดงเข้ม <span className="text-slate-500">(กทม.)</span></h3>
                </div>
                <p className="text-sm text-slate-400">
                  <strong className="text-slate-300">กลไก:</strong> กทม. เป็นสังคมเมืองหนาแน่น เกิดเหตุช่วงค่ำ <strong className="text-indigo-400">นโยบายที่ 3 (Proactive Rescue)</strong> เปลี่ยนเพื่อนบ้านให้เป็น &quot;ตาสับปะรด&quot; ที่กล้าแจ้งเหตุ ผนวก <strong className="text-blue-400">นโยบายที่ 5 (Safe Haven)</strong> ดึงเหยื่อออกมาระหว่างคืน ตัดตอนก่อนลุกลาม
                </p>
              </div>

              <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 hover:border-rose-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🎯</span>
                  <h3 className="font-bold text-white text-sm">KPI 3: ลดการเข้าถึงสารเสพติด/สุราในกลุ่มเสี่ยง</h3>
                </div>
                <p className="text-sm text-slate-400">
                  <strong className="text-slate-300">กลไก:</strong> ตอบโจทย์ตรงจุดด้วย <strong className="text-amber-400">นโยบายที่ 2 (Targeted Suppression &amp; Alcohol Ban)</strong> การบังคับบำบัดและ Blacklist ห้ามขายแอลกอฮอล์แก่ผู้มีประวัติ คือการ &quot;ปิดสวิตช์&quot; ตัวเร่งปฏิกิริยา (Trigger) ก่อนที่สติจะถูกทำลาย
                </p>
              </div>

              <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🎯</span>
                  <h3 className="font-bold text-white text-sm">KPI 4: เพิ่มช่องทางเข้าถึงการช่วยเหลือ <span className="text-slate-500">(กลุ่มเปราะบาง)</span></h3>
                </div>
                <p className="text-sm text-slate-400">
                  <strong className="text-slate-300">กลไก:</strong> เหยื่อแจ้งเหตุเองเพียง <strong className="text-rose-400">14.5%</strong> <strong className="text-indigo-400">นโยบายที่ 3 (Proactive Rescue)</strong> อุดรอยรั่วนี้ ทำให้กลุ่มเปราะบาง (หญิงและผู้สูงอายุ) เข้าถึงความช่วยเหลือผ่านการแจ้งของบุคคลที่สาม โดยพลเมืองดีก็ปลอดภัย
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Common Footer Conclusion */}
      <div className="p-6 md:p-8 bg-slate-900/50 border-t border-slate-800">
        <div className="bg-slate-950 border border-slate-800 border-l-4 border-l-rose-500 text-slate-300 rounded-xl p-6 md:p-8 shadow-lg">
          <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
            <span>🏁</span> บทสรุปส่งท้าย: &quot;เพราะความรุนแรงไม่ใช่เรื่องส่วนตัว&quot;
          </h3>
          <blockquote className="border-l-4 border-slate-700 pl-4 py-2 italic text-slate-400 leading-relaxed text-sm md:text-base">
            <p className="mb-4">
              &quot;ข้อมูลสถิติ 877 เคสนี้ ไม่ใช่แค่ตัวเลขบนกราฟ แต่มันคือ <strong className="text-white text-lg">&apos;เสียงตะโกนที่ไร้เสียง&apos;</strong> ของเหยื่อที่ถูกกักขังอยู่ในบ้าน ข้อมูลพิสูจน์แล้วว่าระบบตั้งรับแบบเดิมล้มเหลว เพราะเรามักจะไปถึงเมื่อสายเกินไป...
            </p>
            <p>
              ข้อเสนอเชิงนโยบายทั้ง 5 ข้อนี้ จึงไม่ใช่แค่การแก้กฎหมาย แต่คือการ <strong className="text-white">&apos;รื้อถอนวัฒนธรรมความเงียบ&apos;</strong> และสร้างระบบที่โปร่งใสพอที่จะทำให้พลเมืองดีกล้าขัดจังหวะความรุนแรง และทำให้เหยื่อมั่นใจว่ารัฐมีพื้นที่ปลอดภัยรออยู่จริง ไม่ว่าจะเป็นเวลาบ่ายหรือค่ำก็ตาม&quot;
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
