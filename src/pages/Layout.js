import { Outlet, Link } from "react-router-dom";

const linkStyle = {
    color: "white",
    margin: "1rem",
    backgroundColor: "DodgerBlue",
}
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"  style={linkStyle}>Home</Link>
          </li>
          <li>
            <Link to="/blogs"  style={linkStyle}>About</Link>
          </li>
          <li>
            <Link to="/contact"  style={linkStyle}>Contact Us</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;