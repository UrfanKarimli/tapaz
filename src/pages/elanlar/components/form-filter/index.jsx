import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { IoChevronDownOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { Link, useParams, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Ads } from "@/components/mockData"
import { calculateCategoryCounts, getBodytype, getColors, getFuels, getModelCounts, getNew, getTransmission } from "../funksiyalar"
import DropDownSelect from "../dropdown"
import MinMax from "../min-max"



const FormFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [marka, setMarka] = useState({})
    const [filters, setFilters] = useState({
        model: {},
        fuel: {},
        colors: {},
        transmission: {},
        bodyType: {},
        isnew: {},
    });
    const { cate, subcate, items } = useParams()
    const getPath = () => {
        if (cate && subcate) {
            return `/${cate}/${subcate}`;
        }
        if (cate) {
            return `/${cate}`;
        }
        return ``;
    };


    useEffect(() => {
        const fetchData = () => {
            if (cate && subcate && items) {
                const allCate = Object.values(Ads[cate][subcate][items]);
                setFilters(prev => ({
                    ...prev,
                    model: getModelCounts(allCate),
                    fuel: getFuels(allCate),
                    colors: getColors(allCate),
                    transmission: getTransmission(allCate),
                    bodyType: getBodytype(allCate),
                    isnew: getNew(allCate)
                }));
            } else
                if (cate && subcate) {
                    const value = calculateCategoryCounts(Ads[cate][subcate]);
                    setMarka(value)
                }
        }
        fetchData();
    }, [cate, subcate, items])


    return (
        <div className=" flex justify-between ">
            <div className="flex gap-3 flex-wrap">
                <div className="qiymet">
                    <MinMax buttonName={'Qiymət, AZN'} />
                </div>
                {subcate ? (<div className="marka">
                    {/* <DropDownSelect
                                Param={items}
                                Name={"Marka"}
                                MapData={marka}
                                IfElse={subcate}
                                dynamicKey={'color'}
                            /> */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className={'text-[#939292] px-[10px] rounded hover:bg-white hover:text-[] [&>svg]:data-[state=open]:rotate-180 cursor-pointer  text-base border border-[#f1f3f7] focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0'} variant="outline"
                            >{items ? items : 'Marka'}
                                <IoChevronDownOutline className=" ml-2 text-[24px] text-[#ff4f08] " />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            sideOffset={Number(1)}
                            align="start"
                            className="">
                            <DropdownMenuGroup
                                className="PopoverContent flex items-center justify-between"
                            >
                                <ul className=" flex flex-col flex-wrap max-h-96 gap-1 overflow-hidden">
                                    {subcate ?
                                        Object.entries(marka)?.map(([key, value]) => (
                                            <li className=" px-[10px]" key={key}>
                                                <Link className="text-[#344049] text-base  mr-1" to={`/elanlar${getPath()}/${key}`}>{key}</Link>
                                            </li>
                                        )) : (null)
                                    }
                                </ul>
                            </DropdownMenuGroup >
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>) : (null)
                }
                {items ? (<div className="model">
                    <DropDownSelect
                        Name={"Model"}
                        MapData={filters.model}
                        IfElse={items}
                        dynamicKey={'model'}
                    />
                </div>) : (null)
                }
                {subcate ? (<div className="color">
                    <DropDownSelect
                        Name={"Rəng"}
                        MapData={filters.colors}
                        IfElse={subcate}
                        dynamicKey={'color'}
                    />
                </div>) : (null)}
                {subcate ? (<div className="muherrik">
                    <MinMax buttonName={<>
                        Mühərrik sm<sup className="text-[10px]">3</sup>
                    </>} />
                </div>) : (null)}
                {subcate ? (<div className="yanacaq">
                    <DropDownSelect
                        Name={"Yanacaq növü"}
                        MapData={filters.fuel}
                        IfElse={items}
                        dynamicKey={'fuel_type'}

                    />
                </div>) : (null)}
                {subcate ? (<div className="Suret qutusu">
                    <DropDownSelect
                        Name={"Sürətlər qutusu"}
                        MapData={filters.transmission}
                        IfElse={items}
                        dynamicKey={'transmission'}
                    />
                </div>) : (null)}
                {subcate ? (<div className="Kuzov novu">
                    <DropDownSelect
                        Name={"Kuzov növü"}
                        MapData={filters.bodyType}
                        IfElse={subcate}
                        dynamicKey={'body_type'}
                    />
                </div>) : (null)}
                {subcate ? (<div className="Buraxılış">
                    <MinMax buttonName={'Buraxılış ili'} />
                </div>) : (null)}
                {subcate ? (<div className="Yurus">
                    <MinMax buttonName={'Yürüş, km'} />
                </div>) : (null)}
                {subcate ? (<div className="isnew">
                    <DropDownSelect
                        Name={"Yeni?"}
                        MapData={filters.isnew}
                        IfElse={subcate}
                        dynamicKey={'is_new'}
                    />
                </div>) : (null)}
            </div>
            <HoverCard
                closeDelay={Number(100)}
                openDelay={Number(100)}
            >
                <HoverCardTrigger className="w-[16%] h-10">
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
                    Təmizləmək üçün iki dəfə toxunun
                </HoverCardContent>
            </HoverCard>

        </div>
    )
}

export default FormFilter