import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LoanProvider } from "./context/LoanContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <LoanProvider>
        <App />
    </LoanProvider>
);