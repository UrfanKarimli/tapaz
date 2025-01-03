import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FaUserCircle } from 'react-icons/fa'
import Login from './signin'
import Register from "./signup";
import { useState } from "react";





const Auth = () => {
    const [open, setOpen] = useState(false);
    const [login , setLogin]= useState(true)

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger className='text-[#8d94ad] leading-7 hover:text-[#ff4f08] flex max-lg:flex-col  items-center justify-center gap-1'>
                    <FaUserCircle className=" max-lg:w-5 max-lg:h-5" /> 
                    <span className="max-lg:text-[8px] max-lg:font-normal max-lg:leading-3">Giriş</span>
                    </DialogTrigger>
                <DialogContent className=' w-min gap-1'>
                    <DialogHeader>
                        <DialogTitle></DialogTitle>
                        <DialogDescription>
                        </DialogDescription>
                    </DialogHeader>
                    {
                        login ? <Login setLogin={setLogin} setOpen={setOpen} /> : <Register setLogin={setLogin} setOpen={setOpen}/>
                    }
                    
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Auth