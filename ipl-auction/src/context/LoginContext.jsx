import { useState, createContext } from 'react';

// sigup form context
const LoginContext = createContext();

// sigup form context wrappper
function LoginProvider({ children }) {
    const [LoginFormData, SetLoginFormData] = useState({
        email: null,
        password: null,
    });
    return (
        <LoginContext.Provider value={{ LoginFormData, SetLoginFormData }}>
            {children}
        </LoginContext.Provider>
    );
}

export { LoginContext, LoginProvider };