import { randStr } from "./utils";
import {
  setComponent,
  delComponent,
  setCurrentComponent,
  setHookPointer
} from "./globals";

export const component = (name: string, view: Function) => {
  const compName = `s-${name}`;

  if (!customElements.get(compName)) {
    class Component extends HTMLElement {
      seerId: string;
      props: any = {}; // will hold the props of the component
      state: any = {}; // will hold the state of the component
      hooks: any = { pointer: 0 }; // will hold the hooks of the component
      styleTag: string;

      setState = (key: string, val: any) => {
        this.state[key] = val;
        this.render();
      };

      setStyleTag = (s: string) => {
        //console.log(this.styleTag, s);
        this.styleTag = s;
        this.render();
      };

      constructor() {
        super();

        // Convert innerHTML to children and empty it
        this.props.children = this.innerHTML;
        this.innerHTML = "";

        this.seerId = compName + "-" + randStr();
      }

      render() {
        setCurrentComponent(this.seerId);
        setHookPointer(0);

        const attrbs = { ...this.attributes };

        for (let key in attrbs) {
          const { name, nodeValue } = attrbs[key];
          this.syncProp(name, nodeValue);
        }

        if (this.shadowRoot) {
          this.shadowRoot.innerHTML =
            view(this.props) + `<style>${this.styleTag}</style>`;
        }
      }

      // Called after the element is attached to the DOM
      connectedCallback() {
        this.attachShadow({ mode: "open" });
        setComponent(this.seerId, this);
        this.render();
      }

      // Called after the element is dettached from the DOM
      disconnectedCallback() {
        delComponent(this.seerId);
      }

      // Called when the observed attributes change
      attributeChangedCallback(attr: string, old: string, value: string) {
        this.syncProp(attr, value);
        this.render();
      }

      // Synchronises the props object with the attributes
      syncProp(key: string, value: string) {
        this.props[key] = value;
      }
    }

    customElements.define(compName, Component);
  }

  // ! This will serialize functions
  return ({ children, ...props }: any = {}) =>
    `<${compName} ${Object.values(props).reduce(
      (p, [key, val]) => `${p} ${key}=${val}`,
      ""
    )}>${children}</${compName}>`;
};
