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
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
