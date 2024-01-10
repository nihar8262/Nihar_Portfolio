import React, { useState } from "react";
import { skills } from "../data/constants";
import image1 from "../Image/astro2.png"
import image2 from "../Image/fire.png"
import image3 from "../Image/planet.png"
import image4 from "../Image/planet1.png"
import image6 from "../Image/satellite.png"
import { Message } from "./message";


export const Skills = () => {
    const [nav ,setNav]=useState(false);
  return (
    <div id="skills">
      <div className="flex relative flex-col justify-center items-center">

        {/* skills header */}
        <div className="text-white text-center mt-10  w-[20rem] ">
          <h1 className="font-bold  text-3xl mb-10 border-b-2 border-b-yellow-500 py-2">Skills</h1>
          <p className="">
            Here are some of my skills on which I have been working on for the
            past 3 years.
          </p>
        </div>
        {/* Skills container */}
       <div className=" justify-center">
       <div className="hidden md:block absolute bottom-96 left-0 md:left-28 transfom transition duration-500 hover:scale-125 animate-spin">
            <img src={image4} alt="" className="w-24"/>
        </div>
        
        <div className=" absolute top-16 right-44 md:right-28 transfom transition duration-500 hover:scale-125  hover:translate-y-10   ">
            <img src={image3} alt="" className="w-24"/>
        </div>
        
        <div className=" absolute top-48 left-auto md:left-auto transfom transition duration-500 hover:scale-125  hover:-translate-y-10 animate-bounce">
            <button onClick={()=> setNav(!nav)}>
            {
                nav ? <Message/> :null
            }
            <img src={image1} alt="" className="w-24"/>
            </button>
        </div>
        
        <div className="hidden md:block absolute bottom-0 right-20 md:right-20 md:bottom-0 transfom transition duration-500 hover:scale-125 hover:translate-x-10 hover:translate-y-5">
            <img src={image6} alt="" className="w-24"/>
        </div>
        

       <div className="w-[20rem] md:grid md:grid-cols-2  md:gap-10  mt-10  md:w-[35rem]  ">
            {
                skills.map((skill) =>(
                    <div className="border-2 border-[#854CE6] shadow-lg shadow-indigo-500/25  mt-5 p-5 rounded-lg mb-10 ">
                        <h1 className="text-3xl text-center text-slate-500 font-bold mb-5  ">{skill.title}</h1>
                        <div className="flex  flex-wrap gap-4 items-center justify-center">
                            {
                                skill.skills.map((item)=>(
                                    
                                    <div className=" border border-slate-500  p-2 flex  rounded-lg justify-center items-center gap-2 ">
                                        <img src={item.image} alt="" className="w-5 "/><p className="text-white">{item.name}</p>
                                    </div>
                                    
                                ))
                            }
                        </div>
                    </div>
               ))
            }
            
        </div>
       </div>
      </div>
    </div>
  );
};
