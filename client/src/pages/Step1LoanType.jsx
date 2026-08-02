import { useContext } from "react";
import { LoanContext } from "../context/LoanContext";

function Step1LoanType() {
  const { formData, setFormData } = useContext(LoanContext);

  const handleNext = () => {
    if (formData.loanType === "") {
      alert("Please Select Loan Type");
      return;
    }

    alert("Step 1 Completed");
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">

      <div
        className="card shadow-lg p-5"
        style={{ width: "500px", borderRadius: "20px" }}
      >

        <h2 className="text-center mb-4">
          Loan Application Wizard
        </h2>

        <h5 className="mb-4 text-primary">
          Step 1 : Select Loan Type
        </h5>

        <select
          className="form-select mb-4"
          value={formData.loanType}
          onChange={(e) =>
            setFormData({
              ...formData,
              loanType: e.target.value,
            })
          }
        >
          <option value="">Choose Loan Type</option>
          <option>Personal Loan</option>
          <option>Home Loan</option>
          <option>Business Loan</option>
        </select>

        <button
          className="btn btn-primary"
          onClick={handleNext}
        >
          Next →
        </button>

      </div>

    </div>
  );
}

export default Step1LoanType;