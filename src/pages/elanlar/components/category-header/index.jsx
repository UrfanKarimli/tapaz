
import { Link, useParams } from "react-router-dom"
import FormFilter from "../form-filter"
import { Ads } from "@/components/mockData"
import { useState,useEffect } from "react"
import { getCate , getModelCounts , calculateCategoryCounts} from "../funksiyalar"



const CategoryHead = ({ Length }) => {
  const { cate, subcate, items, id } = useParams()
  const [data, setData] = useState({})
  const getPath = () => {        
    if (cate && subcate && items) {
        return `/${cate}/${subcate}/${items}`;
    }
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
      let value;
      if (cate && subcate && items) {
        const allCate = Object.values(Ads[cate][subcate][items]);
        value = getModelCounts(allCate);
      } else if (cate && subcate) {
        value = calculateCategoryCounts(Ads[cate][subcate]);
      } else if (cate) {
        value = calculateCategoryCounts(Ads[cate]);
      } else {
        value = calculateCategoryCounts(Ads);
      }
      setData(value);
    };

    fetchData();
  }, [cate, subcate, items]);


  return (
    <div className="  min-h-[190px] flex bg-[#f1f3f7] overflow-hidden font-helvetica">
      <div className="container">
        <div className="w-full flex flex-col">
          <div className=" flex h-14 items-center ">
            <div className="relative ">
              <Link to={'/elanlar'} className=" p-[10px] pl-0 text-[#212c3a] text-sm transition-all ease-in duration-200 hover:text-[#fe6168]" >Bütün kateqoriyalar</Link>
            </div>
            {
              cate ? (
                <div className="relative before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:content-[''] before:rounded-[50%] before:h-1 before:w-1 before:bg-[#212c3a]">
                  <Link to={`/elanlar/${cate}`} className=" p-[10px] text-[#212c3a] text-sm transition-all ease-in duration-200 hover:text-[#fe6168]" >{cate}</Link>
                </div>
              ) : (null)
            }
            {
              subcate ? items? (
                <div className="relative before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:content-[''] before:rounded-[50%] before:h-1 before:w-1 before:bg-[#212c3a]">
                  <Link to={`/elanlar/${cate}/${subcate}`} className=" p-[10px] text-[#212c3a] text-sm transition-all ease-in duration-200 hover:text-[#fe6168]" >{subcate}</Link>
                </div>
              ) : (
                <div className="relative before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:content-[''] before:rounded-[50%] before:h-1 before:w-1 before:bg-[#212c3a]">
                  <span className=" p-[10px] text-[#212c3a] text-sm " > {subcate}</span>
                </div>
              ) : (null)
            }
          </div>
          <div>
            <h1 className=" flex text-[#212c3a] font-bold text-base">{cate ? subcate ? items ? `${getCate(subcate)} elanları —  ${items}` : `${getCate(subcate)} elanları` : `${getCate(cate)} elanları  ` : `Bütün kateqoriyalar`}
              <span className=" text-[#8d94ad] pl-1 font-normal">({Length} elan)</span>
            </h1>
          </div>
          <div className=" pt-5 pb-[15px]">
            <FormFilter  />
          </div>
        </div>
        {id ? (
          <div className=" hidden">
          </div>
        ) : (
          <div className=" bg-[#fff] p-5 rounded-[7px]">
            <ul className="grid grid-cols-4 grid-rows-13 overflow-hidden">
              {
                Object.entries(data)?.map(([key, value]) => (
                  <li className=" mb-4 leading-[18px]" key={key}>
                    <Link className="text-[#4c88f9] text-sm hover:text-[#fe6168] mr-1" to={`/elanlar${getPath()}/${key}`}>{key}</Link>
                    <span className="text-[#8d94ad] text-sm">({value})</span>
                  </li>
                ))
              }
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoryHead