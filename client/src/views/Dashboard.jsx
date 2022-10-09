import { React, useContext, useEffect, useState } from "react";
import { Card, Container, Spinner } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";
import CardProfile from "./user/CardProfile";

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
      <Container className="spinner-container">
        <Spinner animation="border" variant="info" />
      </Container>
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

        <Container style={{ marginTop: "15px", height: "500px" }}>
          {users.map((user, i) => (
            <Card key={user._id} style={{ width: "18rem", margin: "auto" }}>
              {i === current && (
               <CardProfile user={user}/>
              )}
            </Card>
          ))}
        </Container>
      </>
    );
  }

  return <>{body}</>;
};

export default Dashboard;
