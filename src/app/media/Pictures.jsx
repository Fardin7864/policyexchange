"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Pictures = () => {
  const [pictures, setPictures] = useState();
  const [currentImg, setCurrentImg] = useState()

  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => setPictures(data.team_members));
  }, []);
//   console.log(pictures)
  return (
    <div className=" grid grid-cols-3 grid-rows-2">
      <div className=" border-2 border-black">
        <Image
        src={"/publications/1.png"}
        width={600}
        height={600}
        alt="galary"
        />
      </div>
      <div className=" col-span-2 border-2 border-black">

      </div>
      <div className=" col-span-3 border-2 border-black h-24">

      </div>
    </div>
  );
};

export default Pictures;
