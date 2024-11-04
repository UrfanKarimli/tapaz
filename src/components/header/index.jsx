import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaHeart } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";
import Logo from '@/assets/img/logo-tap-az.svg';
import Katalog from './components/katalog';
import Filter from './components/filter';
import { useLikedAd } from '@/services/stores/useLikedAd';
import { useLocation } from 'react-router-dom';
import Auth from '../auth';
import Profile from './components/profile';
import LgTop from './components/laptop/top-section';
import InputLg from './components/laptop/input-section';
import LgKatalog from './components/laptop/kataloq-section';

const Header = () => {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const { likedData } = useLikedAd();
    const location = useLocation().pathname;
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
        <header className={`${isHidden ? '-translate-y-[100%]' : 'translate-y-0'} sticky top-0 left-0 w-full z-40 transform transition-transform duration-500`}>
            <div className="header-top max-lg:hidden bg-[#f8f9fd]">
                <div className="container flex items-center justify-between text-[#212c3a] py-1 text-base">
                    <div className="left">
                        <ul className='flex items-center gap-4'>
                            <li><a href="https://turbo.az/" target='_blank' className='text-[#8d94ad] leading-7 hover:text-[#ff4f08]'>Turbo.az</a></li>
                            <li><a href="https://bina.az" target='_blank' className='text-[#8d94ad] leading-7 hover:text-[#ff4f08]'>Bina.az</a></li>
                            <li><a href="https://boss.az" target='_blank' className='text-[#8d94ad] leading-7 hover:text-[#ff4f08]'>Boss.az</a></li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul className='flex items-center gap-5'>
                            <li>
                                <a href="https://wa.me/994997564177" target="_blank" rel="noopener noreferrer" className='text-[#8d94ad] leading-7 hover:text-[#ff4f08] flex items-center group gap-1'>
                                    <FaPhoneAlt />
                                    <span className='text-black group-hover:text-[#ff4f08]'>(099) 756-41-77</span>
                                </a>
                            </li>
                            <li><Link to={'/help/popular_questions'} className='text-[#8d94ad] leading-7 hover:text-[#ff4f08]'>Yardım</Link></li>
                            <li><Link to={'/messages/all'} className='text-[#8d94ad] leading-7 hover:text-[#ff4f08] flex items-center gap-1'><AiFillMessage />Mesajlar</Link></li>
                            <li><Link to={'/chosen'} className='text-[#8d94ad] leading-7 hover:text-[#ff4f08] flex items-center gap-2'><FaHeart />Seçilmişlər<sup className='text-[#ff4f08] text-[12px] font-bold'>{likedData.length}</sup></Link></li>
                            <li>
                                {currentUser ? <Profile name={currentUser} /> : <Auth />}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-bottom max-lg:hidden bg-[#ff4f08] py-4">
                <div className="container flex items-center gap-3 max-h-10">
                    <Link className='flex items-center h-10' to={'/'}>
                        <img src={Logo} alt="Logo" />
                    </Link>
                    {location === '/elanlar/new' ? null : (
                        <>
                            <Katalog />
                            <Filter />
                            <Link to={'/elanlar/new'} className='truncate rounded-[7px] h-10 bg-[#7ed321] text-white cursor-pointer flex gap-1 items-center py-3 px-4'>
                                <BsPlusCircle className='h-4 w-4' />
                                Yeni elan
                            </Link>
                        </>
                    )}
                </div>
            </div>
            {location.includes('/profile') || location.includes('/elanlar/new') ? (null) : (
                <div className='hidden max-lg:block px-4 bg-white'>
                    <LgTop />
                    <InputLg />
                    <LgKatalog />
                </div>
            )}
        </header>
    );
};

export default Header;
