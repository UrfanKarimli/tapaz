import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
// import allCat from '@/assets/img/all-categories.png'
import { katalogData } from '@/components/header/MockData/katalog'
import Subkatalog from "../subkatalog"
import { useSubkatalog } from "@/services/stores/useSubkatalog"
import { FaChevronRight } from "react-icons/fa6";
import { MdWindow } from "react-icons/md";

import { FaChevronLeft } from "react-icons/fa"
const KatalogSheet = () => {
    const { setSubDatas, setOpen } = useSubkatalog()
    return (
        <>
            <Sheet>
                <SheetTrigger className=" w-full h-[60px] flex items-center justify-between text-[#8d94ad]">
                    <div
                        className=' flex items-center gap-2 '>
                        <MdWindow />
                        <span>Kateqoriya <sup className=" text-[#fe6617] text-base leading-2 h-min">*</sup></span>
                    </div>
                    <FaChevronRight />
                </SheetTrigger>
                <SheetContent
                    icon={<FaChevronLeft className=" h-5 w-5 hover:text-[#ff4f08]" />}
                    className={` w-5/6 sm:max-w-5/6 hover:[&>button]:text-[#ff4f08] [&>button]:left-4 [&>button]:right-auto `}>
                    <SheetHeader>
                        <SheetTitle className={' flex items-center justify-center'}>Kataloq</SheetTitle>
                        <SheetDescription className={''}>
                        </SheetDescription>
                    </SheetHeader>
                    <div className=" h-screen flex flex-col overflow-y-scroll no-scrollbar ">
                        {katalogData?.map((item) => (
                            <div
                                onClick={() => {
                                    setOpen(true)
                                    setSubDatas(item)
                                }}
                                key={item.id} className=" py-2 flex gap-4 text-[#212c3a] border-b  cursor-pointer ">
                                <div className=' flex-none basis-10   mb-1 flex items-center justify-center bg-[#f6f7fa]   rounded  '>
                                    <img src={item.img} className=' object-contain' alt="" />
                                </div>
                                <div className=" grow flex flex-col justify-center overflow-hidden">
                                    <h2 className=" font-normal text-[15px]">{item?.name}</h2>
                                    <p className=" truncate font-normal text-[#8d94ad] text-xs">{item?.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
            <Subkatalog />
        </>
    )
}

export default KatalogSheet