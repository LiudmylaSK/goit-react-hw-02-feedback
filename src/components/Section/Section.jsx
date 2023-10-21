import { SectionTitle, Wrapper } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <SectionTitle>
        {title}
     
      </SectionTitle>
      {children}
    </Wrapper>
  );
};