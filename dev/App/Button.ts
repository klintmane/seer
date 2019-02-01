import { component, html, css } from "../../lib/index";

interface Props {
  title: string;
  children: string;
  color: string;
}

const applyStyle = ({ color = "white" }) => css`
  button {
    color: ${color};
    background: blue;
    border: none;
    cursor: pointer;
    outline: none;
    border-radius: 0.5rem;
    padding: 1rem;
    font-weight: bold;
    transition: background 0.2s;
  }

  button:hover {
    background: navy;
  }
`;

const Button = component("btn", (props: Props) => {
  const { title, children } = props;
  applyStyle(props);

  return html`
    <button>${title || children}</button>
  `;
});

export default Button;
