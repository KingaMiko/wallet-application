import User from "#models/user.js";
import Transaction from "#models/transaction.js";

export const updateUser = (id, fields) => {
  return User.findByIdAndUpdate({ _id: id }, { $set: fields });
};

export const updateTransactionById = (id, fields) => {
  return Transaction.findByIdAndUpdate(
    { _id: id },
    { $set: fields },
    { new: true }
  );
};

export const findTransactions = (ownerId, year, month, limit, skip) => {
  const gottenYear = Number(year);
  const gottenMonth = month ? Number(month) - 1 : null;

  const gottenLimit = limit ? parseInt(limit, 10) : 10;
  const gottenSkip = skip ? parseInt(skip, 10) : 0;

  let aggregationPipeline = [
    {
      $match: {
        owner: ownerId,
        $expr: {
          $and: [
            { $eq: [{ $year: "$date" }, gottenYear] },
            gottenMonth !== null
              ? { $eq: [{ $month: "$date" }, gottenMonth] }
              : {},
          ],
        },
      },
    },
    {
      $lookup: {
        from: "categories",
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
        category: "$categoryData.name",
        categoryId: "$categoryData._id",
        sum: 1,
        comment: 1,
        date: 1,
        owner: 1,
      },
    },
    { $sort: { date: -1 } },
  ];

  if (gottenLimit !== null && !isNaN(gottenLimit)) {
    aggregationPipeline.push({ $skip: gottenSkip }, { $limit: gottenLimit });
  }

  return Transaction.aggregate(aggregationPipeline);
};

export const getTransactionByType = (ownerId, type, year, month) => {
  const gottenYear = Number(year);
  const gottenMonth = month ? Number(month) : month;

  return Transaction.aggregate([
    {
      $match: {
        owner: ownerId,
        type: type,
        $expr: {
          $cond: {
            if: gottenMonth,
            then: {
              $and: [
                { $eq: [{ $month: "$date" }, gottenMonth] },
                { $eq: [{ $year: "$date" }, gottenYear] },
              ],
            },
            else: { $and: [{ $eq: [{ $year: "$date" }, gottenYear] }] },
          },
        },
      },
    },
    {
      $lookup: {
        from: "categories",
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
        category: "$categoryData.name",
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
