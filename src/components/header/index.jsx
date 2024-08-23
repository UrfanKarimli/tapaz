import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaHeart, FaUserCircle } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import Logo from '@/assets/img/logo-tap-az.svg'
import Katalog from './Katalog';


const Header = () => {
    return (
        <header >
            <div className="header-top bg-[#f8f9fd] ">
                <div className="container flex items-center justify-between text-[#212c3a] py-1 text-base">
                    <div className="left">
                        <ul className=' flex items-center gap-4'>
                            <li><a href="turbo.az" target='_blank' className='text-[#8d94ad] leading-7 hover:text-[#ff4f08]'>Turbo.az</a></li>
                            <li><a href="bina.az" target='_blank' className='text-[#8d94ad] leading-7 hover:text-[#ff4f08]'>Bina.az</a></li>
                            <li><a href="boss.az" target='_blank' className='text-[#8d94ad] leading-7 hover:text-[#ff4f08]'>Boss.az</a></li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul className='flex items-center gap-5'>
                            <li><a href="#" className='text-[#8d94ad] leading-7 hover:text-[#ff4f08] flex items-center group gap-1' ><FaPhoneAlt /> <span className='text-black group-hover:text-[#ff4f08]'>(050) 756-41-77</span></a></li>
                            <li><Link className='text-[#8d94ad] leading-7 hover:text-[#ff4f08]'>Yardım</Link></li>
                            <li><Link className='text-[#8d94ad] leading-7 hover:text-[#ff4f08]'>RU</Link></li>
                            <li><Link className='text-[#8d94ad] leading-7 hover:text-[#ff4f08] flex items-center gap-1'> <AiFillMessage />Mesajlar</Link></li>
                            <li><Link className='text-[#8d94ad] leading-7 hover:text-[#ff4f08] flex items-center gap-1'> <FaHeart />Seçilmişlər</Link></li>
                            <li><Link className='text-[#8d94ad] leading-7 hover:text-[#ff4f08] flex items-center gap-1'> <FaUserCircle /> Giriş</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-bottom bg-[#ff4f08]">
                <div className="container flex items-center">
                    <Link className='' to={'#'}>
                        <img src={Logo} alt="" />
                    </Link>
                    <Katalog />
                </div>
            </div>
        </header>
    )
}

export default Header
