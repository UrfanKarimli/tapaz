import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { IoSearchOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Rayonlar } from '../../MockData/options';
import { useNavigate, useSearchParams } from 'react-router-dom';
import getFilteredData from '@/components/mockData/getFiltiredDatas';
import { useState } from 'react';

const Filter = () => {
    const data = getFilteredData({});
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [mapData, setMapData] = useState([]);
    const [show, setShow] = useState(false);
    const searchParam = searchParams.get('search');
    const locationParam = searchParams.get('location'); 

    const handleChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length > 2) {
            const filteredData = data.filter(item =>
                item.title.toLowerCase().includes(inputValue.toLowerCase()) ||
                item.description.toLowerCase().includes(inputValue.toLowerCase())
            );
            setMapData(filteredData);
            setShow(true);
        } else {
            setMapData([]);
        }
    };

    const handleSelectChange = (value) => {
        if (value) {
            setSearchParams(prev => {
                const newParams = new URLSearchParams(prev);
                newParams.set('location', value);
                return newParams;
            });
        }
    };

    return (
        <div className='h-10 w-[620px] bg-white pr-1 rounded-md'>
            <form className="flex items-center justify-between">
                <div className="w-full relative">
                    <Input
                        name="search"
                        type="text"
                        placeholder="Əşya və ya xidmət axtarışı"
                        className="border-0 h-10 w-full py-[6px] pr-[6px] pl-[10px] text-[#222] text-base"
                        onChange={handleChange}
                    />
                    <div className={`w-full absolute z-[999999] rounded-sm top-[calc(100%+10px)] bg-white overflow-hidden shadow-[0_12px_40px_0_rgba(33,44,58,0.2)] ${show ? 'block' : 'hidden'}`}>
                        <ul>
                            {mapData?.map((item) => (
                                <li key={item.id}
                                    onClick={() => {
                                        navigate(`/elanlar/${item.category}/${item.subcategory}?search=${item.title}&location=${locationParam}`)
                                        setShow(false);
                                    }} className='flex-grow h-[55px] px-[15px] flex items-start gap-[2px] justify-center flex-col cursor-pointer hover:bg-[#fff5f1] text-[15px] font-bold transition-colors duration-200 ease-in-out'>
                                    <span className='text-[15px] font-bold leading-4'> {item.title}</span>
                                    <span className='text-sm leading-[14px] font-normal text-[#8d94ad] '> {item.subcategory}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='flex items-center bg-white relative border-l-[1px]'>
                    <FaLocationDot className='absolute left-[6px] h-[14px] w-[14px] text-[#939292] ' />
                    <Select onValueChange={handleSelectChange}>
                        <SelectTrigger className="w-[170px] rounded-[0px] pl-6 placeholder:text-[#939292] border-none [&>svg]:data-[state=open]:rotate-180 focus:outline-none focus:ring-0 focus:ring-offset-0">
                            <SelectValue placeholder="Şəhər" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup className='grid grid-cols-5 grid-rows-13 '>
                                {Rayonlar.map((item) => (
                                    <SelectItem key={item.id} value={item.name}>{item.name}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Button
                        className='flex items-center gap-1 py-[7px] px-[9px] focus:ring-0 focus:ring-offset-0 h-[34px] bg-gradient-to-r from-[#fe5722] via-[#fe5631] to-[#fe6168]'
                        type="submit"
                    >
                        <IoSearchOutline className='h-4 w-4' />
                        Tap
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Filter;
