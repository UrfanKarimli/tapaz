import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md"
import { Rayonlar } from '../header/MockData/options';


const Footer = () => {
    return (
        <footer className='flex flex-col '>
            <div className="sosials bg-[#f6f7fa] border-y border-y-[#f1f3f7] py-3">
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
                            <FaPhoneAlt className=' h-5 w-5' /> <span className='text-black group-hover:text-[#ff4f08]'>(050) 756-41-77</span></a>
                    </div>
                </div>
            </div>
            <div className="regions bg-[#f6f7fa]">
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
            <div className="orange bg-[#ff4f08] py-4">
                <div className="container flex items-center justify-between text-sm text-white font-arial">
                    <div className=' w-[380px]'>Saytın Administrasiyası reklam bannerlərinin və yerləşdirilmiş elanların məzmununa görə məsuliyyət daşımır.</div>
                    <div>© 2008-2024 Digital Classifieds MMC. VÖEN: 1405631661</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer