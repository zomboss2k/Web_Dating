import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../layout/AlertMessage";

const LoginForm = () => {
  // Context
  const { loginUser } = useContext(AuthContext);

  //  Local state
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  // Hiển thị thông báo
  const [alert, setAlert] = useState(null);

  const { username, password } = loginForm;

  const onChangeLoginForm = (event) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      const loginData = await loginUser(loginForm);

      if (loginData.success) {
        // setAlert({ type: "success", message: loginData.message });
        console.log(loginData);
      } else {
        setAlert({ type: "danger", message: loginData.message });
        setTimeout(() => {
          setAlert(null);
        }, 5000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Đăng Nhập</h1>
      <Form className="my-4" onSubmit={login}>
        <AlertMessage info={alert} />
        <Form.Group className="my-2">
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            required
            value={username}
            onChange={onChangeLoginForm}
          />
        </Form.Group>

        <Form.Group className="my-2">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange={onChangeLoginForm}
          />
        </Form.Group>

        <Button className="my-2" variant="success" type="submit">
          Đăng nhập
        </Button>
      </Form>
      <p>
        Bạn chưa có tài khoản?
        <Link to="/register">
          <Button variant="info" size="sm" className="ml-2">
            Đăng kí
          </Button>
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
