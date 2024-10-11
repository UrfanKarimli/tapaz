import { Link } from "react-router-dom";

const switchCate = (category) => {
    switch (category) {
        case 'automobile':
            return (
                <>
                    <div className="relative before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:content-[''] before:rounded-[50%] before:h-1 before:w-1 before:bg-[#212c3a]">
                        <Link to={`/elanlar/Nəqliyyat`} className=" p-[10px] text-[#212c3a] text-sm transition-all ease-in duration-200 hover:text-[#fe6168]" >Nəqliyyat</Link>
                    </div>
                    <div className="relative before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:content-[''] before:rounded-[50%] before:h-1 before:w-1 before:bg-[#212c3a]">
                        <Link to={`/elanlar/Nəqliyyat/Avtomobillər`} className=" p-[10px] text-[#212c3a] text-sm transition-all ease-in duration-200 hover:text-[#fe6168]" >Avtomobillər</Link>
                    </div>
                </>
            );
            ;
            case 'motorcycle':
                return (
                    <>
                        <div className="relative before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:content-[''] before:rounded-[50%] before:h-1 before:w-1 before:bg-[#212c3a]">
                            <Link to={`/elanlar/Nəqliyyat`} className=" p-[10px] text-[#212c3a] text-sm transition-all ease-in duration-200 hover:text-[#fe6168]" >Nəqliyyat</Link>
                        </div>
                        <div className="relative before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:content-[''] before:rounded-[50%] before:h-1 before:w-1 before:bg-[#212c3a]">
                            <Link to={`/elanlar/Nəqliyyat/Motosikletlər`} className=" p-[10px] text-[#212c3a] text-sm transition-all ease-in duration-200 hover:text-[#fe6168]" >Motosikletlər</Link>
                        </div>
                    </>
                );
                ;
    }
}

export default switchCate
