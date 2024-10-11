import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react";
import { IoFlagOutline } from "react-icons/io5";

const optionsArray = [
    { id: 13, text: "Artıq satılıb" },
    { id: 19, text: "Dələduz" },
    { id: 15, text: "Kontaktlar yanlış göstərilib" },
    { id: 14, text: "Qiymət yanlış göstərilib" },
    { id: 17, text: "Saxta elan" },
    { id: 29, text: "Yanlış xarakteristikalar" },
    { id: 30, text: "Şəkillər başqa bir nəqliyyat vasitəsinə aiddir" },
    { id: 18, text: "Digər" }
];
const Report = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger className='text-[#212c3a] text-base leading-[18px] hover:text-[#ff4f08] flex items-center gap-1'><IoFlagOutline className="h-6 w-6" /> Şikayət et</DialogTrigger>
                <DialogContent className=' w-[455px] gap-1'>
                    <DialogHeader>
                        <DialogTitle className=" text-[#212c3a] text-[18px] font-normal ">Şikayətin səbəbi</DialogTitle>
                        <DialogDescription>

                        </DialogDescription>
                    </DialogHeader>
                    <div className=" flex flex-col gap-5">
                        <div className=" border-b border-b-[#eae5e1]" >
                            <label className=" text-[#98918a] font-normal text-[13px] leading-4" htmlFor="sebeb">Şikayətin səbəbi</label>
                            <Select >
                                <SelectTrigger   className="w-full border-none ">
                                    <SelectValue placeholder="Səbəb seç" />
                                </SelectTrigger>
                                <SelectContent >
                                    <SelectGroup id="sebeb">
                                        {optionsArray?.map((item)=> (
                                        <SelectItem key={item.id} value={item.id}>{item.text}</SelectItem>
                                        ))}
                                        
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className=" border-b border-b-[#eae5e1]">
                        <label className=" text-[#98918a] font-normal text-[13px] leading-4" htmlFor="tesvir">Şikayəti təsvir edin</label>
                        <Textarea id='tesvir' className=' border-none h-10 min-h-10 ' />
                        </div>
                        <div>
                        <Button className=" w-full bg-[#ff4f08] text-white hover:bg-[]">Göndərmək</Button>
                        </div>
                    </div>

                </DialogContent>
            </Dialog>
        </>
    )
}

export default Report