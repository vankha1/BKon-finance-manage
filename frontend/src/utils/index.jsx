export const categories = [
  "Electronics",
  "Groceries",
  "Education",
  "Health",
  "Entertainment",
  "Others",
];

export const getType = (name) => {
  if (name === "Debt") return "debts";
  if (name === "Receivable") return "receivables";
  if (name === "Income") return "Income";
  return "Expense";
};

export const convertString = (str) => {
  const today = new Date();
  const lastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7
  );
  const lastMonth = new Date(
    today.getFullYear(),
    today.getMonth() - 1,
    today.getDate()
  );
  switch (str) {
    case "D":
      return {
        newStr: "day",
        value: today,
      };

    case "W":
      return {
        newStr: "week",
        value: lastWeek,
      };

    case "M":
      return {
        newStr: "month",
        value: lastMonth,
      };

    default:
      break;
  }
};
