import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

const PayModal = () => {
    const [open, setOpen] = useState(false);
    const [pay, setPay] = useState(20);

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setPay(isNaN(value) ? '' : value);
    };

    const getButtonClass = (amount) => {
        return pay === amount
            ? 'text-[#4c88f9] border-[#4c88f9]'
            : 'text-[#212c3a] border-[#eaebf2] ';
    };

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger className=' w-40 h-8 text-center rounded-none flex items-center justify-center bg-[#ebf6ff] text-[15px] text-[#3b88fd] border border-[#3b88fd] cursor-pointer py-[5px]'>Artır</DialogTrigger>
                <DialogContent className=' w-[455px] gap-1 px-0'>
                    <DialogHeader>
                        <DialogTitle className="text-[#212c3a] text-[18px] font-normal px-6">Şəxsi hesabı artır</DialogTitle>
                        <DialogDescription>
                        </DialogDescription>
                    </DialogHeader>
                    <div className="border-t">
                        <div className=" px-6 mt-4">
                            <p className="text-sm font-normal text-[#7e7e7f] text-left">Artırılacağ məbləğ, AZN</p>
                            <div>
                                <Input
                                    placeholder={`Məbləği seçin / Daxil edin`}
                                    type='number'
                                    value={pay}
                                    onChange={handleInputChange}
                                    className={`border-0 h-[35px] text-2xl font-medium border-b [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`} />
                            </div>
                            <div className="flex gap-2 mt-[10px]">
                                <Button
                                    onClick={() => setPay(10)}
                                    variant="outline"
                                    className={`font-helvetica bg-white py-[10px] px-[15px] rounded-[50px] ${getButtonClass(10)}`}
                                >
                                    10 AZN
                                </Button>
                                <Button
                                    onClick={() => setPay(20)}
                                    variant="outline"
                                    className={`font-helvetica bg-white py-[10px] px-[15px] rounded-[50px] ${getButtonClass(20)}`}
                                >
                                    20 AZN
                                </Button>
                                <Button
                                    onClick={() => setPay(30)}
                                    variant="outline"
                                    className={`font-helvetica bg-white py-[10px] px-[15px] rounded-[50px] ${getButtonClass(30)}`}
                                >
                                    30 AZN
                                </Button>
                            </div>
                        </div>
                        <div className=" flex justify-center items-center text-[#7e7e7f] bg-[#f6f7fa] text-sm h-10 mt-5">ÖDƏNİŞ ÜSULU</div>
                        <div className=" px-6">
                            <RadioGroup defaultValue="cart">
                                <div className="flex items-center space-x-2 border-b border-b-[#f1f3f7] h-[50px] text-[#212c3a]">
                                    <RadioGroupItem value="cart" id="r1" className={` border-[#eaebf2] text-[#4c88f9] data-[state=checked]:border-[#4c88f9] h-5 w-5`} />
                                    <Label htmlFor="r1" className={'text-[15px]'}>Bank kartı</Label>
                                </div>
                                <div className="flex items-center space-x-2 border-b border-b-[#f1f3f7] h-[50px] text-[#212c3a]">
                                    <RadioGroupItem value="terminal" id="r2" className={` border-[#eaebf2] text-[#4c88f9] data-[state=checked]:border-[#4c88f9] h-5 w-5`} />
                                    <Label htmlFor="r2" className={'text-[15px]'}>Terminallarda ödəniş</Label>
                                </div>
                                <div className="flex items-center space-x-2 h-[50px] text-[#212c3a] ">
                                    <RadioGroupItem value="partmanat" id="r3" className={` border-[#eaebf2] text-[#4c88f9] data-[state=checked]:border-[#4c88f9] h-5 w-5`} />
                                    <Label htmlFor="r3" className={'text-[15px]'}>Portmanat</Label>
                                </div>
                            </RadioGroup>
                        </div>
                        <div className=" bg-[#f6f7fa] flex flex-col py-5 px-6 ">
                            <Button className={` w-full h-12 bg-[#4c88f9]`}>Balansı artır</Button>
                            <div className=" block text-xs text-center text-[#8d94ad] my-[10px] ">
                            "Balansı artırın" düyməsini sıxmaqla siz Tap.az-ın <Link className=" underline">İstifadəçi razılaşmasını</Link> və <Link className=" underline">Ofertanı</Link> qəbul etdiyinizi təstiqləmiş olursunuz
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default PayModal;
