import Layout from "../components/Layout";
import Progress from "../components/Progress";
import StepHeader from "../components/StepHeader";
import NavigationButton from "../components/NavigationButton";
import Stepper from "../components/Stepper";
import "../Styles/step1.css";


function Step1LoanType({ nextStep, formData, setFormData }) {

  const handleNext = () => {
    if (formData.loanType === "") {
      alert("Please Select Loan Type");
      return;
    }

    nextStep();
  };

  return (
   <Layout formData={formData}>

      <Progress step={1} />
      <Stepper step={1}/>

      <StepHeader
  title="Loan Application Wizard"
  subtitle="Step 1 : Select the loan type you want to apply for."
/>

      <div className="row g-3">

  <div className="col-md-6">
    <div
      className={`card p-3 shadow-sm ${
        formData.loanType === "Personal Loan"
          ? "border-primary"
          : ""
      }`}
      onClick={() =>
        setFormData({
          ...formData,
          loanType: "Personal Loan",
        })
      }
      style={{ cursor: "pointer" }}
    >
      <h5>👤 Personal Loan</h5>
      <p className="text-muted mb-0">
        Salary • Medical • Travel
      </p>
    </div>
  </div>

  <div className="col-md-6">
    <div
      className={`card p-3 shadow-sm ${
        formData.loanType === "Home Loan"
          ? "border-primary"
          : ""
      }`}
      onClick={() =>
        setFormData({
          ...formData,
          loanType: "Home Loan",
        })
      }
      style={{ cursor: "pointer" }}
    >
      <h5>🏠 Home Loan</h5>
      <p className="text-muted mb-0">
        Buy your dream house
      </p>
    </div>
  </div>

  <div className="col-md-6">
    <div
      className={`card p-3 shadow-sm ${
        formData.loanType === "Business Loan"
          ? "border-primary"
          : ""
      }`}
      onClick={() =>
        setFormData({
          ...formData,
          loanType: "Business Loan",
        })
      }
      style={{ cursor: "pointer" }}
    >
      <h5>💼 Business Loan</h5>
      <p className="text-muted mb-0">
        Expand your business
      </p>
    </div>
  </div>

  <div className="col-md-6">
    <div
      className={`card p-3 shadow-sm ${
        formData.loanType === "Education Loan"
          ? "border-primary"
          : ""
      }`}
      onClick={() =>
        setFormData({
          ...formData,
          loanType: "Education Loan",
        })
      }
      style={{ cursor: "pointer" }}
    >
      <h5>🎓 Education Loan</h5>
      <p className="text-muted mb-0">
        Higher education support
      </p>
    </div>
  </div>

  <div className="col-md-6">
    <div
      className={`card p-3 shadow-sm ${
        formData.loanType === "Vehicle Loan"
          ? "border-primary"
          : ""
      }`}
      onClick={() =>
        setFormData({
          ...formData,
          loanType: "Vehicle Loan",
        })
      }
      style={{ cursor: "pointer" }}
    >
      <h5>🚗 Vehicle Loan</h5>
      <p className="text-muted mb-0">
        Car & Bike Finance
      </p>
    </div>
  </div>

</div>

      <NavigationButton
        isFirst={true}
        nextStep={handleNext}
      />

    </Layout>
  );
}

export default Step1LoanType;