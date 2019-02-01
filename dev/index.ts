import App from "./App/index";
const root = document.getElementById("app");

root.innerHTML = App({ children: "<div>App children</div>" });
