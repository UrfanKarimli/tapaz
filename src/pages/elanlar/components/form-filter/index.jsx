import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const FormSchema = z.object({
    email: z
        .string({
            required_error: "Please select.",
        })
    ,
})

const FormFilter = () => {
    const form = useForm({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data) {
        console.log(data)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" flex justify-between">
                <div className="flex ">
                    <div>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="m@example.com">test1</SelectItem>
                                            <SelectItem value="m@google.com">test2</SelectItem>
                                            <SelectItem value="m@support.com">test3</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <Button className={' w-[13%] bg-[#dae8ff] border-[#d3e4ff] text-[#4c88f9] hover:bg-[]'} type="submit">Tətbiq et</Button>
            </form>
        </Form>
    )
}

export default FormFilter