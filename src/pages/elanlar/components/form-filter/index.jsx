import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
import { IoChevronDownOutline } from "react-icons/io5";
import { FaMinus } from "react-icons/fa";
import { Link, useParams, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Ads } from "@/components/mockData"
import { calculateCategoryCounts } from "../funksiyalar"

const FormSchema = z.object({
    min: z.number()
    ,
    max: z.number()
})

const colors = [
    { id: 1, name: "red" },
    { id: 2, name: "blue" },
    { id: 3, name: "green" },
    { id: 4, name: "yellow" },
    { id: 5, name: "purple" },
    { id: 6, name: "orange" },
    { id: 7, name: "pink" },
    { id: 8, name: "brown" },
    { id: 9, name: "black" },
    { id: 10, name: "white" },
    { id: 11, name: "gray" },
    { id: 12, name: "cyan" },
    { id: 13, name: "magenta" }
];


const FormFilter = ({ data }) => {
    const [marka, setMarka] = useState({})
    const { cate, subcate, items, id } = useParams()
    const [searchParams, setSearchParams] = useSearchParams();
    const colorParam = searchParams.get('color');
    const modelParam = searchParams.get('model');
    
console.log('params',searchParams)
    const form = useForm({
        resolver: zodResolver(FormSchema),
    })

    const getPath = () => {
        if (cate && subcate) {
            return `/${cate}/${subcate}`;
        }
        if (cate) {
            return `/${cate}`;
        }
        return ``;
    };
    useEffect(() => {
        if (cate && subcate) {
            const value = calculateCategoryCounts(Ads[cate][subcate]);
            setMarka(value)
        }

    }, [cate, subcate])

    function onSubmit(data) {
        console.log(data)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" flex justify-between ">
                <div className="flex gap-2 ">
                    <div className="qiymet">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className={'text-[#939292] px-[10px] rounded hover:bg-white hover:text-[] [&>svg]:data-[state=open]:rotate-180 cursor-pointer  text-base border border-[#f1f3f7] focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0'} variant="outline">Qiymət, AZN
                                    <IoChevronDownOutline className=" ml-2 text-[24px] text-[#ff4f08] " />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                sideOffset={Number(1)}
                                align="start"
                                className="w-56">
                                <DropdownMenuGroup
                                    className=" flex items-center justify-between">
                                    <FormField
                                        control={form.control}
                                        name="min"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        type="number"
                                                        placeholder="min"
                                                        className="focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none h-10 w-[90px]  text-[#666] text-sm border border-[#e6e6e6]"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FaMinus className=" text-[#aeaeae] text-sm " />
                                    <FormField
                                        control={form.control}
                                        name="max"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        type="number"
                                                        placeholder="max"
                                                        className="focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none h-10 w-[90px]  text-[#666] text-sm border border-[#e6e6e6]"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </DropdownMenuGroup >
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="marka">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className={'text-[#939292] px-[10px] rounded hover:bg-white hover:text-[] [&>svg]:data-[state=open]:rotate-180 cursor-pointer  text-base border border-[#f1f3f7] focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0'} variant="outline"
                                >{items ? items : 'Marka'}
                                    <IoChevronDownOutline className=" ml-2 text-[24px] text-[#ff4f08] " />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                sideOffset={Number(1)}
                                align="start"
                                className="">
                                <DropdownMenuGroup
                                    className="PopoverContent flex items-center justify-between"
                                >
                                    <ul className=" flex flex-col flex-wrap max-h-96 gap-1 overflow-hidden">
                                        {subcate ?
                                            Object.entries(marka)?.map(([key, value]) => (
                                                <li className=" px-[10px]" key={key}>
                                                    <Link className="text-[#344049] text-base  mr-1" to={`/elanlar${getPath()}/${key}`}>{key}</Link>
                                                </li>
                                            )) : (null)
                                        }
                                    </ul>
                                </DropdownMenuGroup >
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    {
                        items ?
                            (<div className="model">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button className={'text-[#939292] px-[10px] rounded hover:bg-white hover:text-[] [&>svg]:data-[state=open]:rotate-180 cursor-pointer  text-base border border-[#f1f3f7] focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0'} variant="outline"
                                        >{modelParam ? modelParam : 'Model'}
                                            <IoChevronDownOutline className=" ml-2 text-[24px] text-[#ff4f08] " />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        sideOffset={Number(1)}
                                        align="start"
                                        className="">
                                        <DropdownMenuGroup
                                            className="PopoverContent flex items-center justify-between"
                                        >
                                            <div className=" flex flex-col flex-wrap max-h-96 gap-1 overflow-hidden">
                                                {items ?
                                                    Object.entries(data)?.map(([key, value]) => (
                                                        <div
                                                            data-value={key}
                                                            onClick={(e) => {
                                                                setSearchParams({ ...Object.fromEntries(searchParams.entries()), model: e.target.dataset.value });
                                                            }}
                                                            className=" px-[10px] text-[#344049] text-base  mr-1 block cursor-pointer" key={key}>
                                                            {key}
                                                        </div>
                                                    ))
                                                    : (null)
                                                }
                                            </div>
                                        </DropdownMenuGroup >
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>) : (null)
                    }

                    <div className="color">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className={'text-[#939292] px-[10px] rounded hover:bg-white hover:text-[] [&>svg]:data-[state=open]:rotate-180 cursor-pointer  text-base border border-[#f1f3f7] focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0'} variant="outline"
                                >{colorParam ? colorParam : 'Rəng'}
                                    <IoChevronDownOutline className=" ml-2 text-[24px] text-[#ff4f08] " />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                sideOffset={Number(1)}
                                align="start"
                                className="">
                                <DropdownMenuGroup
                                    className="PopoverContent flex items-center justify-between"
                                >
                                    <div className=" flex flex-col flex-wrap max-h-96 gap-1 overflow-hidden">
                                        {subcate ?
                                            colors.map((item) => (
                                                <div
                                                    data-value={item.name}
                                                    onClick={(e) => {
                                                        setSearchParams({...Object.fromEntries(searchParams.entries()), color: e.target.dataset.value });
                                                    }}
                                                    className=" px-[10px] text-[#344049] text-base  mr-1 block cursor-pointer" key={item.id}>
                                                    {item.name}
                                                </div>
                                            ))
                                            : (null)
                                        }
                                    </div>
                                </DropdownMenuGroup >
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <Button className={' w-[13%] bg-[#dae8ff] border-[#d3e4ff] text-[#4c88f9] hover:bg-[]'} type="submit">Tətbiq et</Button>
            </form>
        </Form>
    )
}

export default FormFilter