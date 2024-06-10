import React from 'react';
import {FormControl, FormField, FormLabel, FormMessage} from "@/components/ui/form";
import {z} from "zod";
import {authFormSchema} from "@/lib/utils";
import {Control, FieldPath} from "react-hook-form";

const formSchema = authFormSchema('sign-up')
declare interface CustomInputProps{
    control: Control <z.infer<typeof formSchema>>
    name: FieldPath<z.infer<typeof formSchema>>
    label:string
    placeholder:string
}
const CustomInput = ({control, name,label,placeholder}: CustomInputProps) => {
    return(
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className="form-item">
                    <FormLabel className="form-label">
                        {label}
                    </FormLabel>
                    <div className="flex flex-col w-full">
                        <FormControl>
                            <input placeholder={placeholder} className="input-class" type={name==="password" ? 'password' :'text'} {...field}/>
                        </FormControl>
                        <FormMessage className="form-message mt-2"/>
                    </div>
                </div>
            )}
        />
    )
}

export default CustomInput;