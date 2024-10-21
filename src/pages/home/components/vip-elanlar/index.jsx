import { Link } from 'react-router-dom';
import Card from '@/components/card';

const VipElanlar = ({ cardDatas }) => {
  const vipCardDatas = cardDatas.filter((item) => item.VIP === true).slice(0, 12);;


  return (
    <section id='vip-elanlar ' className='mb-6'>
      <div className="banner bg-[#f6f7fa] h-14 mb-6 border-y-[1px] border-y-[#f6f7fa] flex items-center max-lg:px-4">
        <div className="container flex items-center justify-between ">
          <h2 className='text-[#8d94ad] font-bold text-base tracking-wider uppercase inline-block font-arial'>VIP ELANLAR</h2>
          <Link to={'/elanlar/vip'} className='text-[#4c88f9] font-semibold text-base align-baseline font-arial underline'>
            Bütün VİP elanlar
          </Link>
        </div>
      </div>
      <div className="container flex flex-wrap gap-[1.26%] max-lg:px-4">
        {
          vipCardDatas.map((item) => (
            <Card
              item={item}
              key={item.id}
            />
          ))
        }
      </div>
    </section>
  );
};


export default VipElanlar;
