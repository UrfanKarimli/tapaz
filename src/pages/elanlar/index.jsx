import React, { useEffect } from 'react'
import CategoryHead from './components/category-header'
import AllAds from './components/all-ads'
import VipAds from './components/vip-ads'
import { useParams, useSearchParams } from 'react-router-dom';
import getFilteredData from '@/components/mockData/getFiltiredDatas';
import { useCardDatas } from '@/services/stores/useCardDatas';

const Elanlar = () => {
  const { setCardatas } = useCardDatas();
  const [searchParams, setSearchParams] = useSearchParams();
  const { cate, subcate } = useParams();
  
  const items = searchParams.get(`name`);
  const model = searchParams.get(`model`);
  const color = searchParams.get(`color`);
  const fuel_type = searchParams.get(`fuel_type`);
  const transmission = searchParams.get(`transmission`);
  const body_type = searchParams.get(`body_type`);
  const is_new = searchParams.get(`is_new`);
  const search = searchParams.get('search'); 
  const location = searchParams.get('location');

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const filterData = (data) => {
    return data.filter(item => {
      return (
        (!model || item.model === model) &&
        (!color || item.color === color) &&
        (!fuel_type || item.fuel_type === fuel_type) &&
        (!transmission || item.transmission === transmission) &&
        (!body_type || item.body_type === body_type) &&
        (!is_new || item.is_new.toString() === is_new) 
        &&
        (!search || item.title.toLowerCase().includes(search.toLowerCase()))
        &&
        (!location || item.location === location)
      );
    });
  };


  useEffect(() => {
    const fetchData = () => {
      const data = getFilteredData({ cate, subcate, items });

      const filteredData = filterData(data);
      setCardatas(shuffleArray(filteredData));
    };

    fetchData();
  }, [cate, subcate, items, model, color, fuel_type, transmission, body_type, is_new, location, search]);

  return (
    <>
      <CategoryHead />
      <VipAds />
      <AllAds />
    </>
  );
};

export default Elanlar;
