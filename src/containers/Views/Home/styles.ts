import { FilterButtons as DefaultFilterButtons } from '$/components/FilterButtons';
import { from } from '$/styles/media';
import { hideScrollbar, wrap } from '$/styles/mixins';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  ${wrap}
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-block: 2.5rem;
  padding-inline-end: 0 !important;
`;

export const FilterButtons = styled(DefaultFilterButtons)`
  ${hideScrollbar}
  flex-wrap: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  margin-block-end: 1.5625rem;
  padding-inline-end: 1rem;

  ${from.mobile} {
    padding-inline-end: 2rem;
  }
`;
