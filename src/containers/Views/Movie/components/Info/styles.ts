import { Text as DefaultText } from '$/components/Text';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  text-transform: capitalize;
  margin-block-end: 2.5rem;
`;

export const Row = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const CastWrap = styled.div`
  display: flex;
  gap: 0.25rem;

  > span:not(:last-child):after {
    content: ',';
  }
`;

export const Title = styled(DefaultText).attrs({
  tag: 'span',
  variant: 'body2',
  weight: 'bold',
})`
  font-family: 'RobotoCondensed';
`;

export const Text = styled(DefaultText).attrs({
  tag: 'span',
  variant: 'body2',
})``;
