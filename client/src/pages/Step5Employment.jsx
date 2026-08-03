import Layout from "../components/Layout";
import Progress from "../components/Progress";
import Stepper from "../components/Stepper";
import StepHeader from "../components/StepHeader";
import NavigationButton from "../components/NavigationButton";

function Step5Employment({
  nextStep,
  prevStep,
  formData,
  setFormData,
}) {

  const handleNext = () => {

    if (
      !formData.employmentType ||
      !formData.companyName ||
      !formData.monthlyIncome
    ) {
      alert("Please fill all employment details.");
      return;
    }

    nextStep();
  };

  return (

    <Layout formData={formData}>

      <Progress step={5} />
      <Stepper step={5} />

      <StepHeader
        title="Employment Details"
        subtitle="Provide your employment and income information."
      />

      <div className="mb-3">

        <label className="form-label fw-bold">
          Employment Type
        </label>

        <select
          className="form-select"
          value={formData.employmentType || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              employmentType: e.target.value,
            })
          }
        >
          <option value="">Select Employment Type</option>
          <option value="Salaried">Salaried</option>
          <option value="Self Employed">Self Employed</option>
          <option value="Business Owner">Business Owner</option>
          <option value="Student">Student</option>
          <option value="Retired">Retired</option>
        </select>

      </div>

      <div className="mb-3">

        <label className="form-label fw-bold">
          Company / Organization Name
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="Enter Company Name"
          value={formData.companyName || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              companyName: e.target.value,
            })
          }
        />

      </div>

      <div className="mb-4">

        <label className="form-label fw-bold">
          Monthly Income (₹)
        </label>

        <input
          type="number"
          className="form-control"
          placeholder="Enter Monthly Income"
          value={formData.monthlyIncome || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              monthlyIncome: e.target.value,
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

export default Step5Employment;