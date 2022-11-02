import React, { useContext, useEffect } from "react";
import { Button, Col, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const Messager = () => {
  const {
    userState: { users, userLoading },
    // getUsers,
  } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      // getUsers();
    };
    fetchData();
  }, []);

  return (
    <>
      <Nav className="flex-column bg-white mb-0 ">
        <div className="scrollSown">
          {users.map((user) => (
            <Nav.Item key={user._id}>
              <Link to="" className="nav-link text-black bg-light">
                {/* <i className="bi bi-microsoft mr-3 text-primary fa-fw" /> */}
                <Row>
                  <Col sm="3">
                    <img
                      className="nav-item__img"
                      src={user.avatar}
                      alt="avata-messager"
                    />
                  </Col>
                  <Col sm="9">
                    <Nav className="flex-column">
                      <Nav.Item
                        className="nav-link"
                        style={{ padding: "5px 0" }}
                      >
                        {user.fullname}
                      </Nav.Item>
                      <Nav.Item
                        className="nav-link"
                        style={{ padding: "5px 0" }}
                      >
                        {user.messager}
                      </Nav.Item>
                    </Nav>
                  </Col>
                </Row>
              </Link>
            </Nav.Item>
          ))}
        </div>
      </Nav>
    </>
  );
};

export default Messager;
