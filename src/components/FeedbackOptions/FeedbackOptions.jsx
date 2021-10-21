import React from "react";
import s from "./FeedbackOptions.module.css";
import T from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option) => (
    <button
      type="button"
      className={s.btn}
      key={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  options: T.arrayOf(T.string.isRequired),
  onLeaveFeedback: T.func.isRequired,
};

export default FeedbackOptions;
