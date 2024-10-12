import React, { useEffect, useState } from 'react'
import Bmw from '@/assets/img/bmw1.jpg'
import { Link, useParams } from 'react-router-dom'
import { FaPhoneAlt, FaUserCircle } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa6'
import { AiFillMessage } from 'react-icons/ai'
import { useLikedAd } from '@/services/stores/useLikedAd'
import { PiHeartStraightDuotone, PiHeartStraightFill } from 'react-icons/pi'
import getFilteredData from '@/components/mockData/getFiltiredDatas'
import Report from './components/report'
import switchCate from './components/get-category'

const Detallar = () => {
    const { category, id } = useParams()
    const { likedData, setLikedData } = useLikedAd();
    const [isLiked, setIsLiked] = useState(false);
    const [item, setItem] = useState(null)

    useEffect(() => {
        const data = getFilteredData({});
        const filteredItem = data?.find((i) => i.id === Number(id));
        if (filteredItem) {
            setItem(filteredItem);
        }
        setIsLiked(likedData.some((i) => i.id === Number(id)));
    }, [id, likedData]);

    const handleLike = () => {
        if (item) {
            setLikedData(item);
        }
    };

    console.log('item', item)


    return (
        <>
            {item ? (
                <div>
                    <div className="nav border-b border-b-[#eaebf2]">
                        <div className="container ">
                            <div className="flex h-9 items-center">
                                <div className=" ">
                                    <Link to={'/elanlar'} className=" p-[10px] pl-0 text-[#212c3a] text-sm transition-all ease-in duration-200 hover:text-[#fe6168]" >Bütün kateqoriyalar</Link>
                                </div>
                                {switchCate(category)}
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className=' flex justify-between'>
                            <div className=' flex my-4 text-[#212c3a] text-[22px] font-bold leading-normal'>
                                <span>{item.title} , {item.year} il</span>
                            </div>
                            <div className='flex items-center gap-5'>
                                <button
                                    onClick={handleLike}
                                    className='bg-transparent  flex items-center justify-start gap-1 w-[165px] group hover:text-[#ff4f08]'
                                >
                                    {isLiked ? (
                                        <>
                                            <PiHeartStraightFill className='h-6 w-6 text-[#ff4f08]' />
                                            Seçilmişlərdədir
                                        </>) : (
                                        <><PiHeartStraightDuotone className='h-6 w-6 text-[#c7c7c7] group-hover:text-[#ff4f08]' />
                                            Seçilmişlərdə saxla</>
                                    )}

                                </button>
                                <div> <Report /> </div>
                            </div>
                        </div>
                        <div className='  flex justify-between'>
                            <div className="left w-[66%]">
                                <article>
                                    <div className="img h-[480px]">
                                        <div>
                                            <img className=" w-full h-full object-cover object-center" src={item.image} alt="" />
                                        </div>
                                    </div>
                                </article>
                                <article className=' py-8'>
                                    <div className=' grid grid-cols-2 '>
                                        <div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                                            <span className=' text-[#98918a]'>Şəhər</span>
                                            <span className=' text-[#2f1f19]'> {item.location}</span>
                                        </div>
                                        <div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                                            <span className=' text-[#98918a]'>Yanacaq növü</span>
                                            <span className=' text-[#2f1f19]'> {item.fuel_type}</span>
                                        </div>
                                        <div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                                            <span className=' text-[#98918a]'>Marka</span>
                                            <span className=' text-[#2f1f19]'> {item.brand}</span>
                                        </div>
                                        <div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                                            <span className=' text-[#98918a]'>Sürətlər qutusu</span>
                                            <span className=' text-[#2f1f19]'> {item.transmission}</span>
                                        </div>
                                        <div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                                            <span className=' text-[#98918a]'>Model</span>
                                            <span className=' text-[#2f1f19]'> {item.model}</span>
                                        </div>
                                        <div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                                            <span className=' text-[#98918a]'>Kuzov növü</span>
                                            <span className=' text-[#2f1f19]'> {item.body_type}</span>
                                        </div>
                                        <div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                                            <span className=' text-[#98918a]'>Rəng</span>
                                            <span className=' text-[#2f1f19]'> {item.color}</span>
                                        </div>
                                        <div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                                            <span className=' text-[#98918a]'>Buraxılış ili</span>
                                            <span className=' text-[#2f1f19]'> {item.year}</span>
                                        </div>
                                        <div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                                            <span className=' text-[#98918a]'>Mühərrik </span>
                                            <span className=' text-[#2f1f19]'> {item.engine_capacity}</span>
                                        </div>
                                        <div className=' grid grid-cols-[150px_150px] gap-x-[10px] mb-[10px] leading-[18px] text-[15px] font-normal'>
                                            <span className=' text-[#98918a]'>Yürüş, km</span>
                                            <span className=' text-[#2f1f19]'> {item.mileage}</span>
                                        </div>
                                    </div>
                                </article>
                                <article className=' py-8 border-t border-t-[#eae5e1]'>
                                    <div className=' text-[#2f1f19] text-[15px]'>
                                        <p>{item.description}</p>
                                    </div>
                                </article>
                            </div>
                            <aside className=' relative w-[300px] '>
                                <div className="right sticky left-0 top-32 w-[300px] flex flex-col gap-4 mb-5">
                                    <div className=' flex flex-col gap-4 p-5 border border-[#eaebf2] rounded-[7px] bg-[#fff]'>
                                        <div className="price flex gap-2 font-bold text-[32px] leading-normal text-[#2f1f19]">
                                            <span >{item.price}</span> <span>AZN</span>
                                        </div>
                                        <div className="h-[2px] w-full bg-[#eae5e1]"></div>
                                        <div className=' flex justify-between items-center'>
                                            <div className=' flex flex-col'>
                                                <span className=' text-[15px] text-[#2f1f19] leading-5'>Murad</span>
                                                <Link className=' underline text-[#8d94ad] text-sm leading-4 mt-[2px]'>istifadəçinin bütün elanları</Link>
                                            </div>
                                            <div className=' flex items-center justify-center w-[50px] h-[50px] rounded-[50%] border border-[#d8d8d8] text-[#d8d8d8] '> <FaUser className='w-[30px] h-[30px]' /></div>
                                        </div>
                                        <div className=' flex flex-col items-center justify-center ga-[10px] py-[10px] bg-[#3db460] rounded-[7px] cursor-pointer font-normal text-base text-white z-[1]'>
                                            <span> Nömrəni göstər</span>
                                            <div className=' flex items-center font-medium text-lg gap-[10px]'><FaPhoneAlt className=' w-[18px] h-[18px]' /> (055) 555 55 55</div>
                                        </div>
                                        <Link className=' bg-[#4c88f9] rounded-[7px] text-[15px] text-white h-12 flex items-center justify-center w-full gap-1'> <AiFillMessage className=' w-[18px] h-[18px]' />Mesaj yaz</Link>
                                    </div>
                                    <div className=' flex items-center justify-center'>
                                        <Link className=' h-[50px] w-[260px] bg-[#dd2a57de] text-white flex items-center justify-center rounded-[7px] text-[15px]'> Nağd kredit əldə et</Link>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                    <div className="benzer-elanlar">

                    </div>
                </div>
            ) : (
                <div>loading...</div>
            )}
        </>
    )
}

export default Detallar