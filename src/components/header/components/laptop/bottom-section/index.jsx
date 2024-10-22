import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { AiFillMessage } from 'react-icons/ai';
import { FaHeart, FaUserCircle } from 'react-icons/fa';
import add from '@/assets/img/add.svg';

const BottomSection = () => {
  const [isHidden, setIsHidden] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className=' hidden max-lg:block'>
      <div
      className={`bg-white w-full h-16 fixed bottom-0 left-0 right-0 z-20 px-4 flex justify-between transform transition-transform duration-500 ${isHidden ? 'translate-y-[145%]' : 'translate-y-0'}`}
    >
      <NavLink to={`/`} className={({ isActive }) => `flex flex-col gap-1 justify-center items-center hover:text-[#ff4f08]  ${isActive ? 'text-[#ff4f08] ' : 'text-[#8d94ad]'}`}>
        <MdHome className='h-6 w-6' />
        <span className='text-[8px] font-normal'>ƏSAS</span>
      </NavLink>
      <NavLink to={`/chosen`} className={({ isActive }) => `flex flex-col gap-1 justify-center items-center hover:text-[#ff4f08]  ${isActive ? 'text-[#ff4f08] ' : 'text-[#8d94ad]'}`}>
        <FaHeart className='h-5 w-5' />
        <span className='text-[8px] font-normal'>SEÇİLMİŞLƏR</span>
      </NavLink>
      <NavLink
        to={'/elanlar/new'}
        className='flex flex-col gap-1 items-center justify-center transform -translate-y-4 hover:text-[#ff4f08] text-[#8d94ad]'
      >
        <div className=''>
          <img src={add} alt="" />
        </div>
        <span className='text-[8px] font-normal'>YENİ ELAN</span>
      </NavLink>
      <NavLink to={`/messages/all`} className={({ isActive }) => `flex flex-col gap-1 justify-center items-center hover:text-[#ff4f08]  ${isActive ? 'text-[#ff4f08] ' : 'text-[#8d94ad]'}`}>
        <AiFillMessage className='h-5 w-5' />
        <span className='text-[8px] font-normal'>MESAJLAR</span>
      </NavLink>
      <NavLink to={`/profil`} className={({ isActive }) => `flex flex-col gap-1 justify-center items-center hover:text-[#ff4f08]  ${isActive ? 'text-[#ff4f08] ' : 'text-[#8d94ad]'}`}>
        <FaUserCircle className='h-5 w-5' />
        <span className='text-[8px] font-normal'>KABİNET</span>
      </NavLink>
    </div>
    </div>
  );
};

export default BottomSection;
