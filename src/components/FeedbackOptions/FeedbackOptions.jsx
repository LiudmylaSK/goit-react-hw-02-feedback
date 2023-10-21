import { ButtonItemsList, ButtonItem, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonItemsList>
      {options.map(option => {
        return (
          <ButtonItem key={option}>
            <Button
              type="button"
              onClick={() => onLeaveFeedback(option)}
              name={option}
            >
              {option}
            </Button>
          </ButtonItem>
        );
      })}
    </ButtonItemsList>
  );
};