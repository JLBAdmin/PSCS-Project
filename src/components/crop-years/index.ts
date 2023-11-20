// let obj: any;

export const currentYearStr = new Date().getFullYear() + 543 + 1;
export const currentYear0 = currentYearStr + 1;
export const currentYear1 = currentYearStr - 1;
export const currentYear2 = currentYearStr - 2;
export const currentYear3 = currentYearStr - 3;
export const currentYear4 = currentYearStr - 4;

// const getYear0 = currentYear0.toString().substr(-2);
const getYear = currentYearStr.toString().substr(-2);
const getYear1 = currentYear1.toString().substr(-2);
const getYear2 = currentYear2.toString().substr(-2);
const getYear3 = currentYear3.toString().substr(-2);
const getYear4 = currentYear4.toString().substr(-2);

export const cropYear1 = `25${getYear4}/${getYear3}`;
export const cropYear2 = `25${getYear3}/${getYear2}`;
export const cropYear3 = `25${getYear2}/${getYear1}`;
export const cropYear4 = `25${getYear1}/${getYear}`;
// eslint-disable-next-line import/no-mutable-exports
export let cropYear5: any;

// async function load() {
//   const url = 'http://pscane.com:8080/api/crop/get';
//   obj = await (await fetch(url)).json();
//   // eslint-disable-next-line prefer-destructuring
//   cropYear5 = obj;
// }

// load();
