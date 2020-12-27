import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BsFilterRight } from 'react-icons/bs';
import styled from 'styled-components';

export const GRAY = '#6D6D6D';
export const styles = {
  ParentContainer: {
    boxShadow: `1.5px 1.5px 1.5px 1.5px ${GRAY}`,
  },
} as {
    ParentContainer: React.CSSProperties,
  };

export const FONT_SIZE = '0.5rem';

export const ArrowLeftIcon = styled(AiOutlineArrowLeft)`
    font-size: 1.2rem;
`;
export const FilterIcon = styled(BsFilterRight)`
    font-size: 1.2rem;
`;
