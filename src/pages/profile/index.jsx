import { BsPlusCircle } from "react-icons/bs"
import { RiAdvertisementLine, RiSecurePaymentFill } from "react-icons/ri";
import { Link, NavLink, Outlet } from "react-router-dom"
import PayModal from "./components/pay-modal"
import { MdManageAccounts, MdOutlineAccountCircle, MdOutlinePayment } from "react-icons/md";
const Profil = () => {
    return (
        <div className=" container">
            <div className=" flex justify-between mt-4">
                <h2 className=" font-bold text-[26px] font-helvetica">Şəxsi kabinet</h2>
                <div className=" flex items-center justify-between w-80 h-[50px] rounded bg-[#f6f6f6] py-1 px-3">
                    <div>
                        <span className=" text-[#858d97] text-xs mb-1">Şəxsi hesab</span>
                        <div>0,00 AZN</div>
                    </div>
                    <div className=" border-l border-l-[#ebebeb] pl-3">
                        <PayModal />
                    </div>
                </div>

            </div>
            <div className="flex  my-2 relative">
                <NavLink
                    to={`/profile/myads/published`}
                    className={({ isActive }) => ` z-[1] p-3  border-b-[3px]  flex items-center gap-2 ${isActive ? ' border-b-[#ff6617] text-[#ff6617] [&>span]:text-[#111]' : 'text-[#a3a3a4] hover:border-b-[#ccc]'}`}>
                    <RiAdvertisementLine className=" h-6 w-6" />
                    <span className=" text-[#a3a3a4] ">Elanlar</span>
                </NavLink>
                <NavLink
                    to={`/profile/transactions`}
                    className={({ isActive }) => ` z-[1] p-3  border-b-[3px]  flex items-center gap-2 ${isActive ? ' border-b-[#ff6617] text-[#ff6617] [&>span]:text-[#111]' : 'text-[#a3a3a4] hover:border-b-[#ccc]'}`}>
                    <MdManageAccounts className=" h-6 w-6" />
                    <span className=" text-[#a3a3a4] ">Şəxsi hesab</span>
                </NavLink>
                <NavLink
                    to={`/profile/payments`}
                    className={({ isActive }) => ` z-[1] p-3  border-b-[3px]  flex items-center gap-2 ${isActive ? ' border-b-[#ff6617] text-[#ff6617] [&>span]:text-[#111]' : 'text-[#a3a3a4] hover:border-b-[#ccc]'}`}>
                    <RiSecurePaymentFill className=" h-6 w-6" />
                    <span className=" text-[#a3a3a4] ">Ödənişlər</span>
                </NavLink>
                <NavLink
                    to={`/profile/edit`}
                    className={({ isActive }) => ` z-[1] p-3  border-b-[3px]  flex items-center gap-2 ${isActive ? ' border-b-[#ff6617] text-[#ff6617] [&>span]:text-[#111]' : 'text-[#a3a3a4] hover:border-b-[#ccc]'}`}>
                    <MdOutlineAccountCircle className=" h-6 w-6" />
                    <span className=" text-[#a3a3a4] ">Profil</span>
                </NavLink>
                <NavLink
                    to={`/profile/ads-limit`}
                    className={({ isActive }) => ` z-[1] p-3  border-b-[3px]  flex items-center gap-2 ${isActive ? ' border-b-[#ff6617] text-[#ff6617] [&>span]:text-[#111]' : 'text-[#a3a3a4] hover:border-b-[#ccc]'}`}>
                    <RiAdvertisementLine className=" h-6 w-6" />
                    <span className=" text-[#a3a3a4] ">Elan limit</span>
                </NavLink>
                <NavLink
                    to={`/profile/may-cards`}
                    className={({ isActive }) => ` z-[1] p-3  border-b-[3px]  flex items-center gap-2 ${isActive ? ' border-b-[#ff6617] text-[#ff6617] [&>span]:text-[#111]' : 'text-[#a3a3a4] hover:border-b-[#ccc]'}`}>
                    <MdOutlinePayment className=" h-6 w-6" />
                    <span className=" text-[#a3a3a4] ">Kartlarım</span>
                </NavLink>
                <div className=" absolute left-0 bottom-0 h-[3px] w-full bg-[#ebebeb] " ></div>
            </div>
            <Outlet />
        </div>
    )
}

export default Profil