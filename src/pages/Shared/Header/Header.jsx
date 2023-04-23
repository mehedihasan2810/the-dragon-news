import React from "react";
import logo from "../../../../public/assets/images/logo.png";
import moment from "moment/moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="logo" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favor</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={50} pauseOnHover={true}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
