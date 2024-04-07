"use client";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useEffect, useState } from "react";

const Pictures = () => {
  const [pictures, setPictures] = useState();
  const [currentImg, setCurrentImg] = useState("/publications/2.png");

  useEffect(() => {
    fetch("/pictures.json")
      .then((res) => res.json())
      .then((data) => setPictures(data));
  }, []);
  //   console.log(pictures)
  // console.log(currentImg);
  return (
    <PhotoProvider>
      <div className=" grid grid-cols-9 gap-3 mx-auto border-2">
        {pictures?.map((picture) => (
          <PhotoView key={picture.id} src={picture.img}>
            <div
              onClick={() => setCurrentImg(picture.img)}
              className="background-div bg-no-repeat bg-cover with-overlay"
              style={{
                backgroundImage: `url(${picture.img})`,
                width: "150px",
                height: "150px",
              }}
            ></div>
            {/* <img src={picture.img} alt="" /> */}
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default Pictures;
