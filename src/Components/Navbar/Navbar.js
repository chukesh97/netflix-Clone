import React from "react";
import "./Navbar.css";
import { HiOutlineTranslate } from "react-icons/hi";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const Navbar = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div className="nav">
      <header>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <div >
        <div className="Nav_items">
          <div className="translate">
            <HiOutlineTranslate />
          </div>
          <select name="language" id="language" onChange={changeLanguage}>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
          <Link to="/login" type="submit">Sign In</Link>
        </div>
      </div>
      </header>
    </div>
  );
};

export default Navbar;
