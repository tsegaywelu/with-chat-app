import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../components/contextprovider/Language";
import { UserTypeContext } from "../components/contextprovider/Usertype";
import { FaBars } from 'react-icons/fa'; // Import the menu icon from a library like react-icons

const Header = () => {
  const { userType } = useContext(UserTypeContext);
  const { contextData, setcontextData } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  return (
    <div>
      <div className={"flex justify-between p-3 items-start space-x-3   shadow-lg gap-10 "}>
        <img src="./logo2.jpg" alt="image loading" width={50} height={50} className="flex-grow-0"/>

        {/* Menu icon for small devices */}
        <FaBars onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex-grow-0 text-2xl cursor-pointer md:hidden  " />

        {/* Header links */}
        <div className={`flex-grow flex items-center justify-center  md:flex lg:justify-evenly lg:flex-row  ${isMenuOpen ? 'flex flex-col gap-4 ' : 'hidden '}`}>
          <Link to="/">
            {contextData.Language === "English" ? "Home" : "ዋና ገጽ"}
          </Link>
          <Link to="/about">
            {contextData.Language === "English" ? "About Us" : "ብዛዕባና"}
          </Link>
          <Link to="/contact">
            {contextData.Language === "English" ? "Contact Us" : "ይርከቡና"}
          </Link>
          <Link to="/gallery">
            {contextData.Language === "English" ? "Gallery" : "ምስሊታት"}
          </Link>
          <Link to="./news">
            {contextData.Language === "English" ? "News" : "ሓዱሽ ሓበሬታ"}
          </Link>
          <Link to="/chat">
            {contextData.Language === "English" ? "Chat" : "መልእክቲ ይጽሓፉ"}
          </Link>
          {userType.userType === "admin" && (
            <Link to="/postnews">
              {contextData.Language === "English" ? "Post News" : "ዜና የእትው"}
            </Link>
          )}
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
            <option value="English">English</option>
            <option value="ትግሪኛ">ትግሪኛ</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
