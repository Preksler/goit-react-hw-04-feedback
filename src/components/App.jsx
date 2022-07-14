import { useState } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions"
import Notification from "./Notification/Notification";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = name => {
    console.log(name);
    switch (name) {
      case "good":
        setGood(prevState => prevState + 1);
        break;
      case "neutral":
        setNeutral(prevState => prevState + 1);
        break;
      case "bad":
        setBad(prevState => prevState + 1);
        break;
      default:
        return new Error("Invalid feedback");
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positiveFeedbackPercentage = total ? ((good / total) * 100).toFixed(0) : 0;
    return Number(positiveFeedbackPercentage);
  }

  return (
    <>
        <Section title="Please leave feedback" >
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
          <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
               <Notification message="There is no feedback" />
          )}
        </Section>
    </>
  );
}
