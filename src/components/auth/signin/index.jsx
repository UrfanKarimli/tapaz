import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { supabase } from "../../../client";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@/services/stores/useAuthStore";

const SignInSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

const Login = ({ setLogin, setOpen }) => {
    const { setUser } = useAuthStore()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState(false)
    const form = useForm({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const passwordVisibility = () => {
        setShowPassword(!showPassword);
    };
    async function onSubmit(values) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: values.email,
            password: values.password,
        });
        if (error) {
            setErrors(true)
            console.error('login error', error.message);
        } else {
            setErrors(false)
            localStorage.setItem('user', JSON.stringify(data.user.user_metadata.first_name))
            setUser(JSON.stringify(data.user.user_metadata.first_name))
            window.dispatchEvent(new Event('userChange'))
            setOpen(false)
            navigate('/')
        }

    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 ">
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
                            Daxil ol
                        </Button>
                    </div>
                </form>
            </Form>
            <div className=" h-2 flex justify-center items-center text-red-600"><p className={errors ? 'block' : 'hidden'}> mail və ya şifrə səhvdir</p></div>
            <div className=' flex justify-end items-center'>
                <span>Hesabınız yoxdur ?</span>
                <Button
                    className='text-[#ff6617] hover:text-[#b03c00] text-base'
                    onClick={() => {
                        setLogin(false)
                    }}
                    variant="link"
                > Qeydiyyatdan keçin</Button>
            </div>
        </>
    )
}

export default Login