import { useContext } from "react";
import { Nav, Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import IsMath from "./IsMath";
import Messager from "./Messager";

const NavbarMenu = () => {
  const {
    authState: {
      user: { fullname },
      user: { avatar },
      user: { email },
    },
    logoutUser,
  } = useContext(AuthContext);

  const logout = () => logoutUser();

  return (
    <>
      <div className="vertical-nav bg-white">
        <div className="py-4 px-3  bg-light">
          <div className="media d-flex align-items-center">
            <Link to="/profile">
              <img
                src={avatar}
                alt="..."
                width={65}
                className="mr-3 rounded-circle img-thumbnail shadow-sm"
                style={{ height: "65px" }}
              />
            </Link>
            <div className="media-body">
              <h4 className="m-0">{fullname}</h4>
              <p className="font-weight-light text-muted mb-0">{email}</p>
            </div>
          </div>
        </div>
        <Nav className="flex-column bg-white">
          <Nav.Item>
            <Link to="/dashboard" className="nav-link text-dark bg-light">
              <i className="bi bi-microsoft mr-3 text-primary fa-fw" />
              Home
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              to=""
              className="nav-link text-dark bg-light"
              onClick={logout}
            >
              <i className="bi bi-box-arrow-left mr-3 text-primary fa-fw" />
              Logout
            </Link>
          </Nav.Item>
        </Nav>

        <Tabs
          defaultActiveKey="match"
          id="uncontrolled-tab-example"
          className="ml-2 mb-1 font-weight-bold text-uppercase"
        >
          <Tab eventKey="match" title="CÁC TƯƠNG HỢP">
            <IsMath />
          </Tab>
          <Tab eventKey="messages" title="TRÒ CHUYỆN">
            <Messager />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default NavbarMenu;
