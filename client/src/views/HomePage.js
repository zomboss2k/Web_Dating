import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>Bạn muốn hẹn hò sao?</h1>
      <h4>Bắt đầu thôi</h4>
      <Link to="login">
        <Button
          style={{
            width: "12rem",
            marginTop: "3rem",
            borderRadius: "10rem",
          }}
          variant="danger"
          size="lg"
        >
          Đăng nhập
        </Button>
      </Link>
    </>
  );
};

export default HomePage;
