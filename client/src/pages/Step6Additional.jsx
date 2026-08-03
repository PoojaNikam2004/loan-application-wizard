import Layout from "../components/Layout";
import Progress from "../components/Progress";
import Stepper from "../components/Stepper";
import StepHeader from "../components/StepHeader";
import NavigationButton from "../components/NavigationButton";

function Step6Additional({
  nextStep,
  prevStep,
  formData,
  setFormData,
}) {

  const handleNext = () => {

    if (
      !formData.loanAmount ||
      !formData.loanTenure ||
      !formData.loanPurpose
    ) {
      alert("Please fill all loan details.");
      return;
    }

    nextStep();
  };

  return (

    <Layout formData={formData}>

      <Progress step={6} />
      <Stepper step={6} />

      <StepHeader
        title="Loan Details"
        subtitle="Enter your loan requirements."
      />

      {/* Loan Amount */}

      <div className="mb-3">

        <label className="form-label fw-bold">
          Loan Amount (₹)
        </label>

        <input
          type="number"
          className="form-control"
          placeholder="Enter Loan Amount"
          value={formData.loanAmount || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              loanAmount: e.target.value,
            })
          }
        />

      </div>

      {/* Loan Tenure */}

      <div className="mb-3">

        <label className="form-label fw-bold">
          Loan Tenure
        </label>

        <select
          className="form-select"
          value={formData.loanTenure || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              loanTenure: e.target.value,
            })
          }
        >

          <option value="">Select Tenure</option>
          <option value="12 Months">12 Months</option>
          <option value="24 Months">24 Months</option>
          <option value="36 Months">36 Months</option>
          <option value="48 Months">48 Months</option>
          <option value="60 Months">60 Months</option>

        </select>

      </div>

      {/* Loan Purpose */}

      <div className="mb-4">

        <label className="form-label fw-bold">
          Loan Purpose
        </label>

        <textarea
          className="form-control"
          rows="3"
          placeholder="Write purpose of loan..."
          value={formData.loanPurpose || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              loanPurpose: e.target.value,
            })
          }
        />

      </div>

      <NavigationButton
        prevStep={prevStep}
        nextStep={handleNext}
      />

    </Layout>

  );
}

export default Step6Additional;