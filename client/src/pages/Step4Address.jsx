import Layout from "../components/Layout";
import Progress from "../components/Progress";
import Stepper from "../components/Stepper";
import StepHeader from "../components/StepHeader";
import NavigationButton from "../components/NavigationButton";

function Step4Address({
  nextStep,
  prevStep,
  formData,
  setFormData,
}) {

  const handleNext = () => {

    if (
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.pincode
    ) {
      alert("Please fill all address details.");
      return;
    }

    nextStep();
  };

  return (

    <Layout formData={formData}>

      <Progress step={4} />
      <Stepper step={4} />

      <StepHeader
        title="Address Details"
        subtitle="Enter your current residential address."
      />

      <div className="mb-3">

        <label className="form-label fw-bold">
          Full Address
        </label>

        <textarea
          className="form-control"
          rows="3"
          value={formData.address || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              address: e.target.value,
            })
          }
        />

      </div>

      <div className="row">

        <div className="col-md-6 mb-3">

          <label className="form-label fw-bold">
            City
          </label>

          <input
            type="text"
            className="form-control"
            value={formData.city || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                city: e.target.value,
              })
            }
          />

        </div>

        <div className="col-md-6 mb-3">

          <label className="form-label fw-bold">
            State
          </label>

          <input
            type="text"
            className="form-control"
            value={formData.state || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                state: e.target.value,
              })
            }
          />

        </div>

      </div>

      <div className="mb-4">

        <label className="form-label fw-bold">
          Pincode
        </label>

        <input
          type="text"
          className="form-control"
          maxLength="6"
          value={formData.pincode || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              pincode: e.target.value,
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

export default Step4Address;