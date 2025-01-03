import { RiAdvertisementLine, RiSecurePaymentFill } from "react-icons/ri";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom"
import PayModal from "./components/pay-modal"
import { MdManageAccounts, MdOutlineAccountCircle, MdOutlinePayment } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { FaChevronLeft, FaUserCircle } from "react-icons/fa";
import SettingSheet from "./components/settings";
import { FiEdit } from "react-icons/fi";
const Profil = () => {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const location = useLocation().pathname;
    return (
        <div>
            <div className=" container max-lg:hidden">
                <div className=" flex justify-between mt-4">
                    <h2 className=" font-bold text-[26px] font-helvetica">Şəxsi kabinet</h2>
                    <div className=" flex items-center justify-between w-80 h-[50px] rounded bg-[#f6f6f6] py-1 px-3">
                        <div>
                            <span className=" text-[#858d97] text-xs mb-1">Şəxsi hesab</span>
                            <div>0,00 AZN</div>
                        </div>
                        <div className=" border-l border-l-[#ebebeb] pl-3">
                            <PayModal className={`w-40 h-8 text-center rounded-none flex items-center justify-center bg-[#ebf6ff] text-[15px] text-[#3b88fd] border border-[#3b88fd] cursor-pointer py-[5px]`} />
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
            <div className=" hidden max-lg:block ">
                <div className="relative">
                    {
                        location.includes('/profile/transactions') || location.includes('/profile/payments') ? (
                            <div className="  px-4">
                                <div className="relative flex justify-center items-center my-5">
                                    <Link to={`/profile/myads/published`} className=" absolute left-0 h-min ">
                                        <FaChevronLeft className=" h-5" />
                                    </Link>
                                    <h1 className=" self-center">Əməliyyatlar</h1>
                                </div>
                                <div className=" flex">
                                    <NavLink
                                        to={`/profile/transactions`}
                                        className={({ isActive }) => ` border h-[35px]  flex items-center justify-center text-base font-normal  flex-1 rounded-l-[7px] ${isActive ? '  bg-[#ff4f08] border-[#ff4f08] text-white' : ' bg-white text-[#8d94ad]  border-[#eaebf2]'}`}>
                                        Şəxsi hesap
                                    </NavLink>
                                    <NavLink
                                        to={`/profile/payments`}
                                        className={({ isActive }) => ` border h-[35px]  flex items-center justify-center text-base font-normal flex-1  rounded-r-[7px]${isActive ? '  bg-[#ff4f08] border-[#ff4f08] text-white' : ' bg-white text-[#8d94ad]  border-[#eaebf2]'}`}>
                                        Elanlar
                                    </NavLink>
                                </div>

                            </div>
                        ) : (<div className="pt-16 px-4 bg-[#f6f7fa] ">
                            <div>
                                <div className="fixed top-0 left-0 right-0 flex justify-between items-center w-full bg-[#f6f7fa] px-4 py-2">
                                    <div className="flex  items-center gap-2">
                                        <FaUserCircle className=" w-10 h-10 text-[#858d97]" />
                                        <span>{currentUser}</span>
                                    </div>
                                    <div className=" flex items-center gap-6">
                                        <Link to={`/profile/edit`}>
                                            <FiEdit />
                                        </Link>
                                        <SettingSheet />
                                    </div>
                                </div>
                                <div className=" font-helvetica bg-white py-2 px-4 flex items-center justify-between  rounded-[7px] ">
                                    <div className=" flex flex-col text-sm">
                                        <span className=" text-[#858d97] text-xs ">Şəxsi hesab</span>
                                        <div>0,00 AZN</div>
                                    </div>
                                    <PayModal className={`bg-[#4c88f9] h-10  px-7 text-[15px] text-white font-normal rounded-[7px]`} />
                                </div>
                                <nav className=" flex h-28 items-center justify-center gap-4 ">
                                    <Link
                                        to={`/profile/transactions`}
                                        className={` flex flex-col items-center text-[#212c3a] text-xs font-normal`}>
                                        <div className=" h-[50px] w-[50px] bg-white border border-[#f1f3f7] rounded-full flex items-center justify-center">
                                            <GrTransaction className=" text-base" />
                                        </div>
                                        Əməliyyatlar</Link>
                                    <Link
                                        to={`/profile/ads-limit`}
                                        className={` flex flex-col items-center text-[#212c3a] text-xs font-normal`}>
                                        <div className=" h-[50px] w-[50px] bg-white border border-[#f1f3f7] rounded-full flex items-center justify-center">
                                            <RiAdvertisementLine className=" text-base" />
                                        </div>
                                        Limitlər</Link>
                                    <Link
                                        to={`/profile/may-cards`}
                                        className={` flex flex-col items-center text-[#212c3a] text-xs font-normal`}>
                                        <div className=" h-[50px] w-[50px] bg-white border border-[#f1f3f7] rounded-full flex items-center justify-center">
                                            <MdOutlinePayment className=" text-base" />
                                        </div>
                                        Kartlar</Link>
                                </nav>
                            </div>
                        </div>)
                    }

                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Profil