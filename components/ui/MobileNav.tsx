'use client'
import {usePathname} from "next/navigation";


const MobileNav = ({user}: MobileNavProps) =>{
    const pathName = usePathname()
    return(
        <div>
            mobile nav
        </div>
    )

}

export default MobileNav