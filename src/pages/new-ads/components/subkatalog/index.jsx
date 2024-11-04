import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useSubkatalog } from "@/services/stores/useSubkatalog"
import { FaChevronLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Subkatalog = () => {
    const { subDatas, open, setOpen } = useSubkatalog()

    return (
        <>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger></SheetTrigger>
                <SheetContent
                    icon={<FaChevronLeft className=" h-5 w-5 hover:text-[#ff4f08]" />}
                    className={`p-0  w-5/6 sm:max-w-5/6 z-[9999]  [&>button]:left-4 [&>button]:right-auto  `}>
                    <SheetHeader>
                        <SheetTitle className={' h-12 flex justify-center items-center '}>{subDatas.name}</SheetTitle>
                        <SheetDescription className={` w-full h-2 bg-[#f6f7fa] m-0`}>
                        </SheetDescription>
                    </SheetHeader>
                    <div className=" p-4  h-screen flex flex-col overflow-y-scroll no-scrollbar">
                        {
                            subDatas?.subCategories?.map((item) => (
                                <Link className="group w-full h-[55px] font-normal border-b border-opacity-50 flex items-center  gap-4 ">
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

export default Subkatalog