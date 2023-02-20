import { maxContent } from '$/styles/mixins';
import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Main = styled.div`
  ${maxContent}
  margin-inline: auto;
`;
