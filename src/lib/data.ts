import rawIncidents from "@/databases/incidents.json";
import rawOffenders from "@/databases/offenders.json";
import rawVictims from "@/databases/victims.json";

export interface IncidentRecord {
  [key: string]: string | number;
}

export const incidentsData = rawIncidents as IncidentRecord[];
export const offendersData = rawOffenders as IncidentRecord[];
export const victimsData = rawVictims as IncidentRecord[];

// Export data as incidentsData for backwards compatibility where length is needed (e.g. 877 total cases)
export const data = incidentsData; 

// Thai → English province name mapping for GeoJSON
export const provinceThaiToEng: Record<string, string> = {
  กรุงเทพมหานคร: "Bangkok Metropolis",
  กาญจนบุรี: "Kanchanaburi",
  กาฬสินธุ์: "Kalasin",
  ขอนแก่น: "Khon Kaen",
  จันทบุรี: "Chanthaburi",
  ฉะเชิงเทรา: "Chachoengsao",
  ชลบุรี: "Chon Buri",
  ชัยนาท: "Chai Nat",
  ชัยภูมิ: "Chaiyaphum",
  ตราด: "Trat",
  นครนายก: "Nakhon Nayok",
  นครพนม: "Nakhon Phanom",
  นครราชสีมา: "Nakhon Ratchasima",
  นนทบุรี: "Nonthaburi",
  บึงกาฬ: "Bueng Kan",
  บุรีรัมย์: "Buri Ram",
  ปทุมธานี: "Pathum Thani",
  ประจวบคีรีขันธ์: "Prachuap Khiri Khan",
  ปราจีนบุรี: "Prachin Buri",
  พระนครศรีอยุธยา: "Phra Nakhon Si Ayutthaya",
  มหาสารคาม: "Maha Sarakham",
  มุกดาหาร: "Mukdahan",
  ยโสธร: "Yasothon",
  ระยอง: "Rayong",
  ราชบุรี: "Ratchaburi",
  ลพบุรี: "Lop Buri",
  สมุทรปราการ: "Samut Prakan",
  สมุทรสงคราม: "Samut Songkhram",
  สมุทรสาคร: "Samut Sakhon",
  สระบุรี: "Saraburi",
  สระแก้ว: "Sa Kaeo",
  สิงห์บุรี: "Sing Buri",
  สุพรรณบุรี: "Suphan Buri",
  อ่างทอง: "Ang Thong",
  เพชรบุรี: "Phetchaburi",
  เชียงใหม่: "Chiang Mai",
  เชียงราย: "Chiang Rai",
  ลำปาง: "Lampang",
  ลำพูน: "Lamphun",
  แม่ฮ่องสอน: "Mae Hong Son",
  น่าน: "Nan",
  พะเยา: "Phayao",
  แพร่: "Phrae",
  อุตรดิตถ์: "Uttaradit",
  เลย: "Loei",
  หนองบัวลำภู: "Nong Bua Lam Phu",
  หนองคาย: "Nong Khai",
  อุดรธานี: "Udon Thani",
  สกลนคร: "Sakon Nakhon",
  อำนาจเจริญ: "Amnat Charoen",
  อุบลราชธานี: "Ubon Ratchathani",
  ศรีสะเกษ: "Si Sa Ket",
  สุรินทร์: "Surin",
  ร้อยเอ็ด: "Roi Et",
  นครสวรรค์: "Nakhon Sawan",
  อุทัยธานี: "Uthai Thani",
  กำแพงเพชร: "Kamphaeng Phet",
  สุโขทัย: "Sukhothai",
  พิษณุโลก: "Phitsanulok",
  พิจิตร: "Phichit",
  เพชรบูรณ์: "Phetchabun",
  ตาก: "Tak",
  นครปฐม: "Nakhon Pathom",
  นครศรีธรรมราช: "Nakhon Si Thammarat",
  สุราษฎร์ธานี: "Surat Thani",
  ชุมพร: "Chumphon",
  ระนอง: "Ranong",
  พังงา: "Phangnga",
  ภูเก็ต: "Phuket",
  กระบี่: "Krabi",
  ตรัง: "Trang",
  พัทลุง: "Phatthalung",
  สตูล: "Satun",
  สงขลา: "Songkhla",
  ปัตตานี: "Pattani",
  ยะลา: "Yala",
  นราธิวาส: "Narathiwat",
};

// Reverse mapping
export const provinceEngToThai: Record<string, string> = Object.fromEntries(
  Object.entries(provinceThaiToEng).map(([k, v]) => [v, k])
);

// Factor labels
export const FACTOR_KEYS = [
  "Alcohol",
  "Drug",
  "Authoritative",
  "Rage",
  "Jealous",
  "Divorce",
  "Health Problem",
  "Mental Problem",
  "Gambling Addict",
  "Economics Stress",
] as const;

export const FACTOR_LABELS: Record<string, string> = {
  Alcohol: "แอลกอฮอล์",
  Drug: "ยาเสพติด",
  Authoritative: "ใช้อำนาจ",
  Rage: "อารมณ์รุนแรง",
  Jealous: "หึงหวง",
  Divorce: "หย่าร้าง",
  "Health Problem": "ปัญหาสุขภาพ",
  "Mental Problem": "ปัญหาจิตใจ",
  "Gambling Addict": "ติดการพนัน",
  "Economics Stress": "ความเครียดเศรษฐกิจ",
};

