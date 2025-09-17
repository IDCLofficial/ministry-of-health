// lib/data/dataUtils.ts
export type RawRow = Record<string, unknown>;
export interface StaffRow {
  "Capture Ref"?: string;
  Group?: string;
  "Name of Staff"?: string;
  "Imo Number / Staff ID"?: string;
  "Date of Birth"?: number | string;
  Gender?: string;
  NIN?: string;
  Phone?: string;
  "Marital Status"?: string;
  "Current Grade Level"?: string;
  "Present Department"?: string;
  "Fslc Title"?: string;
  "Fslc Year"?: string | number;
  "Entry Qualification Title"?: string;
  "Entry Qualification Year"?: string | number;
  "Additional Qualification1 Title"?: string;
  "Additional Qualification1 Year"?: string | number;
  "First Promotion Grade"?: string;
  "Date of First Appointment"?: number | string;
  "First Promotion Date"?: number | string;
  "Date of Last Promotion"?: number | string;
  "Biometric ID (ZKTeco User ID)"?: string | number;
  "NIN Verified"?: boolean;
  State?: string;

  // fallback for unexpected columns
  [key: string]: unknown;
}


/** Convert Excel serial (e.g. 44197) to JS Date.
 * Excel serials are days since 1899-12-31 with a 1900 leap-year bug.
 * If value is already ISO string or number < 3000, attempt parse.
 */
export function asCell<T extends string | number | null | undefined>(
  value: unknown
): T | null {
  return (typeof value === "string" || typeof value === "number" || value == null)
    ? (value as T)
    : null;
}

export function excelSerialToDate(serial: number | string | undefined): Date | null {
  if (serial === undefined || serial === null || serial === "") return null;

  if (typeof serial === "string") {
    const s = serial.trim();
    const parsed = Date.parse(s);
    if (!isNaN(parsed)) return new Date(parsed);
    const n = Number(s);
    if (!Number.isNaN(n)) serial = n;
  }

  if (typeof serial === "number") {
    // Excel's epoch: 1899-12-31; Excel incorrectly treats 1900 as leap year, so add correction
    const utc_days = Math.floor(serial - 25569);
    const utc_value = utc_days * 86400; // seconds
    const date = new Date(utc_value * 1000);
    // Adjust by the fractional day part if present
    const fractional = serial - Math.floor(serial);
    if (fractional > 0) date.setSeconds(date.getSeconds() + Math.round(fractional * 86400));
    return date;
  }

  return null;
}

// export function ageFromDOB(dobSerial: number | string | undefined, asOf = new Date()): number | null {
//   const d = excelSerialToDate(dobSerial);
//   if (!d) return null;
//   let age = asOf.getFullYear() - d.getFullYear();
//   const m = asOf.getMonth() - d.getMonth();
//   if (m < 0 || (m === 0 && asOf.getDate() < d.getDate())) age--;
//   return age;
// }

// export function yearsFrom(serialDate: number | string | undefined, asOf = new Date()): number | null {
//   const d = excelSerialToDate(serialDate);
//   if (!d) return null;
//   let yrs = asOf.getFullYear() - d.getFullYear();
//   const m = asOf.getMonth() - d.getMonth();
//   if (m < 0 || (m === 0 && asOf.getDate() < d.getDate())) yrs--;
//   return yrs;
// }

/** Generic aggregator: counts by keyAccessor (string) */
export function aggregateCounts(rows: RawRow[], keyAccessor: (r: RawRow) => string | null | undefined) {
  const counts: Record<string, number> = {};
  rows.forEach((r) => {
    const key = (keyAccessor(r) ?? "Unknown").toString().trim() || "Unknown";
    counts[key] = (counts[key] || 0) + 1;
  });
  return Object.entries(counts)
    .map(([k, v]) => ({ key: k, count: v }))
    .sort((a, b) => b.count - a.count);
}

// Convert Excel serial number to JS Date
export function excelDateToJS(serial: number | string | null | undefined): Date | null {
  if (serial == null) return null;
  const num = typeof serial === "string" ? parseFloat(serial) : serial;
  if (isNaN(num)) return null;
  // Excel counts from Jan 1, 1900 → JS counts from Jan 1, 1970 (offset = 25569 days)
  const utc_days = Math.floor(num - 25569);
  const utc_value = utc_days * 86400; // seconds
  return new Date(utc_value * 1000); // JS Date in ms
}

// Age from DOB (works with Date | string | number)
export function ageFromDOB(dob: Date | string | number | null): number | null {
  let date: Date | null = null;

  if (dob instanceof Date) {
    date = dob;
  } else if (typeof dob === "number") {
    date = excelDateToJS(dob);
  } else if (typeof dob === "string") {
    const parsed = Date.parse(dob);
    if (!isNaN(parsed)) date = new Date(parsed);
  }

  if (!date) return null;

  const today = new Date();
  let age = today.getFullYear() - date.getFullYear();
  const m = today.getMonth() - date.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
    age--;
  }
  return age;
}

// Years of service (works with Date | string | number)
export function yearsFrom(start: Date | string | number | null): number | null {
  let date: Date | null = null;

  if (start instanceof Date) {
    date = start;
  } else if (typeof start === "number") {
    date = excelDateToJS(start);
  } else if (typeof start === "string") {
    const parsed = Date.parse(start);
    if (!isNaN(parsed)) date = new Date(parsed);
  }

  if (!date) return null;

  const today = new Date();
  let years = today.getFullYear() - date.getFullYear();
  const m = today.getMonth() - date.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
    years--;
  }
  return years;
}



/** Histogram bins for numeric metric (age, years of service) */
export function histogram(rows: RawRow[], valueAccessor: (r: RawRow) => number | null | undefined, bins: { label: string; min?: number; max?: number }[]) {
  const res = bins.map((b) => ({ label: b.label, count: 0 }));
  rows.forEach((r) => {
    const val = valueAccessor(r);
    if (val === null || val === undefined || isNaN(val)) {
      // optionally count as "Unknown"
      return;
    }
    for (let i = 0; i < bins.length; i++) {
      const { min, max } = bins[i];
      if ((min === undefined || val >= min) && (max === undefined || val <= max)) {
        res[i].count++;
        break;
      }
    }
  });
  return res;
}
