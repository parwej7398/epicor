import React from "react";
import Slider from "react-slick";

const Test = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="bg-red-500 text-3xl p-4">
          <h3>1</h3>
        </div>
        <div className="bg-red-500 text-3xl p-4">
          <h3>2</h3>
        </div>
        <div className="bg-red-500 text-3xl p-4">
          <h3>3</h3>
        </div>
        <div className="bg-red-500 text-3xl p-4">
          <h3>4</h3>
        </div>
        <div className="bg-red-500 text-3xl p-4">
          <h3>5</h3>
        </div>
        <div className="bg-red-500 text-3xl p-4">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Test;
