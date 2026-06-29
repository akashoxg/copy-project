/**
 * Format a number as Indian Rupee currency
 * @param {number} amount - The amount to format
 * @returns {string} Formatted string like ₹13,459
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Format a number in Indian notation (e.g., 5,00,000)
 * @param {number} num
 * @returns {string}
 */
export const formatNumber = (num) => {
  return new Intl.NumberFormat('en-IN').format(num);
};

/**
 * Format sum insured in lakhs/crore shorthand
 * @param {number} amount
 * @returns {string} e.g., "₹10L" or "₹1Cr"
 */
export const formatSumInsured = (amount) => {
  if (amount >= 10000000) {
    return `₹${amount / 10000000}Cr`;
  }
  if (amount >= 100000) {
    return `₹${amount / 100000}L`;
  }
  return formatCurrency(amount);
};
