import "./App.css";
import Home from "../src/components/home/Home";
import Contact from "../src/components/contact/Contact";
import Login from "../src/components/login/Login";
import Register from "../src/components/login/Register";
import Posts from "./components/posts/PostsPage";
import Navigation from "./components/layout/Navigation";
import { AuthProvider } from "./context/AuthContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Container>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
