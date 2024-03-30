import Carousel from "@/components/CustomSlides";
import Featured from "@/components/Featured";
import MeetTeam from "@/components/MeetTeam";
import Services from "@/components/Services";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import WhyUs from "@/components/WhyUs";
import Head from "next/head";

export default function Home() {
  return (
    <main className=" bg-[#f8f8f8] ">
      <Head>
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-[1440px] mx-auto">
      <Carousel/>
      <Services/>
      <Featured/>
      <WhyUs/>
      <TestimonialCarousel/>
      <MeetTeam/>
      </div>
    </main>
  );
}
