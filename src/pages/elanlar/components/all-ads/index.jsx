import Card from '@/components/card';
import { useCardDatas } from '@/services/stores/useCardDatas';

const AllAds = () => {
    const { cardDatas} = useCardDatas()

    return (
        <section id='butun-elanlar'>
            <div className="banner bg-[#f6f7fa] h-14 mb-6 border-y-[1px] border-y-[#f6f7fa] flex items-center">
                <div className="container flex items-center justify-between ">
                    <h2 className='text-[#8d94ad] font-bold text-base tracking-wider uppercase inline-block font-arial'> ELANLAR</h2>
                </div>
            </div>
            <div className="container flex flex-wrap gap-3">
                {
                    cardDatas?.map((item, index) => (
                        <Card
                            item={item}
                            key={index}
                        />
                    ))
                }
            </div>
        </section>
    );
};

export default AllAds;
