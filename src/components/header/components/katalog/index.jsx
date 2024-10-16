import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SiWindows } from "react-icons/si";
import { katalogData } from "@/components/header/MockData/katalog";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Katalog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleMenuToggle = () => {
        setIsOpen(prev => !prev);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                <Button
                    onClick={handleMenuToggle}
                    className="flex data-[state=open]:bg-[#eb4b20] [&>:nth-child(1)]:data-[state=open]:hidden [&>:nth-child(2)]:data-[state=open]:block items-center gap-1 bg-transparent border-none hover:border-none hover:bg-transparent focus-visible:outline-none ring-0 focus-visible:ring-offset-0 focus-visible:ring-0 focus:ring-0 focus:ring-offset-0"
                >
                    <SiWindows className="h-5 w-5" />
                    <IoMdClose className="h-5 w-5 hidden" />
                    Kataloq
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Kataloq</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {katalogData?.map((category) => (
                        <DropdownMenuSub key={category.id}>
                            <Link to={`/elanlar/${category.path}`}
                                onClick={() => {
                                    if (!category.subCategories) {
                                        handleLinkClick()
                                    }
                                }} >
                                <DropdownMenuSubTrigger className={!category.subCategories ? ` [&>svg]:hidden` : ""}>
                                    {category.name}
                                </DropdownMenuSubTrigger>
                            </Link>
                            {category?.subCategories ? (<DropdownMenuPortal>
                                <DropdownMenuSubContent>
                                    {category?.subCategories?.map((subCategory) => (
                                        <DropdownMenuSub key={subCategory.id}>
                                            <Link to={`/elanlar/${category.path}/${subCategory.path}`} >
                                                <DropdownMenuSubTrigger>
                                                    {subCategory.name}
                                                </DropdownMenuSubTrigger>
                                            </Link>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    {subCategory?.items?.map((item) => (
                                                        <DropdownMenuItem key={item.id}>
                                                            <Link className="w-full" to={`/elanlar/${category.path}/${subCategory.path}?name=${item.path}`} onClick={handleLinkClick}>
                                                                {item.itemName}
                                                            </Link>
                                                            <DropdownMenuSeparator />
                                                        </DropdownMenuItem>
                                                    ))}
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                    ))}
                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>) : (null)}
                        </DropdownMenuSub>
                    ))}
                    <DropdownMenuSub >
                        <Link to={`/elanlar/shop`}
                        >
                            <DropdownMenuSubTrigger className={` [&>svg]:hidden`}>
                                Mağazalar
                            </DropdownMenuSubTrigger>
                        </Link>
                    </DropdownMenuSub>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};


export default Katalog;
