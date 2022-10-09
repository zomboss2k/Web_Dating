import React from "react";
import { Card, Container } from "react-bootstrap";

const CardProfile = ({ user: { avatar, fullname, desc } }) => {
  return (
    <>
      <Container style={{ padding: 0 }}>
        <Card.Img variant="top" src={avatar} style={{ height: "400px" }} />
        <Card.Body>
          <Card.Title>{fullname}</Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
      </Container>
    </>
  );
};

export default CardProfile;
