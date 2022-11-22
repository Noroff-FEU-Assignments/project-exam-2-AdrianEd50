/*import Home from "../home/Home";
import Contact from "../contact/Contact";
import Login from "../login/Login";
import Register from "../login/Register";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import { useContext } from "react";
//import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { AuthProvider } from "../../context/AuthContext";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Container from "react-bootstrap/Container";

function Layout() {
  return (
    <>
      <Router>
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
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default Layout;*/

/* 
const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();
  function logout() {
    setAuth(null);
    navigate("/");
  }


{auth ? (
                <>
                  <button onClick={logout}>Log out</button>
                </>
              ) : (
                <NavLink exact to="/login" className="nav-link">
                  Login
                </NavLink>
              )} */
