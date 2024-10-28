import React from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'

const MyAds = () => {
    return (
        <div>
            <div className=" relative gap-1 bg-[#f8f8f8] flex my-4">
                <NavLink
                    to={`/profile/myads/published`}
                    className={({ isActive }) => ` z-[1] p-3  border-b-[3px] hover:bg-white  flex items-center gap-2 ${isActive ? ' border-b-[#4c84ff] text-[#111]' : 'border-b-[#ebebeb] text-[#a3a3a4] hover:border-b-[#ccc] '}`}>
                    Hazırda saytda (0)
                </NavLink>
                <NavLink
                    to={`/profile/myads/expired`}
                    className={({ isActive }) => ` z-[1] p-3  border-b-[3px] hover:bg-white  flex items-center gap-2 ${isActive ? ' border-b-[#4c84ff] text-[#111]' : 'border-b-[#ebebeb] text-[#a3a3a4] hover:border-b-[#ccc] '}`}>
                    Müddəti başa çatmış (0)
                </NavLink>
                <NavLink
                    to={`/profile/myads/pending`}
                    className={({ isActive }) => ` z-[1] p-3  border-b-[3px] hover:bg-white  flex items-center gap-2 ${isActive ? ' border-b-[#4c84ff] text-[#111]' : 'border-b-[#ebebeb] text-[#a3a3a4] hover:border-b-[#ccc] '}`}>
                    Gözləmədə (0)
                </NavLink>
                <NavLink
                    to={`/profile/myads/rejected`}
                    className={({ isActive }) => ` z-[1] p-3  border-b-[3px] hover:bg-white  flex items-center gap-2 ${isActive ? ' border-b-[#4c84ff] text-[#111]' : 'border-b-[#ebebeb] text-[#a3a3a4] hover:border-b-[#ccc] '}`}>
                    Dərc olunmamış (0)
                </NavLink>
                <div className=" absolute left-0 bottom-0 h-[3px] w-full bg-[#ebebeb] " >

                </div>
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

export default MyAds