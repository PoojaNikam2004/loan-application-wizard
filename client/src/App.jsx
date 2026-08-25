import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import MyApplication from "./pages/MyApplication";
// Existing Loan Steps
import Step1LoanType from "./pages/Step1LoanType";
import Step2PersonalInfo from "./pages/Step2PersonalInfo";
import Step3Identity from "./pages/Step3Identity";
import Step4Address from "./pages/Step4Address";
import Step5Employment from "./pages/Step5Employment";
import Step6Additional from "./pages/Step6Additional";
import Step7Documents from "./pages/Step7Documents";
import Step8Review from "./pages/Step8Review";
import Step9Submit from "./pages/Step9Submit";


import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";


function LoanApplication() {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({

    loanType: "",

    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    dob: "",

    // Identity
    aadhaar: "",
    pan: "",

    // Address
    address: "",
    city: "",
    state: "",
    pincode: "",

    // Employment
    employmentType: "",
    companyName: "",
    monthlyIncome: "",

    // Loan Details
    loanAmount: "",
    loanTenure: "",
    loanPurpose: "",

    // Documents
    aadhaarFile: "",
    panFile: "",
    salarySlip: "",
    bankStatement: "",
    photo: "",

  });


  const nextStep = () => {
    setStep((previousStep) => previousStep + 1);
  };


  const prevStep = () => {
    setStep((previousStep) => previousStep - 1);
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
          formData={formData}
          setFormData={setFormData}
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

      return (
        <Step9Submit
          formData={formData}
        />
      );


    default:

      return <h1>Invalid Step</h1>;

  }

}


// Temporary pages
//  function Login() {
//  
//    return (
//      <div className="container py-5">
//  
//        <h2>Login</h2>
//  
//        <p className="text-muted">
//          Login page will be created next.
//        </p>
//  
//      </div>
//    );
//  
//  }


// function Register() {
// 
//   return (
//     <div className="container py-5">
// 
//       <h2>Create Account</h2>
// 
//       <p className="text-muted">
//         Registration page will be created next.
//       </p>
// 
//     </div>
//   );
// 
// }
// 

function LoanTypes() {

  return (
    <div className="container py-5">

      <h2>Loan Types</h2>

      <p className="text-muted">
        Personal, Home, Business, Education and Vehicle Loans.
      </p>

    </div>
  );

}


function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Public Pages */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/loans"
          element={<LoanTypes />}
        />


        {/* Authentication */}

        <Route path="/login" element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />


        {/* Existing Loan Application */}

        <Route
          path="/apply-loan"
          element={<LoanApplication />}
        />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/applications" element={<MyApplication />} />

      </Routes>

    </BrowserRouter>

  );

}


export default App;