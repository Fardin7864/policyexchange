import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MeetTeam = () => {
  return (
    <Container className=" flex flex-col lg:flex-row justify-between items-center gap-8 pb-16">
      <Image
        src={"/ceo.jpg"}
        width={700}
        height={0}
        alt="img"
        className=" rounded-lg"
      />
      <div className=" pb-16">
        <h1 className=" text-center mb-9 text-4xl font-bold">About Our Team</h1>
        <p className=" text-justify">
          A competent team headed by former World Bank Group Program Manager and
          Economist Dr. Masrur Reaz who is supported by a team of three
          economists and four researchers and market analysts. The team is also
          supported by senior experts in value chain development, public sector
          reforms, revenue and trade facilitation reform, and private sector
          engagement.
        </p>
        <div className=" w-full flex justify-center items-center pt-16">
          <Link href={"/team"}>
            <button className="bg-[#74D194] hover:bg-[#179A44] active:opacity-60 py-3 px-5 rounded-full text-white font-bold">
              {" "}
              View Team{" "}
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default MeetTeam;
