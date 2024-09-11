import { Link } from 'react-router-dom';
import { PiHeartStraightDuotone, PiHeartStraightFill } from "react-icons/pi";
import { RiVipDiamondFill, RiVipCrown2Fill } from "react-icons/ri";
import { useLikedAd } from '@/services/stores/useLikedAd';
import { useState, useEffect } from 'react';

const Card = ({ item }) => {
    const { likedData, setLikedData } = useLikedAd();
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        setIsLiked(likedData.some((i) => i.id === item.id)); 
    }, [likedData, item]);

    const vipdisplay = item?.VIP ? "block" : "none";
    const premdisplay = item?.Premium ? "block" : "none";
    const storedisplay = item?.Premium ? "block" : "none";

    const handleLike = () => {
        setLikedData(item);
    };

    return (
        <Link to={'#'} className='relative font-arial rounded-[7px] align-top w-[228px] h-[290px] flex flex-col bg-white overflow-hidden shadow-custom-light'>
            <div className="img-box relative w-[228px] h-[181px] ">
                <img src={item.image} alt="" className='object-center object-cover h-full w-full ' />
                <button
                    onClick={handleLike}
                    className='bg-transparent absolute top-[10px] right-[10px]'
                >
                    {isLiked ? (
                        <PiHeartStraightFill className='h-7 w-7 text-[#ff4f08]' />
                    ) : (
                        <PiHeartStraightDuotone className='h-7 w-7 text-[#c7c7c7]' />
                    )}
                </button>
                <span className='absolute bottom-[10px] right-[10px] flex items-center bg-white rounded'>
                    <RiVipCrown2Fill
                        style={{ display: vipdisplay }}
                        className='h-5 w-5 text-[#ffbb00] m-1' />
                    <RiVipDiamondFill
                        style={{ display: premdisplay }}
                        className='h-5 w-5 text-[#ff7300] m-1' />
                </span>
                <span
                    style={{ display: storedisplay }}
                    className='bg-blue-600 text-sm absolute left-[10px] bottom-[10px] text-white px-3 py-[2px] rounded-lg'> Mağaza</span>
            </div>
            <div className='p-[10px] flex flex-col h-[109px]'>
                <div className='flex flex-col justify-between'>
                    <div className='font-bold text-[#212c3a] text-lg font-bebas flex gap-[2px] leading-[1.2]'>
                        <span>{item.price}</span>
                        <span>AZN</span>
                    </div>
                    <span className='block max-h-[35px] text-base text-ellipsis text-[#212c3a] leading-[1.2] overflow-hidden'>{item.title}</span>
                </div>
                <div className='text-[#8d94ad] text-sm text-ellipsis flex gap-1 absolute bottom-[10px] left '>
                    <span>{item.location}</span>,
                    <span>{item.date}</span>
                </div>
            </div>
        </Link>
    );
};

export default Card;
