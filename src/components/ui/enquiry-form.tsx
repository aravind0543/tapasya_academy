"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters."),
    phone: z.string().min(10, "Valid phone number required."),
    email: z.string().email("Invalid email address.").optional().or(z.literal("")),
    class: z.string().min(1, "Please select a class."),
    program: z.string().min(1, "Please select a program."),
    message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function EnquiryForm() {
    const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        alert("Thank you for your enquiry. We will contact you soon.");
        reset();
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-md mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-accent" />
            <h3 className="text-2xl font-bold mb-6 font-heading text-primary">Book a Counselling Session</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name*</Label>
                    <Input id="fullName" placeholder="John Doe" {...register("fullName")} />
                    {errors.fullName && <p className="text-sm text-destructive">{errors.fullName.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number*</Label>
                    <Input id="phone" type="tel" placeholder="+91 00000 00000" {...register("phone")} />
                    {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label>Class*</Label>
                        <Select onValueChange={(val: string | null) => { if (val) setValue("class", val); }}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="6-8">Classes 6-8</SelectItem>
                                <SelectItem value="9-10">Classes 9-10</SelectItem>
                                <SelectItem value="11">Class 11</SelectItem>
                                <SelectItem value="12">Class 12</SelectItem>
                                <SelectItem value="repeater">Repeater</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.class && <p className="text-sm text-destructive">{errors.class.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label>Program*</Label>
                        <Select onValueChange={(val: string | null) => { if (val) setValue("program", val); }}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="regular">Boards / Regular</SelectItem>
                                <SelectItem value="jee">JEE Main/Adv</SelectItem>
                                <SelectItem value="neet">NEET UG</SelectItem>
                                <SelectItem value="foundation">Foundation</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.program && <p className="text-sm text-destructive">{errors.program.message}</p>}
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea id="message" placeholder="Any specific requirements?" className="resize-none" {...register("message")} />
                </div>

                <Button type="submit" className="w-full bg-accent hover:bg-accent-dark text-foreground font-bold rounded-full h-12 mt-2">
                    Submit Enquiry
                </Button>
            </form>
        </div>
    );
}
