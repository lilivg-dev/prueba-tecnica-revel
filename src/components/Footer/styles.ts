import { Button } from '$/components/Button';
import { from } from '$/styles/media';
import { maxContent } from '$/styles/mixins';
import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Wrapper = styled.div`
  ${maxContent}
  padding: 2.5rem 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-inline: auto;
  column-gap 1rem;
  row-gap: 2rem;

  ${from.mobile} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LinkItem = styled.li``;

export const Link = styled(Button)``;
