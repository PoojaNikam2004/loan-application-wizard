import { createContext, useState } from "react";

export const LoanContext = createContext();

export const LoanProvider = ({ children }) => {

    const [formData, setFormData] = useState({
        loanType: "",
        fullName: "",
        email: "",
        phone: "",
    });

    return (
        <LoanContext.Provider value={{ formData, setFormData }}>
            {children}
        </LoanContext.Provider>
    );
};