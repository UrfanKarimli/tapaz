import { useSearchParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { FaMinus } from "react-icons/fa";
import { IoChevronDownOutline } from "react-icons/io5";

const MinMax = ({ Seen, Name, dynamicKey }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const minParam = searchParams.get(`${dynamicKey}_min`);
    const maxParam = searchParams.get(`${dynamicKey}_max`);
    
    const handleMinChange = (e) => {
        const newMinValue = e.target.value;
        const newParams = new URLSearchParams(searchParams);
        if (newMinValue) {
            newParams.set(`${dynamicKey}_min`, newMinValue);
        } else {
            newParams.delete(`${dynamicKey}_min`);
        }
        setSearchParams(newParams);
    };

    const handleMaxChange = (e) => {
        const newMaxValue = e.target.value;
        const newParams = new URLSearchParams(searchParams);
        if (newMaxValue) {
            newParams.set(`${dynamicKey}_max`, newMaxValue);
        } else {
            newParams.delete(`${dynamicKey}_max`);
        }
        setSearchParams(newParams);
    };

    return (
        <>
            {Seen ? (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className={'text-[#939292] px-[10px] rounded hover:bg-white hover:text-[] [&>svg]:data-[state=open]:rotate-180 cursor-pointer  text-base border border-[#f1f3f7] focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0'} variant="outline">
                            {Name}
                            <IoChevronDownOutline className=" ml-2 text-[24px] text-[#ff4f08] " />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        sideOffset={Number(1)}
                        align="start"
                        className="w-56">
                        <DropdownMenuGroup className="flex items-center justify-between">
                            <Input
                                type="number"
                                placeholder="min"
                                value={minParam || ''}
                                onChange={handleMinChange}
                                className="focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none h-10 w-[90px] text-[#666] text-sm border border-[#e6e6e6]"
                            />
                            <FaMinus className=" text-[#aeaeae] text-sm " />
                            <Input
                                type="number"
                                placeholder="max"
                                value={maxParam || ''}
                                onChange={handleMaxChange}
                                className="focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none h-10 w-[90px] text-[#666] text-sm border border-[#e6e6e6]"
                            />
                        </DropdownMenuGroup >
                    </DropdownMenuContent>
                </DropdownMenu>
            ) : null}
        </>
    );
};

export default MinMax;
