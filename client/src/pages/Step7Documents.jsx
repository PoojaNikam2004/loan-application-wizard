import Layout from "../components/Layout";
import Progress from "../components/Progress";
import StepHeader from "../components/StepHeader";
import NavigationButton from "../components/NavigationButton";
import Stepper from "../components/Stepper";

function Step7Documents({
  nextStep,
  prevStep,
  formData,
  setFormData,
}) {

  const uploadFile = async (e, field) => {

    const file = e.target.files[0];

    if (!file) return;

    const data = new FormData();
    data.append("document", file);

    try {

      const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: data,
      });

      console.log("Status:", response.status);

      const result = await response.json();

      console.log("Result:", result);

      setFormData({
        ...formData,
        [field]: result.path,
      });

    } catch (err) {

      console.log(err);

      alert("Upload Failed");

    }

  };

  const handleNext = () => {

    if (
      !formData.aadhaarFile ||
      !formData.panFile ||
      !formData.salarySlip ||
      !formData.bankStatement ||
      !formData.photo
    ) {

      alert("Please upload all documents");

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
        subtitle="Upload all required documents."
      />

      <div className="mb-3">

        <label className="form-label fw-bold">
          Aadhaar Card
        </label>

        <input
          type="file"
          className="form-control"
          onChange={(e) => uploadFile(e, "aadhaarFile")}
        />

      </div>

      <div className="mb-3">

        <label className="form-label fw-bold">
          PAN Card
        </label>

        <input
          type="file"
          className="form-control"
          onChange={(e) => uploadFile(e, "panFile")}
        />

      </div>

      <div className="mb-3">

        <label className="form-label fw-bold">
          Salary Slip
        </label>

        <input
          type="file"
          className="form-control"
          onChange={(e) => uploadFile(e, "salarySlip")}
        />

      </div>

      <div className="mb-3">

        <label className="form-label fw-bold">
          Bank Statement
        </label>

        <input
          type="file"
          className="form-control"
          onChange={(e) => uploadFile(e, "bankStatement")}
        />

      </div>

      <div className="mb-4">

        <label className="form-label fw-bold">
          Passport Size Photo
        </label>

        <input
          type="file"
          accept="image/*"
          className="form-control"
          onChange={(e) => uploadFile(e, "photo")}
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