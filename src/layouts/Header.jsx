import { Link } from "react-router-dom";

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

        <div className="filter-navbar-left">
          <p>Showing 1-40 of 80,068 products</p>
        </div>

        <div className="filter-navbar-right">

            <label htmlFor="price">Refine By | </label>
            <input list="prices" name="price" id="price" />

            <datalist id="prices">
              <option value="10$" />
              <option value="20$" />
              <option value="30$" />
              <option value="40$" />
              <option value="50$" />
            </datalist>

        </div>

      </div>

    </div>
  );
};

export default Header;
