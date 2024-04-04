"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Pictures = () => {
  const [pictures, setPictures] = useState();
  const [currentImg, setCurrentImg] = useState("/publications/2.png")

  useEffect(() => {
    fetch("/pictures.json")
      .then((res) => res.json())
      .then((data) => setPictures(data));
  }, []);
//   console.log(pictures)
console.log(currentImg)
  return (
    <div className=" grid grid-cols-3 grid-rows-2">
      <div className="  border-black row-span-1">
        <img src={currentImg} alt=""/>
      </div>
      <div className=" col-span-2  border-black">
        <div className=" grid grid-cols-6 gap-3">

      {
            pictures?.map((picture) => 
            <img key={picture.id} onClick={() => setCurrentImg(picture.img)} src={picture.img} className=" w-40 h-40"/>)
        }
        </div>
      </div>
      {/* <div className=" col-span-3  border-black h-24">

      </div> */}
    </div>
  );
};

export default Pictures;
