import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom"

const CardProfile = ({ user: { _id, avatar, fullname, desc } }) => {
  return (
    <>
      <Container style={{ padding: 0 }}>
        <Card.Img variant="top" src={avatar} style={{ height: "400px" }} />
        <Card.Body>
          <Card.Title>
            <Link to="/profile/:id" _id={_id}>
              {fullname}
            </Link>
          </Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
      </Container>
    </>
  );
};

export default CardProfile;
