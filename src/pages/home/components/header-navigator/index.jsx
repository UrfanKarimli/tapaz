import { Link } from 'react-router-dom'
import { katalogData } from '@/components/header/MockData/katalog'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import magaza from '@/assets/img/katalog/magaza.png'
import allCat from '@/assets/img/all-categories.png'
import { useState, useEffect, useRef } from 'react'

const HeadNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const katalogRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (katalogRef.current && !katalogRef.current.contains(event.target )) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [katalogRef]);

    return (
        <section id='head-nav'>
            <div className='bg-[#f1f3f7] py-5'>
                <div className='container'>
                    <div className="flex flex-wrap  gap-8 ">
                        {katalogData.map((item) => (
                            <DropdownMenu key={item.id}>
                                <DropdownMenuTrigger className=' h-min focus-visible:outline-none ring-0 focus-visible:ring-offset-0 focus-visible:ring-0 focus:ring-0 focus:ring-offset-0 [&>a>span]:data-[state=open]:text-[#ff4f08]  [&>a>div]:data-[state=open]:border-[#ff4f08]'>
                                    <Link
                                        className='w-[90px] group  flex-col justify-center '
                                        to={'#'}>
                                        <div className=' group-hover:border-[#ff4f08] mb-1 flex items-center justify-center bg-white  border border-solid border-[#eaebf2] rounded-[18%] w-[90px] h-[90px] transition-all duration-300 ease-in-out'>
                                            <img src={item.img} className='h-12 w-12 object-cover object-center' alt="" />
                                        </div>
                                        <span className='font-arial w-[90px]  text-center flex justify-center text-sm text-[#212c3a] group-hover:text-[#ff4f08] align-top  transition-all duration-300 ease-in-out'>
                                            {item.name}
                                        </span>
                                    </Link>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <ul>
                                        <DropdownMenuLabel>
                                            <li className=" mb-4 leading-[18px] ">
                                                <Link
                                                    to={`/elanlar/${item.path}`}
                                                    className="text-[#4c88f9] text-sm hover:text-[#fe6168] mr-1">
                                                    Bütütn elanlar
                                                </Link>
                                            </li>
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <ul className='grid grid-cols-2 grid-rows-13'>
                                            {item?.subCategories?.map((subCategory) => (
                                                <DropdownMenuItem key={subCategory.id} className='mb-4 h-min'>
                                                    <li className="  leading-[18px] ">
                                                        <Link
                                                            to={`/elanlar/${item.path}/${subCategory.path}`}
                                                            className="text-[#4c88f9] text-sm hover:text-[#fe6168] mr-1">
                                                            {subCategory.name}
                                                        </Link>
                                                        <span className="text-[#8d94ad] text-sm">({item?.subCategories.length})</span>
                                                    </li>
                                                </DropdownMenuItem>
                                            ))}
                                        </ul>
                                    </ul>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ))}
                        <div
                            onClick={() => setIsOpen(!isOpen)}
                            className='w-[90px] group  flex-col justify-center '>
                            <div className={`${isOpen ? 'border-[#ff4f08]' : 'border-[#eaebf2]'} group-hover:border-[#ff4f08] mb-1 flex items-center justify-center bg-white p-4 border border-solid  rounded-[18%] w-[90px] h-[90px] transition-all duration-300 ease-in-out`}>
                                <img src={allCat} className='h-9 w-9 object-cover object-center' alt="" />
                            </div>
                            <span className={`${isOpen ? 'text-[#ff4f08]' : 'text-[#212c3a]'} font-arial w-[90px]  text-center flex justify-center text-sm  group-hover:text-[#ff4f08] align-top h-[34px] transition-all duration-300 ease-in-out`}>
                                Kataloq
                            </span>
                        </div>
                        <Link
                            className='w-[90px] group  flex-col justify-center '
                            to={'/elanlar/shop'}>
                            <div className=' group-hover:border-[#ff4f08] mb-1 overflow-hidden flex items-end justify-end bg-white border pr-[1px] pb-[1px] border-solid border-[#eaebf2] rounded-[18%] w-[90px] h-[90px] transition-all duration-300 ease-in-out'>
                                <img src={magaza} className='h-20 w-20 object-cover object-center' alt="" />
                            </div>
                            <span className='font-arial w-[90px]  text-center flex justify-center text-sm text-[#212c3a] group-hover:text-[#ff4f08] align-top h-[34px] transition-all duration-300 ease-in-out'>
                                Mağazalar
                            </span>
                        </Link>
                    </div>
                    <div ref={katalogRef} className={`bg-[#fff] p-2 rounded-[4px] ${isOpen ? 'block' : 'hidden'}`}>
                        <ul className='grid grid-cols-4 grid-rows-13'>
                            {katalogData.map((item) => (
                                <li className='flex flex-col p-2' key={item.id}>
                                    <Link to={`/elanlar/${item.path}`} className='text-[#4c88f9] text-sm font-semibold'>
                                        {item.name}
                                    </Link>
                                    <div className='w-full h-[2px] bg-[#f1f3f7]'></div>
                                    <ul className='flex flex-col'>
                                        {item.subCategories?.map((subcat) => (
                                            <li key={subcat.id} className='my-[7px] flex'>
                                                <Link to={`/elanlar/${item.path}/${subcat.path}`} className='text-[#4c88f9] text-sm'>
                                                    {subcat.name}
                                                </Link>
                                                <span className="text-[#8d94ad] pl-1 text-sm">{subcat.items.length}</span>

                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeadNav;
