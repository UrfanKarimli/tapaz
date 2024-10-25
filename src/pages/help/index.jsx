import tac from '@/assets/img/tac.svg'
import lent from '@/assets/img/lent.svg'
import sarilent from '@/assets/img/sari-lent.svg'
import { Link, useParams } from 'react-router-dom'
import { PopuluarQuestions, links, Elanlar, PersonalAccount, AdPromotion, Shops, Limits } from './mockData'
import { IoMdClose } from "react-icons/io";
import { useState } from 'react'

const Help = () => {
    const { type } = useParams()
    const [rotatedItem, setRotatedItem] = useState(null);

    const handleLinkClick = (id) => {
        setRotatedItem((prevState) => (prevState === id ? null : id));
    };

    const getName = () => {
        switch (type) {
            case 'popular_questions':
                return 'Populyar suallar';
            case 'ad':
                return 'Elan';
            case 'personal_account':
                return 'Şəxsi kabinet';
            case 'ad_promotion':
                return 'Elan üçün reklam';
            case 'shops':
                return 'Mağazalar';
            case 'limits':
                return 'Limitlər';
        }
    }

    const getData = () => {
        switch (type) {
            case 'popular_questions':
                return PopuluarQuestions;
            case 'ad':
                return Elanlar;
            case 'personal_account':
                return PersonalAccount;
            case 'ad_promotion':
                return AdPromotion;
            case 'shops':
                return Shops;
            case 'limits':
                return Limits;
        }
    }

    return (
        <div>
            <div className=' flex items-center justify-center relative  bg-[#f6f7fa] text-[22px] h-[130px] font-medium text-[#212c3a] overflow-hidden '>
                <span className='font-helvetica z-10'>Salam! Sizə necə kömək edə bilərik?</span>
                <img className=' absolute left-8 top-0' src={tac} alt="" />
                <img className=' absolute left-80 bottom-[-50%]' src={lent} alt="" />
                <img className=' absolute right-8 bottom-[-50%]' src={sarilent} alt="" />
            </div>

            <div className=' mt-10 mb-[100px] container flex gap-[50px] flex-auto'>
                <div className=' w-[305px] h-min pt-10 px-6 pb-4 rounded-[7px] bg-[#f6f7fa] '>
                    <ul className="flex flex-col gap-6">
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link
                                    to={`/help/${link.path}`}
                                    className={`${type === link.path ? "text-[#ff4f08] " : ""} leading-5 text-base text-[#8d94ad] hover:text-[#4886ff]`}
                                >
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className=' flex flex-col flex-auto'>
                    <div className=' text-[#212c3a] text-[22px] font-medium mt-8 mb-10'>{getName()}</div>
                    {
                        getData()?.map((item) => (
                            <div className=' max-w-[595px] border-t border-t-[#f1f3f7] text-base leading-[1.33] relative'>
                                <Link
                                    onClick={() => handleLinkClick(item.id)}
                                    className=' text-[#212c3a] flex items-center h-[60px]' to={`/help/${type}/${item.id}`}>{item.text}
                                    <IoMdClose
                                        className={`text-2xl absolute right-1 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ${rotatedItem === item.id ? 'rotate-[-45deg]' : ''}`}
                                    />
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Help