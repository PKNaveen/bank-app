'use client'
import {usePathname} from "next/navigation";
import Image from 'next/image'
import {sidebarLinks} from "@/constants";
import React from "react";
import Link from "next/link";
import {cn} from "@/lib/utils";
const Sidebar =({user}: SiderbarProps) =>{
    const pathName =usePathname()
    return(
        <section className="sidebar">
            <nav className="flex flex-col gap-4">
                <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
                <Image src="/icons/logo.svg" alt="logo" width={34} height={34} className="size-[24px] max-xl:size-14"/>
                <h1 className="sidebar-logo">Bank APP</h1>
                </Link>
            </nav>
            {sidebarLinks.map((item)=>{
                const isActive= pathName ===item.route || pathName.startsWith(`${item.route}/`)
                return(
                    <Link href={item.route} key={item.label} className={cn('sidebar-link', {'bg-bank-gradient': isActive})}>
                        {item.label}
                    </Link>
                )
                }
            )}
        </section>
    )
}
export default Sidebar