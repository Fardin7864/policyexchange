"use client";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useEffect, useState, useRef } from "react";

const Pictures = () => {
  const [pictures, setPictures] = useState([]);
  const [currentImg, setCurrentImg] = useState("/publications/2.png");
  const [loading, setLoading] = useState(true);
  const observer = useRef();

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
          // Load more pictures
          // For simplicity, let's load 10 more pictures each time
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
    // Simulating fetching more pictures from API
    // For demonstration purposes, just adding 10 more images with the same URL
    const newPictures = Array.from({ length: 10 }, (_, index) => ({
      id: pictures.length + index + 1,
      img: `/publications/${pictures.length + index + 1}.png`,
    }));
    setPictures((prevPictures) => [...prevPictures, ...newPictures]);
  };

  return (
    <PhotoProvider>
      <div className="grid grid-cols-9 gap-3 mx-auto border-2">
        {pictures.map((picture, index) => {
          if (index === pictures.length - 1) {
            return (
              <div ref={lastPictureRef} key={picture.id}>
                <PhotoView src={picture.img}>
                  <div
                    onClick={() => setCurrentImg(picture.img)}
                    className="background-div bg-no-repeat bg-cover with-overlay"
                    style={{
                      backgroundImage: `url(${picture.img})`,
                      width: "150px",
                      height: "150px",
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
                  className="background-div bg-no-repeat bg-cover with-overlay"
                  style={{
                    backgroundImage: `url(${picture.img})`,
                    width: "150px",
                    height: "150px",
                  }}
                ></div>
              </PhotoView>
            );
          }
        })}
      </div>
    </PhotoProvider>
  );
};

export default Pictures;
