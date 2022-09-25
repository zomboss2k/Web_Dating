import { React, useContext, useEffect } from "react";
import { Carousel, Col, Row, Spinner } from "react-bootstrap";
// import { PostContext } from "../contexts/PostContext";
import { UserContext } from "../contexts/UserContext";

const Dashboard = () => {
  const {
    userState: { users, userLoading },
    getUsers,
  } = useContext(UserContext);

  useEffect(() => {
    getUsers();
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
      <Row className="row-cols-1"></Row>
      {users.map(user => (
        <Col key={user._id}>
          {user}
        </Col>
      ))}
      </>
    )
  }

  return (
    <>
    {body}
      {/* <h2 className="display-4 text-white">Dashboard</h2> */}
      {/* <Carousel variant="dark" style={{ width: "500px", margin: "auto" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.vn/uploads/danhmuc/australia-1564026865-dudpi.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.vn/uploads/danhmuc/australia-1564026865-dudpi.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.vn/uploads/danhmuc/australia-1564026865-dudpi.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </>
  );
};

export default Dashboard;
