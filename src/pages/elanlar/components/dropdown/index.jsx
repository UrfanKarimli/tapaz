import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const DropDownSelect = ({ Seen, Name, MapData, IfElse, dynamicKey }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isOpen, setIsOpen] = useState(false);
    const Param = searchParams.get(`${dynamicKey}`);

    const handleSelect = (value) => {
        setSearchParams({ ...Object.fromEntries(searchParams.entries()), [dynamicKey]: value });
        setIsOpen(false);
    };

    const handleClear = () => {

    }

    return (
        <>
            {Seen ?
                (<DropdownMenu  open={isOpen} onOpenChange={setIsOpen}>
                    <DropdownMenuTrigger asChild>
                        <Button
                            className={`  px-[10px] h-10 py-0 flex relative items-center rounded bg-[#fff] hover:bg-white hover:text-[] [&>svg]:data-[state=open]:rotate-180 cursor-pointer 
                                text-base border border-[#f1f3f7] focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 ${Param ? "pl-[32px]" : ""}`}
                            onClick={() => setIsOpen(prev => !prev)}
                        >
                            <div
                                onClick={() => {
                                    handleClear()
                                }} className={` z-[99] group hover:bg-[#e5e5e74d] absolute left-[6px] top-1/2 transform -translate-y-1/2 flex items-center justify-center w-[25px] ${Param ? "block" : "hidden"}`}>
                                <IoMdClose className=' group-hover:text-[#ff7547] h-5 w-5 text-[#8d94ad]' />
                            </div>
                            <div className=' flex flex-col justify-center'>
                                <label className={` text-[#ff7547] text-[11px] leading-[11px] ${Param ? "block" : "hidden"}`} > {Name}</label>
                                <span className='text-[#939292] text-base leading-5 '>{Param ? Param : Name}</span>
                            </div>
                            <IoChevronDownOutline className="ml-2 text-[24px] text-[#ff4f08]" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={Number(1)} align="start">
                        <DropdownMenuGroup className="PopoverContent flex items-center justify-between">
                            <div className="flex flex-col flex-wrap max-h-96 gap-1 overflow-hidden">
                                {IfElse ?
                                    Object.entries(MapData)?.map(([key, value]) => (
                                        <div
                                            data-value={key}
                                            onClick={() => handleSelect(key)}
                                            className="px-[10px] text-[#344049] text-base mr-1 block cursor-pointer"
                                            key={key}
                                        >
                                            {key}
                                        </div>
                                    ))
                                    : null
                                }

                            </div>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>) : (null)
            }
        </>
    );
};

export default DropDownSelect;
