import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import useAuth from "../../../firebase/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";

const NavigationBar = () => {
  const { currentUser, isAuthLoading } = useAuth();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signed OUtttt");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/">Home</Link>
              <Link to="/">About</Link>
              <Link to="/">Career</Link>
            </Nav>
            <Nav>
              {currentUser ? (
                <>
                  <Nav.Link href="#deets">
                    <FaUserCircle style={{ fontSize: "2rem" }} />
                  </Nav.Link>
                  {/* <Link to="/login"> */}
                  <Button onClick={handleLogOut} variant="secondary">
                    LogOut
                  </Button>
                  {/* </Link> */}
                </>
              ) : (
                <Link to="/login">
                  <Button variant="secondary">LogIn</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
