export const currentYearStr = new Date().getFullYear() + 543 + 1;
export const currentYear1 = currentYearStr - 1;
export const currentYear2 = currentYearStr - 2;
export const currentYear3 = currentYearStr - 3;
export const currentYear4 = currentYearStr - 4;
const getYear = currentYearStr.toString().substr(-2);
const getYear1 = currentYear1.toString().substr(-2);
const getYear2 = currentYear2.toString().substr(-2);
const getYear3 = currentYear3.toString().substr(-2);
const getYear4 = currentYear4.toString().substr(-2);

export { getYear, getYear1, getYear2, getYear3, getYear4 };

export const date = new Date();
export const dayTH = date.toLocaleDateString('th-TH', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
