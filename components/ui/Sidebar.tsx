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
                <Link href="/" className="mb-12 cursor-pointer items-center gap-2 flex">
                <Image src="/icons/logo.svg" alt="logo" width={34} height={34} className="size-[24px] max-xl:size-14"/>
                <h1 className="sidebar-logo">Bank APP</h1>
                </Link>
            {/*getting the labels and routes for the nav bar from variable in another ts file ~ using props thus not rewriting the code again*/}
            {sidebarLinks.map((item)=>{
                const isActive= pathName ===item.route || pathName.startsWith(`${item.route}/`)
                return(
                    // the cn function is to merge react and tailwind classes and display based on condition, in this case below ~ if the current page is active
                    // it shows as active, other tabs in nav bar are not highlighted until we go into that tab, the same is applied in the inverting the color in
                    // selected tab
                    // reuse below code for other projects which contain next or react, as it fully utilizes the selecting tab in the above
                    <Link href={item.route} key={item.label} className={cn('sidebar-link', {'bg-bank-gradient': isActive})}>
                        <div className="relative size-6">
                            <Image src={item.imgURL} alt={item.label} fill  className={cn({'brightness-[3] invert-0': isActive})}/>
                        </div>
                        <p className={cn('sidebar-label',{'!text-white':isActive})}>
                            {item.label}
                        </p>
                    </Link>
                )}
            )}
            </nav>
        </section>
    )
}
export default Sidebar