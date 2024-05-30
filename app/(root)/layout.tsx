import Sidebar from "@/components/ui/Sidebar";
import Image from "next/image";
import MobileNav from "@/components/ui/MobileNav";

const loggedIn = {firstName: "Naveen", lastName: "PK"};
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex h-screen w-full font-inter">
            <Sidebar user={loggedIn}/>
            <div className="flex size-full flex-col ">
            {/*Below changed div from just root-layout, I wanted the hamburger menu on the left instead of right, if ti doesnt work remove
            flex flex-col and the classname from image tag*/}
            <div className="root-layout  flex flex-col">
            <Image src="/icons/logo.svg" alt="menu icon" width={30} height={30} className="self-end"/>
                <div>
                <MobileNav user={loggedIn}/>
                </div>
            </div>
                {children}
            </div>
        </main>
    );
}

