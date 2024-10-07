"use client";
import AddMoneyCard from "@/components/AddMoneyCard";
import { BalanceCard } from "@/components/BalanceCard";
import { OnRampTransactions } from "@/components/OnRampTransaction";
import { SidebarItem } from "@/components/SidebarItem";
import { DashboardSidebar } from "@/lib/dashboardSidebar";
import { Appbar } from "@repo/ui/appbar";
const Dashboard = () => {
  return (
    <>
      <Appbar />
      <div className="flex bg-violet-100">
        <div className="border-r border-slate-300 min-h-screen  flex flex-col gap-2 p-5">
          {DashboardSidebar.map((item, index) => {
            return (
              <SidebarItem
                href={item.href}
                icon={item.icon}
                title={item.title}
                key={index}
              />
            );
          })}
        </div>
        <div className="w-screen p-1 md:p-6">
          <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
            Transfer
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 p-4">
            <AddMoneyCard />
            <div className="flex flex-col gap-5">
              <BalanceCard amount={0} locked={0} />
              <OnRampTransactions transactions={[]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
