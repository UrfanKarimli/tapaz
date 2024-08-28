import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { IoSearchOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Rayonlar } from '../../MockData/options';



const Filter = () => {


    return (
        <div className='h-10 w-[620px] bg-white pr-1 rounded-md'>
            <form className=" flex items-center justify-between" >
                <div className="w-full">
                    <Input
                        name="value"
                        type="text"
                        // value={find}
                        placeholder="Əşya və ya xidmət axtarışı"
                        className="border-0 h-10 w-full py-[6px] pr-[6px] pl-[10px] text-[#222] text-base"
                    // onChange={(e) => setFind(e.target.value)}
                    />
                </div>
                <div className='flex items-center bg-white relative border-l-[1px]'>
                <FaLocationDot className=' absolute left-[6px] h-[14px] w-[14px] text-[#939292] '/>
                    <Select>
                        
                        <SelectTrigger className="w-[170px] rounded-[0px] pl-6 placeholder:text-[#939292]  border-none [&>svg]:data-[state=open]:rotate-180 focus:outline-none focus:ring-0 focus:ring-offset-0">
                            <SelectValue placeholder="Şəhər" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup className='grid grid-cols-5 grid-rows-13 '>
                                {
                                    Rayonlar.map((item)=> (
                                        <SelectItem key={item.id} value={item.name}>{item.name}</SelectItem>
                                    ))
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Button
                        className='flex items-center  gap-1 py-[7px] px-[9px] focus:ring-0 focus:ring-offset-0 h-[34px] bg-gradient-to-r from-[#fe5722] via-[#fe5631] to-[#fe6168]'
                        type="submit"
                    >
                        <IoSearchOutline className='h-4 w-4' />
                        Tap
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Filter