// Computed statistics
export function getProvinceStats() {
  const counts: Record<string, number> = {};
  incidentsData.forEach((d) => {
    counts[d.Province] = (counts[d.Province] || 0) + 1;
  });
  const total = incidentsData.length || 1;
  return Object.entries(counts)
    .map(([name, count]) => ({ name, nameEng: provinceThaiToEng[name] || name, count, pct: Number(((count / total) * 100).toFixed(1)) }))
    .sort((a, b) => b.count - a.count);
}

export function getRegionStats() {
  const counts: Record<string, number> = {};
  incidentsData.forEach((d) => {
    counts[d.Regional] = (counts[d.Regional] || 0) + 1;
  });
  const total = incidentsData.length || 1;
  return Object.entries(counts)
    .map(([name, count]) => ({ name, count, pct: Number(((count / total) * 100).toFixed(1)) }))
    .sort((a, b) => b.count - a.count);
}

export function getGenderStats() {
  const counts: Record<string, number> = {};
  // Count genders mainly from victims as this is typical for measuring impact, or combine if requested. Let's use victimsData since incidents doesn't have it.
  victimsData.forEach((d) => {
    if (d.Gender) counts[d.Gender] = (counts[d.Gender] || 0) + 1;
  });
  const total = victimsData.length || 1;
  return Object.entries(counts)
    .map(([name, count]) => ({ name, count, pct: Number(((count / total) * 100).toFixed(1)) }))
    .sort((a, b) => b.count - a.count);
}

export function getAgeRangeStats(mode: "victim" | "offender" = "victim") {
  const order = [
    "วัยเด็กตอนกลาง 7 - 12 ปี",
    "วัยรุ่น 13 - 18 ปี",
    "วัยผู้ใหญ่ตอนต้น 19 - 35 ปี",
    "วัยกลางคน 36 - 59 ปี",
    "วัยสูงอายุ 60 ปีขึ้นไป",
  ];
  const counts: Record<string, number> = {};
  const dataset = mode === "victim" ? victimsData : offendersData;
  dataset.forEach((d) => {
    if (d["Age Range"]) counts[d["Age Range"]] = (counts[d["Age Range"]] || 0) + 1;
  });
  const total = dataset.length || 1;
  return order.map((name) => {
    const count = counts[name] || 0;
    return {
      name,
      shortName: name.replace(/วัย/, "").split(" ")[0],
      count,
      pct: Number(((count / total) * 100).toFixed(1)),
    };
  });
}

export function getFactorStats() {
  const totalIncidents = incidentsData.length;
  return FACTOR_KEYS.map((key) => {
    let count = 0;
    // Both offenders and victims have these flags.
    count += offendersData.filter((d) => d[key] === "ใช่").length;
    count += victimsData.filter((d) => d[key] === "ใช่").length;

    return {
      key,
      name: FACTOR_LABELS[key],
      count,
      pct: Number(((count / totalIncidents) * 100).toFixed(1)),
    };
  }).sort((a, b) => b.count - a.count);
}

export function getProvinceFactorBreakdown(provinceThai: string) {
  const filteredOffenders = offendersData.filter((d) => d.Province === provinceThai);
  const filteredVictims = victimsData.filter((d) => d.Province === provinceThai);

  return FACTOR_KEYS.map((key) => {
      let count = 0;
      count += filteredOffenders.filter((d) => d[key] === "ใช่").length;
      count += filteredVictims.filter((d) => d[key] === "ใช่").length;
      return {
        key,
        name: FACTOR_LABELS[key],
        count,
      };
  }).sort((a, b) => b.count - a.count);
}

// Province counts as map: English name → count
export function getProvinceCountMap() {
  const map: Record<string, number> = {};
  incidentsData.forEach((d) => {
    const eng = provinceThaiToEng[d.Province];
    if (eng) {
      map[eng] = (map[eng] || 0) + 1;
    }
  });
  return map;
}

export function getSourceStats() {
  const counts: Record<string, number> = {};
  incidentsData.forEach((d) => {
    const source = d["Source Type"];
    if (source && source !== "ไม่ระบุ") {
      counts[source] = (counts[source] || 0) + 1;
    }
  });
  const total = incidentsData.length || 1;
  return Object.entries(counts)
    .map(([name, count]) => ({ name, count, pct: Number(((count / total) * 100).toFixed(1)) }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 7); // Show top 7 sources
}

export function getRelationshipStats() {
  const counts: Record<string, number> = {};
  victimsData.forEach((d) => {
    const rel = d["Relation Type"];
    if (rel) {
      counts[rel] = (counts[rel] || 0) + 1;
    }
  });
  const total = victimsData.length || 1;
  return Object.entries(counts)
    .map(([name, count]) => ({ name, count, pct: Number(((count / total) * 100).toFixed(1)) }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 7); // Show top 7 relationships
}

export function getPeriodStats() {
  const counts: Record<string, number> = {};
  incidentsData.forEach((d) => {
    const period = d.Period;
    if (period && period !== "ไม่ระบุ") {
      counts[period] = (counts[period] || 0) + 1;
    }
  });
  
  const total = incidentsData.length || 1;
  const order = ["00:01 – 06:00", "06:01 – 12:00", "12:01 – 18:00", "18:01 – 00:00"];
  
  return order.map((name) => {
    const count = counts[name] || 0;
    return {
      name,
      count,
      pct: Number(((count / total) * 100).toFixed(1)),
    };
  });
}
