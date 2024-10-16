import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { GrPowerReset } from "react-icons/gr";
import {  useParams, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Ads } from "@/components/mockData"
import { calculateCategoryCounts, getBodytype, getColors, getFuels, getModelCounts, getNew, getTransmission } from "../funksiyalar"
import DropDownSelect from "../dropdown"
import MinMax from "../min-max"
import getFilteredData from "@/components/mockData/getFiltiredDatas";


const FormFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [variety, setVariety] = useState()
    const { cate, subcate } = useParams()
    const items = searchParams.get(`name`)
    const [marka, setMarka] = useState({})
    const data = getFilteredData({ cate, subcate });
    const [filters, setFilters] = useState({
        model: {},
        fuel: {},
        colors: {},
        transmission: {},
        bodyType: {},
        isnew: {},
    });

    useEffect(() => {
        if (data?.length) {
            setVariety(data[0]);
        }
    }, [cate, subcate]);

    useEffect(() => {
        const fetchData = () => {
            if (cate && subcate) {
                const allCate = getFilteredData({ cate, subcate , items  });
                const value = calculateCategoryCounts(Ads[cate][subcate]);
                setMarka(value)
                setFilters(prev => ({
                    ...prev,
                    model: getModelCounts(allCate),
                    fuel: getFuels(allCate),
                    colors: getColors(allCate),
                    transmission: getTransmission(allCate),
                    bodyType: getBodytype(allCate),
                    isnew: getNew(allCate)
                }));
            }
        }
        fetchData();
    }, [cate, subcate ,items])

    return (
        <div className=" flex justify-between ">
            <div className="flex gap-3 flex-wrap">
                <div className="qiymet">
                    <MinMax
                        Seen={true}
                        buttonName={'Qiymət, AZN'} />
                </div>
                <DropDownSelect
                    Seen={subcate && variety?.brand}
                    Name={"Marka"}
                    MapData={marka}
                    IfElse={subcate}
                    dynamicKey={'name'}
                />
                <DropDownSelect
                    Seen={items && variety?.model}
                    Name={"Model"}
                    MapData={filters.model}
                    IfElse={items}
                    dynamicKey={'model'}
                />
                <DropDownSelect
                    Seen={subcate && variety?.color}
                    Name={"Rəng"}
                    MapData={filters.colors}
                    IfElse={subcate}
                    dynamicKey={'color'}
                />
                <MinMax
                    Seen={subcate && variety?.engine_capacity}
                    buttonName={<> Mühərrik sm<sup className="text-[10px]">3</sup> </>}
                />
                <DropDownSelect
                    Seen={subcate && variety?.fuel_type}
                    Name={"Yanacaq növü"}
                    MapData={filters.fuel}
                    IfElse={subcate}
                    dynamicKey={'fuel_type'}
                />
                <DropDownSelect
                    Seen={subcate && variety?.transmission}
                    Name={"Sürətlər qutusu"}
                    MapData={filters.transmission}
                    IfElse={subcate}
                    dynamicKey={'transmission'}
                />
                <DropDownSelect
                    Seen={subcate && variety?.body_type}
                    Name={"Kuzov növü"}
                    MapData={filters.bodyType}
                    IfElse={subcate}
                    dynamicKey={'body_type'}
                />
                <MinMax
                    Seen={subcate === 'Avtomobillər' || subcate === 'Motosikletlər'}
                    buttonName={'Buraxılış ili'}
                />
                <MinMax
                    Seen={subcate && variety?.mileage}
                    buttonName={'Yürüş, km'}
                />
                <DropDownSelect
                    Seen={subcate && variety?.is_new}
                    Name={"Yeni?"}
                    MapData={{
                        "Bəli": 1,
                        "Xeyir": 0
                    }}
                    IfElse={subcate}
                    dynamicKey={'is_new'}
                />
            </div>
            <HoverCard
                closeDelay={Number(100)}
                openDelay={Number(100)}
            >
                <HoverCardTrigger className="w-[94px] h-10">
                    <button
                        onClick={() => {
                            setSearchParams({})
                        }}
                        className={' w-full  h-10 flex justify-between items-center px-1 rounded  bg-[#dae8ff] border-[#d3e4ff] text-[#4c88f9] hover:bg-[]'} type="reset">
                        <GrPowerReset />
                        Təmizlə</button>
                </HoverCardTrigger>
                <HoverCardContent
                    className={'bg-[#f1f3f7] w-52 bg-opacity-50 text-[#ff4f08]'}
                    sideOffset={Number(1)}
                >
                    Məlumatlar sıfırlanacaq
                </HoverCardContent>
            </HoverCard>
        </div>
    )
}

export default FormFilter
