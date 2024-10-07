"use client";
import React, { useState } from "react";
import { Button } from "@repo/ui/button";
import { Select } from "@repo/ui/select";
import { TextInput } from "@repo/ui/textinput";
import { PlusCircle } from "lucide-react";
import { OnRampInterface } from "@repo/utils/types";
import { useTransferStore } from "@/store/transfer";
const AddMoneyCard = () => {
  const createTransactionAction = useTransferStore(
    (store) => store.createTransactionStoreAction
  );
  const [moneyInputs, setmoneyInput] = useState<OnRampInterface>({
    amount: "",
    bank: "",
  });
  const handleSubmit = () => {
    createTransactionAction(moneyInputs.amount, moneyInputs.bank);
  };

  return (
    <div className="w-full  mx-auto bg-white rounded-xl md:rounded-xl ">
      <div className="p-6 border-b border-gray-200">
        <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800">
          <PlusCircle className="w-5 h-5" />
          Add Money
        </h2>
      </div>

      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <TextInput
            label="Amount"
            placeholder="Enter amount"
            onChange={(e) =>
              setmoneyInput({ ...moneyInputs, amount: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Bank
          </label>
          <Select
            onSelect={(value) => setmoneyInput({ ...moneyInputs, bank: value })}
            options={[
              { key: "Axis Bank", value: "axisbank" },
              { key: "ICICI", value: "icici" },
            ]}
          />
        </div>
      </div>

      <div className="px-6 pb-6">
        <Button onClick={handleSubmit}>Add Money</Button>
      </div>
    </div>
  );
};

export default AddMoneyCard;
