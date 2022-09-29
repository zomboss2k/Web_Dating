import { React, useContext, useEffect } from "react";
import { Carousel, Col, Row, Spinner } from "react-bootstrap";
// import { PostContext } from "../contexts/PostContext";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
// import Match from "../components/layout/Match";

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

      {/* <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://luv.vn/wp-content/uploads/2022/06/gai-xinh-cap-3-luv-17.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://anhdephd.vn/wp-content/uploads/2022/04/hinh-nen-gai-xinh.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
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
