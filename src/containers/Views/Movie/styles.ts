import { Text } from '$/components/Text';
import { from } from '$/styles/media';
import { wrap } from '$/styles/mixins';
import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  ${wrap}
  padding-block-start: 2.5rem;
  padding-block-end: 2.5rem;

  ${from.laptop} {
    padding-block-end: 7.5rem;
  }

  ${from.desktop} {
    padding-block-end: 7rem;
  }
`;

export const Title = styled(Text)`
  margin-block-end: 2.125rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-block-end: 2rem;
  max-width: 21.4375rem;

  button {
    width: 100%;
  }
`;
