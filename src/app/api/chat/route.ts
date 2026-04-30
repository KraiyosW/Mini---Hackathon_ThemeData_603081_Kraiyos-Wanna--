import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    // Read data from local JSON files
    const databasesPath = path.join(process.cwd(), "src/databases");
    
    const incidents = JSON.parse(fs.readFileSync(path.join(databasesPath, "incidents.json"), "utf8"));
    const victims = JSON.parse(fs.readFileSync(path.join(databasesPath, "victims.json"), "utf8"));

    // --- Dynamic Aggregation for Deeper Insights ---
    
    // 1. Top 10 Provinces
    const provinceCounts: Record<string, number> = {};
    incidents.forEach((i: any) => {
      provinceCounts[i.Province] = (provinceCounts[i.Province] || 0) + 1;
    });
    const topProvinces = Object.entries(provinceCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

    // 2. Locations (Locale)
    const localeCounts: Record<string, number> = {};
    incidents.forEach((i: any) => {
      localeCounts[i.Locale] = (localeCounts[i.Locale] || 0) + 1;
    });

    // 3. Time Periods (Period)
    const periodCounts: Record<string, number> = {};
    incidents.forEach((i: any) => {
      periodCounts[i.Period] = (periodCounts[i.Period] || 0) + 1;
    });

    // 4. Relationships (Relation Type)
    const relationCounts: Record<string, number> = {};
    victims.forEach((v: any) => {
      relationCounts[v["Relation Type"]] = (relationCounts[v["Relation Type"]] || 0) + 1;
    });
    const topRelations = Object.entries(relationCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    // 5. Factors
    const factors = {
      alcohol: victims.filter((v: any) => v.Alcohol === "ใช่").length,
      drugs: victims.filter((v: any) => v.Drug === "ใช่").length,
      rage: victims.filter((v: any) => v.Rage === "ใช่").length,
      stress: victims.filter((v: any) => v.EconomicsStress === "ใช่").length,
      jealous: victims.filter((v: any) => v.Jealous === "ใช่").length,
    };

    const context = `
คุณเป็น AI Data Analyst ผู้เชี่ยวชาญด้านข้อมูลความรุนแรงในครอบครัว (Thailand Domestic Violence Dashboard)
ตอบคำถามด้วยข้อมูลสถิติจริงที่สรุปมาให้ด้านล่างนี้เท่านั้น:

สรุปข้อมูลสถิติ (จากเคสทั้งหมด ${incidents.length} เคส):

1. จังหวัดที่เกิดเหตุสูงสุด (Top 10):
${topProvinces.map(([name, count]) => `- ${name}: ${count} เคส`).join("\n")}

2. สถานที่เกิดเหตุ (Locale):
${Object.entries(localeCounts).map(([name, count]) => `- ${name}: ${count} เคส`).join("\n")}

3. ช่วงเวลาที่เกิดเหตุบ่อยที่สุด:
${Object.entries(periodCounts).map(([name, count]) => `- ${name}: ${count} เคส`).join("\n")}

4. ความสัมพันธ์ระหว่างผู้กระทำและเหยื่อ (Top 5):
${topRelations.map(([name, count]) => `- ${name}: ${count} เคส`).join("\n")}

5. ปัจจัยกระตุ้นความรุนแรง:
- สุรา: ${factors.alcohol} ราย
- ยาเสพติด: ${factors.drugs} ราย
- บันดาลโทสะ: ${factors.rage} ราย
- ความหึงหวง: ${factors.jealous} ราย
- ความเครียดทางเศรษฐกิจ: ${factors.stress} ราย

แนวทางการตอบ:
- ตอบเป็นภาษาไทยที่สุภาพ เป็นทางการ และให้ข้อมูลที่ชัดเจนตามตัวเลขด้านบน
- หากผู้ใช้ถามถึงจังหวัดหรือประเด็นที่ไม่มีในสรุปด้านบน ให้ตอบว่า "ขออภัยครับ ข้อมูลส่วนนี้ไม่มีในฐานข้อมูลสรุปปัจจุบัน"
- สรุปให้เห็นภาพรวมและแนวโน้มที่ชัดเจน
`;

    const apiKey = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY || process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      throw new Error("Missing OpenRouter API Key.");
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "Domestic Violence Dashboard",
      },
      body: JSON.stringify({
        model: "google/gemini-2.0-flash-001",
        messages: [
          { role: "system", content: context },
          ...messages
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "OpenRouter Error");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
