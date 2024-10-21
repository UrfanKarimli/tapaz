import { RxHamburgerMenu } from "react-icons/rx";
import { SlGlobe } from "react-icons/sl";
import { FiHelpCircle } from "react-icons/fi";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Link } from "react-router-dom";
import Tap from '@/assets/img/Tap.svg'
import { FaPhoneAlt } from "react-icons/fa";

const BurgerMenu = () => {
    return (
        <>
            <Sheet >
                <SheetTrigger  >
                    <RxHamburgerMenu className=' text-[20px] text-[#ff4f08]' />
                </SheetTrigger>
                <SheetContent side={'left'} className={`p-4  w-5/6 sm:max-w-5/6`}>
                    <SheetHeader>
                        <SheetTitle className={''}><Link className=' ' to={'/'}>
                            <img src={Tap} alt="" />
                        </Link></SheetTitle>
                        <SheetDescription>
                        </SheetDescription>
                    </SheetHeader>

                    <div className=" mt-5">
                        <div className="group w-full h-[55px] border-b border-opacity-50 flex items-center  gap-4 ">
                            <SlGlobe className=" h-5 w-5" />
                            <span className='text-black group-hover:text-[#ff4f08]'>
                                Русский язык
                            </span>
                        </div>
                        <Link to={'/help/popular_questions'} target="_blank" rel="noopener noreferrer" className="group w-full h-[55px] font-normal border-b border-opacity-50 flex items-center  gap-4 ">
                            <FiHelpCircle className=" h-5 w-5" />
                            <span className='text-black group-hover:text-[#ff4f08]'>
                                Yardım
                            </span>
                        </Link>
                        <Link target="_blank" rel="noopener noreferrer" className="group w-full h-[55px] font-normal border-b border-opacity-50 flex items-center  gap-4 mb-4">
                            <FaPhoneAlt className=" h-5 w-5" />
                            <span className='text-black group-hover:text-[#ff4f08]'>Bizimlə əlaqə</span>
                        </Link>
                        <Link target="_blank" rel="noopener noreferrer" className="group w-full h-[55px] font-normal border-b border-opacity-50 flex items-center  gap-4 ">
                            <span className='text-black group-hover:text-[#ff4f08]'>İstifadəçi razılaşması</span>
                        </Link>
                        <Link target="_blank" rel="noopener noreferrer" className="group w-full h-[55px] font-normal border-b border-opacity-50 flex items-center  gap-4 ">
                            <span className='text-black group-hover:text-[#ff4f08]'>Elan yerləşdirmə qaydaları</span>
                        </Link>
                        <Link target="_blank" rel="noopener noreferrer" className="group w-full h-[55px] font-normal border-b border-opacity-50 flex items-center  gap-4 ">
                            <span className='text-black group-hover:text-[#ff4f08]'>Məxfilik siyasəti</span>
                        </Link>
                        <Link target="_blank" rel="noopener noreferrer" className="group w-full h-[55px] font-normal border-b border-opacity-50 flex items-center  gap-4 ">
                            <span className='text-black group-hover:text-[#ff4f08]'>Saytda reklam</span>
                        </Link>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default BurgerMenu