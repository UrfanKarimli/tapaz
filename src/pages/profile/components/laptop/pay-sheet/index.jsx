import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { FaChevronLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const PaySheet = () => {
    const navigate = useNavigate()
    return (
        <>
            <Sheet >
                <SheetTrigger >
                    <Button
                        onClick={() => {
                            navigate(`/profile/myads#replenishment`)
                        }}
                        className=" bg-[#4c88f9] h-10  px-7 text-[15px] text-white font-normal rounded-[7px]">
                        Artır
                    </Button>
                </SheetTrigger>
                <SheetContent
                    icon={<FaChevronLeft className=" h-5 w-5 hover:text-[#ff4f08]" />}
                    className={`p-0  w-full sm:max-w-full z-[9999]  [&>button]:left-4 [&>button]:right-auto  `}>
                    <SheetHeader>
                        <SheetTitle className={' h-12 flex justify-center items-center '}></SheetTitle>
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

export default PaySheet