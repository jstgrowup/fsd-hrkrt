export const BalanceCard = ({
  amount,
  locked,
}: {
  amount: number;
  locked: number;
}) => {
  return (
    <div className="w-full  mx-auto bg-white rounded-xl md:rounded-xl flex flex-col gap-3 p-4 md:p-5">
      <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800">
        Balance
      </h2>
      <div className="flex justify-between border-b border-slate-300 pb-2">
        <div>Unlocked balance</div>
        <div>{amount / 100} INR</div>
      </div>
      <div className="flex justify-between border-b border-slate-300 py-2">
        <div>Total Locked Balance</div>
        <div>{locked / 100} INR</div>
      </div>
      <div className="flex justify-between border-b border-slate-300 py-2">
        <div>Total Balance</div>
        <div>{(locked + amount) / 100} INR</div>
      </div>
    </div>
  );
};
