import { cardDatas } from '@/pages/home/components/mockData';
import Card from '@/components/card';
import { Ads } from '@/components/mockData';

const AllAds = () => {
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

    const CardDatas = AllAds.sort(() => Math.random() - 0.5);;

    return (
        <section id='butun-elanlar'>
            <div className="banner bg-[#f6f7fa] h-14 mb-6 border-y-[1px] border-y-[#f6f7fa] flex items-center">
                <div className="container flex items-center justify-between ">
                    <h2 className='text-[#8d94ad] font-bold text-base tracking-wider uppercase inline-block font-arial'> ELANLAR</h2>
                </div>
            </div>
            <div className="container flex flex-wrap gap-3">
                {
                    CardDatas.map((item) => (
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

export default AllAds;
