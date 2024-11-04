import React from 'react'
import { FaChevronDown,  FaChevronUp } from 'react-icons/fa'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const Connection = ({ cities }) => {
    return (
        <>
            <Sheet >
                <SheetTrigger className=" w-full h-[60px] flex items-center justify-between text-[#8d94ad]">
                    <div
                        className=' flex items-center gap-2 '>
                        <span>Əlaqə vasitəsi <sup className=" text-[#fe6617] text-base leading-2 h-min">*</sup></span>
                    </div>
                    <FaChevronDown />
                </SheetTrigger>
                <SheetContent
                    side="bottom"
                    icon={<FaChevronUp className=" h-5 w-5 hover:text-[#ff4f08]" />}
                    className={`p-0  h-2/6 sm:max-h-2/6 z-[9999]    `}>
                    <SheetHeader>
                        <SheetTitle className={' h-12 flex justify-center items-center font-medium '}>Şəhər</SheetTitle>
                        <SheetDescription className={` w-full h-2 bg-[#f6f7fa] m-0`}>
                        </SheetDescription>
                    </SheetHeader>
                    <div className=" p-4  h-screen flex flex-col overflow-y-scroll no-scrollbar">

                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default Connection