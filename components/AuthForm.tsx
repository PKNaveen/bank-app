'use client'

import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
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
import { Input } from "@/components/ui/input"
import CustomInput from "@/components/ui/CustomInput";
import {authFormSchema} from "@/lib/utils";


const AuthForm = ({type} :{type : string}) => {
    const [user,setUser]= useState(null)
    // 1. Define your form.
    const form = useForm<z.infer<typeof authFormSchema>>({
        resolver: zodResolver(authFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <section className="auth-form">
            <header className="flex flex-col md:gap-1">
                <Link href="/" className="mb-12 cursor-pointer items-center gap-2 flex">
                    <Image src="/icons/logo.svg" alt="logo" width={34} height={34} />
                    <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Bank APP</h1>
                </Link>
                <div className="flex flex-col \md:gap-3">
                    <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
                        {user ? 'Link Account' : type === 'sign-in' ? 'Sign in' : 'Sign up'}
                    </h1>
                    <p className="text-16 font-normal text-gray-600">
                        {
                            user ? 'Link you account to get started' : 'Please enter your details'
                        }
                    </p>
                </div>
            </header>
            {
                user ? (
                    <div className="flex flex-col gap-4">
                    {/*bank auth link here */}
                    </div>
                ):(
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <CustomInput control={form.control} name={"email"} label={"Email"} placeholder="Enter your Email"/>

                            <CustomInput control={form.control} name={"password"} label={"Password"} placeholder="Enter your password"/>
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                )
            }
        </section>
    );
};

export default AuthForm;
