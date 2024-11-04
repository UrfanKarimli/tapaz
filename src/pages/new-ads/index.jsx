import { Input } from "@/components/ui/input"
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
import { Link } from "react-router-dom"
import { Rayonlar } from "@/components/header/MockData/options"
import { katalogData } from "@/components/header/MockData/katalog"
import { Button } from "@/components/ui/button"
import { FaChevronLeft } from "react-icons/fa"
import KatalogSheet from "./components/katalog-sheet"
import { IoIosPricetag } from "react-icons/io"
import Cities from "./components/cityes"
import Connection from "./components/connection"

const NewAds = () => {
    return (
        <div className="">
            <div className=" container flex flex-col my-5 max-lg:hidden">
                <h1 className=" text-[26px] font-semibold mb-4">
                    Yeni elan
                </h1>
                <div className=" flex gap-[5%] bg-[#f3f3f3] py-5">
                    <div className="left w-[60%]">
                        <form className=" flex flex-col">
                            <div className=" flex flex-col gap-3  pl-5 mr-10" >
                                <div className="kate flex  justify-between items-start">
                                    <label htmlFor="kate"
                                        className=" text-[#333] font-bold text-base"
                                    >Kateqoriya <sup className=" text-[#fe6617] text-sm">*</sup></label>
                                    <Select>
                                        <SelectTrigger id="kate" className="basis-[60%] focus:outline-none focus:ring-0 focus:ring-offset-0">
                                            <SelectValue placeholder="Siyahıdan seçin" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup className=" h-[300px]">
                                                {
                                                    katalogData.map((item) => (
                                                        <div key={item.id}>
                                                            <SelectLabel className={' text-base pl-2'}>{item.name}</SelectLabel>
                                                            {
                                                                item.subCategories?.map((cate) => (
                                                                    <SelectItem key={cate.id} value={cate.name}>{cate.name}</SelectItem>
                                                                ))
                                                            }
                                                        </div>
                                                    ))
                                                }
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="city flex  justify-between items-start">
                                    <label htmlFor="city"
                                        className=" text-[#333] font-bold text-base"
                                    >Şəhər<sup className=" text-[#fe6617] text-sm">*</sup></label>
                                    <Select>
                                        <SelectTrigger id="city" className="basis-[60%] focus:outline-none focus:ring-0 focus:ring-offset-0">
                                            <SelectValue placeholder="Şəhər seçin" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup className=" h-[400px]">
                                                {
                                                    Rayonlar.map((item) => (
                                                        <SelectItem key={item.id} value={item.name}>{item.name}</SelectItem>
                                                    ))
                                                }
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="price flex  justify-between items-start">
                                    <label htmlFor="price"
                                        className=" text-[#333] font-bold text-base"
                                    >Qiymət, AZN <sup className=" text-[#fe6617] text-sm">*</sup></label>
                                    <Input type='number' id="price" className=" basis-[60%] " />
                                </div>
                                <div className="context flex  justify-between items-start">
                                    <label htmlFor="context"
                                        className=" text-[#333] font-bold text-base"
                                    >Məzmun <sup className=" text-[#fe6617] text-sm">*</sup></label>
                                    <Textarea id="context" className=" basis-[60%] focus:outline-none focus:ring-0 focus:ring-offset-0" />
                                </div>
                            </div>
                            <div className="w-full bg-[#fafafa] py-4 my-7 border-y border-y-[#d5d5d5]" >
                                <p className=" text-center my-2">Əlaqə məlumatları</p>
                                <div className=" flex flex-col gap-3  pl-5 mr-10">
                                    <div className="name flex  justify-between items-start">
                                        <label htmlFor="name"
                                            className=" text-[#333] font-bold text-base"
                                        >Adınız<sup className=" text-[#fe6617] text-sm">*</sup></label>
                                        <Input id="name" className=" basis-[60%] " />
                                    </div>
                                    <div className="mail flex  justify-between items-start">
                                        <label htmlFor="mail"
                                            className=" text-[#333] font-bold text-base"
                                        >E-mail<sup className=" text-[#fe6617] text-sm">*</sup></label>
                                        <Input id="mail" className=" basis-[60%] " />
                                    </div>
                                    <div className="city flex  justify-between items-start">
                                        <label htmlFor="city"
                                            className=" text-[#333] font-bold text-base"
                                        >Əlaqə vasitəsi<sup className=" text-[#fe6617] text-sm">*</sup></label>
                                        <Select>
                                            <SelectTrigger id="city" className="basis-[60%] focus:outline-none focus:ring-0 focus:ring-offset-0">
                                                <SelectValue placeholder="Vasitə seçin" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup className=" ">
                                                    <SelectItem value='Zənglər və mesajlar'>Zənglər və mesajlar</SelectItem>
                                                    <SelectItem value='Ancaq zənglər'>Ancaq zənglər</SelectItem>
                                                    <SelectItem value='Ancaq mesajlar'>Ancaq mesajlar</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="number flex  justify-between items-start">
                                        <label htmlFor="number"
                                            className=" text-[#333] font-bold text-base"
                                        >Mobil nömrə<sup className=" text-[#fe6617] text-sm">*</sup></label>
                                        <Input id="number" className=" basis-[60%] " />
                                    </div>
                                </div>
                            </div>
                            <p className=" text-[#6b6b6b] text-sm mb-5 text-center">Elan yerləşdirərək, siz Tap.az-ın <Link className="text-[#3496fc] underline">İstifadəçi razılaşması</Link>  ilə razı olduğunuzu təsdiq edirsiniz.</p>
                            <div className=" flex justify-center">
                                <Button className=' bg-[#ff6617] hover:bg-[#e34d00]'>Elanı əlavə et</Button>
                            </div>
                        </form>
                    </div>
                    <div className="right w-[30%] ml-6">
                        <div className=" lex flex-col">
                            <span className="text-[#ff6617] text-[18px] mb-5" >Tap.Az-ın sadə qaydaları</span>
                            <ul className=" my-3 list-disc list-outside">
                                <li className=" marker:text-[#ff6617]">Eyni elanı bir neçə dəfə təqdim etməyin.</li>
                                <li className=" marker:text-[#ff6617]">Təsvir və ya şəkillərdə telefon, email və ya sayt ünvanı göstərməyin.</li>
                                <li className=" marker:text-[#ff6617]">Ad yerində qiymət yazmayın - bunun üçün ayrıca yer var.</li>
                                <li className=" marker:text-[#ff6617]">Qadağan olunmuş məhsulları satmayın.</li>
                            </ul>
                            <Link className=" text-[#ff6617] underline hover:text-[#b03c00]"> Saytın tam qaydaları</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" max-lg:block hidden ">
                <div className="relative flex justify-center items-center p-4 border-b">
                    <Link to={(-1)} className=" absolute left-4 h-min ">
                        <FaChevronLeft className=" h-5 " />
                    </Link>
                    <h1 className=" self-center">Yeni elan</h1>
                </div>
                <div className="px-4 border-b h-[60px] ">
                    <KatalogSheet />
                </div>
                <div className="px-4 border-b py-5 flex items-center text-[#8d94ad] ">
                    <IoIosPricetag className=" text-2xl" />
                    <div className=" w-full relative ml-3 [&>label]:focus-within:-top-2">
                        <label htmlFor="price "
                            className=" absolute -top-2 left-0 z-10  text-sm"
                        >Qiymət, AZN <sup className=" text-[#fe6617] text-sm">*</sup></label>
                        <Input type='number' id="price" className="  w-full  border-none pl-0 text-[#000]" />
                    </div>
                </div>
                <div className="px-4 border-b h-[60px] ">
                    <Cities cities={Rayonlar} />
                </div>
                <div className="px-4  my-2 ">
                    <label htmlFor="content" className=" text-[#8d94ad]">
                        Məzmun
                    </label>
                    <Textarea id="content" className=" w-full h-28 mt-2 p-4 text-[#212c3a] border-[#f1f3f7] bg-[#f8f9fd] rounded-[7px]  focus:outline-none focus:ring-0 focus:ring-offset-0" />
                </div>
                <div className=" h-3 bg-[#f8f9fd] my-4">
                </div>
                <div className=" w-full text-[#8d94ad] relative ml-3 [&>label]:focus-within:-top-2">
                    <label htmlFor="name "
                        className=" absolute -top-2 left-0 z-10  text-sm "
                    >Adınız<sup className=" text-[#fe6617] text-sm">*</sup></label>
                    <Input  id="name" className="  w-full  border-none pl-0 text-[#000]" />
                </div>
                <div className=" w-full text-[#8d94ad] relative ml-3 [&>label]:focus-within:-top-2">
                    <label htmlFor="mail "
                        className=" absolute -top-2 left-0 z-10  text-sm "
                    >E-mail<sup className=" text-[#fe6617] text-sm">*</sup></label>
                    <Input  id="mail" className="  w-full  border-none pl-0 text-[#000]" />
                </div>
                <div className=" w-full text-[#8d94ad] relative ml-3 [&>label]:focus-within:-top-2">
                    <label htmlFor="mail "
                        className=" absolute -top-2 left-0 z-10  text-sm "
                    >Mobil nömrə<sup className=" text-[#fe6617] text-sm">*</sup></label>
                    <Input type='number' placeholder={`(000) 000-00-00`}  id="mail" className="  w-full  border-none pl-0 text-[#000]" />
                </div>
                <div className=" px-4">
                    <Connection/>
                </div>
            </div>
        </div>
    )
}


export default NewAds