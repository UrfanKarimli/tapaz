import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaHeart } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";
import Logo from '@/assets/img/logo-tap-az.svg'
import Katalog from './components/katalog';
import Filter from './components/filter';
import { useLikedAd } from '@/services/stores/useLikedAd';
import { useLocation } from 'react-router-dom';
import Auth from '../auth'
import Profile from './components/profile'
const Header = () => {
    const currentUser = JSON.parse(localStorage.getItem('user'))
    const [user, setuser] = useState('')
    const { likedData } = useLikedAd();
    const location = useLocation().pathname;

    useEffect(() => {
        setuser(currentUser);
    }, [currentUser]);

    return (

        <header className=' sticky top-0 z-40' >
            <div className="header-top bg-[#f8f9fd] ">
                <div className="container flex items-center justify-between text-[#212c3a] py-1 text-base">
                    <div className="left">
                        <ul className=' flex items-center gap-4'>
                            <li><a href="https://turbo.az/" target='_blank' className='text-[#8d94ad] leading-7 hover:text-[#ff4f08]'>Turbo.az</a></li>
                            <li><a href="https://bina.az" target='_blank' className='text-[#8d94ad] leading-7 hover:text-[#ff4f08]'>Bina.az</a></li>
                            <li><a href="https://boss.az" target='_blank' className='text-[#8d94ad] leading-7 hover:text-[#ff4f08]'>Boss.az</a></li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul className='flex items-center gap-5'>
                            <li>
                                <a href="#" className='text-[#8d94ad] leading-7 hover:text-[#ff4f08] flex items-center group gap-1' ><FaPhoneAlt /> <span className='text-black group-hover:text-[#ff4f08]'>(050) 756-41-77</span></a>
                            </li>
                            <li><Link to={'/help/popular_questions'} className='text-[#8d94ad] leading-7 hover:text-[#ff4f08]'>Yardım</Link></li>
                            <li><Link className='text-[#8d94ad] leading-7 hover:text-[#ff4f08]'>RU</Link></li>
                            <li><Link to={'/messages/all'} className='text-[#8d94ad] leading-7 hover:text-[#ff4f08] flex items-center gap-1'> <AiFillMessage />Mesajlar</Link></li>
                            <li><Link to={'/chosen'} className='text-[#8d94ad] leading-7 hover:text-[#ff4f08] flex items-center gap-2'> <FaHeart />Seçilmişlər <sup className=' text-[#ff4f08] text-[12px] font-bold'>{likedData.length}</sup></Link></li>
                            <li>
                                {currentUser ? <Profile name={currentUser} /> : <Auth />}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-bottom bg-[#ff4f08] py-4">
                <div className="container flex items-center gap-3 max-h-10">
                    <Link className=' flex items-center h-10' to={'/'}>
                        <img src={Logo} alt="" />
                    </Link>
                    {location == '/elanlar/new' ?
                        (null) :
                        (<>
                            <Katalog />
                            <Filter />
                            <Link to={'/elanlar/new'} className=' truncate rounded-[7px] h-10 bg-[#7ed321] text-white cursor-pointer flex gap-1 items-center py-3 px-4'>
                                <span> <BsPlusCircle className='h-4 w-4' /></span>
                                Yeni elan
                            </Link>
                        </>)
                    }
                </div>
            </div>
        </header>
    )
}

export default Header
