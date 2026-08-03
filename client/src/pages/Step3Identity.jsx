import Layout from "../components/Layout";
import Progress from "../components/Progress";
import Stepper from "../components/Stepper";
import StepHeader from "../components/StepHeader";
import NavigationButton from "../components/NavigationButton";

function Step3Identity({ nextStep, prevStep, formData, setFormData }) {

  const handleNext = () => {
    if (!formData.aadhaar || !formData.pan) {
      alert("Please fill all fields");
      return;
    }
    nextStep();
  };

  return (
    <Layout formData={formData}>

      <Progress step={3}/>
      <Stepper step={3}/>

      <StepHeader
        title="Identity Verification"
        subtitle="Enter your identity details."
      />

      <div className="mb-3">
        <label className="form-label">Aadhaar Number</label>
        <input
          type="text"
          className="form-control"
          value={formData.aadhaar || ""}
          onChange={(e)=>
            setFormData({...formData,aadhaar:e.target.value})
          }
        />
      </div>

      <div className="mb-4">
        <label className="form-label">PAN Number</label>
        <input
          type="text"
          className="form-control"
          value={formData.pan || ""}
          onChange={(e)=>
            setFormData({...formData,pan:e.target.value})
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

export default Step3Identity;