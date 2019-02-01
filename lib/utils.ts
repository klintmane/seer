export const isArr = (x: any) => x && Array.isArray(x);
export const isFn = (x: any) => x && typeof x === "function";
export const isObj = (x: any) => x && x.constructor === Object;
export const randStr = () =>
  Math.random()
    .toString(36)
    .substr(2, 8);
