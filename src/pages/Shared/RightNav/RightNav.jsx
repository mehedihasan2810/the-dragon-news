import { Button, ListGroup } from "react-bootstrap";
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '/assets/images/bg.png'

const RightNav = () => {
  return (
    <div>
      <h4 className="mt-4">Login with</h4>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub /> Login with Google
      </Button>

      <div>
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item><FaFacebookF/> Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone/>

      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
