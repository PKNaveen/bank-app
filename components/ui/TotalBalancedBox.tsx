import {formatAmount} from "@/lib/utils";
import CountUp from "react-countup";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import {Doughnut} from "react-chartjs-2";
import DoughnutChart from "@/components/ui/DoughnutChart";

export default function TotalBalancedBox({accounts=[], totalBanks, totalCurrentBalance}: TotlaBalanceBoxProps){
    return(
       <section className="total-balance">
           <div className="total-balance-chart">
           {/*    chart here*/}
               <DoughnutChart accounts={accounts}/>

           </div>
           <div className= "flex flex-col gap-6">
               <h2 className="header-2">
                   {totalBanks} Bank Accounts
               </h2>
           </div>

           <div className="flex flex-col gap-2">
               <p className="total-balance-label">
                    Total Current Balance
               </p>
               <div className="total-balance-amount flex-center">
                   <AnimatedCounter amount={totalCurrentBalance}/>
               </div>
           </div>
       </section>
    )
}