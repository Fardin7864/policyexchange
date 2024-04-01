// "use client";
import Carousel from "@/components/CustomSlides";
import Featured from "@/components/Featured";
import MeetTeam from "@/components/MeetTeam";
import Publications from "@/components/Publications";
import Services from "@/components/Services";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import WhyUs from "@/components/WhyUs";
import Head from "next/head";
// import { useEffect } from "react";
// import particlesJS from 'particles.js';


export default function Home() {
  // useEffect(() => {
  //   particlesJS.load("particles-js", "/particlesjs-config.json", function () {
  //   });
  // }, []);
  return (
    <main className=" background-img ">
      {/* <div
        id="particles-js"
        style={{ position: "absolute", width: "100%", height: "100%" }}
      ></div> */}

      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Carousel />
      <div className="max-w-[1440px] mx-auto">
        <Services />
        <Featured />
        <WhyUs />
        <Publications />
        <TestimonialCarousel />
        <MeetTeam />
      </div>
    </main>
  );
}
