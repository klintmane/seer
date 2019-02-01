import { randStr } from "./utils";
import {
  getCurrentComponent,
  getHookPointer,
  setHookPointer,
  getHook,
  setHook
} from "./globals";

// TODO: If css is applied after the state hook there are issues
export const css = (strings: TemplateStringsArray, ...args: any[]) => {
  let result = "";

  for (const chunk of strings) {
    result += chunk || "";
    const arg = args.shift();
    result += arg;
  }

  const comp = getCurrentComponent();
  if (result && result != comp.styleTag) {
    comp.setStyleTag(result);
  }
};

// TODO: Warn when hooks are conditionally rendered
export const state = (val: any) => {
  const comp = getCurrentComponent();

  // If no hook initialize hook
  if (!getHook(getHookPointer())) {
    const valId = randStr();
    comp.state[valId] = val;

    const setter = (v: any) => comp.setState(valId, v);
    setter.value = val;

    setHook(getHookPointer(), [setter, valId]);
  }

  // Otherwise, update the value of the state variable
  const hook = getHook(getHookPointer());
  const [setter, valId] = hook;
  setter.value = comp.state[valId];

  // Update hook pointer
  setHookPointer(getHookPointer() + 1);

  return setter;
};
