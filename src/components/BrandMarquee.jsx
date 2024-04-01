import React from "react";
import Marquee from "react-fast-marquee";

const BrandMarquee = () => {
  return (
    <div className=" brand-section rounded-lg mb-14 flex">
      <h1 className=" text-white py-8 text-4xl font-bold px-5">
        WHO 
        WE <br /> WORK WITH 
      </h1>
      <Marquee autoFill="true">
        <img
          className=" mr-10"
          style={{ height: "100px", borderRadius: '4px' }}
          src="/logos/amcham.png"
          alt="image1"
        />

       <img
          style={{ height: "100px", borderRadius: '4px' }}
          className=" mr-10"
          src="/logos/bangladesh.png"
          alt="image2"
        />
 
        <img
          style={{ height: "100px", borderRadius: '4px' }}
          className=" mr-10"
          src="/logos/bida.png"
          alt="image3"
        />

        <img
          style={{ height: "100px", borderRadius: '4px' }}
          className=" mr-10"
          src="/logos/cowater.png"
          alt="image4"
        />

        <img
          style={{ height: "100px", borderRadius: '4px' }}
          className=" mr-10"
          src="/logos/dcci.png"
          alt="image5"
        />

        <img
          className=" mr-10"
          style={{ height: "100px", borderRadius: '4px' }}
          src="/logos/ficci.png"
          alt="image6"
        />

        <img
          className=" mr-10"
          style={{ height: "100px", borderRadius: '4px' }}
          src="/logos/forcommunication.png"
          alt="image6"
        />

        <img
          className=" mr-10"
          style={{ height: "100px", borderRadius: '4px' }}
          src="/logos/itojyty1.png"
          alt="image6"
        />

        <img
          className=" mr-10"
          style={{ height: "100px", borderRadius: '4px' }}
          src="/logos/jetro.png"
          alt="image6"
        />


        <img
          className=" mr-10"
          style={{ height: "100px", borderRadius: '4px' }}
          src="/logos/lightcas.png"
          alt="image6"
        />


        <img
          className=" mr-10"
          style={{ height: "100px", borderRadius: '4px' }}
          src="/logos/metlife.png"
          alt="image6"
        />


        <img
          className=" mr-10"
          style={{ height: "100px", borderRadius: '4px' }}
          src="/logos/ministryofcommerce.png"
          alt="image6"
        />


        <img
          className=" mr-10"
          style={{ height: "100px", borderRadius: '4px' }}
          src="/logos/ministryoffinance.jpg"
          alt="image6"
        />


        <img
          className=" mr-10"
          style={{ height: "100px", borderRadius: '4px' }}
          src="/logos/nestla.png"
          alt="image6"
        />


        <img
          className=" mr-10"
          style={{ height: "100px", borderRadius: '4px' }}
          src="/logos/pwc.png"
          alt="image6"
        />


        <img
          className=" mr-10"
          style={{ height: "100px", borderRadius: '4px' }}
          src="/logos/un.png"
          alt="image6"
        />


        <img
          className=" mr-10"
          style={{ height: "100px", borderRadius: '4px' }}
          src="/logos/usda.png"
          alt="image6"
        />


        <img
          className=" mr-10"
          style={{ height: "100px", borderRadius: '4px' }}
          src="/logos/vanture.png"
          alt="image6"
        /> 
      </Marquee>
    </div>
  );
};

export default BrandMarquee;
