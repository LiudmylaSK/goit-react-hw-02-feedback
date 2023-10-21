import { SectionTitle, Wrapper } from './Section.styled';
import { SiCoffeescript } from 'react-icons/si';

export const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <SectionTitle>
       <SiCoffeescript />
        {title}
      </SectionTitle>
      {children}
    </Wrapper>
  );
};