import {
  StaffRow,
  aggregateCounts,
  ageFromDOB,
  yearsFrom,
  histogram,
  excelDateToJS,
  asCell
} from "./dataUtils";

/** KPI totals */
export function computeKPIs(rows: StaffRow[]) {
  const total = rows.length;
  const verified = rows.filter((r) => !!r["NIN Verified"]).length;
  const biometricCaptured = rows.filter(
    (r) => !!r["Biometric ID (ZKTeco User ID)"]
  ).length;
  const pctVerified = total ? Math.round((verified / total) * 100) : 0;

  // ✅ Doctors: MBBCH or MBBS
  const doctors = rows.filter((r) => {
    const raw = r["Entry Qualification Title"];
    const title =
      typeof raw === "string" ? raw.toUpperCase() : "";
    return title.includes("MBBCH") || title.includes("MBBS");
  }).length;

  // ✅ Groups (safe normalization)
  const normalizeGroup = (g: unknown): string =>
    typeof g === "string" ? g.trim().toUpperCase() : "UNKNOWN";

  const imsuth = rows.filter((r) => normalizeGroup(r.Group) === "IMSUTH").length;
  const issh = rows.filter((r) => normalizeGroup(r.Group) === "ISSH").length;
  const isphcda = rows.filter((r) => normalizeGroup(r.Group) === "ISPHCDA").length;
  const hmb = rows.filter((r) => normalizeGroup(r.Group) === "HMB").length;
  const smoh = rows.filter((r) => normalizeGroup(r.Group) === "SMOH").length;

  return {
    total,
    verified,
    biometricCaptured,
    pctVerified,
    doctors,
    imsuth,
    issh,
    isphcda,
    hmb,
    smoh,
  };
}

/** By Group / Institution */
export function byGroup(rows: StaffRow[]) {
  return aggregateCounts(rows, (r) =>
    typeof r.Group === "string" ? r.Group : null
  );
}

/** By Department */
export function byDepartment(rows: StaffRow[]) {
  return aggregateCounts(rows, (r) =>
    typeof r["Present Department"] === "string"
      ? r["Present Department"]
      : null
  );
}

/** Gender distribution */
export function byGender(rows: StaffRow[]) {
  return aggregateCounts(rows, (r) =>
    typeof r.Gender === "string" ? r.Gender : null
  );
}

/** Age histogram */
export function ageHistogram(rows: StaffRow[]) {
  const bins = [
    { label: "20-29", min: 20, max: 29 },
    { label: "30-39", min: 30, max: 39 },
    { label: "40-49", min: 40, max: 49 },
    { label: "50+", min: 50 },
  ];
  return histogram(rows, (r) => {
    const dob = excelDateToJS(asCell(r["Date of Birth"]));
    return dob ? ageFromDOB(dob) : null;
  }, bins);
}

/** Years of service histogram */
export function serviceYearsHistogram(rows: StaffRow[]) {
  const bins = [
    { label: "0-5", min: 0, max: 5 },
    { label: "6-10", min: 6, max: 10 },
    { label: "11-20", min: 11, max: 20 },
    { label: "21+", min: 21 },
  ];
  return histogram(rows, (r) => {
    const start = excelDateToJS(asCell(r["Date of First Appointment"]));
    return start ? yearsFrom(start) : null;
  }, bins);
}

/** Marital Status distribution */
export function byMaritalStatus(rows: StaffRow[]) {
  return aggregateCounts(rows, (r) =>
    typeof r["Marital Status"] === "string" ? r["Marital Status"] : "Unknown"
  );
}
