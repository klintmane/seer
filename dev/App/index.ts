import { component, html, css, state } from "../../lib/index";
import "./Button";
import "./Section";

interface Props {
  children: string;
}

const applyStyle = (props: Props) => css`
  :host {
    display: block;
    padding: 1rem;
    font-family: "Roboto", sans-serif;
  }

  :host > div > * {
    display: block;
    margin-bottom: 1rem;
  }
`;

const App = component("app", (props: Props) => {
  const { children } = props;

  const shown = state(true);
  applyStyle(props);

  return html`
    <div>
      <s-btn onclick=${() => shown(!shown.value)}
        >${shown.value ? "Close Section" : "Open Section"}</s-btn
      >
      ${shown.value &&
        html`
          <s-section title="Section 1">
            <header>This is a test application</header>
          </s-section>
        `}
      <h3>Children example</h3>
      <div>${children}</div>
      <h3>Array example</h3>
      <div>
        ${[1, 2, 3].map(i => `<div>${i}</div>`)}
      </div>
    </div>
  `;
});

export default App;
