import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import HomePage from "../views/HomePage";
import OnBoarding from "../components/layout/OnBoarding";

const Auth = ({ authRoute }) => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  let body;

  if (authLoading)
    body = (
      <div className="d-flex justify-content-center mt-2">
        <Spinner animation="border" variant="info" />
      </div>
    );
  else if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  } else
    body = (
      <>
        {authRoute === "home" && <HomePage />}
        {authRoute === "login" && <LoginForm />}
        {authRoute === "register" && <RegisterForm />}
        {/* {authRoute === "onboarding" && <OnBoarding />} */}
      </>
    );
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          {body}
        </div>
      </div>
    </div>
  );
};

export default Auth;
