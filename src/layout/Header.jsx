import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { LanguageContext } from "../components/contextprovider/Language";
const Header = () => {
  /*  const [token, setToken] = useState(localStorage.getItem("token")); */
  /*   useEffect(() => {
    // Update token in state when it changes in localStorage
    setToken(localStorage.getItem("token"));
  }, [token]); */
  const { contextData, setcontextData } = useContext(LanguageContext);

  console.log(contextData.Language);

  return (
    <div>
      <div className={"flex justify-evenly p-3 items-center   shadow-lg"}>
        <img src="./logo2.jpg" alt="image loading " width={50} height={50} />
        <Link to="/">
          {contextData.Language == "English" ? "Home" : "ዋና ገጽ"}
        </Link>
       
        <Link to="/about">
          {contextData.Language == "English" ? "About Us" : "ብዛዕባና"}
        </Link>
        <Link to="/contact">
          {contextData.Language == "English" ? "Contact Us" : "ይርከቡና"}
        </Link>
        <Link to="/gallery">
          {contextData.Language == "English" ? "Gallery" : "ምስሊታት"}
        </Link>
        <Link to="./news">
          {" "}
          {contextData.Language == "English" ? "News" : "ሓዱሽ ሓበሬታ"}
        </Link>
       
        {/* <Link to="/postnews">
          {contextData.Language == "English" ? "Post News" : "ዜና የእትው"}
        </Link>
        <Link to="/postevent">
          {contextData.Language == "English" ? "post event" : "ናይ ቀጻሊ ስራሕ"}
      
        
        </Link> */}

        {contextData.token ? (
          <Link to="/postnews">
          {contextData.Language == "English" ? "Post News" : "ዜና የእትው"}
        </Link>
          
        ) : (
          <Link to="/login">
            {contextData.Language === "English" ? null : null}
          </Link>
        )}
        
         
        
        
        {/* //here if no token the page will display login and rederict to it but if
        there is token it will display logout */}
        {contextData.token ? (
          <Link to="/logout">
            {contextData.Language === "English" ? "Logout" : "ውጣ"}
          </Link>
        ) : (
          <Link to="/login">
            {contextData.Language === "English" ? "Login" : "ግባ"}
          </Link>
        )}

        
        <select
          name="contextData.Language"
          className="text-green-900"
          value={contextData.Language}
          onChange={(e) =>
            setcontextData((d) => ({
              ...d,
              Language: e.target.value,
            }))
          }
        >
          <option value="English" selected={contextData.Language == "English"}>
            English
          </option>
          <option value="ትግሪኛ" selected={contextData.Language == "ትግሪኛ"}>
            ትግሪኛ
          </option>
        </select>
      </div>
    </div>
  );
};

export default Header;
