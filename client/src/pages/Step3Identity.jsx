import Layout from "../components/Layout";
import Progress from "../components/Progress";
import StepHeader from "../components/StepHeader";
import NavigationButton from "../components/NavigationButton";
import Stepper from "../components/Stepper";


function Step3Identity({ nextStep, prevStep, formData, setFormData }) {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    if (!formData.pan || !formData.aadhaar) {
      alert("Please fill all fields");
      return;
    }
    nextStep();
  };

  return (
    <Layout>
      <Progress step={3} />
      <Stepper step={3}/>
      <StepHeader title="Step 3 : Identity Details" />

      <div className="mb-3">
        <label className="form-label fw-bold">PAN Number</label>
        <input
          type="text"
          className="form-control"
          name="pan"
          value={formData.pan}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">Aadhaar Number</label>
        <input
          type="text"
          className="form-control"
          name="aadhaar"
          value={formData.aadhaar}
          onChange={handleChange}
        />
      </div>

      <NavigationButton prevStep={prevStep} nextStep={handleNext} />
    </Layout>
  );
}

export default Step3Identity;