import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Navbar: React.FC = () => {
  return (
    <div className="w-[100%] flex justify-center items-center h-16 border-b border-gray-500">
      <div className="flex flex-row justify-between items-center w-[80%]">
        <div>
          <p className="font-bold text-[30px] text-[#778FA2] hover:text-[#0b5394]">AUE</p>
        </div>
        <div>
          <a href="" className="text-[20px]">Outils</a>
        </div>
        <div className="flex flex-row gap-6">
          <a href="" className="border border-green-600 w-[100px] h-[35px] flex items-center justify-center rounded-lg hover:bg-green-600 hover:text-white">Connexion</a>
          <a href="" className="border border-green-600 w-[100px] h-[35px] flex items-center justify-center rounded-lg hover:bg-green-600 hover:text-white">Inscription</a>
        </div>
      </div>
    </div>
  )
};

export default Navbar;