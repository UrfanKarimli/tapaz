import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FaLocationDot } from "react-icons/fa6";
import { Rayonlar } from '../../MockData/options';
import { useNavigate, useSearchParams } from 'react-router-dom';
import getFilteredData from '@/components/mockData/getFiltiredDatas';
import { useState, useEffect } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Filter = () => {
    const data = getFilteredData({});
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [mapData, setMapData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState(false);
    const searchParam = searchParams.get('search') || '';
    const locationParam = searchParams.get('location');
    const [searchInput, setSearchInput] = useState(searchParam);

    useEffect(() => {
        setSearchInput(searchParam);
    }, [searchParam]);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setSearchInput(inputValue);
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

    const handleSelect = (value) => {
        setSearchParams({ ...Object.fromEntries(searchParams.entries()), 'location': value });
        setIsOpen(false);
    };

    const handleLocClear = () => {
        const newParams = new URLSearchParams(searchParams);
        newParams.delete('location');
        setSearchParams(newParams);
    };

    const handleInputClear = () => {
        const newParams = new URLSearchParams(searchParams);
        newParams.delete('search');
        setSearchParams(newParams);
    };

    return (
        <div className='h-10 w-[620px] bg-white pr-1 rounded-md'>
            <form className="flex items-center justify-between">
                <div className="w-full relative group/item">
                    <Input
                        name="search"
                        type="text"
                        placeholder="Əşya və ya xidmət axtarışı"
                        className="border-0 h-10 w-full py-[6px] pr-[6px] pl-[10px] text-[#222] text-base"
                        value={searchInput}
                        onChange={handleChange}
                    />
                    <div
                        onClick={handleInputClear}
                        className={`z-[99] group cursor-pointer  absolute right-[6px] top-1/2 transform -translate-y-1/2 flex items-center justify-center w-[25px] ${searchParam ? "block" : "hidden"}`}>
                        <IoMdClose className='invisible group-hover/item:visible h-5 w-5 text-[#8d94ad]' />
                    </div>
                    <div className={`w-full absolute z-[999999] rounded-sm top-[calc(100%+10px)] bg-white overflow-hidden shadow-[0_12px_40px_0_rgba(33,44,58,0.2)] ${show ? 'block' : 'hidden'}`}>
                        <ul>
                            {mapData?.map((item) => (
                                <li key={item.id}
                                    onClick={() => {
                                        navigate(`/elanlar/${item.category}/${item.subcategory}?search=${item.name}${locationParam ? `&location=${locationParam}` : ``}`);
                                        setShow(false);
                                    }}
                                    className='flex-grow h-[55px] px-[15px] flex items-start gap-[2px] justify-center flex-col cursor-pointer hover:bg-[#fff5f1] text-[15px] font-bold transition-colors duration-200 ease-in-out'>
                                    <span className='text-[15px] font-bold leading-4'> {item.title}</span>
                                    <span className='text-sm leading-[14px] font-normal text-[#8d94ad] '> {item.subcategory}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='flex items-center bg-white relative border-l-[1px]'>
                    <div className={` h-10 pl-8 relative rounded bg-[#fff]`}>
                        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    className={`border-none py-0 pl-1 flex w-[170px] justify-between items-center rounded bg-[#fff] hover:bg-white hover:text-[] [&>svg]:data-[state=open]:rotate-180 cursor-pointer 
                                text-base border border-[#f1f3f7] focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0`}
                                    onClick={() => setIsOpen(prev => !prev)}
                                >
                                    {
                                        locationParam ? (<span className='text-[#000] text-base leading-5 '> {locationParam}</span>) : (<span className='text-[#939292] text-base leading-5 '> Şəhər</span>)
                                    }
                                    <IoChevronDownOutline className="ml-2 text-[15px] text-[#939292]" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent sideOffset={Number(10)} align="end">
                                <DropdownMenuGroup className="PopoverContent flex items-center justify-between">
                                    <div className="grid grid-cols-5 grid-rows-13 overflow-hidden pt-4 gap-x-5 gap-y-3">
                                        {
                                            Rayonlar?.map((item) => (
                                                <div
                                                    onClick={() => handleSelect(item.name)}
                                                    className={` ${locationParam === item.name ? "text-[#ff7547]" : "text-[#344049]"} px-[10px] hover:text-[#ff7547] text-base mr-1 block cursor-pointer`}
                                                    key={item.id}
                                                >
                                                    {item.name}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <FaLocationDot className={` ${locationParam ? "hidden" : "block"} absolute left-[6px] top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#939292]`} />
                        <div
                            onClick={handleLocClear}
                            className={`z-[99] group cursor-pointer hover:bg-[#e5e5e74d] absolute left-[6px] top-1/2 transform -translate-y-1/2 flex items-center justify-center w-[25px] ${locationParam ? "block" : "hidden"}`}>
                            <IoMdClose className=' group-hover:text-[#ff7547] h-5 w-5 text-[#8d94ad]' />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Filter;
