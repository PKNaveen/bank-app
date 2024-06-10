import HeaderBox from "@/components/HeaderBox";
import TotalBalancedBox from "@/components/ui/TotalBalancedBox";
import RightSidebar from "@/components/ui/RightSidebar";
import {getLoggedInUser} from "@/lib/actions/user.actions";



const Home = async () =>{
    const loggedIn = await getLoggedInUser()
    return(
        <section className="home">
            <div className="home-content">
                <header className="home-header">
            <HeaderBox
                type="greeting"
                title="Welcome"
                subtext="Manage your accounts"
                user={loggedIn?.name || "Guest"}
            />
                <TotalBalancedBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.50}
                />
                </header>
                recent transaction
            </div>
            {/*bank have active prop called bank which have currentBalance taken as prop from account  */}
            <RightSidebar
            user={loggedIn}
            transactions={[]}
            banks={[{currentBalance:123.50},{currentBalance:500.50}]}/>
        </section>
    )
}
export default Home

