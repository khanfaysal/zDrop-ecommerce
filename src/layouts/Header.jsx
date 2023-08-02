import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header_wrapper">
      <div className="nav_wrapper">
        <nav>
          <ul>
            <li>
            <Link to="/">HomePage</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
