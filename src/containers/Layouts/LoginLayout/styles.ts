import LoginBg from '$/assets/images/login-bg.png';
import LoginBg2x from '$/assets/images/login-bg@2x.png';
import { wrap } from '$/styles/mixins';
import styled from 'styled-components';

export const Layout = styled.div`
  ${wrap}
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url(${LoginBg2x});
  background-image: image-set(url(${LoginBg}) 1x, url(${LoginBg2x}) 2x);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Main = styled.div``;
