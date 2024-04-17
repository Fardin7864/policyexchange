"use client";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useEffect, useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

const Pictures = () => {
  const [pictures, setPictures] = useState([]);
  // const [currentImg, setCurrentImg] = useState("/publications/2.png");
  const [loading, setLoading] = useState(true);
  const observer = useRef();
  const [isShow, setisShow] = useState(false)

  useEffect(() => {
    fetch("/pictures.json")
      .then((res) => res.json())
      .then((data) => {
        setPictures(data);
        setLoading(false);
      });
  }, []);

  const lastPictureRef = useRef(null);

  useEffect(() => {
    if (!loading && lastPictureRef.current) {
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchMorePictures();
        }
      });

      observer.current.observe(lastPictureRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [loading]);

  const fetchMorePictures = () => {

    const newPictures = Array.from({ length: 10 }, (_, index) => ({
      id: pictures.length + index + 1,
      img: `/publications/${pictures.length + index + 1}.png`,
    }));
    setPictures((prevPictures) => [...prevPictures, ...newPictures]);
  };

 const picturesToDisplay = !isShow? pictures.slice(0,63) : pictures;

  return (
    <PhotoProvider>
      <div className="grid grid-cols-7 gap-3 mx-auto ">
        {picturesToDisplay?.slice(0,77).map((picture, index) => {
          if (index === picturesToDisplay?.length - 1) {
            return (
              <div ref={lastPictureRef} key={picture.id}>
                <PhotoView src={picture.img}>
                  <div
                    onClick={() => setCurrentImg(picture.img)}
                    className="background-div bg-no-repeat bg-cover with-overlay "
                    style={{
                      backgroundImage: `url(${picture.img})`,
                      width: "195px",
                      height: "195px",
                    }}
                  ></div>
                </PhotoView>
              </div>
            );
          } else {
            return (
              <PhotoView key={picture.id} src={picture.img}>
                <div
                  onClick={() => setCurrentImg(picture.img)}
                  className="background-div bg-no-repeat bg-cover with-overlay "
                  style={{
                    backgroundImage: `url(${picture.img})`,
                    width: "195px",
                    height: "195px",
                  }}
                ></div>
              </PhotoView>
            );
          }
        })}
      </div>
      <div className=" w-full flex justify-center items-center gap-5 text-xl mt-10">
       <button onClick={() => setisShow(true)} className={`${isShow? "hidden" : "block"} border-2 text-sm rounded-full px-6 py-2 text-white bg-[#00263a]`}>See More</button>
       <button onClick={() => setisShow(false)} className={`${isShow? "block" : "hidden"} border-2 text-sm rounded-full px-6 py-2 text-white bg-[#00263a]`}>See Less</button>
      </div>
    </PhotoProvider>
  );
};

export default Pictures;
