import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Messager = () => {
  return (
    <>
      <Nav className="flex-column bg-white mb-0">
        <Nav.Item>
          <Link
            to="/dashboard"
            className="nav-link text-dark font-italic bg-light"
          >
            <i className="bi bi-microsoft mr-3 text-primary fa-fw" />
            Home
          </Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Link
            to="/message"
            className="nav-link text-dark font-italic bg-light"
          >
            <i className="bi bi-messenger mr-3 text-primary fa-fw" />
            Tin nhắn
          </Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Messager;
