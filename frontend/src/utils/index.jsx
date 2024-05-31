import { format, getWeek } from "date-fns";
import { l } from "i18n-js";

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

  const lastYear = new Date(
    today.getFullYear() - 1,
    today.getMonth(),
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
      return {
        newStr: "year",
        value: lastYear,
      };
  }
};

export const formatReportData = (type, data) => {
  switch (type) {
    case "D":
      return data.map((item) => {
        return {
          value: item.amount / 1000,
          label: format(item.date, "dd-MM"),
        };
      });

    case "W":
      return data.map((item) => {
        return {
          value: item.amount / 1000,
          label: `${getWeek(item.startDate)}-${getWeek(item.endDate)}`,
        };
      });

    case "M":
      return data.map((item) => {
        return {
          value: item.amount / 1000,
          label: format(item.month, "MM"),
        };
      });

    default:
      break;
  }
};

export const balanceTwoArray = (arr1, arr2, amount) => {
  const diff = Math.abs(arr1.length - arr2.length);
  const longerArr = arr1.length > arr2.length ? arr1 : arr2;
  const shorterArr = arr1.length < arr2.length ? arr1 : arr2;

  for (let i = 0; i < diff; i++) {
    shorterArr.push({ ...longerArr[i], amount });
  }

  return {
    arr1,
    arr2,
  };
};

export const formatDataForCompare = (data) => {
  const formattedData = data.map((item) => {
    return {
      amount: item.amount / 1000,
      monthNumber: format(item.month, "M"),
      monthName: format(item.month, "LLL"),
    };
  });

  return formattedData;
};
export function getFirstDateOfMonth() {
  let date = new Date();
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}
export function getReceivableValue(receivables) {
  const latestItem = receivables.reduce((acc, ele) => {
    return acc.createAt > ele.createAt ? acc : ele;
  }, receivables[0]);
  //console.log(receivables);
  console.log("latest: ", latestItem);
  return {
    amount: latestItem?.amount,
    received: latestItem?.received,
  };
}
export function sortList(lst, compareFunction) {
  return lst.sort(compareFunction);
}

export function getTopOfListByName(lst, type) {
  let classify = {};
  console.log("type: ", type);
  console.log("lst", lst);
  lst.forEach((item) => {
    if (!classify[item.lenderName]) {
      classify[item.lenderName] = {
        finishing: type === "debts" ? item.paid : item.received,
        amount: item.amount,
        _id: item._id,
      };
    } else {
      classify[item.lenderName].finishing +=
        type === "debts" ? item.paid : item.received;
      classify[item.lenderName].amount += item.amount;
    }
  });
  let classifyArr = [];
  const keys = Object.keys(classify);
  keys.forEach((key) => {
    classifyArr.push({
      name: key,
      amount: classify[key].amount,
      finishing: classify[key].finishing,
      _id: classify[key]._id,
    });
  });
  classifyArr = sortList(classifyArr, (a, b) => b.amount - a.amount);
  //console.log("classifyArr", classifyArr);

  return classifyArr.slice(0, 11);
}
