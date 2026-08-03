import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LoanProvider } from "./context/LoanContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <LoanProvider>
        <App />
    </LoanProvider>
    
);

    