import { React, useContext, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import { AuthContext } from "../../contexts/AuthContext";
import { Button, Carousel } from "react-bootstrap";
import "./profile.css"
const Profile = () => {
  const {
    authState: {
      user: { fullname },
      user: { age },
      user: { avatar },
      user: { email },
      user: { gender },
      user: { mobile },
      user: { address },
      user: { images },
    },
  } = useContext(AuthContext);

  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }
  return (
    <div className="">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9">
            <MDBCard>
              <div
                className="rounded-top text-white d-flex flex-row gradient-custom-2"
                style={{ height: "200px" }}
              >
                {/* <img src={images} alt="icon" /> */}
                <div
                  className="ms-4 mt-5 ml-3 d-flex flex-column"
                  style={{ width: "150px" }}
                >
                  <MDBCardImage
                    src={avatar}
                    alt="Generic placeholder image"
                    className="mt-4 mb-2 img-thumbnail"
                    fluid
                    style={{ width: "150px", zIndex: "1" }}
                  />
                  <MDBBtn
                    outline
                    color="dark"
                    style={{ height: "36px", overflow: "visible", zIndex: 1 }}
                  >
                    Edit profile
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
                    <MDBCardText className="mb-1 h5">253</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Photos
                    </MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">1026</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Followers
                    </MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">478</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Following
                    </MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                    <MDBCardText className="font-italic mb-1">
                      Web Developer
                    </MDBCardText>
                    <MDBCardText className="font-italic mb-1">
                      Lives in New York
                    </MDBCardText>
                    <MDBCardText className="font-italic mb-0">
                      Photographer
                    </MDBCardText>
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
                  <section className="slider">
                    <Button className="left-arrow" onClick={prevSlide} />
                    <Button className="right-arrow" onClick={nextSlide} />
                    {images.map((slide, index) => (
                      <div
                        // className={
                        //   index === current ? "slide active" : "slide"
                        // }
                        key={index}
                      >
                        {index === current && (
                          <img
                            src={slide}
                            alt="travel image"
                            className="image"
                          />
                        )}
                      </div>
                    ))}
                  </section>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Profile;
