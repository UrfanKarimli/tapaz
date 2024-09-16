import { Link } from 'react-router-dom';
import { cardDatas } from '@/pages/home/components/mockData';
import Card from '@/components/card';
import { Ads } from '@/components/mockData';

const AllVip = () => {
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


    const AllAds = [...Transports, ...Electronica, ...cardDatas]

    const vipCardDatas = AllAds.filter((item) => item.VIP === true).sort(() => Math.random() - 0.5);;

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
