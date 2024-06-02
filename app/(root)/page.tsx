import HeaderBox from "@/components/HeaderBox";
import TotalBalancedBox from "@/components/ui/TotalBalancedBox";
import RightSidebar from "@/components/ui/RightSidebar";


const loggedIn = {firstName:"User"}
export default function page(){
    return(
        <section className="home">
            <div className="home-content">
                <header className="home-header">
            <HeaderBox
                type="greeting"
                title="Welcome"
                subtext="Manage your accounts"
                user={loggedIn?.firstName || "Guest"}
            />
                <TotalBalancedBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.50}
                />
                </header>
                recent transaction
            </div>
            <RightSidebar
            user={loggedIn}
            transactions={[]}
            banks={[]}/>
        </section>
    )
}

