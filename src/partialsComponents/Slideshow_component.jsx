import React, { useRef, useState, useEffect } from "react";
import "../assets/css/slideshow.css";
import "../index.css";
import { getImage } from "../customMethods/getImage";

const delayTime = 2400;

const Slideshow_component = ({ roomImgs }) => {
  const [index, setIndex] = useState(0);
  const [roomImg, setRoomImgs] = useState([]);
  const timeOutRef = useRef(null);
  // roomImgs
  // var roomImages= roomImgs
  function resetTimeout() {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    setRoomImgs(roomImgs);

    timeOutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === roomImg.length - 1 ? 0 : prevIndex + 1
        ),
      delayTime
    );

    return () => {
      resetTimeout();
    };
  }, [index, roomImg]);

  return (
    <div className="slideShow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {roomImg.map((img, idx) => (
          <a href="/" className="slide" key={idx}>
            <img src={getImage(img)} className="slideImg" alt="img component" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Slideshow_component;
