import { signIn, signOut, useSession } from "next-auth/react";
import { Appbar } from "@repo/ui/appbar";
import AddMoneyCard from "@/components/AddMoneyCard";
import { BalanceCard } from "@/components/BalanceCard";
import { OnRampTransactions } from "@/components/OnRampTransaction";
import { SidebarItem } from "@/components/SidebarItem";
const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-72 border-r border-slate-300 min-h-screen mr-4 pt-28">
        <div>
          <SidebarItem
            href={"/dashboard"}
            icon={"/homeicon.svg"}
            title="Home"
          />
          <SidebarItem
            href={"/transfer"}
            icon={"/transfericon.svg"}
            title="Transfer"
          />
          <SidebarItem
            href={"/transactions"}
            icon={"/transactionicon.svg"}
            title="Transactions"
          />
        </div>
      </div>

      <div className="w-screen">
        <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
          Transfer
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
          <div>
            <AddMoneyCard />
          </div>
          <div>
            <BalanceCard amount={0} locked={0} />
            <div className="pt-4">
              <OnRampTransactions transactions={[]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
