"use client"
import React, { useState } from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoMdPerson } from "react-icons/io";


const TeamList = () => {
    const [team, setTeam] = useState();

    useState(() => { 
        try {
            fetch("/team.json").then(res => res.json())
            .then(data=> setTeam(data?.team_members))
        } catch (error) {
            console.log(error)
        }
     },[])
    //  console.log(team)
    return (
        <div className='bg-custom rounded-lg px-5'>
            <h3 className=' text-center pt-16 text-4xl font-bold text-black'>Our Family Members</h3>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-16 gap-8'>
                {
                    team?.map(member=> 
                        <div key={member.id} className=' flex flex-col  items-center py-5'>
                            <img src={"/person.png"} className=' rounded-full bg-white w-40'/>
                            <h6 className=' font-oswald text-2xl font-bold py-3 font'>{member.name}</h6>
                            <p className=' font-semibold'>{member.designation}</p>
                            <div className=' flex gap-2 py-1 pt-2 text-xl'>
                            <FaLinkedin />
                            <FaInstagram />
                            <FaXTwitter />
                            </div>
                            <p className=' text-sm text-center pt-2'>{member.details.bio}</p>
                        </div>)
                }
            </div>
        </div>
    );
};

export default TeamList;