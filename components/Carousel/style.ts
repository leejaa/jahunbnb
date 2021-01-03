import React from 'react';
import styled from 'styled-components';

export const CarouselMultiStyles = {
  Container: {
    overflowX: 'auto',
    overflowY: 'hidden',
  },
} as {
    Container: React.CSSProperties,
};

export const PictureImage = styled.img<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>>`
    width: 95%;
    height: 70%;
    border-radius: 0.4rem;
`;
