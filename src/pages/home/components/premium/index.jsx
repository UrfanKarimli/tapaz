import { useEffect, useState } from "react";
import Card from '@/components/card';

const PremiumElanlar = ({ cardDatas }) => {
  const [count, setCount] = useState(1);  
  const length = 16  
  const scrolDatas = cardDatas.filter((item) => item.Premium === true);
  const proCardDatas = scrolDatas.slice(0, (count * length)); 


  
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      setCount(prevCount => prevCount + 1); 
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll); 
  }, []);
  
  return (
    <section id='premium-elanlar'>
      <div className="banner bg-[#f6f7fa] h-14 mb-6 border-y-[1px] border-y-[#f6f7fa] flex items-center">
        <div className="container flex items-center justify-between">
          <h2 className='text-[#8d94ad] font-bold text-base tracking-wider uppercase inline-block font-arial'>
            PREMIUM ELANLAR
          </h2>
        </div>
      </div>
      <div className="container flex flex-wrap gap-3">
        {
          proCardDatas.map((item) => (
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
