import db from "../config/db.js";

export const applyLoan = (req, res) => {
  const {
    loan_type,
    loan_amount,
    loan_tenure,
    first_name,
    last_name,
    email,
    phone,
    aadhaar,
    pan,
    address,
    city,
    state,
    pincode,
    employment_type,
    company_name,
    monthly_income,
  } = req.body;

  const sql = `
    INSERT INTO loan_applications
    (
      loan_type,
      loan_amount,
      loan_tenure,
      first_name,
      last_name,
      email,
      phone,
      aadhaar,
      pan,
      address,
      city,
      state,
      pincode,
      employment_type,
      company_name,
      monthly_income
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      loan_type,
      loan_amount,
      loan_tenure,
      first_name,
      last_name,
      email,
      phone,
      aadhaar,
      pan,
      address,
      city,
      state,
      pincode,
      employment_type,
      company_name,
      monthly_income,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Database Error",
        });
      }

      res.status(201).json({
        success: true,
        message: "Loan Application Submitted Successfully",
      });
    }
  );
};