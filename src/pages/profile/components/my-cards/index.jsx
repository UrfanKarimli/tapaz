import React from 'react'
import bankcard from '@/assets/img/bankcard.png'
import { FaPlus } from 'react-icons/fa6'

const MyBankCards = () => {
  return (
    <div>
      <div className=' flex flex-col gap-5 items-center justify-center py-16'>
        <img className=' w-[100px] h-[70px]' src={bankcard} alt="" />
        <span className=' text-[#212c3a]'>Sizin yadda saxlanmış kartınız yoxdur. Ödənişlər üçün tez-tez istifadə etdiyiniz kartları əlavə edin.</span>
        <button className=' flex items-center text-white h-12 gap-1 bg-[#4c88f9] rounded-[7px] px-9 '> <FaPlus className=' text-xs' /> Yeni kart əlavə et</button>
      </div>
    </div>
  )
}

export default MyBankCards