import _ from 'lodash';
import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BsFilterRight } from 'react-icons/bs';
import styled, { css, keyframes } from 'styled-components';

export const GRAY = '#6D6D6D';
export const styles = {
  ParentContainer: {
    boxShadow: `1.5px 1.5px 1.5px 1.5px ${GRAY}`,
  },
} as {
    ParentContainer: React.CSSProperties,
  };

const movingToBottom = keyframes`
  0% {
    top: 0px;
  }
  20% {
    top: 30%;
  }
  100% {
    top: 30%;
  }
`;
const movingToTop = keyframes`
  0% {
    bottom: 0px;
  }
  10% {
    bottom: 40%;
  }
  100% {
    bottom: 40%;
  }
`;

export const FONT_SIZE = '0.9rem';

export const ArrowLeftIcon = styled(AiOutlineArrowLeft)`
    font-size: 1.2rem;
`;
export const FilterIcon = styled(BsFilterRight)`
    font-size: 1.2rem;
`;
export const MovingContainer = styled.div<{ direction: 'TOP' | 'BOTTOM' }>`
  width: 100%;
  height: 30%;
  position: absolute;
  animation-name: ${(props) => (_.isEqual(props?.direction, 'BOTTOM') ? movingToBottom : movingToTop)};
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`;
