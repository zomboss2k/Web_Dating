import { React, useContext, useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";

const Dashboard = () => {
  const {
    userState: { users, userLoading },
    getUsers,
  } = useContext(UserContext);

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [current, setCurrent] = useState(0);
  const length = users.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(users) || users.length <= 0) {
    return null;
  }

  let body = null;

  if (userLoading) {
    body = (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else {
    body = (
      <>
        <i
          className="bi bi-chevron-double-left"
          onClick={prevSlide}
          style={{ position: "absolute", top: "50%", cursor: "pointer" }}
        />
        <i
          className="bi bi-chevron-double-right"
          style={{
            position: "absolute",
            top: "50%",
            right: "50px",
            cursor: "pointer",
          }}
          onClick={nextSlide}
        />
        <div style={{ marginTop: "15px", height: "500px" }}>
          {users.map((user, i) => (
            <Card key={i} style={{ width: "18rem", margin: "auto" }}>
              {i === current && (
                <div>
                  <Card.Img
                    variant="top"
                    src={user.avatar}
                    style={{ height: "400px" }}
                  />
                  <Card.Body>
                    <Card.Title>{user.fullname}</Card.Title>
                    <Card.Text>{user.desc}</Card.Text>
                  </Card.Body>
                </div>
              )}
            </Card>
          ))}
        </div>
      </>
    );
  }

  return <>{body}</>;
};

export default Dashboard;
