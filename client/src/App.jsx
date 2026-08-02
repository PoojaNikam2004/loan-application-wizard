import { BrowserRouter, Routes, Route } from "react-router-dom";

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
  return (
     <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container ">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Step1LoanType />} />
        <Route path="/personal" element={<Step2PersonalInfo />} />
        <Route path="/identity" element={<Step3Identity />} />
        <Route path="/address" element={<Step4Address />} />
        <Route path="/employment" element={<Step5Employment />} />
        <Route path="/additional" element={<Step6Additional />} />
        <Route path="/documents" element={<Step7Documents />} />
        <Route path="/review" element={<Step8Review />} />
        <Route path="/submit" element={<Step9Submit />} />
      </Routes>
    </BrowserRouter>
    </div>
     </div>
  );
  
  
}

export default App;