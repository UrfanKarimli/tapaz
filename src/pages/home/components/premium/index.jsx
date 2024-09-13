import { cardDatas } from '../mockData';
import Card from '@/components/card';

const PremiumElanlar = () => {
  const vipCardDatas = cardDatas.filter((item) => item.Premium === true);

  return (
    <section id='vip-elanlar'>
      <div className="banner bg-[#f6f7fa] h-14 mb-6 border-y-[1px] border-y-[#f6f7fa] flex items-center">
        <div className="container flex items-center justify-between ">
          <h2 className='text-[#8d94ad] font-bold text-base tracking-wider uppercase inline-block font-arial'> PREMIUM ELANLAR</h2>
        </div>
      </div>
      <div className="container flex flex-wrap gap-3">
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

export default PremiumElanlar;
