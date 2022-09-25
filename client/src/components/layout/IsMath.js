import React from "react";
import { Card, Col, Row, Tab, Tabs } from "react-bootstrap";
import Messager from "./Messager";

const IsMath = () => {
  return (
    <>
      <Tabs
        defaultActiveKey="match"
        id="uncontrolled-tab-example"
        className="ml-2 mb-1 font-weight-bold text-uppercase"
      >
        <Tab eventKey="match" title="CÁC TƯƠNG HỢP">
          <Row style={{ margin: 0 }}>
            <Col style={{ padding: "5px" }}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://res.cloudinary.com/zomboss/image/upload/v1661182037/test/rcu0hru5dhn7zg4fmcdz.jpg"
                />
                <Card.Body className="p-2">
                  <p className="text-center text-black font-weight-bold m-0">
                    Lê Tiến Đạt
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ padding: "5px" }}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://res.cloudinary.com/zomboss/image/upload/v1661182037/test/rcu0hru5dhn7zg4fmcdz.jpg"
                />
                <Card.Body className="p-2">
                  <p className="text-center text-black font-weight-bold m-0">
                    Lê Tiến Đạt
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="messages" title="TRÒ CHUYỆN">
            <Messager />
        </Tab>
      </Tabs>
    </>
  );
};

export default IsMath;
