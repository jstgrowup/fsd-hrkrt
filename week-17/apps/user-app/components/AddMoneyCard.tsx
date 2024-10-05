"use client";
import React from "react";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Select } from "@repo/ui/select";
import { TextInput } from "@repo/ui/textinput";
const AddMoneyCard = () => {
  return (
    <Card title="Add Money">
      <div className="w-full">
        <TextInput
          label={"Amount"}
          placeholder={"Amount"}
          onChange={() => {}}
        />
        <div className="py-4 text-left">Bank</div>
        <Select
          onSelect={(value) => {
            console.log("value", value);
          }}
          options={[
            { key: "Axis Bank", value: "axisbank" },
            { key: "ICICI", value: "icici" },
          ]}
        />
        <div className="flex justify-center pt-4">
          <Button
            onClick={() => {
              console.log("log here ");
            }}
          >
            Add Money
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AddMoneyCard;
