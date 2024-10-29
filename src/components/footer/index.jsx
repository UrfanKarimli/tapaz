import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md"
import { Rayonlar } from '../header/MockData/options';
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='flex flex-col  '>
            <div className="sosials bg-[#f6f7fa] border-y border-y-[#f1f3f7] py-3 max-lg:hidden">
                <div className="container flex items-center justify-between text-[#212c3a] py-1 text-base ">
                    <div className="help flex gap-6">
                        <Link to={''}
                            className='text-[#212c3a] leading-7 hover:text-[#ff4f08]'
                        >
                            Yardım
                        </Link>
                        <Link to={''}
                            className='text-[#212c3a] leading-7 hover:text-[#ff4f08]'
                        >
                            Reklam yerləşdirin
                        </Link>
                    </div>
                    <div className="flex items-center gap-6">
                        <a href={''}
                            target='_blank'
                            className='text-[#8d94ad] leading-7 hover:text-[#ff4f08]'
                        >
                            <FaFacebookF className=' h-5 w-6' />
                        </a>
                        <a href={''}
                            target='_blank'
                            className='text-[#8d94ad] leading-7 hover:text-[#ff4f08]'
                        >
                            <FaInstagram className=' h-6 w-6' />
                        </a>
                        <a href={''}
                            target='_blank'
                            className='text-[#8d94ad] leading-7 hover:text-[#ff4f08] flex items-center group gap-1'>
                            <MdEmail className=' h-6 w-6' />
                            <span className='text-black group-hover:text-[#ff4f08]'>
                                tap@tap.az
                            </span>
                        </a>
                        <a href="#"
                            target='_blank'
                            className='text-[#8d94ad] leading-7 hover:text-[#ff4f08] flex items-center group gap-1' >
                            <FaPhoneAlt className=' h-5 w-5' /> <span className='text-black group-hover:text-[#ff4f08]'>(099) 756-41-77</span></a>
                    </div>
                </div>
            </div>
            <div className="regions bg-[#f6f7fa] max-lg:hidden">
                <div className="container ">
                    <ul className='flex flex-col flex-wrap content-between h-80 my-5 '>
                        {Rayonlar.map((item) => (
                            <li key={item.id}><a className=' font-arial text-[#8d94ad] cursor-pointer text-sm leading-[2.15] hover:text-[#ff4f08]' href="">{item.name}</a></li>
                        ))}
                    </ul>

                </div>
                <div className='h-[2px] w-full bg-[#f1f3f7]'></div>
                <div className="my-6 flex items-center justify-between container ">
                    <a className='font-arial text-[#212c3a] cursor-pointer text-sm' href="">Layihə haqqında</a>
                    <a className='font-arial text-[#212c3a] cursor-pointer text-sm' href="">Qaydalar</a>
                    <a className='font-arial text-[#212c3a] cursor-pointer text-sm' href="">İstifadəçi razılaşması</a>
                    <a className='font-arial text-[#212c3a] cursor-pointer text-sm' href="">Ümumi oferta müqaviləsi</a>
                    <a className='font-arial text-[#212c3a] cursor-pointer text-sm' href="">Məxfilik siyasəti</a>
                </div>

            </div>
            <div className=' hidden max-lg:block  border-t px-4 py-5'>
                <div className=' flex flex-col'>
                    <Link className='font-helvetica text-[#8d94ad] mb-4 text-sm'>
                        Yardım
                    </Link>
                    <Link className='font-helvetica text-[#8d94ad] mb-4 text-sm'>
                        Layihə haqqında
                    </Link>
                    <Link className='font-helvetica text-[#8d94ad] mb-4 text-sm'>
                        Qaydalar
                    </Link>
                    <Link className='font-helvetica text-[#8d94ad] mb-4 text-sm'>
                        İstifadəçi razılaşması
                    </Link>
                    <Link className='font-helvetica text-[#8d94ad] mb-4 text-sm'>
                        Məxfilik siyasəti
                    </Link>
                    <Link className='font-helvetica text-[#8d94ad] mb-4 text-sm'>
                        Ümumi oferta müqaviləsi
                    </Link>
                </div>
            </div>

            <div className='hidden max-lg:block px-4 max-lg:border-t max-lg:py-5'>
                <div className=' flex flex-col '>
                    <div className=' flex flex-col gap-2 mb-6' >
                        <Link to={`https://wa.me/994997564177`}
                            target="_blank" rel="noopener noreferrer"
                            className=' font-bold text-base text-[#8d94ad]' >
                            (099) 756-41-77
                        </Link>
                        <Link
                            className=' font-bold text-base text-[#8d94ad]'

                            target="_blank" rel="noopener noreferrer"
                            to={``}
                        >
                            tap@tap.az
                        </Link>
                    </div>
                    <div className=' flex gap-6 text-[#8d94ad] items-center mb-5'>
                        <Link
                            to={`https://www.facebook.com/profile.php?id=100006150254917`}
                            target="_blank" rel="noopener noreferrer"
                        >
                            <FaFacebookF className=' h-5 w-6' />
                        </Link>
                        <Link
                            target="_blank" rel="noopener noreferrer"
                            to={`https://www.linkedin.com/in/%C3%BCrfan-k%C9%99rimli/`}
                        > <FaLinkedinIn className=' h-6 w-6' />
                        </Link>
                    </div>

                </div>

            </div>
            <div className="orange font-helvetica bg-[#ff4f08] max-lg:border-t max-lg:bg-white py-4 max-lg:py-5 max-lg:px-4">
                <div className="container flex items-center justify-between text-sm max-lg:gap-5 max-lg:items-start  max-lg:flex-col max-lg:text-[#8d94ad] text-white font-helvetica">
                    <div className=' w-[380px] max-lg:w-full'>Saytın Administrasiyası reklam bannerlərinin və yerləşdirilmiş elanların məzmununa görə məsuliyyət daşımır.</div>
                    <div>© 2008-2024 Digital Classifieds MMC. VÖEN: 1405631661</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer