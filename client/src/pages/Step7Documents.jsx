import Layout from "../components/Layout";
import Progress from "../components/Progress";
import Stepper from "../components/Stepper";
import StepHeader from "../components/StepHeader";
import NavigationButton from "../components/NavigationButton";

function Step7Documents({
  nextStep,
  prevStep,
  formData,
  setFormData,
}) {

  const handleNext = () => {

    if (
      !formData.aadhaarFile ||
      !formData.panFile ||
      !formData.salarySlip ||
      !formData.bankStatement ||
      !formData.photo
    ) {
      alert("Please upload all required documents.");
      return;
    }

    nextStep();
  };

  return (

    <Layout formData={formData}>

      <Progress step={7} />
      <Stepper step={7} />

      <StepHeader
        title="Document Upload"
        subtitle="Upload the required documents."
      />

      <div className="mb-3">
        <label className="form-label fw-bold">Aadhaar Card</label>
        <input
          type="file"
          className="form-control"
          onChange={(e)=>
            setFormData({
              ...formData,
              aadhaarFile:e.target.files[0]
            })
          }
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">PAN Card</label>
        <input
          type="file"
          className="form-control"
          onChange={(e)=>
            setFormData({
              ...formData,
              panFile:e.target.files[0]
            })
          }
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">Salary Slip</label>
        <input
          type="file"
          className="form-control"
          onChange={(e)=>
            setFormData({
              ...formData,
              salarySlip:e.target.files[0]
            })
          }
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">Bank Statement</label>
        <input
          type="file"
          className="form-control"
          onChange={(e)=>
            setFormData({
              ...formData,
              bankStatement:e.target.files[0]
            })
          }
        />
      </div>

      <div className="mb-4">
        <label className="form-label fw-bold">Passport Size Photo</label>
        <input
          type="file"
          className="form-control"
          accept="image/*"
          onChange={(e)=>
            setFormData({
              ...formData,
              photo:e.target.files[0]
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

export default Step7Documents;