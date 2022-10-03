import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const SlideImage = () => {
  const {
    authState: {
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
    <>
      <section className="slider_img">
        <i
          className="bi bi-chevron-double-left left-arrow"
          onClick={prevSlide}
        />
        <i
          className="bi bi-chevron-double-right right-arrow"
          onClick={nextSlide}
        />
        {images.map((img, i) => (
          <div key={i} style={{maxWidth: "450px"}}>
            {i === current && (
              <img src={img} alt="travel image" className="image" />
            )}
          </div>
        ))}
      </section>
    </>
  );
};

export default SlideImage;
