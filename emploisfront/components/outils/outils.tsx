import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import outil from "./../../data/outils/outils.json";


const Outils: React.FC = () => {
  return (
    <div className="w-full flex flex-row items-center justify-center mt-32 gap-8">
        {outil.map((element, index) => {
            return(
                <div key={index} className="w-[250px] h-[300px] border border-gray-500 rounded-lg flex flex-col items-center justify-center">
                    <div className="h-[90%] flex flex-col items-center justify-between">
                        <p className="font-bold">{element.name}</p>
                        <p className="text-justify w-[80%]">{element.description}</p>
                        <a href={element.destination} className="w-[180px] h-[40px] flex items-center justify-center font-bold border border-[#0b5394] hover:bg-[#0b5394] hover:text-white rounded-lg">{element.name}</a>
                    </div>
                </div>
            )
        })}
    </div>
  )
};

export default Outils;