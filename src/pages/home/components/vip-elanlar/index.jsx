import { Link } from 'react-router-dom'
import { cardDatas } from '../mockData'
import Card from '../card'

const VipElanlar = () => {

  const cutDatas = cardDatas.slice(0,8)
  return (
    <section id='vip-elanlar'>
      <div className="banner bg-[#f6f7fa] h-14 mb-6 border-y-[1px] border-y-[#f6f7fa] flex items-center">
        <div className="container flex items-center justify-between ">
          <h2 className='text-[#8d94ad] font-bold text-base  tracking-wider uppercase inline-block font-arial'>VIP ELANLAR</h2>

          <Link to={'#'} className='text-[#4c88f9] font-semibold text-base align-baseline font-arial underline'>
            Bütün VİP elanlar
          </Link>

        </div>
       

      </div>
      <div className="container flex flex-wrap gap-3">
          {
            cutDatas.map((item) => (
              <Card 
              item={item} key={item.id} />
            ))
          }
        </div>


    </section>
  )
}

export default VipElanlar