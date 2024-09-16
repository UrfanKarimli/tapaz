import React from 'react'
import VipElanlar from '../home/components/vip-elanlar'
import CategoryHead from './components/category-header'
import AllAds from './components/all-ads'

const Elanlar = () => {
  return (
    <>
      <CategoryHead />
      <VipElanlar />
      <AllAds/>
    </>
  )
}

export default Elanlar