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
import { Katalog as katalogData } from "../../MockData/katalog";
import { IoMdClose } from "react-icons/io";

const Katalog = () => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="flex data-[state=open]:bg-[#eb4b20] [&>:nth-child(1)]:data-[state=open]:hidden [&>:nth-child(2)]:data-[state=open]:block  items-center gap-1 bg-transparent border-none hover:border-none hover:bg-transparent focus-visible:outline-none ring-0 focus-visible:ring-offset-0 focus-visible:ring-0 focus:ring-0 focus:ring-offset-0">
                        <SiWindows className="h-5 w-5" />
                        <IoMdClose className="h-5 w-5 hidden"/>
                        Kataloq
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Kataloq</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        {katalogData.map((category) => (
                            <DropdownMenuSub key={category.id}>
                                <DropdownMenuSubTrigger>
                                    <span>{category.name}</span>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        {category.subCategories.map((subCategory) => (
                                            <DropdownMenuSub key={subCategory.id}>
                                                <DropdownMenuSubTrigger>
                                                    <span>{subCategory.name}</span>
                                                </DropdownMenuSubTrigger>
                                                <DropdownMenuPortal>
                                                    <DropdownMenuSubContent>
                                                        {subCategory.items.map((item) => (
                                                            <DropdownMenuItem key={item.id}>
                                                                <span>{item.itemName}</span>
                                                        <DropdownMenuSeparator />
                                                            </DropdownMenuItem>
                                                        ))}
                                                    </DropdownMenuSubContent>
                                                </DropdownMenuPortal>
                                            </DropdownMenuSub>
                                        ))}
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                        ))}
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};

export default Katalog;
