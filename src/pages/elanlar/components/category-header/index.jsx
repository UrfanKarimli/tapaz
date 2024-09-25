
import { Link, useParams } from "react-router-dom"
import FormFilter from "../form-filter"
import { katalogData } from "@/components/header/MockData/katalog"
import { Ads } from "@/components/mockData"
import { useEffect, useState } from "react"



const CategoryHead = ({ Length }) => {
  const { cate, subcate, items } = useParams()
  const [keyss, setKeys] = useState([])
  useEffect(() => {
    const fetchData = () => {
      const allCateKey = Object.keys(Ads);
      // const allCate = Object.values(Ads);
      // const final = allCate.flatMap(subObj => Object.keys(subObj))
      // const filteredData = final.flatMap(subObj => Object.values(subObj)).flat()

      if (cate) {
        const allCateKey = Object.keys(Ads[cate]);
        setKeys(allCateKey)
        if (cate && subcate) {
          const allCateKey = Object.keys(Ads[cate][subcate]);
          setKeys(allCateKey)
          if (cate && subcate && items) {
            const allCate = Object.values(Ads[cate][subcate][items]);
            const allCateKey = Object.keys(Ads[cate][subcate][items]);
            if (cate == 'Nəqliyyat' || cate == 'Elektronika') {
              const mapped = allCate.map(item => item.model )
              setKeys(mapped)
            }else {
            setKeys(allCateKey)

            }
          }
        }
      } else {
        setKeys(allCateKey)
      }
    };
    fetchData();
  }, [cate, subcate, items]);


  const getCate = (cate) => {
    if (cate.endsWith('lar') || cate.endsWith('lər')) {
      return cate.slice(0, -3);
    }
    return cate;
  };

  return (
    <div className="  min-h-80 flex bg-[#f1f3f7] overflow-hidden font-helvetica">
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
              subcate ? (
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
          <div className=" pt-5 pb-[10px]">
            <FormFilter />
          </div>
        </div>
        <div className=" bg-[#fff] p-5 rounded-[7px]">
          <ul className="grid grid-cols-4 grid-rows-13 overflow-hidden">
            {
              keyss.map((items , index) => (
                <li className=" mb-4 leading-[18px]" key={index}><Link className="text-[#4c88f9] text-sm hover:text-[#fe6168] mr-1" to={`#`}>{items}</Link>
                  <span className="text-[#8d94ad] text-sm">({keyss.length})</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CategoryHead