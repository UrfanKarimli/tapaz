import React, { useEffect, useState } from 'react'
import CategoryHead from './components/category-header'
import AllAds from './components/all-ads'
import VipAds from './components/vip-ads'
import { Ads } from '@/components/mockData';
import { cardDatas } from '../home/components/mockData';
import { useParams } from 'react-router-dom';
import getFilteredData from '@/components/mockData/getFiltiredDatas';

const Elanlar = () => {

  const {cate ,subcate , items} = useParams()
  const [filteredAds, setFilteredAds] = useState([])



  useEffect(() => {
    const fetchData = () => {
      const data = getFilteredData({ cate, subcate, items });
      setFilteredAds(data);
    };

    fetchData();
  }, [cate, subcate, items]);



  const AllAd = [...filteredAds, ]
  console.log(' filterdata',filteredAds)
  
  const CardDatas = AllAd.sort(() => Math.random() - 0.5);;

  return (
    <>
      <CategoryHead />
      <VipAds cardDatas={CardDatas} />
      <AllAds CardDatas={CardDatas}/>
    </>
  )
}

export default Elanlar