import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Qzone from "../q-zone/Qzone";
import bg from "../../../assets/bg.png";
const RightNav = () => {
  return (
    <div>
      <div className="m-4">
        <h4 className="text-bold">Login with</h4>
        <Button variant="outline-secondary">
          {" "}
          <FaGoogle /> Login with google
        </Button>{" "}
        <br />
        <br />
        <Button variant="outline-secondary">
          {" "}
          <FaGithub /> Login with github
        </Button>
      </div>
      <div className="">
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item disabled>
            {" "}
            <FaFacebookSquare className="fs-3 " />
            Facebook{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter className="fs-3"></FaTwitter>Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram className="fs-3"></FaInstagram>Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone></Qzone>
      <div className="text-center py-4">
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
