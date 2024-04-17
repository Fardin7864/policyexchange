import Image from 'next/image';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaBookmark, FaChartPie, FaCrown   } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { FaDisplay } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";





 const WhatWeDoCard = ({ icon: Icon, title, details}) => { 
    
    return(
        <div className=' flex flex-col items-center'>
            <div className=' p-5 w-52 h-52 bg-[#3080e2] flex justify-center items-center rounded-full'>
            {Icon}
            </div>
            {/* <div className=' mt-5 text-center px-28 border-2 border-black'>
                <h3 className=' text-2xl font-semibold pb-3'>{title}</h3>
                <p className=' '>{details}</p>
            </div> */}
        </div>
    )
 }

 export default WhatWeDoCard;