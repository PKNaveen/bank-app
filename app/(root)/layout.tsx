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
            {/*since html is top down rendering I just moved movileNav component (hanburger menu) above the logo to make it render left */}
                <div className="root-layout">
                    <div className="flex flex-col">
                        <MobileNav user={loggedIn} className="self-end"/>
                    </div>
                    <Image src="/icons/logo.svg" alt="menu icon" width={30} height={30} className="self-end"/>

                </div>
                {children}
            </div>
        </main>
    );
}

