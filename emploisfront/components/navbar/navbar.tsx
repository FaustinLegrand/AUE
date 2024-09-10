import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Navbar: React.FC = () => {
  return (
    <div className="w-[100%] flex justify-center items-center h-16">
      <div className="flex flex-row justify-between items-center w-[80%]">
        <div>
          <p>AUE</p>
        </div>
        <div>
          <a href="">Outils</a>
        </div>
        <div className="flex flex-row gap-4">
          <a href="">Connexion</a>
          <a href="">Inscription</a>
        </div>
      </div>
    </div>
  )
};

export default Navbar;