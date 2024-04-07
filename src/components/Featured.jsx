
import React from "react";
import ActionAreaCard from "./Card";
import Link from "next/link"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const NewsCard = ({image, title, details,bottomBorder,classes}) => { 
  
  return(
    <Card className={`shadow-2xl rounded-xl w-full z-10 ${classes} hover:opacity-75`}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="120"
        image={image}
        alt="green iguana"
        className={`md:h-[190px]`}
      />
      <div className={`h-2 w-full`} style={{backgroundColor: `${bottomBorder}`}}></div>
      <CardContent className={` my-5 bg-white`}>
        <Typography gutterBottom variant="h5" component="div" className=' text-base'>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className=" text-sm">
          {details}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  );
 }

const Featured = () => {
  return ( 
    <div className=" bg-[#011A27] mt-16 rounded-3xl py-10 pb-10 brand-section">
    <h1 className=" text-center text-5xl font-bold mb-3 text-white">Latest News</h1>
    <div className="">
      <div className="flex flex-col lg:flex-row justify-center gap-5 py-10 w-9/12 mx-auto ">

      <NewsCard image="/news/1.jpg" title="গ্যাসের অভাবে কতোটা সংকটে শিল্প ও অর্থনীতি? | অর্থনীতির সংলাপ | DBC NEWS" details="Dr. M Masrur Reaz, Chairman, of Policy Exchange Bangladesh,…"  bottomBorder={"#8D87F9"} />
      <NewsCard image="/news/2.png" title="“Insights On NPL Challenges And Government Initiatives: A Perspective From M. Masrur Reaz, Chairman And CEO Of Policy Exchange Bangladesh”" details="M Masrur Reaz, Chairman and CEO of Policy…" bottomBorder={"#F5CC00"} />
      <NewsCard image="/news/3.png" title="Media Coverage Of The Event “Advancing Circular Textile Policies In Bangladesh.”" details="Policy Exchange Bangladesh, an economic think-tank in…"  bottomBorder={"#9DE7D7"}/>
      <NewsCard image="/news/4.jpeg" title="SheSTEM: Advancing Women In STEM Supported By The Embassy Of The Kingdom Of The Netherlands" details="Policy Exchange Bangladesh is pleased to be…"  bottomBorder={"#1A73E8"} />
      </div>
      {/* <div className=" hidden w-72 h-72 bg-[#a790d5] lg:relative -top-[580px] left-[1000px] rounded-full z-0">
      </div> */}
    </div>
    <div className=" w-full flex justify-center items-center">
      <Link href={"/publications"}><button className=' bg-[#a790d5] hover:bg-[#307fe2] active:opacity-60 py-3 px-5 rounded-full text-white font-bold'> Vew All News </button></Link>
      </div>
    </div>
  );
};

export default Featured;
