import React, { useEffect, useState } from 'react'
import CategoryHead from './components/category-header'
import AllAds from './components/all-ads'
import VipAds from './components/vip-ads'
import { useParams } from 'react-router-dom';
import getFilteredData from '@/components/mockData/getFiltiredDatas';

const Elanlar = () => {
  const { cate, subcate, items, id } = useParams()
  const [filteredAds, setFilteredAds] = useState([])

  useEffect(() => {
    const fetchData = () => {
      const data = getFilteredData({ cate, subcate, items });
      setFilteredAds(data);
    };
    fetchData();
  }, [cate, subcate, items]);

  let CardDatas = filteredAds;
  if (id) {
    CardDatas = filteredAds.filter((item) => item.model === id);
  }
  
  CardDatas = CardDatas.sort(() => Math.random() - 0.5);
  const Length = CardDatas.length;
  return (
    <>
      <CategoryHead Length={Length} />
      <VipAds cardDatas={CardDatas} />
      <AllAds CardDatas={CardDatas} />
    </>
  )
}

export default Elanlar
