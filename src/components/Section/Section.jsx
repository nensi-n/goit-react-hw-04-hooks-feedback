import T from "prop-types";
import s from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: T.string.isRequired,
  children: T.node.isRequired,
};

export default Section;
