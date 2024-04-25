import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LanguageContext } from "../components/contextprovider/Language";

const Logout = () => {
  const { setcontextData } = useContext(LanguageContext);
  // Clear local storage
  localStorage.removeItem("token");
  setcontextData((d) => ({ ...d, token: undefined }));
  // Redirect to login
  return <Navigate to="/login" />;
};

export default Logout;
