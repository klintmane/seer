import { isObj, isArr, isFn } from "./utils";
import { getCurrentComponent, setFn } from "./globals";

// TODO: Add proper system for adding, removing methods
export const html = (strings: TemplateStringsArray, ...args: any[]) => {
  let result = "";

  for (const chunk of strings) {
    result += chunk || "";

    const arg = args.shift();

    if (isFn(arg)) {
      setFn(getCurrentComponent().seerId, arg);
    }

    result += arg
      ? isObj(arg)
        ? JSON.stringify(arg)
        : isArr(arg)
        ? arg.join("")
        : isFn(arg)
        ? `window.__seer_fns['${getCurrentComponent().seerId}'](event)`
        : arg.toString()
      : "";
  }
  return result;
};
