const express = require("express");
const multer = require("multer");
const XLSX = require("xlsx");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// Ensure uploads directory exists
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// Route to upload Excel file
app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded successfully!");
});

// Route to submit form data and append it to the Excel sheet
app.post("/submit", (req, res) => {
  const { fullName, designation, organisation, city, phoneNumber } = req.body;

  // Load the existing workbook or create a new one if it doesn't exist
  const filePath = path.join(__dirname, "uploads", "form_responses.xlsx");
  let workbook;

  if (fs.existsSync(filePath)) {
    workbook = XLSX.readFile(filePath);
  } else {
    workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(
      workbook,
      XLSX.utils.aoa_to_sheet([
        ["Full Name", "Designation", "Organisation", "City", "Phone Number"],
      ]),
      "Form Responses"
    );
  }

  // Append new data
  const newRow = [fullName, designation, organisation, city, phoneNumber];
  const worksheet = workbook.Sheets["Form Responses"];

  const range = XLSX.utils.decode_range(worksheet["!ref"]);
  const rowIndex = range.e.r + 1; // Next row index

  // Add new row data
  newRow.forEach((value, index) => {
    worksheet[XLSX.utils.encode_cell({ r: rowIndex, c: index })] = { v: value };
  });

  // Update the range reference
  worksheet["!ref"] = XLSX.utils.encode_range(range.s, {
    r: rowIndex,
    c: range.e.c,
  });

  // Write the updated workbook back to file
  XLSX.writeFile(workbook, filePath);

  res.send("Form data submitted successfully!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
