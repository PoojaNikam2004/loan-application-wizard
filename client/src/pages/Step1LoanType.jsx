import Layout from "../components/Layout";
import Progress from "../components/Progress";
import StepHeader from "../components/StepHeader";
import NavigationButton from "../components/NavigationButton";

function Step1LoanType({ nextStep, formData, setFormData }) {

  const handleNext = () => {
    if (formData.loanType === "") {
      alert("Please Select Loan Type");
      return;
    }

    nextStep();
  };

  return (
    <Layout>

      <Progress step={1} />

      <StepHeader title="Step 1 : Loan Details" />

      <div className="mb-4">

        <label className="form-label fw-bold">
          Loan Type
        </label>

        <select
          className="form-select"
          value={formData.loanType}
          onChange={(e) =>
            setFormData({
              ...formData,
              loanType: e.target.value,
            })
          }
        >
          <option value="">Choose Loan Type</option>
          <option value="Personal Loan">Personal Loan</option>
          <option value="Home Loan">Home Loan</option>
          <option value="Business Loan">Business Loan</option>
          <option value="Education Loan">Education Loan</option>
          <option value="Vehicle Loan">Vehicle Loan</option>
        </select>

      </div>

      <NavigationButton
        isFirst={true}
        nextStep={handleNext}
      />

    </Layout>
  );
}

export default Step1LoanType;