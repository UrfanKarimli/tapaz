import { Link, useParams } from 'react-router-dom';
import { cardDatas } from '@/pages/home/components/mockData';
import Card from '@/components/card';
import { Ads } from '@/components/mockData';
import { useEffect, useState } from 'react';
import getFilteredData from '@/components/mockData/getFiltiredDatas';

const AllVip = () => {
    const { cate, subcate, items, id } = useParams()
    const [filteredAds, setFilteredAds] = useState([])
  
    useEffect(() => {
      const fetchData = () => {
        const data = getFilteredData({ cate, subcate, items });
        setFilteredAds(data);
      };
      fetchData();
    }, [cate, subcate, items]);
  


    const AllAds = [...filteredAds, ...cardDatas]

    const vipCardDatas = AllAds.filter((item) => item.VIP === true)

    return (
        <section id='vip-elanlar'>
            <div className=" ">
                <p className='flex items-center justify-center mt-8 mb-6 ' >
                    <Link className='text-[#ff6617] text-[22px] font-bold'>Bütün VIP elanlar</Link>
                </p>
                <div className="container flex items-center justify-start mb-7 mt-2  text-[#ff6617] font-helvetica font-semibold">
                    {vipCardDatas.length} elan tapıldı
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

export default AllVip;
