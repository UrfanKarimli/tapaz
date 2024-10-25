import { BsPlusCircle } from "react-icons/bs"
import { RiAdvertisementLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom"
import PayModal from "./components/pay-modal"
const Profil = () => {
    return (
        <div className=" container">
            <div className=" flex justify-between">
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
            <div className="flex  my-2">
                <NavLink className={({ isActive })=> ` p-3  border-b flex items-center gap-2 ${isActive? ' border-b-[#ff6617] text-[#ff6617]': 'text-[#a3a3a4]'}`}>
                    <RiAdvertisementLine className=" h-6 w-6" />
                    <span className=" text-[#a3a3a4] ">Elanlar</span>
                </NavLink>
                <div className=" h-px bg-[#a3a3a4] " ></div>
            </div>
            <div className=" w-full h-[220px] pt-24 mb-5 bg-[#f6f6f5] text-[#838383] rounded text-base  text-center">
                <div className=" flex flex-col items-center justify-center">
                    <p className="text-base my-4">Bu bölmədə elan yoxdur</p>
                    <Link to={'/elanlar/new'} className='truncate rounded-[7px] w-[113px] h-10 bg-[#7ed321] text-white cursor-pointer flex gap-1 items-center py-3 px-4'>
                        <BsPlusCircle className='h-4 w-4' />
                        Yeni elan
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Profil