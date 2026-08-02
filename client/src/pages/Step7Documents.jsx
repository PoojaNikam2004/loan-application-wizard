import Layout from "../components/Layout";
import Progress from "../components/Progress";
import StepHeader from "../components/StepHeader";
import NavigationButton from "../components/NavigationButton";

function Step7Documents({ nextStep, prevStep }) {

  return (
    <Layout>
      <Progress step={7} />
      <StepHeader title="Step 7 : Upload Documents" />

      <div className="mb-3">
        <label className="form-label fw-bold">Upload Aadhaar Card</label>
        <input className="form-control" type="file" />
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">Upload PAN Card</label>
        <input className="form-control" type="file" />
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">Upload Salary Slip</label>
        <input className="form-control" type="file" />
      </div>

      <NavigationButton prevStep={prevStep} nextStep={nextStep} />
    </Layout>
  );
}

export default Step7Documents;