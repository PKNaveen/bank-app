'use client'
import {usePathname} from "next/navigation";
import {
    Sheet, SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";
import Link from "next/link";
import {sidebarLinks} from "@/constants";
import {cn} from "@/lib/utils";
import React from "react";


const MobileNav = ({user}: MobileNavProps) =>{
    const pathName = usePathname()
    return(
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger>
                    <Image src="/icons/hamburger.svg" alt="hamburger menu" width={30} height={30}/>
                </SheetTrigger>
                <SheetContent className="border-none bg-white" side={"left"}>
                    <Link href="/" className="mb-12 cursor-pointer items-center gap-2 flex">
                            <Image src="/icons/logo.svg" alt="logo" width={34} height={34} />
                        <h1 className="text-26 font-ibm-plex-serif text-black-1">Bank APP</h1>
                    </Link>
                    <div>
                        {/*The usually the sheetClose when click somewhere in the ui the hamburger should close, when we use asChild property we are making the sheetClose
                        to act on the nav tag*/}
                        <SheetClose asChild>
                            <nav className="flex flex-col h-full gap-6 pt-16 text-white">
                                {/*getting the labels and routes for the nav bar from variable in another ts file ~ using props thus not rewriting the code again*/}
                                {sidebarLinks.map((item)=>{
                                    const isActive= pathName ===item.route || pathName.startsWith(`${item.route}/`)

                                    return (
                                        // aschild is again used here make work like the Link tag from react  so whenever a link is clicked in the mobilenav
                                        // the sheetcloses each time it is clicked
                                        <SheetClose asChild key={item.route}>
                                            {/* // the cn function is to merge react and tailwind classes and display based on condition, in this case below ~ if the current page is active
                                            // it shows as active, other tabs in nav bar are not highlighted until we go into that tab, the same is applied in the inverting the color in
                                            // selected tab
                                            // reuse below code for other projects which contain next or react, as it fully utilizes the selecting tab in the above*/}
                                            <Link href={item.route} key={item.label} className={cn('mobilenav-sheet_close w-full', {'bg-bank-gradient': isActive})}>
                                                <div className="relative size-6">
                                                    <Image src={item.imgURL} alt={item.label} fill  className={cn({'brightness-[3] invert-0': isActive})}/>
                                                </div>
                                                <p className={cn("mobilenav",{'!text-white':isActive})}>
                                                    {item.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    )}
                                )}
                                USER
                            </nav>
                        </SheetClose>
                        FOOTER
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )

}

export default MobileNav