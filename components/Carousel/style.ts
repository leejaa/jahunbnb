import React from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import { AIRBNB_PINK } from '../../utils/styles';

export const CarouselMultiStyles = {
  Container: {
    overflowX: 'auto',
    overflowY: 'hidden',
  },
} as {
    Container: React.CSSProperties,
};
export const StarIcon = styled(AiFillStar)`
    font-size: 1rem;
    color: ${AIRBNB_PINK};
`;

export const PictureImage = styled.img<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>>`
    width: 95%;
    height: 70%;
    border-radius: 0.4rem;
`;
