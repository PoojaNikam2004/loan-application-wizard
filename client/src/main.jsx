import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LoanProvider } from "./context/LoanContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"

ReactDOM.createRoot(document.getElementById("root")).render(
    <LoanProvider>
        <App />
    </LoanProvider>
    
);

    