import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import allCat from '@/assets/img/all-categories.png'
import { katalogData } from '@/components/header/MockData/katalog'


const SideSheet = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <div
                        className=' min-w-[80px]  '>
                        <div
                            className='w-[90px] group flex  flex-col justify-center items-center '
                        >
                            <div className=' w-[60px] h-[60px] group-hover:border-[#ff4f08] mb-1 flex items-center justify-center bg-[#f6f7fa]   rounded-[16px]  transition-all duration-300 ease-in-out'>
                                <img src={allCat} className='h-[30px] w-[30px] object-cover object-center' alt="" />
                            </div>
                            <span className='font-arial   text-center flex justify-center text-[11px] text-[#212c3a] group-hover:text-[#ff4f08] align-top  transition-all duration-300 ease-in-out'>
                                Kataloq
                            </span>
                        </div>
                    </div>
                </SheetTrigger>
                <SheetContent className={` w-5/6 sm:max-w-5/6`}>
                    <SheetHeader>
                        <SheetTitle className={' flex items-center justify-center'}>Kataloq</SheetTitle>
                        <SheetDescription className={''}>
                        </SheetDescription>
                    </SheetHeader>
                    <div className=" h-screen flex flex-col  overflow-scroll ">
                        {katalogData?.map((item) => (
                            <div
                                key={item.id} className=" py-2 flex gap-4 text-[#212c3a] border-b  ">
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
        </div>
    )
}

export default SideSheet