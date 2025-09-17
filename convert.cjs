// to convert .xlxs to json; run: node convert.cjs to execute

const XLSX = require("xlsx");
const fs = require("fs");

// 1. Load the Excel file
const workbook = XLSX.readFile("public/data/staff.xlsx");

// 2. Pick the first sheet
const sheet = workbook.Sheets[workbook.SheetNames[0]];

// 3. Convert sheet → JSON
const data = XLSX.utils.sheet_to_json(sheet);

// 4. Save JSON into /public/data
fs.writeFileSync("public/data/staff.json", JSON.stringify(data, null, 2));

console.log("✅ staff.json created at /public/data/staff.json");