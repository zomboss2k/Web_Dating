import { React, useContext, useEffect } from "react";
import { Carousel, Col, Row, Spinner } from "react-bootstrap";
// import { PostContext } from "../contexts/PostContext";
import { UserContext } from "../contexts/UserContext";
import Match from "../components/layout/Match";

const Dashboard = () => {
  const {
    userState: { users, userLoading },
    getUsers,
  } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      getUsers();
    };
    fetchData();
  }, []);

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
        {/* <Row className="row-cols-1"></Row>
        {users.map((user) => (
          <Col key={user._id}>
            <Match user={user} />
          </Col>
        ))} */}
        {users.map((user) => (
          <Carousel
            key={user._id}
            variant="dark"
            style={{ width: "500px", margin: "auto" }}
          >
            <Carousel.Item className="text-black">
              <img
                className="d-block w-100"
                src={user.avatar}
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>{user.fullname}</h5>
                <p>{user.desc}</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        ))}
      </>
    );
  }

  return (
    <>
      {body}
      {/* <h2 className="display-4 text-white">Dashboard</h2> */}
    </>
  );
};

export default Dashboard;
