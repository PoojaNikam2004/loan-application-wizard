import Layout from "../components/Layout";
import Progress from "../components/Progress";
import StepHeader from "../components/StepHeader";
import NavigationButton from "../components/NavigationButton";
import Stepper from "../components/Stepper";


function Step2PersonalInfo({
  nextStep,
  prevStep,
  formData,
  setFormData,
}) {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    if (
      formData.fullName === "" ||
      formData.email === "" ||
      formData.mobile === "" ||
      formData.dob === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    nextStep();
  };

  return (
    <Layout>

      <Progress step={2} />
      <Stepper step={2}/>
      

      <StepHeader title="Step 2 : Personal Information" />

      <div className="mb-3">
        <label className="form-label fw-bold">
          Full Name
        </label>

        <input
          type="text"
          className="form-control"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">
          Email
        </label>

        <input
          type="email"
          className="form-control"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">
          Mobile Number
        </label>

        <input
          type="text"
          className="form-control"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">
          Date of Birth
        </label>

        <input
          type="date"
          className="form-control"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
      </div>

      <NavigationButton
        isFirst={false}
        isLast={false}
        prevStep={prevStep}
        nextStep={handleNext}
      />

    </Layout>
  );
}

export default Step2PersonalInfo;