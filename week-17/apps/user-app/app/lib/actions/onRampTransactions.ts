import db from "@repo/db/client";

export const CreateOnRampTransactions = () => {
  const existingUser = db.user.findFirst({
    where: {},
  });
};
