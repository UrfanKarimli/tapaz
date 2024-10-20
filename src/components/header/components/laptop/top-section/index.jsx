import { FaPlus } from 'react-icons/fa6';
import Tap from '@/assets/img/Tap.svg'
import { Link } from "react-router-dom";
import BurgerMenu from '../burger-menu';

const LgTop = () => {
    return (
        <div className='h-10  flex justify-between items-center  '>
            <BurgerMenu/>
            <div>
                <Link className=' flex items-center h-10' to={'/'}>
                    <img src={Tap} alt="" />
                </Link>
                </div>
            <div>
                <Link
                    to={'/elanlar/new'}
                    className=' text-sm h-5 w-5 rounded-full bg-[#ff4f08]  text-white flex items-center justify-center'>
                    <FaPlus />
                </Link>
            </div>
        </div>
    )
}

export default LgTop