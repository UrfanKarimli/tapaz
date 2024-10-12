import React from 'react'
import { NavLink } from 'react-router-dom'

const Messages = () => {
    return (
        <div>
            <div className="container">
                <div className="nav my-5 flex items-center justify-between">
                    <h2 className=' text-[#212c3a] font-bold text-2xl'>Mesajlar</h2>
                    <div className='flex relative h-9 w-60 border-b border-b-[#f1f3f7]'>
                        <NavLink
                            to={`/messages/all`}
                            className={({ isActive }) =>
                                `hover:text-[#ff4f08] border-b flex items-center justify-center w-20 font-normal text-[#212c3a] h-full absolute left-0 bottom-[-1px] ${isActive ? 'text-[#ff4f08] border-b-[#ff4f08]' : 'border-b-[#f1f3f7]'}`
                            }
                        >
                            Hamısı
                        </NavLink>
                        <NavLink
                            to={`/messages/purchase`}
                            className={({ isActive }) =>
                                `hover:text-[#ff4f08] border-b flex items-center justify-center w-20 font-normal text-[#212c3a] h-full absolute bottom-[-1px] left-[50%] transform translate-x-[-50%] ${isActive ? 'text-[#ff4f08] border-b-[#ff4f08]' : 'border-b-[#f1f3f7]'}`
                            }
                        >
                            Alış
                        </NavLink>
                        <NavLink
                            to={`/messages/sales`}
                            className={({ isActive }) =>
                                `hover:text-[#ff4f08] border-b flex items-center justify-center w-20 font-normal text-[#212c3a] h-full absolute right-0 bottom-[-1px] ${isActive ? 'text-[#ff4f08] border-b-[#ff4f08]' : 'border-b-[#f1f3f7]'}`
                            }
                        >
                            Satış
                        </NavLink>
                    </div>
                </div>
                <div className="flex items-center justify-center min-h-64">
                    <div className=' flex flex-col gap-2'>
                        <span className='text-center text-[#212c3a] font-medium  text-lg leading-[22px]'>Sizin hələki mesajınız yoxdur</span>
                        <span className=' text-center text-[#8d94ad] font-normal text-[15px] leading-4  max-w-[295px]'>Satıcı və alıcılarla saytda birbaşa ünsiyyətdə olun</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;
