export const selectIsLoading = state => state.global.isLoading;

export const selectError = state => state.finance.error;

export const selectTransactions = state => state.finance.transactions;

export const selectStatistics = state => state.finance.statistics;

export const selectUserCategories = state => state.finance.userCategories;

export const selectCategoryDetails = state => state.finance.categoryDetails;
