import { Text } from '$/components/Text';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 2.75rem 0 12.25rem 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 35.1875rem;
`;

export const MainTitle = styled(Text).attrs({
  tag: 'h1',
  variant: 'largeTitle',
  color: 'white',
})``;

export const Subtitle = styled(Text).attrs({
  tag: 'p',
  variant: 'bodyBig',
  color: 'white',
})``;
