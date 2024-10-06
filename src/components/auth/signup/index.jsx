import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { supabase } from "../../../client";

const SignInSchema = z.object({
    first_name: z.string(),
    email: z.string(),
    password: z.string(),
});

const Register = ({ setLogin , setOpen}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState('')

    const form = useForm({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            first_name: "",
            email: "",
            password: "",
        },
    });
    const passwordVisibility = () => {
        setShowPassword(!showPassword);
    };
    async function onSubmit(values) {

        const { data, error } = await supabase.auth.signUp({
            email: values.email,
            password: values.password,
            options: {
                data: {
                    first_name: values.first_name,
                }
            }
        })
        if (error) {
            setErrors(error.mesage)
            console.error(error)
        } else {
            alert('Keçid linki üçün e-mailinizi yoxlayın')
            setOpen(false)
        }


    }
    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 ">
                    <div className="name group flex flex-col gap-[10px]">
                        <label className="text-[#676767] text-base font-noto font-medium h-[22px]" htmlFor="name">
                            Ad
                        </label>
                        <FormField
                            control={form.control}
                            name="first_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder="Ad"
                                            id="name"
                                            type="text"
                                            className="bg-[#F5F5F5] border border-[#C8CBD0] w-[378px] h-[50px] rounded focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="Login group flex flex-col gap-[10px]">
                        <label className="text-[#676767] text-base font-noto font-medium h-[22px]" htmlFor="login">
                            E-mail
                        </label>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder="E-mail"
                                            id="login"
                                            type="text"
                                            className="bg-[#F5F5F5] border border-[#C8CBD0] w-[378px] h-[50px] rounded focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="password group flex flex-col gap-[10px]">
                        <label className="text-[#676767] text-base font-noto font-medium h-[22px]" htmlFor="password">
                            Şifrə
                        </label>
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder="Şifrə"
                                            icon={
                                                <i onClick={passwordVisibility} className=" absolute right-5 cursor-pointer ">
                                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                </i>
                                            }
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            className="bg-[#F5F5F5] border border-[#C8CBD0] w-[378px] h-[50px] rounded focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="button">
                        <Button
                            type="submit"
                            className="bg-[#27519C] hover:bg-[#1C3C6B] w-[378px] h-[50px] rounded text-[#fff] text-base font-noto font-medium">
                            Qeydiyyatdan keç
                        </Button>
                    </div>
                </form>
            </Form>
            <div className=" h-2 flex justify-center items-center text-red-600"><p >{errors}</p></div>

            <div className=' flex justify-end items-center'>
                <span>Hesabınız var ?</span>
                <Button
                    className='text-[#ff6617] hover:text-[#b03c00] text-base'
                    onClick={() => {
                        setLogin(true)
                    }}
                    variant="link"
                > Daxil olun</Button>
            </div>

        </>
    )
}

export default Register