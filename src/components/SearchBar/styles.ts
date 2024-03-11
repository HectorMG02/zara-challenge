import styled from 'styled-components';
import Text from '../Text/Text';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-12);
`;

const StyledResultsCount = styled(Text)`
  text-transform: uppercase;
`;

export const S = {
  Container,
  StyledResultsCount,
};
