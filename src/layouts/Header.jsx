import { Link } from "react-router-dom";
import dropdown from "../assets/images/social/arrow-drop-down-svgrepo-com.png";


const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">HomePage</Link>
            </li>
            <li>
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="filter-navbar">

        <div className="filter-navbar-wrapper">
        <div className="filter-navbar-wrapper-left">
          <p>Showing 1-40 of 80,068 products</p>
        </div>

        <div className="filter-navbar-wrapper-right">

          <div className="filter-navbar-wrapper-right">
            <p>Refine By </p>
            <div>|</div>
            <div className="filter-navbar-wrapper-right-dropdown">
              <p>price</p>
              <img src={dropdown} alt="dropdown" />
            </div>
          </div>

          <div className="filter-navbar-wrapper-right">
            <p>Sort By </p>
            <div>|</div>
            <div className="filter-navbar-wrapper-right-dropdown">
              <p className="best-sellers">Best sellers</p>
              <img src={dropdown} alt="dropdown" />
            </div>
          </div>

          

        </div>
        </div>

        <div className="search-input">
          <input className="search" type="search" placeholder="Search" />
        </div>

      </div>

    </div>
  );
};

export default Header;
