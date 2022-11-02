import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProfile = ({ user: { _id, username, avatar, fullname, gender } }) => {
  return (
    <>
      <Container style={{ padding: 0 }}>
        <Card.Img variant="top" src={avatar} style={{ height: "400px" }} />
        <Card.Body>
          <Card.Title>
            <Link to={`/profile/${username}`} _id={_id}>
              {fullname}
            </Link>
          </Card.Title>
          <Card.Text>{gender}</Card.Text>
        </Card.Body>
      </Container>
    </>
  );
};

export default CardProfile;
