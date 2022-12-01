import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { clearStorage } from "../../utils/storage";

function Navigation() {
  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();
  function logout() {
    clearStorage();
    setAuth(null);
    navigate("/");
  }

  return (
    <>
      <Navbar bg="light" variant="light" expand="lg">
        <NavLink to="/" end>
          <Navbar.Brand to="/">Social Scoop</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            {auth ? (
              <>
                <NavLink to="/posts" className="nav-link">
                  Posts
                </NavLink>

                <button onClick={logout} className="logout-cta">
                  Log out
                </button>

                <NavLink to="/posts/posts/add" className="nav-link">
                  Add Post
                </NavLink>
              </>
            ) : (
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            )}

            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
