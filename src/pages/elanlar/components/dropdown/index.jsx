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

const DropDownSelect = ({ Name, MapData, IfElse, dynamicKey }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isOpen, setIsOpen] = useState(false); 

    const Param = searchParams.get(`${dynamicKey}`);
    const handleSelect = (value) => {
        setSearchParams({ ...Object.fromEntries(searchParams.entries()), [dynamicKey]: value });
        setIsOpen(false); 
    };

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                <Button
                    className={'text-[#939292] px-[10px] rounded bg-[#fff] hover:bg-white hover:text-[] [&>svg]:data-[state=open]:rotate-180 cursor-pointer text-base border border-[#f1f3f7] focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0'}
                    onClick={() => setIsOpen(prev => !prev)} 
                >
                    {dynamicKey === 'is_new' ? (Param === "true" ? "Bəli" : Param === "false" ? 'Xeyir' : Name) : (Param ? Param : Name)}
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
                                    {dynamicKey === 'is_new' ? (key === "true" ? "Bəli" : key === "false" ? 'Xeyir' : key) : key}
                                </div>
                            ))
                            : null
                        }
                    </div>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default DropDownSelect;
