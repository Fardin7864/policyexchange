import React from "react";
import { FaArrowLeft, FaArrowRight, FaLeaf } from "react-icons/fa";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

export { PrevArrow, NextArrow };
