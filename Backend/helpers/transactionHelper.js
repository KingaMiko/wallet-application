import User from "#models/user.js";
import transaction from "#models/transaction.js";
export const updateUser = (id, fields) => {
  return User.findByIdAndUpdate({ _id: id }, { $set: fields });
};

export const updateTransactionById = (id, fields) => {
  return transaction.findByIdAndUpdate(
    { _id: id },
    { $set: fields },
    { new: true }
  );
};

export const findTransactions = (ownerId, year, month, type) => {
  return transaction.aggregate([
    {
      $match: {
        owner: ownerId,
        $expr: {
          $cond: {
            if: month,
            then: {
              $and: [
                { $eq: [{ $month: "$date" }, month] },
                { $eq: [{ $year: "$date" }, year] },
              ],
            },
            else: { $and: [{ $eq: [{ $year: "$date" }, year] }] },
          },
        },
      },
    },
    {
      $lookup: {
        from: "categories", // Upewnij się, że nazwa kolekcji kategorii jest poprawna
        localField: "category",
        foreignField: "_id",
        as: "categoryData",
      },
    },
    {
      $unwind: {
        path: "$categoryData",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $project: {
        type: 1,
        category: "$categoryData.name", // Zamienia 'category' na 'name' z 'categoryData'
        sum: 1,
        comment: 1,
        date: 1,
        owner: 1,
      },
    },
    { $sort: { date: -1 } },
  ]);
};

export const getIncome = (ownerId, month, year) => {
  return transaction.aggregate([
    {
      $match: {
        owner: ownerId,
        type: "Income",
        $expr: {
          $cond: {
            if: month,
            then: {
              $and: [
                { $eq: [{ $month: "$date" }, month] },
                { $eq: [{ $year: "$date" }, year] },
              ],
            },
            else: { $and: [{ $eq: [{ $year: "$date" }, year] }] },
          },
        },
      },
    },
    {
      $lookup: {
        from: "categories", // Upewnij się, że nazwa kolekcji kategorii jest poprawna
        localField: "category",
        foreignField: "_id",
        as: "categoryData",
      },
    },
    {
      $unwind: {
        path: "$categoryData",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $project: {
        type: 1,
        category: "$categoryData.name", // Zamienia 'category' na 'name' z 'categoryData'
        sum: 1,
        comment: 1,
        date: 1,
        owner: 1,
      },
    },
    { $sort: { date: -1 } },
  ]);
};
export const getExpense = (ownerId, month, year) => {
  return transaction.aggregate([
    {
      $match: {
        owner: ownerId,
        type: "Expense",
        $expr: {
          $cond: {
            if: month,
            then: {
              $and: [
                { $eq: [{ $month: "$date" }, month] },
                { $eq: [{ $year: "$date" }, year] },
              ],
            },
            else: { $and: [{ $eq: [{ $year: "$date" }, year] }] },
          },
        },
      },
    },
    {
      $lookup: {
        from: "categories", // Upewnij się, że nazwa kolekcji kategorii jest poprawna
        localField: "category",
        foreignField: "_id",
        as: "categoryData",
      },
    },
    {
      $unwind: {
        path: "$categoryData",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $project: {
        type: 1,
        category: "$categoryData.name", // Zamienia 'category' na 'name' z 'categoryData'
        sum: 1,
        comment: 1,
        date: 1,
        owner: 1,
      },
    },
    { $sort: { date: -1 } },
  ]);
};

export const calculateStats = (categories, transaction, type) => {
  return categories
    .filter((el) => el.type === type)
    .map((category) => ({
      category: category.name,
      total: transaction
        .filter((el) => el.category === category.name)
        .reduce((previouseValue, element) => {
          return (previouseValue += element.sum);
        }, 0),
    }));
};

export const eachMonthTransactions = (ourTransactions) => {
  const monthly = {
    Income: {},
    Expense: {},
  };
  Object.keys(monthly).forEach((transaction_type) => {
    return ourTransactions
      .filter((transaction) => transaction.type === transaction_type)
      .forEach((raw_transaction) => {
        const month = raw_transaction.date.getMonth() + 1;
        const amountToAdd = raw_transaction.sum;
        const currentAmount = monthly[transaction_type][month] || 0;
        monthly[transaction_type][month] = currentAmount + amountToAdd;
      });
  });
  return monthly;
};
