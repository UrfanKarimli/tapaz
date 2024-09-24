
import { Link, useParams } from "react-router-dom"
import FormFilter from "../form-filter"




const CategoryHead = ({Length}) => {
  const { cate, subcate, items } = useParams()



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
            <li><Link className="text-[#4c88f9] text-sm hover:text-[#fe6168] mr-1" to={'#'}>test</Link>
              <span className="text-[#8d94ad] text-sm">(45)</span>
            </li>
            <li><Link className="text-[#4c88f9] text-sm hover:text-[#fe6168] mr-1" to={'#'}>test</Link>
              <span className="text-[#8d94ad] text-sm">(45)</span>
            </li> <li><Link className="text-[#4c88f9] text-sm hover:text-[#fe6168] mr-1" to={'#'}>test</Link>
              <span className="text-[#8d94ad] text-sm">(45)</span>
            </li> <li><Link className="text-[#4c88f9] text-sm hover:text-[#fe6168] mr-1" to={'#'}>test</Link>
              <span className="text-[#8d94ad] text-sm">(45)</span>
            </li> <li><Link className="text-[#4c88f9] text-sm hover:text-[#fe6168] mr-1" to={'#'}>test</Link>
              <span className="text-[#8d94ad] text-sm">(45)</span>
            </li> <li><Link className="text-[#4c88f9] text-sm hover:text-[#fe6168] mr-1" to={'#'}>test</Link>
              <span className="text-[#8d94ad] text-sm">(45)</span>
            </li> <li><Link className="text-[#4c88f9] text-sm hover:text-[#fe6168] mr-1" to={'#'}>test</Link>
              <span className="text-[#8d94ad] text-sm">(45)</span>
            </li> <li><Link className="text-[#4c88f9] text-sm hover:text-[#fe6168] mr-1" to={'#'}>test</Link>
              <span className="text-[#8d94ad] text-sm">(45)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CategoryHead