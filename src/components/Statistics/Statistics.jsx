import s from "./Statistics.module.css";
import React from "react";
import T from "prop-types";

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li className={s.text}>Good: {good}</li>
      <li className={s.text}>Neutral: {neutral}</li>
      <li className={s.text}>Bad: {bad}</li>
      <li className={s.text}>Total: {total}</li>
      <li className={s.text}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

Statistic.propTypes = {
  good: T.number.isRequired,
  neutral: T.number.isRequired,
  bad: T.number.isRequired,
  total: T.number.isRequired,
  positivePercentage: T.number.isRequired,
};

export default Statistic;
