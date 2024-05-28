import HeaderBox from "@/components/HeaderBox";
import TotalBalancedBox from "@/components/ui/TotalBalancedBox";

const loggedIn = {firstName:"User"}
export default function page(){
    return(
        <section>
            <div className="home-content">
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
            </div>
        </section>
    )
}