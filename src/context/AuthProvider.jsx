import { useState } from "react";
import PropTypes from 'prop-types';
import { AuthContext } from "./AuthContext";
export const AuthContextProvider = ({ children }) => {
    const [fetchData, setFetchData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        role: ""
    });

    return (
        <AuthContext.Provider value={{ fetchData, setFetchData }}>{children}</AuthContext.Provider>
    )
}

AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};   
