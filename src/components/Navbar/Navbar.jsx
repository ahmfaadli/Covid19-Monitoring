import { Link } from "react-router-dom";
import NavbarStyle from "./Navbar.styled";

function Navbar() {
  return (
    <NavbarStyle>
      <nav>
        {/* Logo/Brand */}
        <div>
          <h1>Covid ID</h1>
        </div>
        
        {/* Menu Navigasi */}
        <div>
          <ul>
            <li>
              <Link to="/">Global</Link>
            </li>
            <li>
              <Link to="/Indonesia">Indonesia</Link>
            </li>
            <li>
              <Link to="/provinsi">Provinsi</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        <input type="text" className="search" placeholder="Search..." />
      </nav>
    </NavbarStyle>
  );
}

export default Navbar;
