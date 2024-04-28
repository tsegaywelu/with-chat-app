import React, { createContext, useState } from "react";

export const UserTypeContext = createContext();

const UserTypeProvider = ({ children }) => {
  const [userType, setUserType] = useState({
    userType: "",
    username: "",
  });

  return (
    <UserTypeContext.Provider value={{ userType, setUserType }}>
      {children}
    </UserTypeContext.Provider>
  );
};

export default UserTypeProvider;
