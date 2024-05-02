import React, { createContext, useState } from "react";
// to push github now
export const UserTypeContext = createContext();

const UserTypeProvider = ({ children }) => {
  const [userType, setUserType] = useState({
    userType: localStorage.getItem("userType"),
    username: localStorage.getItem("username"),
    token: localStorage.getItem('token'),
    useremail: localStorage.getItem("useremail"),
  });

  return (
    <UserTypeContext.Provider value={{ userType, setUserType }}>
      {children}
    </UserTypeContext.Provider>
  );
};

export default UserTypeProvider;
