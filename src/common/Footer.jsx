import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  // Get current year
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-5">
      <div
        className=" bg-[#00263a] pt-16 pb-24 px-20 max-w-[1440px] mx-auto rounded-3xl
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          <div className=" text-white flex flex-col gap-3 font-medium">
            <h3 className=" text-[#a790d5] text-2xl font-bold pb-5">Contact</h3>
            <p className="hover:text-[#a790d5]">+88-02-8881834</p>
            <p className="hover:text-[#a790d5]">+8801844-582748</p>
            <p className="hover:text-[#a790d5]">info@policyexchangebd.com</p>
            <p className="hover:text-[#a790d5]">
              House 14/c, 5th Floor, Road 95, Gulshan 2, Dhaka 1216, Bangladesh
            </p>
          </div>

          <div className=" text-white flex flex-col gap-3 font-medium">
            <h3 className=" text-[#a790d5] text-2xl font-bold pb-5">
              Resources
            </h3>
            <p className="hover:text-[#a790d5]">Insights</p>
            <p className="hover:text-[#a790d5]">Publications</p>
            <p className="hover:text-[#a790d5]">Photos & Videos</p>
            <p className="hover:text-[#a790d5]">Policy Exchange News</p>
          </div>

          <div className=" text-white flex flex-col gap-3 font-medium">
            <h3 className=" text-[#a790d5] text-2xl font-bold pb-5">
              Quick Link
            </h3>
            <p className="hover:text-[#a790d5]">Events</p>
            <p className="hover:text-[#a790d5]">About Us</p>
            <p className="hover:text-[#a790d5]">Reserch and Analytics</p>
            <p className="hover:text-[#a790d5]">Our Team</p>
          </div>

          <div className=" text-white flex flex-col gap-3 font-medium">
            <h3 className=" text-[#a790d5] text-2xl font-bold pb-5">
              Follow Us
            </h3>
            <div className=" flex gap-2 text-4xl">
              <FaFacebookSquare className=" hover:text-[#a790d5]" />
              <FaLinkedin className=" hover:text-[#a790d5]" />
              <FaInstagram className=" hover:text-[#a790d5]" />
              <FaXTwitter className=" hover:text-[#a790d5]" />
            </div>
            <p className=" hover:text-[#a790d5]">#GreaterTogether</p>
            <p> </p>
            <Image
              src={"/logotrans.png"}
              width={250}
              height={0}
              alt="logo"
              className=""
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 mt-8">
          &copy; {currentYear} All Rights Reserved to Policy Exchange ||
          Developed by{" "}
          <Link
            href={"https://www.contentguy.co"}
            target="_blank"
            className=" text-blue-400"
          >
            ContentGuy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
