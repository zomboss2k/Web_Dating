import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Nav, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";

const EditProfileModal = ({ props }) => {
  const { editUser, users } = useContext(UserContext);
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    fullname: "",
  });
  const history = useNavigate();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find((user) => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users]);

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    history.push("/");
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   dispatch(updateUser({ fullname, email, password, pic }));
  // };

  // const {
  //   userState: { user },
  //   updateUser,
  // } = useContext(UserContext);

  // // State
  // const [updatedUser, setUpdatedUser] = useState(user);

  // useEffect(() => {
  //   setUpdatedUser(user);
  // }, [user]);

  // const { avatar, fullname, username, email, address, desc } = updateUser;

  // const onChangeUpdatedPostForm = (event) =>
  //   setUpdatedUser({ ...updatedUser, [event.target.name]: event.target.value });

  return (
    <>
      <div className="container">
        <Row className=" flex-lg-nowrap">
          <Col>
            <Row>
              <Col className="mb-3">
                <Card>
                  <Card.Body>
                    <div className="e-profile">
                      <Row>
                        <Col className="col-sm-auto mb-3">
                          <div
                            className="mx-auto"
                            style={{ width: "140px" }}
                            // value={`${avatar}`}
                          >
                            {/* <div
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
                            </div> */}
                          </div>
                        </Col>
                        <Col className="d-flex flex-column flex-sm-row justify-content-between mb-3">
                          <div className="text-center text-sm-left mb-2 mb-sm-0">
                            <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">
                              {selectedUser.fullname}
                            </h4>
                            {/* <p className="mb-0">{email}</p> */}
                            <div className="text-muted">
                              <small>Last seen 2 hours ago</small>
                            </div>
                            <div className="mt-2">
                              <button className="btn btn-primary" type="button">
                                <i className="fa fa-fw fa-camera" />
                                <span>Change Photo</span>
                              </button>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Nav className="nav-tabs">
                        <Nav.Item>
                          <Link to className="active nav-link">
                            Settings
                          </Link>
                        </Nav.Item>
                      </Nav>
                      <div className="tab-content pt-3">
                        <div className="tab-pane active">
                          <form className="form" noValidate>
                            <Row>
                              <Col>
                                <Row>
                                  <Col>
                                    <div className="form-group">
                                      <label>Full Name</label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="fullname"
                                        value={selectedUser.fullname}
                                        // onChange={onChangeUpdatedPostForm}
                                      />
                                    </div>
                                  </Col>
                                  <Col>
                                    <div className="form-group">
                                      <label>Email</label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="email"
                                        // value={email}
                                      />
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <div className="form-group">
                                      <label>Address</label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="address"
                                        // value={address}
                                      />
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col className="mb-3">
                                    <div className="form-group">
                                      <label>About</label>
                                      <textarea
                                        className="form-control"
                                        rows={5}
                                        placeholder="My Bio"
                                        defaultValue={""}
                                      />
                                    </div>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                            {/* <div className="row">
                              <div className="col-12 col-sm-6 mb-3">
                                <div className="mb-2">
                                  <b>Change Password</b>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Current Password</label>
                                      <input
                                        className="form-control"
                                        type="password"
                                        placeholder="••••••"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>New Password</label>
                                      <input
                                        className="form-control"
                                        type="password"
                                        placeholder="••••••"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="form-group">
                                      <label>
                                        Confirm{" "}
                                        <span className="d-none d-xl-inline">
                                          Password
                                        </span>
                                      </label>
                                      <input
                                        className="form-control"
                                        type="password"
                                        placeholder="••••••"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-sm-5 offset-sm-1 mb-3">
                                <div className="mb-2">
                                  <b>Keeping in Touch</b>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <label>Email Notifications</label>
                                    <div className="custom-controls-stacked px-2">
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="notifications-blog"
                                          defaultChecked
                                        />
                                        <label
                                          className="custom-control-label"
                                          htmlFor="notifications-blog"
                                        >
                                          Blog posts
                                        </label>
                                      </div>
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="notifications-news"
                                          defaultChecked
                                        />
                                        <label
                                          className="custom-control-label"
                                          htmlFor="notifications-news"
                                        >
                                          Newsletter
                                        </label>
                                      </div>
                                      <div className="custom-control custom-checkbox">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="notifications-offers"
                                          defaultChecked
                                        />
                                        <label
                                          className="custom-control-label"
                                          htmlFor="notifications-offers"
                                        >
                                          Personal Offers
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div> */}
                            <div className="row">
                              <div className="col d-flex justify-content">
                                <Button
                                  className="btn btn-info"
                                  // onClick={deleteUser.bind(this, _id)}
                                >
                                  Xóa tài khoản
                                </Button>
                              </div>
                              <div className="col d-flex justify-content-end">
                                <Button
                                  // onClick={chooseUser.bind(this, _id)}
                                  className="btn btn-danger"
                                  type="submit"
                                >
                                  Save Changes
                                </Button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default EditProfileModal;
