import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { FaUserCircle } from "react-icons/fa"
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";



const Profile = ({ name }) => {
    const navigate = useNavigate()

    const lougOut = () => {
        localStorage.removeItem('user')
        navigate('/')
    }
    return (
        <>
            <HoverCard
                closeDelay={Number(100)}
                openDelay={Number(100)}
            >
                <HoverCardTrigger className=" h-10 cursor-pointer text-[#4c88f9] text-base leading-7 hover:text-[#ff4f08] flex items-center gap-1">
                    <FaUserCircle />{name}
                </HoverCardTrigger>
                <HoverCardContent
                    align='center'
                    sideOffset={Number(1)}
                >
                    <div className=" flex flex-col gap-1 ">
                        <div
                            className=" cursor-pointer leading-[16px] text-base hover:text-[#ff4f08] flex items-center gap-3 "
                            onClick={() => {
                                lougOut()
                            }}
                        >Çıxış <IoIosLogOut /></div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        </>
    )
}

export default Profile