import { useContext } from "react";
import { Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { LOCAL_STORAGE_TOKEN_NAME } from "../../contexts/constants";
import IsMath from "./IsMath";

const NavbarMenu = () => {
  const {
    authState: {
      user: { fullname },
      user: { avatar },
      user: { email },
    },
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    navigate("/");
  };

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
            <Link
              to="/dashboard"
              className="nav-link text-dark font-italic bg-light"
            >
              <i className="bi bi-microsoft mr-3 text-primary fa-fw" />
              Home
            </Link>
          </Nav.Item>
        </Nav>

        <IsMath />
      </div>
    </>
  );
};

export default NavbarMenu;
