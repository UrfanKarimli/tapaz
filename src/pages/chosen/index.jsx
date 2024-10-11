import Card from "@/components/card";
import { useLikedAd } from "@/services/stores/useLikedAd";
import { Link } from "react-router-dom"


const Chosen = () => {
    const { likedData } = useLikedAd();
    return (
        <div className=" container mt-5">
            <h2 className=" font-arial text-[26px] font-bold mb-14">Seçilmişlər <span className=" inline-block rounded-full text-center leading-[1] ml-1 text-[22px] border border-[#ffcbb0] text-[#ff6617] px-[10px] py-1">{likedData.length}</span></h2>
            {
                likedData.length > 0 ? (
                    <div className=" w-full flex flex-wrap gap-3">
                        {
                            likedData?.map((item) => (
                                item && item.id && (
                                    <Card
                                        item={item} key={item.id} />
                                )
                            ))
                        }
                    </div>
                ) :
                    (
                        <div className="  py-24 mb-5 text-[#838383] bg-[#f6f6f5] rounded-[5px] text-base text-center">
                            <p className=" font-arial my-4">Elanlara daha sonra baxmaq üçün onları seçilmişlər siyahısına əlavə edin</p>
                            <Link to={'/elanlar'} className=" w-[230px] h-[46px] inline-block text-center rounded align-top bg-[#ff4f08] text-[#fff] py-3 px-[15px] "> Bütün elanlar</Link>
                        </div>
                    )
            }
        </div>
    )
}

export default Chosen