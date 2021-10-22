import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import { useState } from "react";
import Statistic from "./components/Statistics/Statistics";
import Container from "./components/Container/Container";
import Notification from "./components/Notification/Notification";

export default function App() {
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const addFeedback = (option) => {
    setState((state) => ({ ...state, [option]: state[option] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, option) => acc + option, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good / countTotalFeedback()) * 100) || 0;
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={addFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistic
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistic>
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </Container>
  );
}
