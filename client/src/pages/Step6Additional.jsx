import Layout from "../components/Layout";
import Progress from "../components/Progress";
import StepHeader from "../components/StepHeader";
import NavigationButton from "../components/NavigationButton";
import Stepper from "../components/Stepper";


function Step6Additional({ nextStep, prevStep, formData, setFormData }) {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      <Progress step={6} />
      <Stepper step={6}/>
      <StepHeader title="Step 6 : Loan Details" />

      <input
        className="form-control mb-3"
        placeholder="Loan Amount"
        name="loanAmount"
        value={formData.loanAmount}
        onChange={handleChange}
      />

      <select
        className="form-select mb-3"
        name="loanTenure"
        value={formData.loanTenure}
        onChange={handleChange}
      >
        <option value="">Select Loan Tenure</option>
        <option>12 Months</option>
        <option>24 Months</option>
        <option>36 Months</option>
        <option>60 Months</option>
      </select>

      <textarea
        className="form-control"
        rows="4"
        placeholder="Purpose of Loan"
        name="purpose"
        value={formData.purpose}
        onChange={handleChange}
      />

      <NavigationButton prevStep={prevStep} nextStep={nextStep} />
    </Layout>
  );
}

export default Step6Additional;