import React, { createContext, useState } from "react";
// to push github now
export const UserTypeContext = createContext();

const UserTypeProvider = ({ children }) => {
  const [userType, setUserType] = useState({
    userType: "",
    username: "",
    token: "",
    useremail: "",
  });

  return (
    <UserTypeContext.Provider value={{ userType, setUserType }}>
      {children}
    </UserTypeContext.Provider>
  );
};

export default UserTypeProvider;
