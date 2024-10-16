import { useSearchParams } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FaMinus } from "react-icons/fa";
import { IoChevronDownOutline } from "react-icons/io5";

const MinMax = ({ Seen, buttonName }) => {
    return (
        <>
            {
                Seen ? (<DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className={'text-[#939292] px-[10px] rounded hover:bg-white hover:text-[] [&>svg]:data-[state=open]:rotate-180 cursor-pointer  text-base border border-[#f1f3f7] focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0'} variant="outline"
                        >{buttonName}
                            <IoChevronDownOutline className=" ml-2 text-[24px] text-[#ff4f08] " />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        sideOffset={Number(1)}
                        align="start"
                        className="w-56">
                        <DropdownMenuGroup
                            className=" flex items-center justify-between">
                            <Input
                                type="number"
                                placeholder="min"
                                className="focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none h-10 w-[90px]  text-[#666] text-sm border border-[#e6e6e6]"
                            />
                            <FaMinus className=" text-[#aeaeae] text-sm " />
                            <Input
                                type="number"
                                placeholder="max"
                                className="focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none h-10 w-[90px]  text-[#666] text-sm border border-[#e6e6e6]"
                            />
                        </DropdownMenuGroup >
                    </DropdownMenuContent>
                </DropdownMenu>) : (null)
            }
        </>
    )
}

export default MinMax