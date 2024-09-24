import { useEffect, useState, useRef } from "react";
import Card from '@/components/card';

const PremiumElanlar = ({ cardDatas }) => {
  const [count, setCount] = useState(1);  
  const length= 16  
  const observerTarget = useRef(null); 
  
  const scrolDatas = cardDatas.filter((item) => item.Premium === true);
  const proCardDatas = scrolDatas.slice(0, (count * length)); 
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setCount(prevCount => prevCount + 1); 
      }
    }, {
      rootMargin: '0px', 
      threshold: 1.0 
    });

    if (observerTarget.current) {
      observer.observe(observerTarget.current); 
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
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
      <div ref={observerTarget}  className=" h-5 bg-transparent"></div>
    </section>
  );
};

export default PremiumElanlar;
