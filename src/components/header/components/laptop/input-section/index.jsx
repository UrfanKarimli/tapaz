import { Input } from '@/components/ui/input';
import React, { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { IoSearchSharp } from 'react-icons/io5';
import { useSearchParams, useNavigate } from 'react-router-dom';
import getFilteredData from '@/components/mockData/getFiltiredDatas';

const InputLg = () => {
    const data = getFilteredData({});
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const searchParam = searchParams.get('search') || '';
    const [searchInput, setSearchInput] = useState(searchParam);
    const [mapData, setMapData] = useState([]);
    const [show, setShow] = useState(false);

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
            setShow(false);
        }
    };

    const handleInputClear = () => {
        const newParams = new URLSearchParams(searchParams);
        newParams.delete('search');
        setSearchParams(newParams);
        setSearchInput('');
        setShow(false);
    };

    return (
        <div className='flex items-center py-4'>
            <div className='relative w-full'>
                <Input
                    name="search"
                    type="text"
                    placeholder="Əşya və ya xidmət axtarışı"
                    className="bg-[#f1f3f7] flex-grow border-0 h-10 w-full px-2 rounded-r-none text-[#222] text-base"
                    value={searchInput}
                    onChange={handleChange}
                />
                <div
                    onClick={handleInputClear}
                    className={`z-[99] group cursor-pointer absolute right-[6px] top-1/2 transform -translate-y-1/2 flex items-center justify-center w-[25px] ${searchInput ? "block" : "hidden"}`}>
                    <IoMdClose className='h-5 w-5 text-[#8d94ad]' />
                </div>
                <div className={`w-full absolute z-[999999] rounded-sm top-[calc(100%+10px)] bg-white overflow-hidden shadow-[0_12px_40px_0_rgba(33,44,58,0.2)] ${show ? 'block' : 'hidden'}`}>
                    <ul>
                        {mapData?.map((item) => (
                            <li key={item.id}
                                onClick={() => {
                                    navigate(`/elanlar/${item.category}/${item.subcategory}?search=${item.name}`);
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
            <div className='text-[#8d94ad] border-l rounded-r flex items-center justify-center cursor-pointer bg-[#f1f3f7] h-10 w-10'>
                <IoSearchSharp />
            </div>
        </div>
    );
};

export default InputLg;
