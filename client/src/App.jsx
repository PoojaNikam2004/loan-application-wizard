import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Step1LoanType from "./pages/Step1LoanType";
import Step2PersonalInfo from "./pages/Step2PersonalInfo";
import Step3Identity from "./pages/Step3Identity";
import Step4Address from "./pages/Step4Address";
import Step5Employment from "./pages/Step5Employment";
import Step6Additional from "./pages/Step6Additional";
import Step7Documents from "./pages/Step7Documents";
import Step8Review from "./pages/Step8Review";
import Step9Submit from "./pages/Step9Submit";

function App() {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    loanType: "",
    fullName: "",
    email: "",
    mobile: "",
    dob: "",
    pan: "",
    aadhaar: "",
    address: "",
    company: "",
    salary: "",
    remarks: ""
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  switch (step) {

    case 1:
      return (
        <Step1LoanType
          nextStep={nextStep}
          formData={formData}
          setFormData={setFormData}
        />
      );

    case 2:
      return (
        <Step2PersonalInfo
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      );

    case 3:
      return (
        <Step3Identity
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      );

    case 4:
      return (
        <Step4Address
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      );

    case 5:
      return (
        <Step5Employment
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      );

    case 6:
      return (
        <Step6Additional
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      );

    case 7:
      return (
        <Step7Documents
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );

    case 8:
      return (
        <Step8Review
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
        />
      );

    case 9:
      return <Step9Submit />;

    default:
      return <h1>Invalid Step</h1>;
  }
}

export default App;