import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Col, Row, Spinner } from "react-bootstrap";
import NavbarMenu from "../layout/NavbarMenu";

const ProtectedRoute = () => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  if (authLoading)
    return (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );

  return isAuthenticated ? (
    <>
      {/* <Row> */}
        {/* <Col sm="4"> */}
          <NavbarMenu />
        {/* </Col> */}
        {/* <Col sm="8"> */}
          <div className="page-content p-5">
            <Outlet />
          </div>
        {/* </Col> */}
      {/* </Row> */}
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
