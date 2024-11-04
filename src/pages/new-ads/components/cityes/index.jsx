import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Cities = ({cities}) => {
    return (
        <>
            <Sheet >
            <SheetTrigger className=" w-full h-[60px] flex items-center justify-between text-[#8d94ad]">
                    <div
                        className=' flex items-center gap-2 '>
                        <FaLocationDot />
                        <span>Şəhər <sup className=" text-[#fe6617] text-base leading-2 h-min">*</sup></span>
                    </div>
                    <FaChevronRight />
                </SheetTrigger>
                <SheetContent
                    icon={<FaChevronLeft className=" h-5 w-5 hover:text-[#ff4f08]" />}
                    className={`p-0  w-5/6 sm:max-w-5/6 z-[9999]  [&>button]:left-4 [&>button]:right-auto  `}>
                    <SheetHeader>
                        <SheetTitle className={' h-12 flex justify-center items-center font-medium '}>Şəhər</SheetTitle>
                        <SheetDescription className={` w-full h-2 bg-[#f6f7fa] m-0`}>
                        </SheetDescription>
                    </SheetHeader>
                    <div className=" p-4  h-screen flex flex-col overflow-y-scroll no-scrollbar">
                    {
                            cities?.map((item) => (
                                <Link key={item.id} className="group w-full h-[55px] py-2 font-normal border-b border-opacity-50 flex items-center  gap-4 ">
                                <span className='text-black group-hover:text-[#ff4f08]'>{item.name}</span>
                            </Link>
                            ))
                        }
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default Cities