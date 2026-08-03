import Layout from "../components/Layout";
import Progress from "../components/Progress";
import Stepper from "../components/Stepper";
import StepHeader from "../components/StepHeader";
import NavigationButton from "../components/NavigationButton";

function Step2PersonalInfo({
  nextStep,
  prevStep,
  formData,
  setFormData,
}) {

  const handleNext = () => {

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.mobile
    ) {
      alert("Please fill all required fields.");
      return;
    }

    nextStep();
  };

  return (
    <Layout formData={formData}>

      <Progress step={2} />
      <Stepper step={2} />

      <StepHeader
        title="Personal Information"
        subtitle="Enter your personal details."
      />

      <div className="row">

        <div className="col-md-6 mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            value={formData.firstName || ""}
            onChange={(e)=>
              setFormData({
                ...formData,
                firstName:e.target.value
              })
            }
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            value={formData.lastName || ""}
            onChange={(e)=>
              setFormData({
                ...formData,
                lastName:e.target.value
              })
            }
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={formData.email || ""}
            onChange={(e)=>
              setFormData({
                ...formData,
                email:e.target.value
              })
            }
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Mobile Number</label>
          <input
            type="tel"
            className="form-control"
            value={formData.mobile || ""}
            onChange={(e)=>
              setFormData({
                ...formData,
                mobile:e.target.value
              })
            }
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            value={formData.dob || ""}
            onChange={(e)=>
              setFormData({
                ...formData,
                dob:e.target.value
              })
            }
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Gender</label>
          <select
            className="form-select"
            value={formData.gender || ""}
            onChange={(e)=>
              setFormData({
                ...formData,
                gender:e.target.value
              })
            }
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

      </div>

      <NavigationButton
        prevStep={prevStep}
        nextStep={handleNext}
      />

    </Layout>
  );
}

export default Step2PersonalInfo;