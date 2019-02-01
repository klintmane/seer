import { component, css, html } from "../../lib/index";

interface Props {
  title: string;
  children: string;
}

const applyStyle = (props: Props) => css`
  section {
    padding: 1rem;
    box-shadow: 0 0.1rem 0.1rem 0.15rem rgba(100, 100, 100, 0.1);
    border-radius: 0.5rem;
  }

  section > header {
    font-size: 1.5rem;
    font-weight: bold;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid #eee;
  }
`;

const Section = component("section", (props: Props) => {
  const { title, children } = props;
  applyStyle(props);

  return html`
    <section>
      <header>${title}</header>
      <div>${children}</div>
    </section>
  `;
});

export default Section;
