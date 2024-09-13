import HeadNav from "./components/header-navigator"
import PremiumElanlar from "./components/premium"
import VipElanlar from "./components/vip-elanlar"

const Home = () => {
  return (
    <>
        <HeadNav/>
        <VipElanlar/>
        <PremiumElanlar/>
    </>
  )
}

export default Home