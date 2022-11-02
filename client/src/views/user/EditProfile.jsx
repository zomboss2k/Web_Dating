import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Form, Modal, Nav, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
// import { UserContext } from "../../contexts/UserContext";

const EditProfileModal = () => {
  const {
    authState: { user, authLoading },
    updateUser,
  } = useContext(AuthContext);

  const [image, setImages] = useState(false);

  const [updatedUser, setUpdatedUser] = useState(user);

  const { images, fullname, gender, desc, age, email, address } = updatedUser;

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];

      if (!file) return alert("File not exist.");

      if (file.size > 1024 * 1024)
        // 1mb
        return alert("Size too large!");

      if (file.type !== "image/jpeg" && file.type !== "image/png")
        // 1mb
        return alert("File format is incorrect.");

      let formData = new FormData();
      formData.append("file", file);

      authLoading(true);
      const res = await axios.post("/api/upload", formData, {
        headers: { "content-type": "multipart/form-data" },
      });
      authLoading(false);
      setImages(res.data);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const onChangeUpdatedUserForm = (event) =>
    setUpdatedUser({ ...updatedUser, [event.target.name]: event.target.value });
  let navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    await updateUser(updatedUser);
    navigate(`/profile`);
    window.location.reload(false);
  };
  return (
    <>
      {/* <form onSubmit={onSubmit} className="container">
        <Row className=" flex-lg-nowrap">
          <Col>
            <Row>
              <Col className="mb-3">
                <Card>
                  <Card.Body>
                    <form className="e-profile">
                      <Row>
                        <Col className="col-sm-auto mb-3">
                          <form
                            className="mx-auto"
                            style={{ width: "140px" }}
                          >
                            <form
                              className="d-flex justify-content-center align-items-center rounded"
                              style={{
                                height: "140px",
                                backgroundColor: "rgb(233, 236, 239)",
                              }}
                            >
                              <span
                                style={{
                                  color: "rgb(166, 168, 170)",
                                  font: "bold 8pt Arial",
                                }}
                              >
                                140x140
                              </span>
                            </form>
                          </form>
                        </Col>
                        <Col className="d-flex flex-column flex-sm-row justify-content-between mb-3">
                          <form className="text-center text-sm-left mb-2 mb-sm-0">
                            <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">
                              {fullname}
                            </h4>
                            <p className="mb-0">{email}</p>
                            <form className="text-muted">
                              <small>Last seen 2 hours ago</small>
                            </form>
                            <form className="mt-2">
                              <button className="btn btn-primary" type="button">
                                <i className="fa fa-fw fa-camera" />
                                <span>Change Photo</span>
                              </button>
                            </form>
                          </form>
                        </Col>
                      </Row>
                      <Nav className="nav-tabs">
                        <Nav.Item>
                          <Link to className="active nav-link">
                            Settings
                          </Link>
                        </Nav.Item>
                      </Nav>
                      <form className="tab-content pt-3">
                        <form className="tab-pane active">
                          <form className="form" noValidate>
                            <Row>
                              <Col>
                                <Row>
                                  <Col>
                                    <form className="form-group">
                                      <label>Họ và tên</label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="fullname"
                                        value={fullname}
                                        onChange={onChangeUpdatedUserForm}
                                      />
                                    </form>
                                  </Col>
                                  <Col>
                                    <form className="form-group">
                                      <label>Email</label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="email"
                                        value={email}
                                        onChange={onChangeUpdatedUserForm}
                                      />
                                    </form>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <form className="form-group">
                                      <label>Giới tính</label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="gender"
                                        value={gender}
                                        onChange={onChangeUpdatedUserForm}
                                      />
                                    </form>
                                  </Col>
                                  <Col>
                                    <form className="form-group">
                                      <label>Độ tuổi</label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="age"
                                        value={age}
                                        onChange={onChangeUpdatedUserForm}
                                      />
                                    </form>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <form className="form-group">
                                      <label>Address</label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="address"
                                        value={address}
                                        onChange={onChangeUpdatedUserForm}
                                      />
                                    </form>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col className="mb-3">
                                    <form className="form-group">
                                      <label>About</label>
                                      <textarea
                                        className="form-control"
                                        rows={5}
                                        name="desc"
                                        value={desc}
                                        onChange={onChangeUpdatedUserForm}
                                      />
                                    </form>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                            <form className="row">
                              <form className="col d-flex justify-content">
                                <Button className="btn btn-info">
                                  Xóa tài khoản
                                </Button>
                              </form>
                              <form className="col d-flex justify-content-end">
                                <Button
                                  className="btn btn-danger"
                                  type="submit"
                                >
                                  Save Changes
                                </Button>
                              </form>
                            </form>
                          </form>
                        </form>
                      </form>
                    </form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </form> */}
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="file"
              placeholder="Avatar"
              name="avatar"
              required
              aria-describedby="title-help"
              value={images}
              onChange={handleUpload}
            />
            <Form.Control
              type="text"
              placeholder="Họ và tên"
              name="fullname"
              required
              aria-describedby="title-help"
              value={fullname}
              onChange={onChangeUpdatedUserForm}
            />
            <Form.Control
              type="text"
              placeholder="Địa chỉ"
              name="address"
              required
              aria-describedby="title-help"
              value={address}
              onChange={onChangeUpdatedUserForm}
            />
            <Form.Control
              type="text"
              placeholder="Năm sinh"
              name="age"
              required
              aria-describedby="title-help"
              value={age}
              onChange={onChangeUpdatedUserForm}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Description"
              name="desc"
              value={desc}
              onChange={onChangeUpdatedUserForm}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary" type="submit">
            Oke!
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
};

export default EditProfileModal;
