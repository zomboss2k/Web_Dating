import React, { useContext } from "react";
import { Button, Col, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Messager = () => {
  const {
    authState: {
      user: { fullname },
      user: { avatar },
    },
  } = useContext(AuthContext);

  return (
    <>
      <Nav className="flex-column bg-white mb-0">
        <Nav.Item>
          <Link to="/dashboard" className="nav-link text-black bg-light">
            {/* <i className="bi bi-microsoft mr-3 text-primary fa-fw" /> */}
            <Row>
              <Col sm="3">
                <img
                  className="nav-item__img"
                  src={avatar}
                  alt="avata-messager"
                />
              </Col>
              <Col sm="9">
                <Nav className="flex-column">
                  <Nav.Item className="nav-link" style={{padding: '5px 0'}}>{fullname}</Nav.Item>
                  <Nav.Item className="nav-link" style={{padding: '5px 0'}}>{fullname}</Nav.Item>
                </Nav>
              </Col>
            </Row>
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
