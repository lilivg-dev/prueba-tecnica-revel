import { wrap } from '$/styles/mixins';
import styled from 'styled-components';

export const Container = styled.section`
  ${wrap}
  padding-block: 2.75rem 12.25rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 35.1875rem;
`;
