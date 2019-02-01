export const components: any = { current: null };

export const getCurrentComponent = () => components[components.current];
export const setCurrentComponent = (id: string) => (components.current = id);

export const setComponent = (id: string, val: HTMLElement) =>
  (components[id] = val);
export const delComponent = (id: string) => delete components[id];

export const setHook = (i: number, val: any) =>
  (getCurrentComponent().hooks[i] = val);
export const getHook = (i: number) => getCurrentComponent().hooks[i];

export const setHookPointer = (i: number) =>
  (getCurrentComponent().hooks.pointer = i);
export const getHookPointer = () => getCurrentComponent().hooks.pointer;

window.__seer_fns = {};

export const setFn = (id: string, fn: Function) => (window.__seer_fns[id] = fn);
export const getFn = (id: string) => window.__seer_fns[id];

// window.components = () =>
//   Object.entries(components).reduce(
//     (acc, [key, val]) => ({ ...acc, [key]: val.state }),
//     {}
//   );
