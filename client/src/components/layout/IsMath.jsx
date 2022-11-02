import React, { useContext, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { UserContext } from "../../contexts/UserContext";

const IsMath = () => {
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
    <div className="isMatch">
      <Row style={{ margin: 0 }}>
        {users.map((user) => (
          <Col key={user._id} sm="6" style={{ padding: "5px" }}>
            <Card>
              <Card.Img
                style={{ height: "187px" }}
                variant="top"
                src={user.avatar}
              />
              <Card.Body className="p-2">
                <p
                  className="text-center font-weight-bold m-0"
                  style={{ color: "#000" }}
                >
                  {user.fullname}
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default IsMath;
