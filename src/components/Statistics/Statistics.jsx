import { SpansList, SpansListItem, Span } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <SpansList>
      {Object.entries({ good, neutral, bad, total, positivePercentage }).map(
        ([key, value]) => {
          if (key === 'positivePercentage') {
            return (
              <SpansListItem key={key}>
                Positive feedback: {value}%
              </SpansListItem>
            );
          }
          return (
            <SpansListItem key={key}>
              <Span>
                <Span> {key}:</Span> <Span>{value}</Span>
              </Span>
            </SpansListItem>
          );
        }
      )}
    </SpansList>
  );
};