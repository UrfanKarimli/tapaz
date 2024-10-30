import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { CiSettings } from "react-icons/ci"
import { FaChevronLeft } from "react-icons/fa"
import { IoIosLogOut } from "react-icons/io"
import { useNavigate } from "react-router-dom"


const SettingSheet = () => {
    const navigate = useNavigate()
    const logOut = () => {
        localStorage.removeItem('user')
        window.dispatchEvent(new Event('userChange'))
        navigate('/')
    }
    return (
        <Sheet >
            <SheetTrigger >
                <CiSettings className=" text-2xl" />
            </SheetTrigger>
            <SheetContent
                side={'left'}
                icon={<FaChevronLeft className=" h-5 w-5 hover:text-[#ff4f08]" />}
                className={`p-0  w-full sm:max-w-full z-[9999]  [&>button]:left-4 [&>button]:right-auto  `}>
                <SheetHeader>
                    <SheetTitle className={' h-12 flex justify-center items-center '}> Parametrlər</SheetTitle>
                    <SheetDescription className={` w-full h-px bg-[#f6f7fa] m-0`}>
                    </SheetDescription>
                </SheetHeader>
                <div className=" p-4  h-screen flex flex-col overflow-y-scroll no-scrollbar">
                    <div
                        className=" justify-between cursor-pointer leading-[16px] text-base p-2 rounded-sm hover:bg-[#fdfdfd] hover:text-[#ff4f08] flex items-center gap-3 "
                        onClick={() => {
                            logOut()
                        }}
                    >Çıxış <IoIosLogOut />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default SettingSheet