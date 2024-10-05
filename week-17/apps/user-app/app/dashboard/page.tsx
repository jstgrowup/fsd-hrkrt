"use client";

import AddMoneyCard from "@/components/AddMoneyCard";
import { BalanceCard } from "@/components/BalanceCard";
import { OnRampTransactions } from "@/components/OnRampTransaction";
import { SidebarItem } from "@/components/SidebarItem";
import { DashboardSidebar } from "@/lib/dashboardSidebar";
const Dashboard = () => {
  return (
    <div className="flex bg-violet-100">
      <div className="border-r border-slate-300 min-h-screen  flex flex-col gap-2 p-5">
        {DashboardSidebar.map((item) => {
          return (
            <SidebarItem href={item.href} icon={item.icon} title={item.title} />
          );
        })}
      </div>
      <div className="w-screen border border-black p-1 md:p-6">
        <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
          Transfer
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
          <div className="border border-black md:px-4 bg-white rouded-xl">
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
