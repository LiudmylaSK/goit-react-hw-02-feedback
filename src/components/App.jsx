import React, {Component } from 'react';

import { Container } from './App.styled'

import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';



  export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    
  };

  countTotalFeedback = () => {
    return (
      Object.values(this.state).reduce((total, number) => { return (total + number)}, 0)

    )
  }

  countPositiveFeedbackPercentage = (total) => {
    const { good } = this.state;
   
    return total !== 0 ? Math.round((good / total)  * 100) : 0;
  }

  onLeaveFeedback = (option) => {
    this.setState ((prevState) => {
      return {
    [option]: prevState[option] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
   
    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={Object.keys(this.state) } onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        <Section title={'Statistics'}>
          {Object.values(this.state).some(value => value !== 0) ? ( 
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage(this.countTotalFeedback())} />) :
              <Notification message={"There is no feedback"} />
          }
          </Section>
      </Container>
    )
  }
}