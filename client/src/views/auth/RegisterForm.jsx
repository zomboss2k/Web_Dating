import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../../components/layout/AlertMessage";

const RegisterForm = () => {
  // Context
  const { registerUser } = useContext(AuthContext);

  //  Local state
  const [registerForm, setRegisterForm] = useState({
    username: "",
    fullname: "",
    age: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Hiển thị thông báo
  const [alert, setAlert] = useState(null);

  const {
    username,
    // fullname,
    // age,
    // mobile,
    email,
    // gender,
    password,
    confirmPassword,
  } = registerForm;

  const onChangeRegisterForm = (event) => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
  };

  const register = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setAlert({ type: "danger", message: "Mật khẩu không đúng" });
      setTimeout(() => {
        setAlert(null);
      }, 5000);
      return;
    }
    try {
      const registerData = await registerUser(registerForm);

      if (registerData.success) {
        // setAlert({ type: "success", message: loginData.message });
        console.log(registerData);
      } else {
        setAlert({ type: "danger", message: registerData.message });
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
      <h1>Đăng Ký</h1>
      <Form className="my-4" onSubmit={register}>
        <AlertMessage info={alert} />
        <Form.Group className="my-2">
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            required
            value={username}
            onChange={onChangeRegisterForm}
          />
        </Form.Group>

        {/* <Form.Group className="my-2">
          <Form.Control
            type="text"
            placeholder="Fullname"
            name="fullname"
            required
            value={fullname}
            onChange={onChangeRegisterForm}
          />
        </Form.Group> */}

        <Form.Group className="my-2">
          <Form.Control
            type="text"
            placeholder="Email"
            name="email"
            required
            value={email}
            onChange={onChangeRegisterForm}
          />
        </Form.Group>

        {/* <Form.Group className="my-2">
          <Form.Control
            type="text"
            placeholder="Age"
            name="age"
            required
            value={age}
            onChange={onChangeRegisterForm}
          />
        </Form.Group>

        <Form.Group className="my-2">
          <Form.Control
            type="text"
            placeholder="Mobile"
            name="mobile"
            required
            value={mobile}
            onChange={onChangeRegisterForm}
          />
        </Form.Group>

        <Form.Group className="my-2">
          <Form.Control
            type="text"
            placeholder="Gender"
            name="gender"
            required
            value={gender}
            onChange={onChangeRegisterForm}
          />
        </Form.Group> */}

        <Form.Group className="my-2">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange={onChangeRegisterForm}
          />
        </Form.Group>

        <Form.Group className="my-2">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
            value={confirmPassword}
            onChange={onChangeRegisterForm}
          />
        </Form.Group>

        {/* <Link to="/onboarding"> */}
          <Button className="my-2" variant="success" type="submit">
            Đăng Ký
          </Button>
        {/* </Link> */}
      </Form>
      <p>
        Bạn đã có tài khoản?
        <Link to="/login">
          <Button variant="info" size="sm" className="ml-2">
            Đăng Nhập
          </Button>
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
