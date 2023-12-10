export const selectIsLoading = state => state.global.isLoading;

export const selectError = state => state.finance.error;

export const selectTransactions = state => state.finance.transactions;

export const selectStatistics = state => state.finance.statistics;

export const selectUserCategories = state => state.finance.userCategories;

export const selectCategoryDetails = state => state.finance.categoryDetails;

// statistics
export const selectMonth = state => state.finance.month;

export const selectYear = state => state.finance.year;

export const selectType = state => state.finance.type;

export const selectExpenseStats = state => state.finance.expenseStats;

export const selectIncomeStats = state => state.finance.incomeStats;

export const selectExpenses = state => state.finance.expenses;

export const selectIncome = state => state.finance.income;

export const selectEachMonthStats = state => state.finance.eachMonthStats;
