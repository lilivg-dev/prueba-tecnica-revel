import { wrap } from '$/styles/mixins';
import styled from 'styled-components';

export const Container = styled.section`
  ${wrap}
  padding-block: 44.4375rem 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  width: 100%;
`;
