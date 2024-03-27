import Carousel from "@/components/CustomSlides";
import Head from "next/head";

export default function Home() {
  const images = ['']
  return (
    <main className=" bg-[#f8f8f8] ">
      <Head>
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-[1440px] mx-auto h-[2000px]">
      <Carousel/>
      </div>
    </main>
  );
}
