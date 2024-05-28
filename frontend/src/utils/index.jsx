import { format, getWeek } from "date-fns";

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
  const yesterday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 1
  );
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
        value: yesterday,
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

export const formatReportData = (type, data) => {
  switch (type) {
    case 'D':
      return data.map(item => {
        return {
          value: item.amount / 1000,
          label: format(item.date, "dd-MM"),
        };
      })
    
    case 'W':
      return data.map(item => {
        return {
          value: item.amount / 1000,
          label: `${getWeek(item.startDate)}-${getWeek(item.endDate)}`,
        };
      })
    
    case 'M':
      return data.map(item => {
        return {
          value: item.amount / 1000,
          label: format(item.month, "MM"),
        }
      })

    default:
      break;
  }
}