
function Step1LoanType({ nextStep, formData, setFormData }) {

 

  const handleNext = () => {

  if (formData.loanType === "") {
    alert("Please Select Loan Type");
    return;
  }

  nextStep();

};

  return (

    <div className="row justify-content-center">

      <div className="col-md-6">

        <div className="card shadow-lg p-4">

          <h2 className="text-center mb-4">
            Loan Application Wizard
          </h2>

          <h5 className="mb-3">
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
  <option value="Personal">Personal Loan</option>
  <option value="Home">Home Loan</option>
  <option value="Business">Business Loan</option>
</select>

          <button
            className="btn btn-primary"
            onClick={handleNext}
          >
            Next →
          </button>

        </div>

      </div>

    </div>

  );

}

export default Step1LoanType;