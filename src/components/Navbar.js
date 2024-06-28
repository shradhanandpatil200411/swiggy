import logo from "../img/logo.png";
import corporate from "../img/icon/icons8-corporate-50.png";
import search from "../img/icon/icons8-search-50.png";
import offer from "../img/icon/icons8-new-64.png";
import help from "../img/icon/icons8-help-50.png";
import signIn from "../img/icon/icons8-sign-in-50.png";
import card from "../img/icon/icons8-cart-50.png";
import { useState } from "react";
const Navbar = () => {
  const [login, setLogin] = useState("LogOut");
  return (
    <div className="nav-container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <div className="nav-icon-img">
              <img src={corporate} alt="corporate" />
            </div>
            Swiggy Corporate
          </li>
          <li>
            <div className="nav-icon-img">
              <img src={search} alt="search" />
            </div>
            Search
          </li>
          <li>
            <div className="nav-icon-img">
              <img src={offer} alt="offer" />
            </div>
            Offers
          </li>
          <li>
            <div className="nav-icon-img">
              <img src={help} alt="help" />
            </div>
            Help
          </li>
          <li
            onClick={() => {
              login == "LogOut" ? setLogin("LogIn") : setLogin("LogOut");
            }}
          >
            <div className="nav-icon-img">
              <img src={signIn} alt="signIn" />
            </div>
            {login}
          </li>
          <li>
            <div className="nav-icon-img">
              <img src={card} alt="card" />
            </div>
            Cart
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
