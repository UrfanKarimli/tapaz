import React from 'react'
import { katalogData } from '@/components/header/MockData/katalog'
import magaza from '@/assets/img/katalog/magaza.png'
import { Link } from 'react-router-dom'
import SideSheet from '../side-sheet'

const LgKatalog = () => {
    return (
        <div >
            <div className=' overflow-x-scroll no-scrollbar flex gap-[5px] pb-4'>
                <SideSheet/>
                {katalogData.map((item) => (
                    <div
                        key={item.id}
                        className=' min-w-[80px]  '>
                        <Link
                            className='w-[90px] group flex  flex-col justify-center items-center '
                            to={`/elanlar/${item.path}`}>
                            <div className=' w-[60px] h-[60px] group-hover:border-[#ff4f08] mb-1 flex items-center justify-center bg-[#f6f7fa]   rounded-[16px]  transition-all duration-300 ease-in-out'>
                                <img src={item.img} className='h-[50px] w-[50px] object-cover object-center' alt="" />
                            </div>
                            <span className='font-arial   text-center flex justify-center text-[11px] text-[#212c3a] group-hover:text-[#ff4f08] align-top  transition-all duration-300 ease-in-out'>
                                {item.name}
                            </span>
                        </Link>
                    </div>
                ))}
                <div
                    className=' min-w-[80px]  '>
                    <Link
                        className='w-[90px] group flex  flex-col justify-center items-center '
                        to={'/elanlar/shop'} >
                        <div className=' w-[60px] h-[60px] group-hover:border-[#ff4f08] mb-1 flex items-center justify-center bg-[#f6f7fa]   rounded-[16px]  transition-all duration-300 ease-in-out'>
                            <img src={magaza} className='h-[50px] w-[50px] object-cover object-center' alt="" />
                        </div>
                        <span className='font-arial   text-center flex justify-center text-[11px] text-[#212c3a] group-hover:text-[#ff4f08] align-top  transition-all duration-300 ease-in-out'>
                            Mağazalar
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LgKatalog