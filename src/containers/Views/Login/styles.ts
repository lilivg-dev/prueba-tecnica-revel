import { from } from '$/styles/media';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 1rem;
  min-height: 24.625rem;
  min-width: 100%;
  border-radius: 1rem;

  ${from.mobile} {
    min-height: 24.625rem;
    min-width: 22rem;
  }
`;
