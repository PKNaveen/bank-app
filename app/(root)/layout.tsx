import Sidebar from "@/components/ui/Sidebar";

const loggedIn = {firstName: "Naveen", lastName: "PK"};
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex h-screen w-full font-inter">
            <Sidebar user={loggedIn}/>
            {children}
        </main>
    );
}

