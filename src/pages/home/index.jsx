import { useEffect, useState } from "react";
import HeadNav from "./components/header-navigator";
import PremiumElanlar from "./components/premium";
import VipElanlar from "./components/vip-elanlar";
import { Ads } from "@/components/mockData";

const Home = () => {
  const [filteredAds, setFilteredAds] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const filteredAll = Object.values(Ads);
      const final = filteredAll.flatMap(subObj => Object.values(subObj));
      const filteredData = final.flatMap(subObj => Object.values(subObj)).flat();
      setFilteredAds(filteredData);
    };

    fetchData();
  }, []);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const shuffledAds = shuffleArray(filteredAds);

  return (
    <>
      <HeadNav />
      <VipElanlar cardDatas={shuffledAds} />
      <PremiumElanlar cardDatas={shuffledAds} />
    </>
  );
};

export default Home;
