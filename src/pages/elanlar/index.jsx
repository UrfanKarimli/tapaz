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
  ;
  const flattenArray = (nestedArray) => {
    return nestedArray.flatMap(item => 
      Object.values(item).flat()
    );
  }

  useEffect(() => {
    const fetchData = () => {
      const data = getFilteredData({ cate, subcate, item: items });
      const flatData = flattenArray(data); 
      setFilteredAds(flatData);
    };

    fetchData();
  }, [cate, subcate, items]);

  const Audi = Ads.Transports.cars.Audi
  const Mercedes = Ads.Transports.cars.Mercedes
  const BMW = Ads.Transports.cars.BMW
  const cars = [...Audi, ...Mercedes, ...BMW]
  const Yamaha = Ads.Transports.bikes.Yamaha
  const Honda = Ads.Transports.bikes.Honda
  const bikes = [...Yamaha, ...Honda]
  const Transports = [...cars, ...bikes]
  const Apple = Ads.Electronica.Phones.Apple
  const Samsung = Ads.Electronica.Phones.Samsung
  const MacBook = Ads.Electronica.Computers.MacBook
  const Dell = Ads.Electronica.Computers.Dell
  const Phones = [...Apple, ...Samsung]
  const Computers = [...MacBook, ...Dell]
  const Electronica = [...Phones, ...Computers]


  const AllAd = [...filteredAds, ]
  console.log(AllAd)
  
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