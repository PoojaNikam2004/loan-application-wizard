import Layout from "../components/Layout";
import Progress from "../components/Progress";
import StepHeader from "../components/StepHeader";
import NavigationButton from "../components/NavigationButton";

function Step5Employment({ nextStep, prevStep, formData, setFormData }) {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      <Progress step={5} />
      <StepHeader title="Step 5 : Employment Details" />

      <input
        className="form-control mb-3"
        placeholder="Employment Type"
        name="employmentType"
        value={formData.employmentType}
        onChange={handleChange}
      />

      <input
        className="form-control mb-3"
        placeholder="Company Name"
        name="company"
        value={formData.company}
        onChange={handleChange}
      />

      <input
        className="form-control mb-3"
        placeholder="Monthly Income"
        name="salary"
        value={formData.salary}
        onChange={handleChange}
      />

      <NavigationButton prevStep={prevStep} nextStep={nextStep} />
    </Layout>
  );
}

export default Step5Employment;