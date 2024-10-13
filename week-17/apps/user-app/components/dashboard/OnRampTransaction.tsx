export const OnRampTransactions = ({
  transactions,
}: {
  transactions: {
    time: Date;
    amount: number;
    status: string;
    provider: string;
  }[];
}) => {
  return (
    <div className="w-full  mx-auto bg-white rounded-xl md:rounded-xl flex flex-col gap-3 p-4 md:p-5">
      <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800">
        Recent Transactions
      </h2>
      <div className="pt-2">
        {transactions.length === 0 ? (
          <h2 className="flex items-center gap-2 text-sm font-semibold text-gray-800">
            No recent transactions
          </h2>
        ) : (
          transactions.map((t, index) => (
            <div className="flex justify-between" key={index}>
              <div>
                <div className="text-sm">Received INR</div>
                <div className="text-slate-600 text-xs">
                  {t.time.toDateString()}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                + Rs {t.amount / 100}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
