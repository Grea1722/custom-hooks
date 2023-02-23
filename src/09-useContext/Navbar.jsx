import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* Navlink devuelve el cuando el link esta activo */}
            <NavLink
              to={"/"}
              className={`nav-link`
              }
            >
              Home
            </NavLink>

            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              about
            </NavLink>

            <NavLink to={"/login"}
            className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`}>
                Login
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};
