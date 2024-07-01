import logo from "../img/logo.png";
import corporate from "../img/icon/icons8-corporate-50.png";
import search from "../img/icon/icons8-search-50.png";
import offer from "../img/icon/icons8-new-64.png";
import help from "../img/icon/icons8-help-50.png";
import signIn from "../img/icon/icons8-sign-in-50.png";
import card from "../img/icon/icons8-cart-50.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
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
            <NavLink className="navlink" to="corporate">
              <div className="nav-icon-img">
                <img src={corporate} alt="corporate" />
              </div>
              Swiggy Corporate
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="search">
              <div className="nav-icon-img">
                <img src={search} alt="search" />
              </div>
              Search
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="offer">
              <div className="nav-icon-img">
                <img src={offer} alt="offer" />
              </div>
              Offers
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="help">
              <div className="nav-icon-img">
                <img src={help} alt="help" />
              </div>
              Help
            </NavLink>
          </li>
          <li
            onClick={() => {
              login === "LogOut" ? setLogin("LogIn") : setLogin("LogOut");
            }}
          >
            <NavLink className="navlink" to="login">
              <div className="nav-icon-img">
                <img src={signIn} alt="signIn" />
              </div>
              {login}
            </NavLink>
          </li>
          <li>
            <NavLink to="card" className="navlink">
              <div className="nav-icon-img">
                <img src={card} alt="card" />
              </div>
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
