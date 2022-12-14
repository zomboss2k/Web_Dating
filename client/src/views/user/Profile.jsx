import { React, useContext } from "react";
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import { AuthContext } from "../../contexts/AuthContext";
import SlideImage from "./SlideImage";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const Profile = () => {
  const {
    authState: {
      user: { avatar },
      user: { fullname },
      user: { age },
      user: { mobile },
      user: { address },
      user: { gender },
      user: { desc },
      user,
      getUser,
    },
  } = useContext(AuthContext);

  let navigate = useNavigate();

  const chooseUser = () => {
    navigate(`/edit-profile/${user._id}`);
  };

  return (
    <div className="">
      {/* <MDBContainer className="py-5 h-100"> */}
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="9">
          <MDBCard>
            <div
              className="rounded-top text-white d-flex flex-row gradient-custom-2"
              style={{ height: "200px" }}
            >
              <div
                className="ms-4 mt-5 ml-3 d-flex flex-column"
                style={{ width: "150px" }}
              >
                <MDBCardImage
                  src={avatar}
                  alt="Generic placeholder image"
                  className="mt-4 mb-2 img-thumbnail"
                  fluid
                  style={{ width: "150px", zIndex: "1", height: "155px" }}
                />
                {/* <Link
                  color="dark"
                  to={`/edit-profile/${user._id}`}
                  // onClick={chooseUser.bind(this, _id)}
                  style={{ height: "36px", overflow: "visible", zIndex: 1 }}
                >
                  
                </Link> */}
                <MDBBtn
                  color="dark"
                  outline
                  onClick={chooseUser.bind(this)}
                  style={{ height: "36px", overflow: "visible", zIndex: 1 }}
                >
                  Edit profile
                </MDBBtn>
                <MDBBtn
                  color="dark"
                  outline
                  onClick={chooseUser.bind(this)}
                  style={{ height: "36px", overflow: "visible", zIndex: 1 }}
                >
                  message
                </MDBBtn>
              </div>
              <div
                className="ms-3 ml-4 text-black"
                style={{ marginTop: "130px" }}
              >
                <MDBTypography tag="h5">{fullname}</MDBTypography>
                <MDBCardText>{address}</MDBCardText>
              </div>
            </div>
            <div
              className="p-4 text-black"
              style={{ backgroundColor: "#f8f9fa" }}
            >
              <div className="d-flex justify-content-end text-center py-1">
                <div>
                  <MDBCardText className="mb-1 h5">{gender}</MDBCardText>
                  <MDBCardText className="small text-muted mb-0">
                    Gi???i t??nh
                  </MDBCardText>
                </div>
                <div className="px-3">
                  <MDBCardText className="mb-1 h5">{age}</MDBCardText>
                  <MDBCardText className="small text-muted mb-0">
                    N??m Sinh
                  </MDBCardText>
                </div>
                <div>
                  <MDBCardText className="mb-1 h5">{gender}</MDBCardText>
                  <MDBCardText className="small text-muted mb-0">
                    Gi???i t??nh
                  </MDBCardText>
                </div>
              </div>
            </div>
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <p className="lead fw-normal mb-1">About</p>
                <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                  <MDBCardText className="font-italic mb-1">{desc}</MDBCardText>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <MDBCardText className="lead fw-normal mb-0">
                  Recent photos
                </MDBCardText>
                <MDBCardText className="mb-0">
                  <a href="#!" className="text-muted">
                    Show all
                  </a>
                </MDBCardText>
              </div>
              <MDBRow>
                <MDBCol>
                  <SlideImage />
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      {/* </MDBContainer> */}
    </div>
  );
};

export default Profile;
